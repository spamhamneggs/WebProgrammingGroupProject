<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $fillable = ['user_id', 'skill_id', 'title', 'description', 'type', 'in_exchange_for'];

    protected $casts = [
        'in_exchange_for' => 'array',
    ];
    public function skill()
    {
        return $this->belongsTo(Skill::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function proposals()
    {
        return $this->hasMany(Proposal::class);
    }
}

