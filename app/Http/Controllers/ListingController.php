<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListingController extends Controller
{
    public function store(Request $request)
{
    $request->validate([
        'skill' => 'required|string|max:255',
        'description' => 'nullable|string',
        'type' => 'required|in:request,offer',
    ]);

    Listing::create([
        'user_id' => auth()->id(), // will be null for guests
        'skill' => $request->skill,
        'description' => $request->description,
        'type' => $request->type,
    ]);

    return redirect()->back();
}

}

