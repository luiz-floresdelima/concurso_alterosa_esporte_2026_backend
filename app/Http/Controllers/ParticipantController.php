<?php

namespace App\Http\Controllers;

use App\Models\Participant;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    public function index()
    {
        return Participant::all();
    }

    public function getListWithVotes()
    {
        return Participant::withCount('votes')->orderByDesc('votes_count')->get();
    }

    public function getWinners()
    {
        $topParticipants = Participant::query()
            ->withCount('votes')
            ->orderByDesc('votes_count')
            ->limit(3)
            ->get();

        return $topParticipants;
    }
}
