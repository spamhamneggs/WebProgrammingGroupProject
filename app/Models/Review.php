<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['agreement_id', 'user_id', 'rating', 'comment'];

    public function agreement() { return $this->belongsTo(Agreement::class); }
    public function user() { return $this->belongsTo(User::class); }
}

