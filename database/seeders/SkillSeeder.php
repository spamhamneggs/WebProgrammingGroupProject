<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $skills = [
            'Web Design', 'Graphic Design', 'Photography', 'Video Editing',
            'Cooking', 'Baking', 'Digital Marketing', 'Accounting',
            'Programming', 'UI/UX Design'
        ];

        foreach ($skills as $skill) {
            \App\Models\Skill::create(['name' => $skill]);
        }
    }

}
