<!-- resources/views/layouts/app.blade.php -->
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'SkillSwap')</title>

    <!-- Tailwind CSS (v4) -->
    @vite('resources/css/app.css')

    <!-- Optional: Favicon -->
    <link rel="icon" href="{{ asset('favicon.ico') }}">

    <!-- Meta -->
    <meta name="description" content="SkillSwap: Trade skills, not money. A platform that enables communities to exchange talents.">
  </head>

  <body class="antialiased bg-stone-50 text-stone-800 flex flex-col min-h-screen">
    <!-- Navbar -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="{{ url('/') }}" class="text-2xl font-bold text-green-600">🗘 SkillSwap</a>

        <div class="hidden md:flex space-x-6 items-center">
          <a href="" class="text-stone-700 hover:text-green-600 font-medium">Browse</a>
          <a href="" class="text-stone-700 hover:text-green-600 font-medium">About</a>
          <a href="" class="text-stone-700 hover:text-green-600 font-medium">Contact</a>

          @auth
            <a href="" class="text-stone-700 hover:text-green-600 font-medium">Dashboard</a>
            <form method="POST" action="" class="inline">
              @csrf
              <button type="submit" class="text-stone-700 hover:text-red-600 font-medium">Logout</button>
            </form>
          @else
            <a href="" class="text-stone-700 hover:text-green-600 font-medium">Login</a>
            <a href="" class="px-4 py-2 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition">Sign Up</a>
          @endauth
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-button" class="md:hidden text-stone-600 hover:text-green-600 focus:outline-none">
          ☰
        </button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-stone-100">
        <div class="px-6 py-4 space-y-3">
          <a href="" class="block text-stone-700 hover:text-green-600">Browse</a>
          <a href="" class="block text-stone-700 hover:text-green-600">About</a>
          <a href="" class="block text-stone-700 hover:text-green-600">Contact</a>

          @auth
            <a href="" class="block text-stone-700 hover:text-green-600">Dashboard</a>
            <form method="POST" action="">
              @csrf
              <button type="submit" class="block w-full text-left text-stone-700 hover:text-red-600">Logout</button>
            </form>
          @else
            <a href="" class="block text-stone-700 hover:text-green-600">Login</a>
            <a href="" class="block text-green-600 font-semibold hover:underline">Sign Up</a>
          @endauth
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="flex-1">
      @yield('content')
    </main>

    <!-- Footer -->
    <footer class="bg-stone-900 text-stone-400 text-center text-sm py-6">
      <p>&copy; {{ date('Y') }} SkillSwap. All rights reserved.</p>
    </footer>

    <!-- Tailwind + Vite Scripts -->
    @vite('resources/js/app.js')

    <!-- Simple Mobile Menu Toggle -->
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');
        if (btn && menu) {
          btn.addEventListener('click', () => menu.classList.toggle('hidden'));
        }
      });
    </script>
  </body>
</html>
