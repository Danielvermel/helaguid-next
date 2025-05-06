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
            // "/admin": { page: "/admin" },
            "/thank-you": { page: "/thank-you" },
        };
    },
};

export default nextConfig;
