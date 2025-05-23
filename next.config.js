// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    images: {
        unoptimized: true,
    },
    trailingSlash: false,
    // Make sure all pages are generated correctly
    exportPathMap: async function () {
        return {
            "/": { page: "/" },
            "/partners": { page: "/partners" },
            "/faq": { page: "/faq" },
            "/privacy-policy": { page: "/privacy-policy" },
            "/404": { page: "/404" },
            "/thank-you": { page: "/thank-you" },
            // Fix soft 404 - create the problematic page to return proper 404
            "/topics/integrative-health": { page: "/404" },
        };
    },
};

export default nextConfig;