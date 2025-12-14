<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Skill;
use App\Models\UserSkill;

class UserSkillController extends Controller
{
    public function index()
    {
        return UserSkill::with('skill')
            ->where('user_id', Auth::id())
            ->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'skill' => 'required|string',
            'type' => 'required|in:offer,need',
        ]);

        $skill = Skill::firstOrCreate([
            'name' => $request->skill
        ]);

        UserSkill::create([
            'user_id' => Auth::id(),
            'skill_id' => $skill->id,
            'type' => $request->type,
        ]);

        return response()->json(['message' => 'Added']);
    }

    public function destroy($id)
    {
        UserSkill::where('id', $id)
            ->where('user_id', Auth::id())
            ->delete();

        return response()->json(['message' => 'Removed']);
    }
}
