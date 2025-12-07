import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

import Layout from "../Layouts/Layout";
import SearchSection from "../Components/SearchSection";
import SkillCard from "../Components/SkillCard";

export default function Search({ searchNeed, searchOffer, listings = [] }) {
    const [searchInputNeed, setSearchInputNeed] = useState(searchNeed || "");
    const [searchInputOffer, setSearchInputOffer] = useState(searchOffer || "");

    const hasResults = listings.length > 0;
    const hasFilters = searchNeed || searchOffer;

    function handleSearch() {
        router.get("/search", {
            need: searchInputNeed,
            offer: searchInputOffer,
        });
    }

    return (
        <>
            <Head title="Search Results" />
            <Layout>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-display font-bold text-nature-800 mb-4">
                            Search Results
                        </h1>
                    </div>
                    {/* Search form section */}
                    <SearchSection
                        searchNeed={searchInputNeed}
                        setSearchNeed={setSearchInputNeed}
                        searchOffer={searchInputOffer}
                        setSearchOffer={setSearchInputOffer}
                        handleSearch={handleSearch}
                        buttonText="Find Match"
                    />

                    {hasResults
                        ? (
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-display font-bold text-nature-800">
                                        Found {listings.length}{" "}
                                        {listings.length === 1
                                            ? "result"
                                            : "results"}
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {listings.map((listing) => (
                                        <SkillCard
                                            key={listing.id}
                                            type={listing.type}
                                            timeAgo="Just now"
                                            title={listing.title}
                                            description={listing.description}
                                            tags={[]}
                                            inExchangeFor={listing
                                                .in_exchange_for || ""}
                                            userName={listing.user?.name ||
                                                "Anonymous"}
                                            userImage={listing.user?.avatar ||
                                                "https://i.pravatar.cc/150?u=" +
                                                    listing.user_id}
                                            userEmail={listing.user?.email}
                                        />
                                    ))}
                                </div>
                            </div>
                        )
                        : (
                            <div className="bg-white rounded-xl shadow-md p-8 border border-nature-100">
                                <div className="text-center py-12">
                                    <div className="inline-block p-4 bg-nature-100 rounded-full mb-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-12 w-12 text-nature-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-nature-800 mb-2">
                                        No Results Found
                                    </h2>
                                    <p className="text-nature-600 mb-8">
                                        {hasFilters
                                            ? "We couldn't find any matches for your search criteria. Try adjusting your search terms."
                                            : "Try searching for skills you need or can offer."}
                                    </p>

                                    <div className="max-w-md mx-auto space-y-4">
                                        <Link
                                            href="/"
                                            className="w-full inline-block bg-white text-nature-700 px-6 py-3 rounded-lg font-bold border border-nature-300 hover:bg-nature-50 transition-all text-center"
                                        >
                                            Back to Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </Layout>
        </>
    );
}
