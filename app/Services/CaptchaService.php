<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CaptchaService
{
    public function validate(string $token, ?string $ip = null)
    {
        $response = Http::asForm()->post(
            'https://www.google.com/recaptcha/api/siteverify',
            [
                'secret'   => config('services.captcha.secret'),
                'response' => $token,
                'remoteip' => $ip,
            ]
        );

        
        /** @var Response $response */
        if (! $response->successful()) {
            return false;
        }

        return (bool) data_get($response->json(), 'success', false);
    }
}
