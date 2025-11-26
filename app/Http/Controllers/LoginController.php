<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function index()
    {
        return view('layouts.login');
    }

    public function authenticate(Request $request)
    {
        //Validate input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Get user from database
        $user = DB::table('users')->where('email', $request->email)->first();

        // If user not found
        if (!$user) {
            return back()->with('error', 'Email not registered');
        }

        //Check password
        if (!Hash::check($request->password, $user->password)) {
            return back()->with('error', 'Incorrect password');
        }

        //Store session
        Session::put('user', $user);

        return redirect('/')->with('success', 'Logged in successfully!');
    }
}
