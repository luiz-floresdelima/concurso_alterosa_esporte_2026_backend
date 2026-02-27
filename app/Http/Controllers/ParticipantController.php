<?php

namespace App\Http\Controllers;

use App\Http\Requests\ParticipantStoreRequest;
use App\Models\Participant;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    public function index()
    {
        return Participant::all();
    }

    public function create(ParticipantStoreRequest $request)
    {
        $participant = Participant::create([
            "name" => $request->name,
            "badge" => $request->badge,
            "link_image" => $request->link_image,
            "link_video" => $request->link_video,
        ]);

        return response($participant, 201);
    }

    public function getListWithVotes()
    {
        return Participant::withCount('votes')->orderByDesc('votes_count')->get();
    }

    public function getWinners()
    {
        $sub = Participant::query()
            ->withCount('votes')
            ->selectRaw('
                ROW_NUMBER() OVER (
                    PARTITION BY badge
                    ORDER BY votes_count DESC
                ) as rank_position
            ');

        $topParticipants = Participant::fromSub($sub, 'ranked')
            ->where('rank_position', 1)
            ->get();

        return $topParticipants;
    }
}
