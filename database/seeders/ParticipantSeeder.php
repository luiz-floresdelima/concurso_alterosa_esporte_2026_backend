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
                'link_video' => 'https://www.youtube.com/embed/JCTI1AMIsHk', // foi
                'link_instagram' => 'https://www.instagram.com/amp.alexandremaia',
            ],
            [
                'participant_id' => 2,
                'name' => 'Alicia Yoconda',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/alicia-yoconda.jpeg',
                'link_video' => 'https://www.youtube.com/embed/T09SCNq2Mfg', // foi
                'link_instagram' => 'https://www.instagram.com/aliciayocondagomez/',
            ],
            [
                'participant_id' => 3,
                'name' => 'Darcy Meire',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/darcy-meire.jpeg',
                'link_video' => 'https://www.youtube.com/embed/BXGLoG0pjWY', //foi
                'link_instagram' => 'https://www.instagram.com/bocaazulbh/',
            ],
            [
                'participant_id' => 4,
                'name' => 'Guilherme Rios',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/guilherme-rios.jpeg',
                'link_video' => 'https://www.youtube.com/embed/gZlaPzcZdJg', // foi
                'link_instagram' => 'https://www.instagram.com/guirioss/',
            ],
            [
                'participant_id' => 5,
                'name' => 'Larissa Vieira',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/larissa-vieira.jpeg',
                'link_video' => 'https://www.youtube.com/embed/LFvMGUmsh1U', //foi
                'link_instagram' => 'https://www.instagram.com/larissavlira/',
            ],
            [
                'participant_id' => 6,
                'name' => 'Leonardo Brasil',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/leonardo-brasil.jpeg',
                'link_video' => 'https://www.youtube.com/embed/tFoXv4Dh0pg', //foi
                'link_instagram' => 'https://www.instagram.com/leobrasiltv.oficial/',
            ],
            [
                'participant_id' => 7,
                'name' => 'Maira Lopes',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/maira-lopes.jpeg',
                'link_video' => 'https://www.youtube.com/embed/xrTVkEx6_40', //foi
                'link_instagram' => 'https://www.instagram.com/maiilopesss/',
            ],
            [
                'participant_id' => 8,
                'name' => 'Naiara Vitória',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/naiara-vitoria.jpeg',
                'link_video' => 'https://www.youtube.com/embed/PHvtokUCkuk', //foi
                'link_instagram' => 'sem link', //não está certo
            ],
            [
                'participant_id' => 9,
                'name' => 'Nezir Araújo',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/nezir-araujo.jpeg',
                'link_video' => 'https://www.youtube.com/embed/GABkTKF8ahk', //foi
                'link_instagram' => 'https://www.instagram.com/neziraraujo/',
            ],
            [
                'participant_id' => 10,
                'name' => 'Paulo Henrique',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/paulo-henrique.jpeg',
                'link_video' => 'https://www.youtube.com/embed/be44FeLskyk', //foi
                'link_instagram' => 'https://www.instagram.com/uaizeiroreserva/',
            ],
            [
                'participant_id' => 11,
                'name' => 'Rafael Andrade',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/rafael-andrade.jpeg',
                'link_video' => 'https://www.youtube.com/embed/b1fApNXcilE', //foi
                'link_instagram' => 'https://www.instagram.com/rafaelandradelucchesi8/',
            ],
            [
                'participant_id' => 12,
                'name' => 'Samuel Eduardo',
                'badge' => 'América',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/samuel-eduardo.jpeg',
                'link_video' => 'https://www.youtube.com/embed/mVJJFPyEOMs', // foi
                'link_instagram' => 'https://www.instagram.com/samueduu/',
            ],
            [
                'participant_id' => 13,
                'name' => 'Wesley Gonçalves',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/wesley-goncalves.jpeg',
                'link_video' => 'https://www.youtube.com/embed/r0767yi2u3A', // foi
                'link_instagram' => 'https://www.instagram.com/west_gs/',
            ],
            [
                'participant_id' => 14,
                'name' => 'Wesley Ricardo',
                'badge' => 'Cruzeiro',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/wesley-ricardo.jpeg',
                'link_video' => 'https://www.youtube.com/embed/HNr5i3cKVoc', // foi
                'link_instagram' => 'https://www.instagram.com/oficialwesleymaciel/',
            ],
            [
                'participant_id' => 15,
                'name' => 'William Gomes',
                'badge' => 'Atlético',
                'link_image' => 'https://servicescae.correiobraziliense.com.br/images/participants/wiliam-gomes.jpeg',
                'link_video' => 'https://www.youtube.com/embed/o8x3jhCVVYM', // foi
                'link_instagram' => 'https://www.instagram.com/williamgomesda_s/',
            ],
        ];

        Participant::upsert(
            $participants,
            ['participant_id'],
            ['name', 'badge', 'link_image', 'link_video']
        );
    }
}
