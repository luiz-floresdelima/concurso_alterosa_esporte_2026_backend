<?php

namespace App\Observers;

use App\Events\VoteCreated;
use App\Models\Vote;
use Illuminate\Support\Facades\Cache;

class VoteObserver
{
    /**
     * Handle the Vote "created" event.
     */
    public function created(Vote $vote): void
    {
        // $key = 'votes:broadcast';

        // if (Cache::has($key)) {
        //     return;
        // }

        // Cache::put($key, true, now()->addSeconds(5));

        broadcast(new VoteCreated())->toOthers();
    }

    /**
     * Handle the Vote "updated" event.
     */
    public function updated(Vote $vote): void
    {
        //
    }

    /**
     * Handle the Vote "deleted" event.
     */
    public function deleted(Vote $vote): void
    {
        //
    }

    /**
     * Handle the Vote "restored" event.
     */
    public function restored(Vote $vote): void
    {
        //
    }

    /**
     * Handle the Vote "force deleted" event.
     */
    public function forceDeleted(Vote $vote): void
    {
        //
    }
}
