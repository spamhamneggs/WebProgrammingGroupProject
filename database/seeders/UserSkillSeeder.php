<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $users = \App\Models\User::all();
        $skills = \App\Models\Skill::all();

        foreach ($users as $user) {
            // give each user 1-3 random skills
            $randomSkills = $skills->random(rand(1, 3));
            foreach ($randomSkills as $skill) {
                $user->skills()->attach($skill->id, [
                    'type' => collect(['offer', 'need'])->random()
                ]);
            }
        }
    }

}
