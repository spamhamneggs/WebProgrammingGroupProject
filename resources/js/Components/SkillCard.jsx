import { MessageCircle } from "lucide-react";

export default function SkillCard({
  type = "Offering",
  timeAgo = "2h ago",
  title,
  description,
  tags = [],
  userName,
  userImage,
  onMessage,
}) {
  const isOffering = type === "Offering";
  const badgeColor = isOffering
    ? "bg-nature-100 text-nature-700"
    : "bg-earth-200 text-nature-800";
  const tagColor = isOffering ? "bg-earth-200" : "bg-nature-100";

  return (
    <div className="bg-white rounded-xl border border-nature-100 shadow-lg shadow-nature-100/50 overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 ${badgeColor} text-xs font-bold rounded-full uppercase tracking-wide`}>
            {type}
          </span>
          <span className="text-xs text-nature-400">{timeAgo}</span>
        </div>
        <h3 className="font-display font-bold text-xl text-nature-900 mb-2">
          {title}
        </h3>
        <p className="text-nature-600 text-sm line-clamp-3">{description}</p>

        <div className="mt-4 pt-4 border-t border-nature-100">
          <p className="text-xs font-bold text-nature-400 uppercase mb-1">
            {isOffering ? "Seeking in return:" : "Offering in return:"}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 ${tagColor} text-nature-800 text-xs rounded`}
              >
                {tag}
              </span>
            ))}
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
          <span className="text-sm font-medium text-nature-800">{userName}</span>
        </div>
        <button
          onClick={onMessage}
          className="text-nature-600 hover:text-nature-800 transition-colors"
        >
          <MessageCircle size={20} />
        </button>
      </div>
    </div>
  );
}
