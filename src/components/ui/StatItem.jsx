// components/ui/StatItem.jsx
const StatItem = ({ value, label }) => {
    return (
        <div className="text-center">
            <span className="block text-4xl md:text-5xl font-bold text-orange-500">{value}</span>
            <p className="mt-2 text-sm md:text-base text-white">{label}</p>
        </div>
    );
};

export default StatItem;
