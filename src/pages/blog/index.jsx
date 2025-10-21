// src/pages/blog/index.jsx
"use client";

import { useState } from "react";
import { posts } from "../../constants/posts";
import PostCard from "../../components/ui/PostCard";

export default function BlogIndex() {
    const [query, setQuery] = useState("");

    const filtered = posts.filter((p) => {
        const haystack = `${p.title} ${p.excerpt ?? ""} ${(p.tags ?? []).join(" ")}`.toLowerCase();
        return haystack.includes(query.toLowerCase());
    });

    return (
        <section className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Blog</h1>

            <input
                type="text"
                placeholder="Search posts…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search posts"
                className="mt-4 w-full max-w-md border rounded px-3 py-2"
            />

            <div className="mt-6">
                {filtered.length === 0 && <p>No posts found.</p>}
                {filtered.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
}
