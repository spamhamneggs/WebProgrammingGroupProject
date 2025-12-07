import { useState } from "react";

import { router } from "@inertiajs/react";

import Layout from "../../Layouts/Layout";
import SearchSection from "../../Components/SearchSection";

export default function Index({ listings, filters }) {
    const [searchNeed, setSearchNeed] = useState(filters.need || "");
    const [searchOffer, setSearchOffer] = useState(filters.offer || "");

    function handleSearch() {
        router.get("/search", {
            need: searchNeed,
            offer: searchOffer,
        });
    }

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-nature-800 mb-2">
                        Browse Listings
                    </h1>
                    <p className="text-nature-600">
                        Find skills and offerings from your community
                    </p>
                </div>

                {/* Search Section */}
                <SearchSection
                    searchNeed={searchNeed}
                    setSearchNeed={setSearchNeed}
                    searchOffer={searchOffer}
                    setSearchOffer={setSearchOffer}
                    handleSearch={handleSearch}
                    buttonText="Search"
                />

                {/* Listings Grid */}
                {listings.length > 0
                    ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {listings.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-lg border border-nature-100 p-6 shadow-md hover:shadow-xl hover:border-nature-200 transition-all hover:-translate-y-1"
                                >
                                    <h3 className="text-lg font-bold text-nature-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-nature-600 text-sm mb-4">
                                        {item.description ||
                                            "No description provided"}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="inline-block px-3 py-1 bg-nature-100 text-nature-700 text-xs font-semibold rounded-full">
                                            {item.type}
                                        </span>
                                        <button className="text-nature-700 hover:text-nature-900 font-semibold text-sm transition-colors">
                                            View &rarr;
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                    : (
                        <div className="text-center py-16">
                            <p className="text-nature-600 text-lg">
                                No listings found. Try adjusting your search
                                criteria.
                            </p>
                        </div>
                    )}
            </div>
        </Layout>
    );
}
