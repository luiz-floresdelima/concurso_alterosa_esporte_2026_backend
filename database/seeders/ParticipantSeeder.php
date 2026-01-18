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
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/alexandre-ricardo.jpeg',
                'link_video' => 'https://www.youtube.com/embed/dXLHL_lBL-0',
                'link_instagram' => 'https://www.instagram.com/amp.alexandremaia?igsh=MXB4anU4Njd4dXRiYQ==', //leavndo para o perfil dele
            ],
            [
                'participant_id' => 2,
                'name' => 'Alicia Yocondda',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/alicia-yoconda.jpeg',
                'link_video' => 'https://www.youtube.com/embed/kXFGXE5vi7c',
                'link_instagram' => 'https://www.instagram.com/reel/DRfhOtRkSXq/?igsh=YTMyMnY3bXdvOHNh',
            ],
            [
                'participant_id' => 3,
                'name' => 'Darcy Meire',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/darcy-meire.jpeg',
                'link_video' => 'https://www.youtube.com/embed/rIlAU2E-PHI',
                'link_instagram' => 'https://www.instagram.com/reel/DQpiTvFiYtZ/?igsh=aXBodnlzNTYzYTB2',
            ],
            [
                'participant_id' => 4,
                'name' => 'Guilherme Rios',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/guilherme-rios.jpeg',
                'link_video' => 'https://www.youtube.com/embed/KxI3DS0Reao',
                'link_instagram' => 'https://www.instagram.com/reel/DQcvAYhjVoG/?igsh=dmh6cnltN2gyZmt5',
            ],
            [
                'participant_id' => 5,
                'name' => 'Larissa Vieira',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/larissa-vieira.jpeg',
                'link_video' => 'https://www.youtube.com/embed/B2EKpwdCRzU',
                'link_instagram' => 'https://www.instagram.com/reel/DQraflRDidO/?igsh=cnhwdjl5ZjVyZXNx',
            ],
            [
                'participant_id' => 6,
                'name' => 'Leonardo Brasil',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/leonardo-brasil.jpeg',
                'link_video' => 'https://www.youtube.com/embed/37MUaX4OmgE',
                'link_instagram' => 'https://www.instagram.com/p/DQc6KswE3LT/',
            ],
            [
                'participant_id' => 7,
                'name' => 'Maira Lopes',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/maira-lopes.jpeg',
                'link_video' => 'https://www.youtube.com/embed/yCA-baEXQyQ',
                'link_instagram' => 'https://www.instagram.com/reel/DRe1AjOAHk9/?igsh=aWh4ZXpyMXR3YWF0',
            ],
            [
                'participant_id' => 8,
                'name' => 'Naiara Vitória',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/naiara-vitoria.jpeg',
                'link_video' => 'https://www.youtube.com/embed/E2Jeoz3cPts',
                'link_instagram' => 'https://www.instagram.com/reel/DRKqNXgCQLw/?igsh=MXZxN3dwcjRhdGFtZA==', //não está certo
            ],
            [
                'participant_id' => 9,
                'name' => 'Nezir Araújo',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/nezir-araujo.jpeg',
                'link_video' => 'https://www.youtube.com/embed/XEIr3A-oYhs',
                'link_instagram' => 'https://www.instagram.com/reel/DQo8Xp1EdJp/?igsh=eXp5YnJxcHlpbnk3',
            ],
            [
                'participant_id' => 10,
                'name' => 'Paulo Henrique',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/paulo-henrique.jpeg',
                'link_video' => 'https://www.youtube.com/embed/dptyj0IFP5U',
                'link_instagram' => 'https://www.instagram.com/p/DRdDGtEksMV/',
            ],
            [
                'participant_id' => 11,
                'name' => 'Rafael Andrade',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/rafael-andrade.jpeg',
                'link_video' => 'https://www.youtube.com/embed/1ppxPCiJo8A',
                'link_instagram' => 'https://www.instagram.com/reel/DRS2UZpAHZ6/?igsh=azh5MWxpMTd1Y2lr',
            ],
            [
                'participant_id' => 12,
                'name' => 'Samuel Eduardo',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/samuel-eduardo.jpeg',
                'link_video' => 'https://www.youtube.com/embed/bSIJRbxMrAY',
                'link_instagram' => 'https://www.instagram.com/reel/DQetzoykYfI/?igsh=dnJiZTdib3E3NDYy',
            ],
            [
                'participant_id' => 13,
                'name' => 'Wesley Gonçalves',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/wesley-goncalves.jpeg',
                'link_video' => 'https://www.youtube.com/embed/tjYcTn4V-I4',
                'link_instagram' => 'https://www.instagram.com/reel/DRe6W79EdOh/?igsh=MXdiOWllaG5rOTFyMA==',
            ],
            [
                'participant_id' => 14,
                'name' => 'Wesley Ricardo',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/wesley-ricardo.jpeg',
                'link_video' => 'https://www.youtube.com/embed/clnwlsaH8Io',
                'link_instagram' => 'https://www.instagram.com/reel/DRdhJI6DGhJ/?igsh=MWF2cHdkaXN3cGRxdw==',
            ],
            [
                'participant_id' => 15,
                'name' => 'William Gomes',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/wiliam-gomes.jpeg',
                'link_video' => 'https://www.youtube.com/embed/SVrsZetok4I',
                'link_instagram' => 'https://www.instagram.com/reel/DRSZ2vhgMk3/?igsh=cmJ3M3M0ZDY1NWN0',
            ],
        ];

        Participant::upsert(
            $participants,
            ['participant_id'],
            ['name', 'badge', 'link_image', 'link_video']
        );
    }
}
