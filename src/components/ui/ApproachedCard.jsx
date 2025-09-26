// components/ui/ApproachCard.jsx
import clsx from "clsx";

const ApproachCard = ({ approach }) => {
    const themeStyles = {
        functional: { border: "border-t-orange-400", badge: "bg-orange-400" },
        nutritional: { border: "border-t-green-500", badge: "bg-green-500" },
        integrative: { border: "border-t-blue-500", badge: "bg-blue-500" },
        naturopathic: { border: "border-t-lime-500", badge: "bg-lime-500" },
        osteopathic: { border: "border-t-slate-500", badge: "bg-slate-500" },
        "holistic-coach": { border: "border-t-pink-500", badge: "bg-pink-500" },
        "mind-body": { border: "border-t-purple-500", badge: "bg-purple-500" },
        physiotherapy: { border: "border-t-cyan-500", badge: "bg-cyan-500" },
    };

    const styles = themeStyles[approach.theme] || themeStyles.functional;

    return (
        <div className="block group">
            <div
                className={clsx(
                    // Base layout: a 3-row grid that fills the parent's height
                    "h-full",
                    // Styling: size, color, rounding, shadow, etc.
                    "min-h-[350px] bg-white shadow-lg rounded-2xl transition-all duration-300 text-center cursor-pointer border-t-4 ",
                    // Dynamic border color
                    styles.border
                )}
            >
                {/* Top Row: Icon and Title */}
                <div className="p-8 pb-0">
                    <span className="text-5xl mb-5 block">{approach.icon}</span>
                    <b className="text-xl font-semibold text-teal-800 mb-4 leading-tight">{approach.title}</b>
                </div>

                {/* Middle Row: Description (stretches to fill available space) */}
                <div className="p-8 py-0">
                    <p className="text-gray-600 text-[0.95rem] leading-relaxed">{approach.description}</p>
                </div>

                {/* Bottom Row: Tag (aligned to the bottom of the grid) */}
                <div className="p-8 self-end">
                    <span className={clsx("text-white text-xs font-medium px-4 py-2 rounded-full", styles.badge)}>
                        {approach.tag}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ApproachCard;
