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
                'skill' => 'Web Design',
                'description' => 'Professional web design services for modern, responsive websites.',
                'type' => 'offer',
                'in_exchange_for' => ['Logo design', 'branding consultation', 'social-media marketing'],
            ],
            [
                'title' => 'UI/UX Design',
                'skill' => 'UI/UX Design',
                'description' => 'Create beautiful, user-friendly interfaces that delight customers.',
                'type' => 'offer',
                'in_exchange_for' => ['Front-end development', 'copywriting', 'SEO audit'],
            ],
            [
                'title' => 'Logo & Brand Identity',
                'skill' => 'Graphic Design',
                'description' => 'Custom logo design and brand guidelines for a cohesive visual identity.',
                'type' => 'offer',
                'in_exchange_for' => ['Website design', 'photography', 'content writing'],
            ],
            [
                'title' => 'Mobile App Development',
                'skill' => 'Mobile Development',
                'description' => 'Build cross-platform mobile apps for iOS and Android using React Native or Flutter.',
                'type' => 'offer',
                'in_exchange_for' => ['Graphic design', 'UI/UX design', 'copywriting'],
            ],
            [
                'title' => 'Content Writing',
                'skill' => 'Writing',
                'description' => 'Write engaging blog posts, articles, and web copy that attract and retain readers.',
                'type' => 'offer',
                'in_exchange_for' => ['Web design', 'SEO audit', 'social-media graphics'],
            ],
            [
                'title' => 'Social Media Marketing',
                'skill' => 'Digital Marketing',
                'description' => 'Plan and schedule posts, create graphics, and grow audiences on Instagram, Facebook, and TikTok.',
                'type' => 'offer',
                'in_exchange_for' => ['Website redesign', 'video editing', 'copywriting'],
            ],
            [
                'title' => 'Graphic Design',
                'skill' => 'Graphic Design',
                'description' => 'Design flyers, brochures, social media graphics, and other visual assets.',
                'type' => 'offer',
                'in_exchange_for' => ['Web development', 'photography', 'content writing'],
            ],
            [
                'title' => 'Video Editing',
                'skill' => 'Video Editing',
                'description' => 'Edit raw footage into polished videos for YouTube, Instagram Reels, or corporate use.',
                'type' => 'offer',
                'in_exchange_for' => ['Music production', 'scriptwriting', 'social-media promotion'],
            ],
            [
                'title' => 'Photography',
                'skill' => 'Photography',
                'description' => 'Shoot product, portrait, or event photos and deliver edited high-resolution images.',
                'type' => 'offer',
                'in_exchange_for' => ['Graphic design', 'website design', 'copywriting'],
            ],
            [
                'title' => 'Branding Consultation',
                'skill' => 'Branding',
                'description' => 'Help define brand voice, positioning, and visual style for a stronger market presence.',
                'type' => 'offer',
                'in_exchange_for' => ['Logo design', 'web redesign', 'content creation'],
            ],
            [
                'title' => 'E-commerce Development',
                'skill' => 'Web Development',
                'description' => 'Set up Shopify or WooCommerce stores, configure payment gateways, and add products.',
                'type' => 'offer',
                'in_exchange_for' => ['Product photography', 'copywriting', 'SEO services'],
            ],
            [
                'title' => 'Baking & Cake Decorating',
                'skill' => 'Baking',
                'description' => 'Create custom cakes, cupcakes, and pastries for celebrations—share recipes or trade for a skill you need.',
                'type' => 'offer',
                'in_exchange_for' => ['Recipes', 'a skill I need'],
            ],
            [
                'title' => 'Home-cooked Meals',
                'skill' => 'Cooking',
                'description' => 'Prepare healthy, home-cooked meals (vegan, gluten-free, or family-style) for a dinner swap.',
                'type' => 'offer',
                'in_exchange_for' => ['Dinner swap'],
            ],
            [
                'title' => 'Gardening & Plant Care',
                'skill' => 'Gardening',
                'description' => 'Teach vegetable gardening, maintain indoor plants, or design small backyard landscapes.',
                'type' => 'offer',
                'in_exchange_for' => ['Cooking lessons', 'recipe sharing', 'DIY craft guidance'],
            ],
            [
                'title' => 'Music Lessons',
                'skill' => 'Music',
                'description' => 'Offer beginner guitar, piano, or vocal lessons, exchange for tech help or design work.',
                'type' => 'offer',
                'in_exchange_for' => ['Tech help', 'design work'],
            ],
            [
                'title' => 'Language Tutoring',
                'skill' => 'Teaching',
                'description' => 'Teach conversational Spanish, French, or Mandarin in exchange for another skill.',
                'type' => 'offer',
                'in_exchange_for' => ['Another skill'],
            ],
            [
                'title' => 'DIY Craft Workshops',
                'skill' => 'Crafts',
                'description' => 'Guide participants through knitting, crochet, or up-cycling projects.',
                'type' => 'offer',
                'in_exchange_for' => ['Graphic design', 'social-media content', 'website help'],
            ],
            [
                'title' => 'Fitness Coaching',
                'skill' => 'Fitness',
                'description' => 'Personalized workout plans, virtual training sessions, or group yoga classes.',
                'type' => 'offer',
                'in_exchange_for' => ['Video editing', 'nutrition planning', 'web design'],
            ],

            /* =========================== REQUESTS =========================== */
            [
                'title' => 'Need Web Design Help',
                'skill' => 'Web Design',
                'description' => 'Looking for someone to redesign our website with a fresh, mobile-first look.',
                'type' => 'request',
                'in_exchange_for' => ['Copywriting', 'social-media marketing', 'logo design'],
            ],
            [
                'title' => 'Need Copywriting',
                'skill' => 'Writing',
                'description' => 'Seeking a writer to craft compelling product descriptions and email newsletters.',
                'type' => 'request',
                'in_exchange_for' => ['Web design', 'SEO audit', 'graphic design'],
            ],
            [
                'title' => 'Need Marketing Help',
                'skill' => 'Marketing',
                'description' => 'Need a strategic plan to promote a new service launch on social media.',
                'type' => 'request',
                'in_exchange_for' => ['Website redesign', 'video editing', 'content writing'],
            ],
            [
                'title' => 'Need Video Production',
                'skill' => 'Video Production',
                'description' => 'Looking for a crew to film and edit a short promotional video (30-60 sec).',
                'type' => 'request',
                'in_exchange_for' => ['Graphic design', 'copywriting', 'social-media promotion'],
            ],
            [
                'title' => 'Need Graphic Design',
                'skill' => 'Graphic Design',
                'description' => 'Require a designer for a set of Instagram story templates and a logo refresh.',
                'type' => 'request',
                'in_exchange_for' => ['Web development', 'copywriting', 'social-media ads'],
            ],
            [
                'title' => 'Need Cooking Lessons',
                'skill' => 'Cooking',
                'description' => 'Want to learn how to make authentic Italian pasta from scratch—will trade for coding help.',
                'type' => 'request',
                'in_exchange_for' => ['Coding help'],
            ],
            [
                'title' => 'Need Baking Help',
                'skill' => 'Baking',
                'description' => 'Looking for someone to teach me how to bake sourdough bread; I can offer web-development assistance.',
                'type' => 'request',
                'in_exchange_for' => ['Web-development assistance'],
            ],
            [
                'title' => 'Need Gardening Advice',
                'skill' => 'Gardening',
                'description' => 'Need tips on growing herbs in a small balcony garden—happy to exchange language tutoring.',
                'type' => 'request',
                'in_exchange_for' => ['Language tutoring'],
            ],
            [
                'title' => 'Need Music Lessons',
                'skill' => 'Music',
                'description' => 'Beginner ukulele player seeking lessons; can trade graphic-design services in return.',
                'type' => 'request',
                'in_exchange_for' => ['Graphic-design services'],
            ],
            [
                'title' => 'Need Fitness Coaching',
                'skill' => 'Fitness',
                'description' => 'Looking for a personal trainer to build a home-workout routine; I can help with video editing.',
                'type' => 'request',
                'in_exchange_for' => ['Video editing'],
            ],
            [
                'title' => 'Need Language Tutoring',
                'skill' => 'Language',
                'description' => 'Want conversational Japanese practice; willing to swap with photography sessions.',
                'type' => 'request',
                'in_exchange_for' => ['Photography sessions'],
            ],
            [
                'title' => 'Need DIY Craft Guidance',
                'skill' => 'Crafts',
                'description' => 'Need help getting started with crochet; can exchange SEO content writing.',
                'type' => 'request',
                'in_exchange_for' => ['SEO content writing'],
            ],

            /* =========================== ADDITIONAL OFFERS =========================== */
            [
                'title' => 'Podcast Editing',
                'skill' => 'Audio Editing',
                'description' => 'Edit raw audio, add intros/outros, and deliver polished episodes for any genre.',
                'type' => 'offer',
                'in_exchange_for' => ['Audio production', 'copywriting', 'social-media marketing'],
            ],
            [
                'title' => 'Illustration Services',
                'skill' => 'Illustration',
                'description' => 'Create custom illustrations for books, websites, or merchandise.',
                'type' => 'offer',
                'in_exchange_for' => ['Web design', 'copywriting', 'marketing strategy'],
            ],
            [
                'title' => 'Event Planning',
                'skill' => 'Event Planning',
                'description' => 'Help organize birthdays, small weddings, or community meet-ups.',
                'type' => 'offer',
                'in_exchange_for' => ['Photography', 'video editing', 'graphic design'],
            ],
            [
                'title' => 'Virtual Assistant',
                'skill' => 'Administration',
                'description' => 'Manage calendars, emails, and basic admin tasks remotely.',
                'type' => 'offer',
                'in_exchange_for' => ['Social-media management', 'copywriting', 'design services'],
            ],
            [
                'title' => 'Home Repair & Handyman',
                'skill' => 'Home Repair',
                'description' => 'Assist with minor repairs, furniture assembly, or painting projects.',
                'type' => 'offer',
                'in_exchange_for' => ['Graphic design', 'website services', 'marketing help'],
            ],
            [
                'title' => 'Pet Sitting & Dog Walking',
                'skill' => 'Pet Care',
                'description' => 'Take care of pets while owners are away or busy—trade for lessons or tech help.',
                'type' => 'offer',
                'in_exchange_for' => ['Lessons', 'tech help'],
            ],
            [
                'title' => 'Sewing & Alterations',
                'skill' => 'Sewing',
                'description' => 'Repair garments, make custom clothing, or create home textiles.',
                'type' => 'offer',
                'in_exchange_for' => ['Graphic design', 'website content', 'social-media marketing'],
            ],

            /* =========================== ADDITIONAL REQUESTS =========================== */
            [
                'title' => 'Need Podcast Production',
                'skill' => 'Podcast Production',
                'description' => 'Looking for someone to help record, edit, and publish a weekly podcast.',
                'type' => 'request',
                'in_exchange_for' => ['Audio editing', 'graphic design', 'marketing assistance'],
            ],
            [
                'title' => 'Need Illustration',
                'skill' => 'Illustration',
                'description' => 'Require a hand-drawn illustration for a children’s book—can swap for web-design services.',
                'type' => 'request',
                'in_exchange_for' => ['Web-design services'],
            ],
            [
                'title' => 'Need Event Coordination',
                'skill' => 'Event Planning',
                'description' => 'Help coordinate a community charity event; I’ll offer cooking lessons in return.',
                'type' => 'request',
                'in_exchange_for' => ['Cooking lessons'],
            ],
            [
                'title' => 'Need Handyman Help',
                'skill' => 'Home Repair',
                'description' => 'Need assistance mounting a TV and fixing a leaky faucet—happy to trade graphic-design work.',
                'type' => 'request',
                'in_exchange_for' => ['Graphic-design work'],
            ],
            [
                'title' => 'Need Pet Sitting',
                'skill' => 'Pet Care',
                'description' => 'Looking for a reliable pet sitter for a weekend; I can trade photography sessions.',
                'type' => 'request',
                'in_exchange_for' => ['Photography sessions'],
            ],
            [
                'title' => 'Need Sewing Services',
                'skill' => 'Sewing',
                'description' => 'Need a dress altered for a wedding; willing to exchange social-media marketing help.',
                'type' => 'request',
                'in_exchange_for' => ['Social-media marketing help'],
            ],
        ];

        foreach ($users as $index => $user) {
            $listing = $titleTemplates[$index % count($titleTemplates)];
            \App\Models\Listing::create([
                'user_id' => $user->id,
                'skill' => $listing['skill'],
                'title' => $listing['title'],
                'description' => $listing['description'],
                'type' => $listing['type'],
                'in_exchange_for' => $listing['in_exchange_for'] ?? null,
            ]);
        }
    }
}