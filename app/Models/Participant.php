<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $fillable = [
        'name',
        'badge',
        'link_image',
        'link_video',
        'link_instagram',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function votes()
    {
        return $this->hasMany(Vote::class, 'participant_id');
    }
}
