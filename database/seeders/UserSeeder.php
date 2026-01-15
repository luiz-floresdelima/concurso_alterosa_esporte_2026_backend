<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin Alterosa',
            'email' => 'admin@alterosaesportes.com',
<<<<<<< HEAD
            'password' => bcrypt('AlterosaEsportes26'),
=======
            'password' => bcrypt('!w\^,?8(6M_h1\L7an}w'),
        ]);

        User::create([
            'name' => 'Admin CB',
            'email' => 'admin@diariosassociados.com',
            'password' => bcrypt('a8.4FQraoFP"l!S7)c4R'),
        ]);

        User::create([
            'name' => 'Admin Sistema',
            'email' => 'admin@solidtech.com',
            'password' => bcrypt('FSq{u$3t!6-t\]^tKUE4'),
>>>>>>> d324582370b177534f8b4f6f9b54501609b22dcc
        ]);
    }
}
