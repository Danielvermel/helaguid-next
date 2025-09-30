// components/Hero.jsx
import HeaderLoop from "./HeaderLoop";
import VideoBackground from "../ui/VideoBackground";
import FeatureTags from "../ui/Tags";
import StatItem from "../ui/StatItem";

// A simple arrow icon component for the "See All" link

// Define the data for your tags
const tagsData = [
    { id: 1, text: "100+ Patient Success Stories", icon: "star" },
    { id: 2, text: "Free Patient Matching", icon: "clock" },
    { id: 3, text: "100% Verified Practitioners", icon: "shield" },
];

const statsData = [
    { id: 1, value: "100+", label: "Verified Practitioners" },
    { id: 2, value: "Free", label: "Founding Member" },
    { id: 3, value: "Holistic", label: "Whole Health Story" },
];

const HeroLoop = ({ data }) => {
    // You can later replace this with props if the content needs to be dynamic
    const navItems = [
        { name: "For Partners", href: "/partners" },
        { name: "Find Specialist", href: "/specialists" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "About", href: "/about" },
    ];

    const primaryCta = { name: "Get Matched", href: "/get-matched" };

    return (
        <section className="relative flex flex-col justify-center items-center w-full min-h-screen text-white overflow-hidden">
            {/* 1. Video Background */}
            <VideoBackground
                videoSrc="/videos/hero/mountains_v2.webm" // Use your optimized .webm video
                posterSrc="videos/hero/poster-mountains-v2.jpg" // Use your compressed poster image
                fallbackSrc="/videos/hero/mountains-trimmed.mp4" // Fallback MP4 for older browsers
            />

            {/* 2. Header (positioned at the top) */}
            <HeaderLoop data={{ menus: data.menus, type: data.type }} />

            {/* 3. Centered Content Overlay */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-md:-mt-12 max-sm:mt-18">
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl max-sm:text-4xl font-bold tracking-wide text-shadow-md max-md:mt-16 max-sm:-mt-2  max-sm:pt-12">
                    <div>
                        Finally feeling <span className="text-orange-400">heard,</span>
                    </div>
                    <div className="md:mt-3">
                        {" "}
                        Finally finding <span className="text-orange-400">answers</span>
                    </div>
                </h1>

                {/* Sub-headline */}
                <div className="lg:mt-24 max-lg:mt-20 max-sm:mt-2 max-w-2xl font-medium bg-black/90 p-2 rounded-xl">
                    <h2 className="block max-sm:text-base sm:text-lg md:text-xl tracking-wider">
                        Verified Holistic & Functional Medicine Practitioners in the UK{" "}
                    </h2>
                    <p className="block max-sm:text-sm sm:text-base mt-2 tracking-wide">
                        Expert care for chronic fatigue, digestive health, autoimmune conditions & hormonal imbalances.
                    </p>
                </div>
                {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {statsData.map((stat) => (
                        <StatItem key={stat.id} value={stat.value} label={stat.label} />
                    ))}
                </div> */}

                {/* Call-to-Action Buttons */}
            </div>

            {/* <FeatureTags tags={tagsData} /> */}
            {/* <div className="absolute bottom-32 z-10">
                <FeatureTags tags={tagsData} />
            </div> */}
            <a
                href="/book"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold tracking-wide py-3 px-12 text-xl rounded-full transition-colors duration-300 md:mt-8 max-md:mt-24 max-sm:mt-8"
            >
                Find a practitioner
            </a>

            <div className="absolute sm:bottom-32 xl:bottom-20 max-sm:bottom-12 z-10">
                <FeatureTags tags={tagsData} />
            </div>

            {/* <div className="mt-16 flex flex-col sm:flex-row gap-4">
                <a
                    href="/book"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
                >
                    Find Your Specialist
                </a>
            </div> */}

            {/* 4. "See All Specialists" Link (positioned at the bottom) */}
            <div className="absolute bottom-6 z-10">
                <a
                    href="#practioners-cards"
                    className="flex text-md hover:underline tracking-wide mt-12 mx-10 font-light"
                >
                    Browse Our Specialists
                    <img
                        src="/images/causes/arrow-down.svg"
                        loading="lazy"
                        title="Scroll down or expand"
                        alt="arrow down"
                        className="cursor-pointer inline ml-2 size-5 my-auto"
                    />
                </a>
            </div>
        </section>
    );
};

export default HeroLoop;
