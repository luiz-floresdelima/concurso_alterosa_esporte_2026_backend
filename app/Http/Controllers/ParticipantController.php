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
        $teams = ['Cruzeiro', 'Atlético', 'América'];

        $participantsByTeam = Participant::query()
            ->withCount('votes')
            ->whereIn('badge', $teams)
            ->orderByDesc('votes_count')
            ->get()
            ->groupBy('badge');

        // Mantém a ordem solicitada: Cruzeiro, Atlético, América.
        return collect($teams)
            ->map(fn (string $team) => optional($participantsByTeam->get($team))->first())
            ->filter()
            ->values();
    }
}
