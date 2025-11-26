<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ListingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $users = \App\Models\User::all();

        foreach ($users as $user) {
            \App\Models\Listing::create([
                'user_id' => $user->id,
                'title' => fake()->sentence(3),
                'description' => fake()->paragraph(3),
                'type' => 'offer', // or 'request'
            ]);
        }
    }

}
