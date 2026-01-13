<?php

use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\VoteController;
use Illuminate\Support\Facades\Route;

Route::prefix('participant')->controller(ParticipantController::class)->group(function() {
    Route::get('', 'index')->name('participants.index');
    Route::get('winners', 'getWinners')->name('participants.winners');
});
Route::post('vote', [VoteController::class, 'store'])->name('vote.store');