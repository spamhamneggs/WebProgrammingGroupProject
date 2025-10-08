<!-- resources/views/home.blade.php -->
@extends('layouts.app')

@section('title', 'SkillSwap: Trade Skills, Build Partnerships')

@section('content')
<div class="min-h-screen flex flex-col">

  <!-- Hero Section -->
  <section class="relative bg-gradient-to-br from-lime-600 via-green-600 to-teal-700 text-white overflow-hidden">
    <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
    <div class="container mx-auto px-6 py-24 relative z-10 text-center">
      <h1 class="text-5xl font-bold mb-6">Trade Skills, Not Money</h1>
      <p class="max-w-2xl mx-auto text-lg text-lime-100 mb-8">
        SkillSwap empowers people to exchange their talents, from coding to cooking.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href=""
           class="px-6 py-3 bg-white text-lime-700 font-semibold rounded-xl hover:bg-lime-50 transition">
           Get Started
        </a>
        <a href=""
           class="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white hover:text-lime-700 transition">
           Browse Skill Listings
        </a>
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="py-20 bg-stone-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-stone-800 mb-12">How SkillSwap Works</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <div class="text-green-600 text-4xl mb-4">👤</div>
          <h3 class="text-xl font-semibold mb-2">1. Create Your Profile</h3>
          <p class="text-stone-600">
            List the <strong>skills you offer</strong> and the <strong>skills you need</strong>.
            Whether it's web design, photography, or tutoring. Everyone has something to share!
          </p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <div class="text-green-600 text-4xl mb-4">🔍</div>
          <h3 class="text-xl font-semibold mb-2">2. Find Your Match</h3>
          <p class="text-stone-600">
            Explore listings and find people offering what you need.
            Our matching system helps connect users with complementary skills.
          </p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <div class="text-green-600 text-4xl mb-4">🤝</div>
          <h3 class="text-xl font-semibold mb-2">3. Swap and Collaborate</h3>
          <p class="text-stone-600">
            Define your agreement, exchange your talents, and leave a review.
            Build partnerships that empower both sides to grow.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- SDG 17 / Mission Section -->
  <section class="py-20 bg-gradient-to-br from-green-50 to-lime-50">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-stone-800 mb-4">In the Spirit of SDG 17</h2>
      <p class="max-w-3xl mx-auto text-stone-600 mb-8">
        SkillSwap embodies the <strong>UN Sustainable Development Goal 17: Partnerships for the Goals</strong>.
      </p>
      <p class="max-w-3xl mx-auto text-stone-600 mb-8">
        By creating a global community where people share expertise freely, we remove financial barriers and strengthen local ecosystems.
      </p>
      <a href=""
         class="inline-block px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
         Learn More
      </a>
    </div>
  </section>

  <!-- Featured Listings -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-stone-800">Featured Skill Swaps</h2>
        <a href="" class="text-green-600 font-medium hover:underline">View All</a>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        @foreach ($featuredListings ?? [] as $listing)
          <div class="border rounded-2xl p-6 hover:shadow-lg transition">
            <h3 class="font-semibold text-lg text-stone-800 mb-2">{{ $listing->title }}</h3>
            <p class="text-stone-600 mb-4 line-clamp-2">{{ $listing->description }}</p>
            <div class="text-sm text-stone-500">
              <span class="font-medium text-green-600">{{ $listing->user->name }}</span> • Offers: {{ $listing->offered_skill }}
            </div>
          </div>
        @endforeach

        @if(empty($featuredListings))
          <p class="text-stone-500 italic">No featured listings yet, be the first to post your skill!</p>
        @endif
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-sky-700 text-white text-center">
    <h2 class="text-3xl font-bold mb-4">Ready to Start Swapping Skills?</h2>
    <p class="text-cyan-100 mb-8">Join a community built on trust, collaboration, and shared growth.</p>
    <a href=""
       class="px-8 py-3 bg-white text-sky-700 font-semibold rounded-xl hover:bg-lime-50 transition">
       Join Now
    </a>
  </section>
</div>
@endsection
