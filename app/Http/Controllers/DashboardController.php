<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(ParticipantController $participantController, VoteController $voteController)
    {
        return Inertia::render('dashboard', [
            'top_3' => $participantController->getWinners(),
            'participants' => $participantController->getListWithVotes(),
            'count_votes' => $voteController->getCountVotes()
        ]);
    }
}
