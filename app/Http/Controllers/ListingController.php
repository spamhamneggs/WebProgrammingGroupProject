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
            ->when($need, function($q) use ($need) {
                return $q->where('type', 'offer')
                         ->where(function($subQ) use ($need) {
                             $subQ->where('title', 'like', "%$need%")
                                  ->orWhere('description', 'like', "%$need%");
                         });
            })
            ->when($offer, function($q) use ($offer) {
                return $q->where('type', 'request')
                         ->where(function($subQ) use ($offer) {
                             $subQ->where('title', 'like', "%$offer%")
                                  ->orWhere('description', 'like', "%$offer%");
                         });
            })
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
