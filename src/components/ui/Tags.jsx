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

    // Tooltip content - mobile version (shorter)
    const mobileTooltipText = `✓ License
✓ Clean Record
✓ Qualifications
✓ Insurance & Right Scope`;

    // Tooltip content - desktop version (more detailed)
    const desktopTooltipText = `✓ Licenses verified
✓ Background checked
✓ Associations confirmed
✓ Professional insurance verified`;

    const hasVerifiedText = text.toLowerCase().includes("100% verified");

    return (
        <div className="relative group flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/50 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-md">
            <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 max-sm:hidden" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white tracking-wide whitespace-nowrap">
                {text}
            </span>

            {hasVerifiedText && (
                <span className="max-sm:hidden">
                    {/* Small pulsing dot to indicate tooltip */}
                    <div className="max-sm:hidden w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-pulse ml-0.5 sm:ml-1 cursor-pointer" />

                    {/* Tooltip on hover - mobile (shorter text) */}
                    <div className="max-sm:hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block sm:hidden whitespace-pre text-left bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg border border-gray-700 z-50">
                        {mobileTooltipText}
                    </div>

                    {/* Tooltip on hover - desktop (detailed text) */}
                    <div className="max-sm:hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden sm:group-hover:block whitespace-pre text-left bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg border border-gray-700 z-50">
                        {desktopTooltipText}
                    </div>
                </span>
            )}
        </div>
    );
};

const FeatureTags = ({ tags }) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-2 sm:px-4">
            {tags.map((tag) => (
                <Tag key={tag.id} text={tag.text} iconKey={tag.icon} />
            ))}
        </div>
    );
};

export default FeatureTags;
