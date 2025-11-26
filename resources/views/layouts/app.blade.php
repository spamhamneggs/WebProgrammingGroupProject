<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>SkillSwap | Barter Your Talent</title>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
  </head>

  <body>
    @inertia
  </body>
</html>