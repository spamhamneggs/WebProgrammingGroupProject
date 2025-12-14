import { Mail } from "lucide-react";

import { usePage } from "@inertiajs/react";

export default function SkillCard({
    type = "Offering",
    timeAgo = "2h ago",
    title,
    skill,
    description,
    tags = [],
    inExchangeFor = [], // Now an array for what's offered/requested in exchange
    userName,
    userImage,
    userEmail, // Add user email prop
    onMessage,
}) {
    const isOffering = type === "Offering" || type === "offer";
    const badgeColor = isOffering
        ? "bg-nature-100 text-nature-700"
        : "bg-earth-200 text-nature-800";
    const tagColor = isOffering ? "bg-earth-200" : "bg-nature-100";

    // Check if inExchangeFor is an array with elements or a string that's not empty
    const hasInExchangeFor =
        (Array.isArray(inExchangeFor) && inExchangeFor.length > 0) ||
        (typeof inExchangeFor === "string" && inExchangeFor.trim() !== "");

    // Get the authenticated user from page props
    const { auth } = usePage().props;

    // Handle the message button click with mailto: functionality
    const handleMessageClick = () => {
        if (userEmail) {
            // Use the authenticated user's name if logged in, otherwise use a default
            const senderName = auth?.user?.name || "Someone from SkillSwap";

            const subject = `Regarding your ${skill} listing on SkillSwap`;
            const body =
                `Hi ${userName},\n\nI saw your listing for "${title}" on SkillSwap and I'm interested in connecting with you for a skill exchange.\n\nBest regards,\n${senderName}`;
            const mailtoLink = `mailto:${userEmail}?subject=${
                encodeURIComponent(subject)
            }&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        } else {
            console.error("User email is not available");
        }
    };

    // If onMessage is provided via props, use it instead of the default mailto functionality
    const handleOnClick = onMessage ? onMessage : handleMessageClick;

    return (
        <div className="bg-white rounded-xl border border-nature-100 shadow-lg shadow-nature-100/50 overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                    <span
                        className={`px-3 py-1 ${badgeColor} text-xs font-bold rounded-full uppercase tracking-wide`}
                    >
                        {type}
                    </span>
                    <span className="text-xs text-nature-400">{timeAgo}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-nature-900 mb-1">
                    {title}
                </h3>
                {skill && (
                    <div className="mb-2">
                        <span className="text-xs font-semibold text-nature-600 bg-nature-50 px-2 py-0.5 rounded border border-nature-100 uppercase tracking-wider">
                            {skill}
                        </span>
                    </div>
                )}
                <p className="text-nature-600 text-sm line-clamp-3">
                    {description}
                </p>

                <div className="mt-4 pt-4 border-t border-nature-100">
                    <p className="text-xs font-bold text-nature-400 uppercase mb-1">
                        {isOffering
                            ? "Seeking in return:"
                            : "Offering in return:"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {hasInExchangeFor
                            ? (
                                Array.isArray(inExchangeFor)
                                    ? inExchangeFor.map((item, index) => (
                                        <span
                                            key={index}
                                            className={`px-2 py-1 ${tagColor} text-nature-800 text-xs rounded`}
                                        >
                                            {item}
                                        </span>
                                    ))
                                    : (
                                        <span
                                            className={`px-2 py-1 ${tagColor} text-nature-800 text-xs rounded`}
                                        >
                                            {inExchangeFor}
                                        </span>
                                    )
                            )
                            : tags.length > 0
                            ? (
                                tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`px-2 py-1 ${tagColor} text-nature-800 text-xs rounded`}
                                    >
                                        {tag}
                                    </span>
                                ))
                            )
                            : (
                                <span className="text-nature-500 text-sm italic">
                                    Not specified
                                </span>
                            )}
                    </div>
                </div>
            </div>
            <div className="bg-earth-50 px-6 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img
                        src={userImage}
                        alt="User"
                        className="w-8 h-8 rounded-full border border-nature-200"
                    />
                    <span className="text-sm font-medium text-nature-800">
                        {userName}
                    </span>
                </div>
                <button
                    onClick={handleOnClick}
                    className="text-nature-600 hover:text-nature-800 transition-colors"
                >
                    <Mail size={20} />
                </button>
            </div>
        </div>
    );
}
