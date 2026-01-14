<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use Inertia\Inertia;

class LeadsController extends Controller
{
    public function index()
    {
        return Inertia::render('leads', [
            'leads' => Vote::query()
                ->with('participant')
                ->latest()
                ->get(),
        ]);
    }
}
