// next.config.js
import { posts } from "./src/constants/posts.js"; // update path as needed

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
        const map = {
            "/": { page: "/" },
            "/partners": { page: "/partners" },
            "/faq": { page: "/faq" },
            "/privacy-policy": { page: "/privacy-policy" },
            "/blog": { page: "/blog" },
            "/404": { page: "/404" },
            "/thank-you": { page: "/thank-you" },
            "/book-confirmation": { page: "/book-confirmation" },
            "/request-received": { page: "/request-received" },
            "/about": { page: "/about" },
            "/terms-and-conditions": { page: "/terms-and-conditions" },
        };

        // Add each dynamic blog post
        posts.forEach((post) => {
            map[`/blog/${post.slug}`] = { page: "/blog/[slug]", query: { slug: post.slug } };
        });

        return map;
    },
};

export default nextConfig;
