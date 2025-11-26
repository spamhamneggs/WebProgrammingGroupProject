<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function search(Request $request)
    {
        $query = $request->input('q');

        $results = Listing::where('title', 'like', "%$query%")
                        ->orWhere('description', 'like', "%$query%")
                        ->get();

        return view('search-results', compact('results'));
    }
}
