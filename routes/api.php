<?php

use App\Http\Controllers\LeadsController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\VoteController;
use Illuminate\Support\Facades\Route;

Route::prefix('participant')->controller(ParticipantController::class)->group(function () {
    Route::get('', 'index')->name('participants.index');
    Route::post('', 'create')->name('participants.create');
    Route::get('winners', 'getWinners')->name('participants.winners');
});

Route::prefix('vote')->controller(VoteController::class)->group(function () {
    Route::get('count', [VoteController::class, 'getCountVotes'])->name('vote.getCountVotes');
    Route::post('', [VoteController::class, 'store'])->name('vote.store');
});

Route::get('export/leads', [LeadsController::class, 'exportCSV'])->name('leads.exportCSV');