<?php

namespace App\Console\Commands;

use App\Models\Listing;
use Illuminate\Console\Command;

class UpdateSampleOfferings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:update-sample-offerings';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update some sample listings with in_exchange_for data';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info("Updating sample listings with in_exchange_for data...");

        // Update a few sample listings with what they're offering/seeking in exchange
        $sampleUpdates = [
            1 => 'Web development services',
            2 => 'UI/UX consultation',
            4 => 'JavaScript tutoring',
            6 => 'Social media management',
            16 => 'English tutoring services',
            24 => 'Programming lessons',
            27 => 'Photoshop training',
        ];

        $updatedCount = 0;
        foreach ($sampleUpdates as $id => $offering) {
            $listing = Listing::find($id);
            if ($listing) {
                $listing->update(['in_exchange_for' => $offering]);
                $this->info("Updated listing {$id}: \"{$listing->title}\" -> {$offering}");
                $updatedCount++;
            }
        }

        $this->info("Successfully updated {$updatedCount} sample listings with exchange offerings.");
    }
}
