<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LeadsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', [DashboardController::class, "index"])->name('dashboard');
    Route::get('leads', [LeadsController::class, "index"])->name('leads');
});

require __DIR__.'/settings.php';
