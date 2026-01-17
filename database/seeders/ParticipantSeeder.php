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
                'name' => 'Alexandre Ricardo',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/leonardo-brasil.jpeg',
                'link_video' => 'https://www.youtube.com/embed/dXLHL_lBL-0',
            ],
            [
                'participant_id' => 2,
                'name' => 'Alicia Yocondda',
                'badge' => 'América',
                'link_image' => 'https://img.youtube.com/vi/kXFGXE5vi7c/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/kXFGXE5vi7c',
            ],
            [
                'participant_id' => 3,
                'name' => 'Darcy Meire',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://img.youtube.com/vi/rIlAU2E-PHI/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/rIlAU2E-PHI',
            ],
            [
                'participant_id' => 4,
                'name' => 'Guilherme Rios Viana',
                'badge' => 'América',
                'link_image' => 'https://img.youtube.com/vi/KxI3DS0Reao/hqdefault.jpg',
                'link_video' => 'https://www.youtube.com/embed/KxI3DS0Reao',
            ],
            [
                'participant_id' => 5,
                'name' => 'Larissa Vieira',
                'badge' => 'Atlético',
                'link_image' => 'https://img.youtube.com/vi/37MUaX4OmgE/hqdefault.jpg', //errado
                'link_video' => 'https://www.youtube.com/embed/37MUaX4OmgE',
            ],
            [
                'participant_id' => 6,
                'name' => 'Leonardo Brasil',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/leonardo-brasil.jpeg',
                'link_video' => 'https://www.youtube.com/embed/37MUaX4OmgE',
            ],
            [
                'participant_id' => 7,
                'name' => 'Maira Lopes',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/maira-lopes.jpeg',
                'link_video' => 'https://www.youtube.com/embed/yCA-baEXQyQ',
            ],
            [
                'participant_id' => 8,
                'name' => 'Naiara Vitória',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/naiara-vitoria.jpeg',
                'link_video' => 'https://www.youtube.com/embed/E2Jeoz3cPts',
            ],
            [
                'participant_id' => 9,
                'name' => 'Nezir Araujo',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/nezir-araujo.jpeg', //errado
                'link_video' => 'https://www.youtube.com/embed/KxI3DS0Reao',
            ],
            [
                'participant_id' => 10,
                'name' => 'Paulo Henrique',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/paulo-henrique.jpeg', //errado
                'link_video' => 'https://www.youtube.com/embed/1ppxPCiJo8A',
            ],
            [
                'participant_id' => 11,
                'name' => 'Rafael Andrade',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/rafael-andrade.jpeg',
                'link_video' => 'https://www.youtube.com/embed/1ppxPCiJo8A',
            ],
            [
                'participant_id' => 12,
                'name' => 'Samuel Eduardo',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/samuel-eduardo.jpeg', //errado
                'link_video' => 'https://www.youtube.com/embed/KxI3DS0Reao',
            ],
            [
                'participant_id' => 13,
                'name' => 'Wesley Goncalves',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/wesley-goncalves.jpeg', //errado
                'link_video' => 'https://www.youtube.com/embed/SVrsZetok4I',
            ],
            [
                'participant_id' => 14,
                'name' => 'Wesley Ricardo',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/wesley-ricardo.jpeg', //errado
                'link_video' => 'https://www.youtube.com/embed/1ppxPCiJo8A',
            ],
            [
                'participant_id' => 15,
                'name' => 'William Gomes',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/wiliam-gomes.jpeg',
                'link_video' => 'https://www.youtube.com/embed/SVrsZetok4I',
            ],
        ];

        Participant::upsert(
            $participants,
            ['participant_id'],
            ['name', 'badge', 'link_image', 'link_video']
        );
    }
}
