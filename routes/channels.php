<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('votes', function ($user) {
    return (bool) $user;
});
