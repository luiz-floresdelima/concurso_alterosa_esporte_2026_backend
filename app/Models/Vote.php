<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $fillable = [
        'name',
        'email',
        'cpf',
        'participant_id',
    ];

    protected $hidden = [
        'updated_at',
    ];

    public function participant()
    {
        return $this->belongsTo(Participant::class, 'participant_id');
    }
}
