// src/pages/blog/index.jsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { posts } from "../../constants/posts";
import PostCard from "../../components/ui/PostCard";
import Header from "../../components/sections/Header";
import { faqs } from "../../constants/faq";

// Fixed tag list for blog filtering/search
const ALL_TAGS = [
    "All",
    "Functional Medicine",
    "Nutritional Therapy",
    "Integrative Medicine",
    "Naturopathic Medicine",
];

export default function BlogIndex() {
    const [query, setQuery] = useState("");
    const [activeTag, setActiveTag] = useState("All");

    // Use fixed tag list
    const allTags = ALL_TAGS;

    // Filter posts by search query and tag
    const filteredPosts = useMemo(() => {
        const q = query.trim().toLowerCase();

        // Normalize tags for flexible matching (e.g., "#functional-medicine" -> "functional medicine")
        const normalizeTag = (s) =>
            (s ?? "")
                .toString()
                .trim()
                .toLowerCase()
                .replace(/^#/, "")
                .replace(/[_-]+/g, " ")
                .replace(/[^a-z0-9 ]/g, "")
                .replace(/\s+/g, " ")
                .trim();

        const normalizedActive = normalizeTag(activeTag);

        // Only allow results when "All" or the Functional Medicine tag is selected
        const allowed = activeTag === "All" || normalizedActive === normalizeTag("Functional Medicine");
        if (!allowed) return [];

        return posts.filter((post) => {
            const rawTags = post.tags || [];
            const normalizedTags = rawTags.map(normalizeTag);
            const tagsNormalizedJoined = normalizedTags.join(" ");

            // Include normalized tags in search so queries like "functional-medicine" match
            const searchString = `${post.title} ${post.excerpt ?? ""} ${rawTags.join(" ")} ${tagsNormalizedJoined}`.toLowerCase();

            const matchesQuery = q === "" || searchString.includes(q);
            const matchesTag = activeTag === "All" || normalizedTags.includes(normalizedActive);
            return matchesQuery && matchesTag;
        });
    }, [query, activeTag]);

    const featured = filteredPosts[0];
    const others = filteredPosts.slice(1);

    return (
        <>
            <Header data={{ menus: faqs.menus, type: "faq", extra: "faq" }} />

            {/* Hero / Page Intro */}
            <section className="bg-b3/60 border-b border-b11/50">
                <div className="max-w-6xl mx-auto px-4 pt-28 md:pt-36 pb-10 md:pb-12">
                    <div className="max-w-3xl">
                        <nav className="text-sm text-gray-500 mb-3" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2">
                                <li>
                                    <Link href="/" className="hover:text-p1">Home</Link>
                                </li>
                                <li aria-hidden className="text-gray-300">/</li>
                                <li className="text-p3">Blog</li>
                            </ol>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-p3">Insights on holistic and functional health</h1>
                        <p className="mt-3 md:mt-4 text-lg text-gray-600">
                            Read practical tips, expert advice, and the latest updates from HealGuid.
                        </p>

                        {/* Search bar */}
                        <div className="mt-6 md:mt-8">
                            <div className="relative max-w-xl">
                                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    {/* Search icon */}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search articles, topics, tags..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full rounded-full border border-b11/80 bg-white pl-10 pr-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-p1/20 focus:border-p1"
                                />
                            </div>
                        </div>

                        {/* Tag filters */}
                        {allTags.length > 1 && (
                            <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                                {allTags.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => setActiveTag(tag)}
                                        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                                            activeTag === tag
                                                ? "bg-p1 text-white border-p1"
                                                : "bg-white text-p3 border-b11 hover:border-p1/60"
                                        }`}
                                        aria-pressed={activeTag === tag}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 py-10 md:py-14">
                {filteredPosts.length === 0 ? (
                    <p className="text-gray-500">No posts found.</p>
                ) : (
                    <>
                        {/* Featured post */}
                        {featured && (
                            <section className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch mb-10 md:mb-14">
                                <article className="relative overflow-hidden rounded-2xl border border-b11 bg-white">
                                    <div className="p-6 md:p-8">
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                                            <span className="uppercase tracking-wide">Featured</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                                            <time>{featured.date}</time>
                                        </div>
                                        <h2 className="mt-2 md:mt-3 text-2xl md:text-3xl font-semibold text-p3">
                                            <Link href={`/blog/${featured.slug}`} className="hover:text-p1 transition-colors">
                                                {featured.title}
                                            </Link>
                                        </h2>
                                        {featured.excerpt && (
                                            <p className="mt-3 md:mt-4 text-gray-600">{featured.excerpt}</p>
                                        )}
                                        {featured.tags?.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {featured.tags.map((t) => (
                                                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-b3 text-p3 border border-b11">#{t}</span>
                                                ))}
                                            </div>
                                        )}
                                        <div className="mt-6">
                                            <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 text-p1 font-medium">
                                                Read more
                                                <span aria-hidden>→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                {/* Spacer for potential image/illustration in the future */}
                                <div className="rounded-2xl border border-b11 bg-b3/30 p-6 md:p-8 flex items-center justify-center text-center">
                                    <div>
                                        <p className="text-p3 font-semibold text-lg">Your guide to better health</p>
                                        <p className="mt-2 text-gray-600">Explore curated articles from practitioners and the HealGuid team.</p>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Grid of other posts */}
                        {others.length > 0 && (
                            <section>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {others.map((post) => (
                                        <PostCard key={post.slug} post={post} />
                                    ))}
                                </div>
                            </section>
                        )}
                    </>
                )}

                {/* Newsletter CTA */}
                {/*<section className="mt-12 md:mt-16">*/}
                {/*    <div className="rounded-2xl border border-b11 bg-gradient-to-r from-b3/60 to-b3/30 p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">*/}
                {/*        <div>*/}
                {/*            <h3 className="text-xl md:text-2xl font-semibold text-p3">Get the latest from HealGuid</h3>*/}
                {/*            <p className="mt-1 text-gray-600">Monthly insights straight to your inbox. No spam.</p>*/}
                {/*        </div>*/}
                {/*        <form className="w-full md:w-auto flex gap-2" onSubmit={(e) => e.preventDefault()}>*/}
                {/*            <input*/}
                {/*                type="email"*/}
                {/*                required*/}
                {/*                placeholder="you@example.com"*/}
                {/*                className="flex-1 md:flex-none md:w-72 rounded-full border border-b11 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-p1/20 focus:border-p1"*/}
                {/*            />*/}
                {/*            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-p1 text-white px-5 py-3 font-medium hover:bg-p4 transition-colors">*/}
                {/*                Subscribe*/}
                {/*            </button>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </main>
        </>
    );
}
