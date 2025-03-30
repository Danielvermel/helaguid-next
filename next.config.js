// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export", // Enable static site generation
    images: {
        unoptimized: true, // Required for static export
    },
    // For backwards compatibility (optional)
    trailingSlash: false, // Make sure this is set to false
    // Ensure URLs without extensions work correctly
    exportPathMap: async function () {
        return {
            "/": { page: "/" },
            "/partners": { page: "/partners" },
            "/faq": { page: "/faq" },
            "/privacy-policy": { page: "/privacy-policy" },
            "/404": { page: "/404" },
        };
    },
};

export default nextConfig;
