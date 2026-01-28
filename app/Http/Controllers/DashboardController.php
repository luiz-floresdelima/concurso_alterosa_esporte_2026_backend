<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(ParticipantController $participantController, VoteController $voteController)
    {
        $now = now();

        return Inertia::render('dashboard', [
            'top_3' => $participantController->getWinners(),
            'participants' => $participantController->getListWithVotes(),
            'count_votes' => $voteController->getCountVotes(),
            'votes_last_5m' => Vote::where('created_at', '>=', $now->copy()->subMinutes(5))->count(),
            'votes_last_10m' => Vote::where('created_at', '>=', $now->copy()->subMinutes(10))->count(),
            'votes_last_30m' => Vote::where('created_at', '>=', $now->copy()->subMinutes(30))->count(),
            'lastUpdated' => now(),
        ]);
    }
}
