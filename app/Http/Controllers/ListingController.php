<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ListingController extends Controller
{
    public function create()
    {
        return Inertia::render('Listings/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'type' => 'required|in:request,offer',
            'skill' => 'required|string|max:255',
            'in_exchange_for' => 'nullable|array',
            'in_exchange_for.*' => 'string|max:255',
        ]);

        Listing::create([
            'user_id' => auth()->id(),
            'title' => $validated['title'],
            'description' => $validated['description'],
            'type' => $validated['type'],
            'skill' => $validated['skill'],
            'in_exchange_for' => $validated['in_exchange_for'],
        ]);

        return redirect()->route('search.index')->with('success', 'Listing created successfully.');
    }
}

