// components/FeatureTags.jsx
import { StarIcon, ShieldCheckIcon, ClockIcon } from "@heroicons/react/24/solid";

const iconMap = {
    star: StarIcon,
    shield: ShieldCheckIcon,
    clock: ClockIcon,
};

const Tag = ({ text, iconKey }) => {
    const Icon = iconMap[iconKey];

    if (!Icon) return null;

    // Tooltip content for verified tags
    const tooltipText = `✓ License verified
✓ Background checked
✓ Association membership confirmed
✓ Professional insurance verified`;

    const hasVerifiedText = text.toLowerCase().includes("100% verified");

    return (
        <div className="relative group flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-sm px-3 py-2 shadow-md">
            <Icon className="w-4 h-4 text-orange-500 max-sm:hidden" />
            <span className="sm:text-sm max-sm:text-xs font-medium text-white tracking-wide">{text}</span>

            {hasVerifiedText && (
                <>
                    {/* Small pulsing dot to indicate tooltip */}
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse ml-1 cursor-pointer" />

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block whitespace-pre text-left bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg border border-gray-700">
                        {tooltipText}
                    </div>
                </>
            )}
        </div>
    );
};

const FeatureTags = ({ tags }) => {
    return (
        <div className="flex flex-wrap justify-center items-center md:gap-6 max-md:gap-2 lg:gap-8 p-4">
            {tags.map((tag) => (
                <Tag key={tag.id} text={tag.text} iconKey={tag.icon} />
            ))}
        </div>
    );
};

export default FeatureTags;
