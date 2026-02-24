<?php

namespace App\Http\Controllers;

use App\Http\Requests\VoteStoreRequest;
use App\Models\Vote;

class VoteController extends Controller
{
    public function store(VoteStoreRequest $request)
    {
        // Votação encerrada: interrompe criação e avisa o cliente.
        return response()->json([
            'message' => 'As votações estão encerradas. Nenhum novo voto pode ser registrado.'
        ], 403);
    }

    public function getCountVotes()
    {
        return Vote::count();
    }
}
