<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $need = $request->input('need');
        $offer = $request->input('offer');

        // Search for listings based on need and offer parameters
        // If user needs something, look for listings that offer that skill
        // If user offers something, look for listings that need that skill
        $listings = Listing::with('user') // Eager load the user relationship
            ->when($need, function($q) use ($need) {
                // When user needs something, search in listings that offer that skill
                return $q->where('type', 'offer')
                         ->where(function($subQ) use ($need) {
                             $subQ->where('title', 'like', "%$need%")
                                  ->orWhere('description', 'like', "%$need%")
                                  ->orWhere('skill', 'like', "%$need%");
                         });
            })
            ->when($offer, function($q) use ($offer) {
                // When user offers something, search in listings that need that skill
                return $q->where('type', 'request')
                         ->where(function($subQ) use ($offer) {
                             $subQ->where('title', 'like', "%$offer%")
                                  ->orWhere('description', 'like', "%$offer%")
                                  ->orWhere('skill', 'like', "%$offer%");
                         });
            })
            ->latest()
            ->get();

        return Inertia::render('Search', [
            'searchNeed' => $need,
            'searchOffer' => $offer,
            'listings' => $listings,
            'filters' => [
                'need' => $need,
                'offer' => $offer
            ]
        ]);
    }
}
