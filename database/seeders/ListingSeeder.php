<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ListingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $users = \App\Models\User::all();

        $titleTemplates = [
            /* =========================== OFFERS =========================== */
            [
                'title' => 'Web Design',
                'description' => 'Professional web design services for modern, responsive websites.',
                'type' => 'offer',
            ],
            [
                'title' => 'UI/UX Design',
                'description' => 'Create beautiful, user-friendly interfaces that delight customers.',
                'type' => 'offer',
            ],
            [
                'title' => 'Logo & Brand Identity',
                'description' => 'Custom logo design and brand guidelines for a cohesive visual identity.',
                'type' => 'offer',
            ],
            [
                'title' => 'Mobile App Development',
                'description' => 'Build cross-platform mobile apps for iOS and Android using React Native or Flutter.',
                'type' => 'offer',
            ],
            [
                'title' => 'Content Writing',
                'description' => 'Write engaging blog posts, articles, and web copy that attract and retain readers.',
                'type' => 'offer',
            ],
            [
                'title' => 'Social Media Marketing',
                'description' => 'Plan and schedule posts, create graphics, and grow audiences on Instagram, Facebook, and TikTok.',
                'type' => 'offer',
            ],
            [
                'title' => 'Graphic Design',
                'description' => 'Design flyers, brochures, social media graphics, and other visual assets.',
                'type' => 'offer',
            ],
            [
                'title' => 'Video Editing',
                'description' => 'Edit raw footage into polished videos for YouTube, Instagram Reels, or corporate use.',
                'type' => 'offer',
            ],
            [
                'title' => 'Photography',
                'description' => 'Shoot product, portrait, or event photos and deliver edited high-resolution images.',
                'type' => 'offer',
            ],
            [
                'title' => 'Branding Consultation',
                'description' => 'Help define brand voice, positioning, and visual style for a stronger market presence.',
                'type' => 'offer',
            ],
            [
                'title' => 'E-commerce Development',
                'description' => 'Set up Shopify or WooCommerce stores, configure payment gateways, and add products.',
                'type' => 'offer',
            ],
            [
                'title' => 'Baking & Cake Decorating',
                'description' => 'Create custom cakes, cupcakes, and pastries for celebrations—share recipes or trade for a skill you need.',
                'type' => 'offer',
            ],
            [
                'title' => 'Home-cooked Meals',
                'description' => 'Prepare healthy, home-cooked meals (vegan, gluten-free, or family-style) for a dinner swap.',
                'type' => 'offer',
            ],
            [
                'title' => 'Gardening & Plant Care',
                'description' => 'Teach vegetable gardening, maintain indoor plants, or design small backyard landscapes.',
                'type' => 'offer',
            ],
            [
                'title' => 'Music Lessons',
                'description' => 'Offer beginner guitar, piano, or vocal lessons, exchange for tech help or design work.',
                'type' => 'offer',
            ],
            [
                'title' => 'Language Tutoring',
                'description' => 'Teach conversational Spanish, French, or Mandarin in exchange for another skill.',
                'type' => 'offer',
            ],
            [
                'title' => 'DIY Craft Workshops',
                'description' => 'Guide participants through knitting, crochet, or up-cycling projects.',
                'type' => 'offer',
            ],
            [
                'title' => 'Fitness Coaching',
                'description' => 'Personalized workout plans, virtual training sessions, or group yoga classes.',
                'type' => 'offer',
            ],

            /* =========================== REQUESTS =========================== */
            [
                'title' => 'Need Web Design Help',
                'description' => 'Looking for someone to redesign our website with a fresh, mobile-first look.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Copywriting',
                'description' => 'Seeking a writer to craft compelling product descriptions and email newsletters.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Marketing Help',
                'description' => 'Need a strategic plan to promote a new service launch on social media.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Video Production',
                'description' => 'Looking for a crew to film and edit a short promotional video (30-60 sec).',
                'type' => 'request',
            ],
            [
                'title' => 'Need Graphic Design',
                'description' => 'Require a designer for a set of Instagram story templates and a logo refresh.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Cooking Lessons',
                'description' => 'Want to learn how to make authentic Italian pasta from scratch—will trade for coding help.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Baking Help',
                'description' => 'Looking for someone to teach me how to bake sourdough bread; I can offer web-development assistance.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Gardening Advice',
                'description' => 'Need tips on growing herbs in a small balcony garden—happy to exchange language tutoring.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Music Lessons',
                'description' => 'Beginner ukulele player seeking lessons; can trade graphic-design services in return.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Fitness Coaching',
                'description' => 'Looking for a personal trainer to build a home-workout routine; I can help with video editing.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Language Tutoring',
                'description' => 'Want conversational Japanese practice; willing to swap with photography sessions.',
                'type' => 'request',
            ],
            [
                'title' => 'Need DIY Craft Guidance',
                'description' => 'Need help getting started with crochet; can exchange SEO content writing.',
                'type' => 'request',
            ],

            /* =========================== ADDITIONAL OFFERS =========================== */
            [
                'title' => 'Podcast Editing',
                'description' => 'Edit raw audio, add intros/outros, and deliver polished episodes for any genre.',
                'type' => 'offer',
            ],
            [
                'title' => 'Illustration Services',
                'description' => 'Create custom illustrations for books, websites, or merchandise.',
                'type' => 'offer',
            ],
            [
                'title' => 'Event Planning',
                'description' => 'Help organize birthdays, small weddings, or community meet-ups.',
                'type' => 'offer',
            ],
            [
                'title' => 'Virtual Assistant',
                'description' => 'Manage calendars, emails, and basic admin tasks remotely.',
                'type' => 'offer',
            ],
            [
                'title' => 'Home Repair & Handyman',
                'description' => 'Assist with minor repairs, furniture assembly, or painting projects.',
                'type' => 'offer',
            ],
            [
                'title' => 'Pet Sitting & Dog Walking',
                'description' => 'Take care of pets while owners are away or busy—trade for lessons or tech help.',
                'type' => 'offer',
            ],
            [
                'title' => 'Sewing & Alterations',
                'description' => 'Repair garments, make custom clothing, or create home textiles.',
                'type' => 'offer',
            ],

            /* =========================== ADDITIONAL REQUESTS =========================== */
            [
                'title' => 'Need Podcast Production',
                'description' => 'Looking for someone to help record, edit, and publish a weekly podcast.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Illustration',
                'description' => 'Require a hand-drawn illustration for a children’s book—can swap for web-design services.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Event Coordination',
                'description' => 'Help coordinate a community charity event; I’ll offer cooking lessons in return.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Handyman Help',
                'description' => 'Need assistance mounting a TV and fixing a leaky faucet—happy to trade graphic-design work.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Pet Sitting',
                'description' => 'Looking for a reliable pet sitter for a weekend; I can trade photography sessions.',
                'type' => 'request',
            ],
            [
                'title' => 'Need Sewing Services',
                'description' => 'Need a dress altered for a wedding; willing to exchange social-media marketing help.',
                'type' => 'request',
            ],
        ];

        foreach ($users as $index => $user) {
            $listing = $titleTemplates[$index % count($titleTemplates)];
            \App\Models\Listing::create([
                'user_id' => $user->id,
                'title' => $listing['title'],
                'description' => $listing['description'],
                'type' => $listing['type'],
            ]);
        }
    }
}
