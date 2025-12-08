import { ArrowLeftRight, Gift, Search } from "lucide-react";

const SearchSection = ({
    searchNeed,
    setSearchNeed,
    searchOffer,
    setSearchOffer,
    handleSearch,
    buttonText = "Search",
}) => {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleSwap = () => {
        // Swap the values between searchNeed and searchOffer
        const temp = searchNeed;
        setSearchNeed(searchOffer);
        setSearchOffer(temp);
    };

    return (
        <div
            className={`bg-white p-4 rounded-xl shadow-lg shadow-nature-200/50 border border-nature-100 mb-10 gap-3 flex flex-col md:flex-row`}
        >
            <div className="flex-1 relative flex items-center px-4 py-3 bg-earth-50 rounded-lg border border-transparent hover:border-nature-200 transition-colors">
                <Search size={20} className="text-nature-400 mr-3" />
                <input
                    type="text"
                    placeholder="I need help with..."
                    className="w-full bg-transparent border-none focus:ring-0 text-nature-800 placeholder-nature-400 outline-none"
                    value={searchNeed}
                    onChange={(e) => setSearchNeed(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>

            <div
                className="hidden md:flex items-center justify-center px-2 text-nature-300 cursor-pointer hover:text-nature-500 transition-colors"
                onClick={handleSwap}
            >
                <ArrowLeftRight size={20} />
            </div>

            <div className="flex-1 relative flex items-center px-4 py-3 bg-earth-50 rounded-lg border border-transparent hover:border-nature-200 transition-colors">
                <Gift size={20} className="text-nature-400 mr-3" />
                <input
                    type="text"
                    placeholder="I can offer..."
                    className="w-full bg-transparent border-none focus:ring-0 text-nature-800 placeholder-nature-400 outline-none"
                    value={searchOffer}
                    onChange={(e) => setSearchOffer(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>

            <button
                onClick={handleSearch}
                className="bg-nature-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-nature-800 transition-all whitespace-nowrap"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default SearchSection;
