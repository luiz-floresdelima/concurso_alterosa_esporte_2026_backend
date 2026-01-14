<?php

namespace Database\Seeders;

use App\Models\Participant;
use Illuminate\Database\Seeder;

class ParticipantSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $participants = [
            [
                'participant_id' => 1,
                'name' => 'Guilherme Rios',
                'badge' => 'America',
                'link_image' => 'https://img.youtube.com/vi/KxI3DS0Reao/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/KxI3DS0Reao',
            ],
            [
                'participant_id' => 2,
                'name' => 'Alexandre Ricardo',
                'badge' => 'America',
                'link_image' => 'https://img.youtube.com/vi/dXLHL_lBL-0/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/dXLHL_lBL-0',
            ],
            [
                'participant_id' => 3,
                'name' => 'Alicia Yocondda',
                'badge' => 'America',
                'link_image' => 'https://img.youtube.com/vi/kXFGXE5vi7c/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/kXFGXE5vi7c',
            ],
            [
                'participant_id' => 4,
                'name' => 'Leonardo Brasil',
                'badge' => 'Atletico',
                'link_image' => 'https://img.youtube.com/vi/37MUaX4OmgE/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/37MUaX4OmgE',
            ],
            [
                'participant_id' => 5,
                'name' => 'Naiara Vitoria',
                'badge' => 'Atletico',
                'link_image' => 'https://img.youtube.com/vi/E2Jeoz3cPts/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/E2Jeoz3cPts',
            ],
            [
                'participant_id' => 6,
                'name' => 'William Gomes',
                'badge' => 'Atletico',
                'link_image' => 'https://img.youtube.com/vi/SVrsZetok4I/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/SVrsZetok4I',
            ],
            [
                'participant_id' => 7,
                'name' => 'Darcy Meire',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://img.youtube.com/vi/rIlAU2E-PHI/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/rIlAU2E-PHI',
            ],
            [
                'participant_id' => 8,
                'name' => 'Rafael Andrade',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://img.youtube.com/vi/1ppxPCiJo8A/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/1ppxPCiJo8A',
            ],
            [
                'participant_id' => 9,
                'name' => 'Mai Lopes',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://img.youtube.com/vi/yCA-baEXQyQ/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/yCA-baEXQyQ',
            ],
        ];

        Participant::upsert(
            $participants,
            ['participant_id'],
            ['name', 'badge', 'link_image', 'link_video']
        );
    }
}
