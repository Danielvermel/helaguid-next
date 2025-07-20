// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    trailingSlash: false,

    // Add compression and optimization
    compress: true,

    images: {
        unoptimized: true,
        formats: ["image/webp"],
    },

    // Webpack optimization for bundle size
    webpack: (config) => {
        config.optimization.splitChunks = {
            chunks: "all",
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "all",
                    minChunks: 2,
                },
            },
        };
        return config;
    },

    // Keep your existing exportPathMap
    exportPathMap: async function () {
        return {
            "/": { page: "/" },
            "/partners": { page: "/partners" },
            "/faq": { page: "/faq" },
            "/privacy-policy": { page: "/privacy-policy" },
            "/404": { page: "/404" },
            "/thank-you": { page: "/thank-you" },
            "/about": { page: "/about" },
        };
    },
};

export default nextConfig;
