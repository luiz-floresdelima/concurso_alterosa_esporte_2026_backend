<?php

namespace App\Http\Requests;

use App\Rules\Cpf;
use App\Services\CaptchaService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class VoteStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'email', 'max:255', 'unique:votes,email'],
            'name' => ['required', 'string', 'max:255'],
            'cpf' => ['required', new Cpf, 'unique:votes,cpf'],
            'participant_id' => ['required', 'exists:participants,participant_id'],
            // 'g_recaptcha_token'   => ['required', 'string']
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'O e-mail é obrigatório.',
            'email.email' => 'Informe um e-mail válido.',
            'email.max' => 'O e-mail deve ter no máximo 255 caracteres.',
            'email.unique' => 'Este e-mail já foi utilizado nesta votação. Cada e-mail pode votar apenas uma vez.',

            'name.required' => 'O nome é obrigatório.',
            'name.string' => 'O nome informado é inválido.',
            'name.max' => 'O nome deve ter no máximo 255 caracteres.',

            'cpf.required' => 'O CPF é obrigatório.',
            'cpf.unique' => 'Este CPF já foi utilizado nesta votação. Cada CPF pode votar apenas uma vez.',

            'participant_id.required' => 'Selecione um participante.',
            'participant_id.exists' => 'Participante não encontrado. Verifique a seleção e tente novamente.',

            'g_recaptcha_token.required' => 'Confirme o captcha para continuar.',
            'g_recaptcha_token.string' => 'Confirme o captcha para continuar.',
        ];
    }


    public function withValidator(Validator $validator)
    {
        $validator->after(function (Validator $validator) {
            if ($validator->errors()->isNotEmpty()) {
                return;
            }

            $captchaService = app(CaptchaService::class);

            if (!$captchaService->validate(
                $this->input('g_recaptcha_token'),
                $this->ip()
            )) {
                $validator->errors()->add(
                    'g_recaptcha_token',
                    'Não foi possível validar o captcha. Atualize a página e tente novamente.'
                );
            }
        });
    }
}
