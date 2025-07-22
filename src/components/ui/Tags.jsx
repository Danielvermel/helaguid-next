// components/FeatureTags.jsx
// 1. Change the import path from 'outline' to 'solid'
import { StarIcon, ShieldCheckIcon, ClockIcon } from "@heroicons/react/24/solid";

// 2. The iconMap now points directly to the imported solid icons
const iconMap = {
    star: StarIcon,
    shield: ShieldCheckIcon,
    clock: ClockIcon,
};

const Tag = ({ text, iconKey }) => {
    const Icon = iconMap[iconKey];

    if (!Icon) return null;

    return (
        // 3. Updated styling to match the image
        <div className="flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-sm px-3 py-2 shadow-md">
            {/* The color is now applied directly to the icon component */}
            <Icon className="w-4 h-4  text-orange-500" />
            <span className="sm:text-sm max-sm:text-xs font-medium text-white tracking-wide">{text}</span>
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
