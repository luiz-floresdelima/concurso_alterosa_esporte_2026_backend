<?php

namespace App\Http\Controllers;

use App\Http\Requests\VoteStoreRequest;
use App\Models\Vote;

class VoteController extends Controller
{
    public function store(VoteStoreRequest $request)
    {
        $vote = Vote::create([
            'name' => $request->name,
            'email' => $request->email,
            // 'cpf' => $request->cpf,
            'participant_id' => $request->participant_id
        ]);

        return response($vote, 201);
    }

    public function getCountVotes()
    {
        return Vote::count();
    }
}
