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
            'email' => ['required', 'email', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            // // 'cpf' => ['required', new Cpf],
            'participant_id' => ['required', 'exists:participants,participant_id'],
            'g_recaptcha_token'   => ['required', 'string']
        ];
    }

    public function withValidator(Validator $validator)
    {
        $validator->after(function (Validator $validator) {
            if ($validator->errors()->isNotEmpty()) {
                return;
            }

            $captchaService = app(CaptchaService::class);

            if (! $captchaService->validate(
                $this->input('g_recaptcha_token'),
                $this->ip()
            )) {
                $validator->errors()->add(
                    'g_recaptcha_token',
                    'Falha na validação do captcha.'
                );
            }
        });
    }
}
