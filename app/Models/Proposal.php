<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    protected $fillable = ['listing_id', 'user_id', 'message', 'status'];

    public function listing() { return $this->belongsTo(Listing::class); }
    public function user() { return $this->belongsTo(User::class); }
    public function agreement() { return $this->hasOne(Agreement::class); }
}

