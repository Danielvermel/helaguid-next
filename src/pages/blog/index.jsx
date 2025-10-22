// src/pages/blog/index.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "../../constants/posts";
import PostCard from "../../components/ui/PostCard";
import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";
import { menus } from "../../constants/clients";

export default function BlogIndex() {
    const [query, setQuery] = useState("");

    // Normalise to lowercase once to simplify matching
    const filteredPosts = posts.filter((post) => {
        const searchString = `${post.title} ${post.excerpt ?? ""} ${post.tags?.join(" ") ?? ""}`.toLowerCase();
        return searchString.includes(query.trim().toLowerCase());
    });

    return (
        <>
            <Header data={{ menus }} />
            <main className="max-w-3xl mx-auto px-4 pt-28 md:pt-32 pb-16">
                <h1 className="text-3xl font-bold mb-6">Blog</h1>

                <input
                    type="text"
                    placeholder="Search posts..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full max-w-md border border-gray-300 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring focus:ring-blue-100"
                />

                {filteredPosts.length === 0 ? (
                    <p className="text-gray-500">No posts found.</p>
                ) : (
                    <div className="space-y-6">
                        {filteredPosts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                )}
            </main>
            <Footer data={{ type: "clients" }} />
        </>
    );
}
