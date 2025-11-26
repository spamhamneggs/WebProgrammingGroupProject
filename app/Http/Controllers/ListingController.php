<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
    // Show listings + search
    public function index(Request $request)
    {
        $need = $request->input('need');
        $offer = $request->input('offer');

        $listings = Listing::query()
            ->when($need, fn($q) => $q->where('type', 'request')->where('title', 'like', "%$need%"))
            ->when($offer, fn($q) => $q->where('type', 'offer')->where('title', 'like', "%$offer%"))
            ->get();

        return inertia('Listings/Index', [
            'listings' => $listings,
            'filters' => [
                'need' => $need,
                'offer' => $offer
            ]
        ]);
    }
}