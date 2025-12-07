<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Login', [
            'csrf_token' => csrf_token()
        ]);
    }

    public function authenticate(Request $request)
    {
        // Validate input
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Get user from database
        $user = DB::table('users')->where('email', $request->email)->first();

        // If user not found
        if (!$user) {
            if ($request->wantsJson()) {
                return response()->json(['error' => 'Email not registered'], 422);
            }
            return back()->with('error', 'Email not registered');
        }

        // Check password
        if (!Hash::check($request->password, $user->password)) {
            if ($request->wantsJson()) {
                return response()->json(['error' => 'Incorrect password'], 422);
            }
            return back()->with('error', 'Incorrect password');
        }

        // Store session
        Session::put('user', $user);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'message' => 'Logged in successfully!']);
        }
        return redirect('/')->with('success', 'Logged in successfully!');
    }
}
