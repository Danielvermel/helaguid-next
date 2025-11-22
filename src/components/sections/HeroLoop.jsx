// // components/Hero.jsx
// import HeaderLoop from "./HeaderLoop";
// import VideoBackground from "../ui/VideoBackground";
// import FeatureTags from "../ui/Tags";
// import StatItem from "../ui/StatItem";

// // A simple arrow icon component for the "See All" link

// // Define the data for your tags
// const tagsData = [
//     { id: 1, text: "60-90 Min Consultations", icon: "star" },
//     { id: 2, text: "Free Patient Matching", icon: "clock" },
//     { id: 3, text: "100% Verified Practitioners", icon: "shield" },
// ];

// const statsData = [
//     { id: 1, value: "100+", label: "Verified Practitioners" },
//     { id: 2, value: "Free", label: "Founding Member" },
//     { id: 3, value: "Holistic", label: "Whole Health Story" },
// ];

// const HeroLoop = ({ data }) => {
//     // You can later replace this with props if the content needs to be dynamic
//     const navItems = [
//         { name: "For Partners", href: "/partners" },
//         { name: "Find Specialist", href: "/specialists" },
//         { name: "How It Works", href: "/how-it-works" },
//         { name: "About", href: "/about" },
//     ];

//     const primaryCta = { name: "Get Matched", href: "/get-matched" };

//     return (
//         <section className="relative flex flex-col justify-center items-center w-full min-h-screen text-white overflow-hidden">
//             {/* 1. Video Background */}
//             <VideoBackground
//                 videoSrc="/videos/hero/mountains_v2.webm" // Use your optimized .webm video
//                 posterSrc="videos/hero/poster-mountains-v2.jpg" // Use your compressed poster image
//                 fallbackSrc="/videos/hero/mountains-trimmed.mp4" // Fallback MP4 for older browsers
//             />

//             {/* 2. Header (positioned at the top) */}
//             <HeaderLoop data={{ menus: data.menus, type: data.type }} />

//             {/* 3. Centered Content Overlay */}
//             <div className="relative z-10 flex flex-col-reverse items-center text-center px-4 max-md:-mt-12 max-sm:mt-18">
//                 {/* Sub-headline - now FIRST in HTML */}
//                 <div className="lg:mt-24 max-lg:mt-20 max-sm:mt-2 max-w-2xl font-medium bg-black/90 p-2 rounded-xl">
//                     <h1 className="block max-sm:text-base sm:text-lg md:text-xl tracking-wider">
//                         Verified Holistic & Functional Medicine Practitioners in the UK{" "}
//                     </h1>
//                     <p className="block max-sm:text-sm sm:text-base mt-2 tracking-wide">
//                         HealGuid connects you with verified holistic and functional medicine practitioners who treat the
//                         root cause of chronic fatigue, gut issues, autoimmunity and hormone imbalances.
//                     </p>
//                 </div>

//                 {/* Main Headline - now SECOND in HTML */}
//                 <h2 className="text-4xl sm:text-5xl md:text-6xl max-sm:text-4xl font-bold tracking-wide text-shadow-md max-md:mt-16 max-sm:-mt-2 max-sm:pt-12">
//                     <div>
//                         Finally feeling <span className="text-orange-400">heard,</span>
//                     </div>
//                     <div className="md:mt-3">
//                         {" "}
//                         Finally finding <span className="text-orange-400">answers</span>
//                     </div>
//                 </h2>
//             </div>

//             {/* <FeatureTags tags={tagsData} /> */}
//             {/* <div className="absolute bottom-32 z-10">
//                 <FeatureTags tags={tagsData} />
//             </div> */}
//             <a
//                 href="/book"
//                 className="bg-teal-500 hover:bg-teal-600 text-white font-semibold tracking-wide py-3 px-12 max-sm:py-2 sm:text-xl max-sm:text-lg rounded-full transition-colors duration-300 md:mt-8 max-md:mt-24 max-sm:mt-8"
//             >
//                 Find a Practitioner
//             </a>

//             <div className="absolute sm:bottom-32 xl:bottom-20 max-sm:bottom-16 z-10">
//                 <FeatureTags tags={tagsData} />
//             </div>

//             {/* <div className="mt-16 flex flex-col sm:flex-row gap-4">
//                 <a
//                     href="/book"
//                     className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
//                 >
//                     Find Your Specialist
//                 </a>
//             </div> */}

//             {/* 4. "See All Specialists" Link (positioned at the bottom) */}
//             <div className="absolute bottom-6 z-10">
//                 <a
//                     href="#practioners-cards"
//                     className="flex text-md hover:underline tracking-wide mt-12 mx-10 font-light"
//                 >
//                     Browse Our Specialists
//                     <img
//                         src="/images/causes/arrow-down.svg"
//                         loading="lazy"
//                         title="Scroll down or expand"
//                         alt="arrow down"
//                         className="cursor-pointer inline ml-2 size-5 my-auto"
//                     />
//                 </a>
//             </div>
//         </section>
//     );
// };

// // export default HeroLoop;
// // components/Hero.jsx
// import HeaderLoop from "./HeaderLoop";
// import VideoBackground from "../ui/VideoBackground";
// import FeatureTags from "../ui/Tags";

// const tagsData = [
//     { id: 1, text: "60-90 Min Consultations", icon: "star" },
//     { id: 2, text: "Free Patient Matching", icon: "clock" },
//     { id: 3, text: "100% Verified Practitioners", icon: "shield" },
// ];

// const HeroLoop = ({ data }) => {
//     return (
//         <section className="relative flex flex-col justify-center items-center w-full min-h-screen text-white overflow-hidden">
//             {/* 1. Video Background */}
//             <VideoBackground
//                 videoSrc="/videos/hero/mountains_v2.webm"
//                 posterSrc="videos/hero/poster-mountains-v2.jpg"
//                 fallbackSrc="/videos/hero/mountains-trimmed.mp4"
//             />

//             {/* 2. Header (positioned at the top) */}
//             <HeaderLoop data={{ menus: data.menus, type: data.type }} />

//             {/* 3. Centered Content Overlay */}
//             <div className="relative z-10 flex flex-col-reverse items-center text-center px-4 sm:px-6 gap-6 sm:gap-8 md:gap-12">
//                 {/* Sub-headline - FIRST in HTML for semantics */}
//                 <div className="w-full max-w-2xl bg-black/75 backdrop-blur-md px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 rounded-xl border border-white/10 shadow-2xl">
//                     <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider text-white/95 leading-relaxed font-semibold">
//                         Verified Holistic & Functional Medicine Practitioners in the UK
//                     </h1>
//                     <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 tracking-wide text-gray-200/90 leading-relaxed font-normal">
//                         HealGuid connects you with verified holistic and functional medicine practitioners who treat the
//                         root cause of chronic fatigue, gut issues, autoimmunity and hormone imbalances.
//                     </p>
//                 </div>

//                 {/* Main Headline - SECOND in HTML */}
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-shadow-md leading-tight">
//                     <div>
//                         Finally feeling <span className="text-orange-400">heard,</span>
//                     </div>
//                     <div className="mt-2 sm:mt-3">
//                         Finally finding <span className="text-orange-400">answers</span>
//                     </div>
//                 </h2>
//             </div>

//             {/* CTA Button */}
//             <a
//                 href="/book"
//                 className="relative z-10 bg-teal-500 hover:bg-teal-600 active:scale-95 text-white font-semibold tracking-wide py-2.5 px-10 sm:py-3 sm:px-12 md:py-3.5 md:px-14 text-base sm:text-lg md:text-xl rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mt-6 sm:mt-8 md:mt-10"
//             >
//                 Find a Practitioner
//             </a>

//             {/* Feature Tags */}
//             <div className="absolute bottom-14 sm:bottom-20 md:bottom-24 lg:bottom-20 z-10 w-full px-4">
//                 <FeatureTags tags={tagsData} />
//             </div>

//             {/* "Browse Our Specialists" Link */}
//             <div className="absolute bottom-4 sm:bottom-6 z-10">
//                 <a
//                     href="#practioners-cards"
//                     className="flex items-center gap-2 text-sm sm:text-base hover:underline tracking-wide font-light transition-all hover:gap-3"
//                 >
//                     Browse Our Specialists
//                     <img
//                         src="/images/causes/arrow-down.svg"
//                         loading="lazy"
//                         title="Scroll down or expand"
//                         alt="arrow down"
//                         className="size-4 sm:size-5 transition-transform group-hover:translate-y-1"
//                     />
//                 </a>
//             </div>
//         </section>
//     );
// };

// export default HeroLoop;

// components/Hero.jsx
import HeaderLoop from "./HeaderLoop";
import VideoBackground from "../ui/VideoBackground";
import FeatureTags from "../ui/Tags";

const tagsData = [
    { id: 1, text: "60-90 Min Consultations", icon: "star" },
    { id: 2, text: "Free Patient Matching", icon: "clock" },
    { id: 3, text: "100% Verified Practitioners", icon: "shield" },
];

const HeroLoop = ({ data }) => {
    return (
        <section className="relative flex flex-col justify-center items-center w-full min-h-screen text-white overflow-hidden">
            {/* 1. Video Background */}
            <VideoBackground
                videoSrc="/videos/hero/mountains_v2.webm"
                posterSrc="videos/hero/poster-mountains-v2.jpg"
                fallbackSrc="/videos/hero/mountains-trimmed.mp4"
            />

            {/* 2. Header */}
            <HeaderLoop data={{ menus: data.menus, type: data.type }} />

            {/* 3. Centered Content Overlay with fade-in animation */}
            <div className="relative z-10 flex flex-col-reverse items-center text-center px-4 sm:px-6 gap-6 sm:gap-8 md:gap-12 animate-fadeIn">
                {/* Sub-headline - Enhanced glassmorphism */}
                <div className="group w-full max-w-2xl bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-lg px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 rounded-2xl border border-white/20 shadow-2xl hover:border-white/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wider text-white leading-relaxed font-bold mb-1">
                        Verified Holistic & Functional Medicine Practitioners in the UK
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 tracking-wide text-gray-100/85 leading-relaxed font-normal">
                        HealGuid connects you with verified holistic and functional medicine practitioners who treat the
                        root cause of chronic fatigue, gut issues, autoimmunity and hormone imbalances.
                    </p>
                </div>

                {/* Main Headline with gradient accent */}
                <h2 className="text-3xl max-sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-sm:-mt-16 tracking-wide text-shadow-lg leading-tight">
                    <div className="animate-slideInLeft">
                        Finally feeling{" "}
                        <span className="text-orange-400 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
                            heard,{" "}
                        </span>
                    </div>
                    <div className="mt-2 sm:mt-3 animate-slideInRight">
                        Finally finding{" "}
                        <span className="text-orange-400 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
                            answers
                        </span>
                    </div>
                </h2>
            </div>

            {/* Enhanced CTA Button */}
            <a
                href="/book"
                className="group relative z-10 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 active:scale-95 text-white font-semibold tracking-wide py-2.5 px-10 sm:py-3 sm:px-12 md:py-3.5 md:px-14 text-base sm:text-lg md:text-xl rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(20,184,166,0.6)] overflow-hidden mt-6 sm:mt-8 md:mt-10"
            >
                <span className="relative z-10">Find a Practitioner</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>

            {/* Feature Tags with stagger animation */}
            <div className="absolute bottom-14 sm:bottom-20 md:bottom-24 lg:bottom-20 z-10 w-full px-4 animate-fadeInUp">
                <FeatureTags tags={tagsData} />
            </div>

            {/* "Browse Our Specialists" Link with animated arrow */}
            <div className="absolute bottom-4 sm:bottom-6 z-10 animate-fadeIn">
                <a
                    href="#practioners-cards"
                    className="group flex items-center gap-2 text-sm sm:text-base hover:text-teal-300 tracking-wide font-light transition-all duration-300"
                >
                    <span className="border-b border-transparent group-hover:border-teal-300 transition-all duration-300">
                        Browse Our Specialists
                    </span>
                    <img
                        src="/images/causes/arrow-down.svg"
                        loading="lazy"
                        title="Scroll down or expand"
                        alt="arrow down"
                        className="size-4 sm:size-5 transition-all duration-300 group-hover:translate-y-1 group-hover:brightness-125"
                    />
                </a>
            </div>
        </section>
    );
};

export default HeroLoop;
