<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Agreement extends Model
{
    protected $fillable = ['proposal_id', 'deadline', 'terms', 'status'];

    public function proposal() { return $this->belongsTo(Proposal::class); }
    public function reviews() { return $this->hasMany(Review::class); }
}

