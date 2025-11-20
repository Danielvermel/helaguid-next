import Head from "next/head";
import Link from "next/link";
import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";
import { faqs } from "../../constants/faq";
import { posts } from "../../constants/posts";

function Tag({ children }) {
    return (
        <span className="text-xs px-2.5 py-1 rounded-full bg-b3 text-p3 border border-b11">#{children}</span>
    );
}

function Callout({ title, tone = "info", children }) {
    // Special red-flag styling when danger tone
    if (tone === "danger") {
        return (
            <aside role="note" className="my-6 rounded-lg border-l-4" style={{ borderLeftColor: "#EF4444", backgroundColor: "#FEE2E2", padding: 20 }}>
                {title && <h3 className="text-base font-semibold text-p3 mb-2">{title}</h3>}
                <div className="text-p3/90">{children}</div>
            </aside>
        );
    }
    const toneStyles = {
        info: "bg-b3 border-b11",
        warn: "bg-b4 border-b11",
        success: "bg-b8 border-b11",
    };
    return (
        <aside className={`my-6 rounded-xl border ${toneStyles[tone] || toneStyles.info} p-4 md:p-5`}>
            {title && <h3 className="text-base font-semibold text-p3 mb-1">{title}</h3>}
            <div className="text-p3/90">{children}</div>
        </aside>
    );
}

function Sources({ items = [] }) {
    if (!items.length) return null;
    return (
        <footer className="mt-10 pt-6 border-t border-b11/70">
            <h2 className="text-lg font-semibold text-p3">Sources</h2>
            <ol className="list-decimal ml-5 mt-3 space-y-2 text-p3/90">
                {items.map((s, i) => (
                    <li key={i}>
                        {s.url ? (
                            <a href={s.url} className="text-p1 hover:text-p4 underline">
                                {s.label || s.url}
                            </a>
                        ) : (
                            <span>{s.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </footer>
    );
}

const slugify = (str = "") =>
    str
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

// Evidence badge color map
const evidenceBadgeByHeading = {
    "sleep and energy management (green light)": "#10B981",
    "nutrition basics and eating enough (green/yellow)": "#F59E0B",
    "microbiome & gut‑directed care (yellow)": "#F59E0B",
    "mitochondrial support supplements (yellow)": "#F59E0B",
    "nervous‑system regulation / mind–body tools (yellow/green for coping)": "#F59E0B",
    "exercise therapy (red unless personalised and symptom‑safe)": "#EF4444",
    "hormones and borderline thyroid (mixed; proceed carefully)": "#F97316",
};

function ToC({ headings = [] }) {
    if (!headings.length) return null;
    return (
        <>
            {/* Mobile accordion */}
            <details className="md:hidden border border-b11 rounded-lg p-3" aria-label="Table of contents">
                <summary className="cursor-pointer text-sm text-p3 font-semibold">On this page</summary>
                <ul className="mt-2 space-y-2 text-sm text-p3/80">
                    {headings.map((h) => (
                        <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
                            <a href={`#${h.id}`} className="hover:text-p1 focus:outline-none focus:ring-2 focus:ring-p1 rounded" onClick={(e)=>{e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior:'smooth'});}}>
                                {h.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </details>
            {/* Desktop sticky nav */}
            <nav aria-label="Table of contents" className="hidden md:block md:sticky md:top-20 md:max-h-[80vh] md:overflow-auto text-sm text-p3/80" id="toc">
                <h2 className="text-p3 text-sm font-semibold mb-3">On this page</h2>
                <ul className="space-y-2">
                    {headings.map((h) => (
                        <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
                            <a href={`#${h.id}`} className="hover:text-p1 focus:outline-none focus:ring-2 focus:ring-p1 rounded" onClick={(e)=>{e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior:'smooth'});}}>
                                {h.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

function QuickAnswerBox() {
    return (
        <aside className="mt-6 border-l-4" style={{ borderLeftColor: "#14B8A6" }}>
            <div className="bg-white/70 shadow-sm rounded-r-lg p-4 md:p-5">
                <p className="text-p3/90">
                    Functional medicine for chronic fatigue uses detailed health assessments, advanced testing, and personalized plans targeting root causes like gut health, nutrient deficiencies, and mitochondrial function. Costs range £2,000-4,000/year. Always work alongside your GP. Evidence shows modest quality-of-life improvements over 6-12 months for some patients.
                </p>
            </div>
        </aside>
    );
}

function CostsTable() {
    const rows = [
        ["Initial consultation (60-90 min)", "200-500"],
        ["Follow-up appointments", "100-300"],
        ["3-month package", "990-2,495"],
        ["Stool analysis", "300-400"],
        ["Organic acids test", "250-300"],
        ["Adrenal/cortisol test", "100-150"],
        ["Full thyroid panel", "100+"],
        ["Supplements/month", "50-120"],
    ];
    return (
        <div className="mt-4">
            <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="min-w-full md:min-w-0 table-auto border-collapse text-p3/90">
                    <thead>
                        <tr className="bg-b3/50">
                            <th className="text-left px-4 py-2 text-p3">Item</th>
                            <th className="text-left px-4 py-2 text-p3">Range (£)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r, i) => (
                            <tr key={i} className={i % 2 ? "bg-b10" : ""}>
                                <td className="px-4 py-2 border-b border-b11/50">{r[0]}</td>
                                <td className="px-4 py-2 border-b border-b11/50">{r[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function StickyDualCTA() {
    return (
        <>
            {/* Mobile fixed bottom bar */}
            <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-b11 h-[60px] flex items-center justify-center gap-3 px-4 z-40">
                <Link href="/get-matched" className="flex-1 text-center rounded-md bg-p1 text-white py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-p1">Get Matched</Link>
                <Link href="/practitioners?condition=chronic-fatigue" className="flex-1 text-center rounded-md border border-p1 text-p1 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-p1">Browse Specialists</Link>
            </div>
            {/* Desktop sticky sidebar card */}
            <aside className="hidden md:block md:sticky md:top-32 w-[300px] self-start">
                <div className="rounded-xl border border-b11 bg-white shadow-sm p-4">
                    <h3 className="text-p3 font-semibold">Need help finding care?</h3>
                    <div className="mt-3 flex flex-col gap-2">
                        <Link href="/match" className="text-center rounded-md bg-p1 text-white py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-p1">Get Matched</Link>
                        <Link href="/practitioners?condition=chronic-fatigue" className="text-center rounded-md border border-p1 text-p1 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-p1">Browse Specialists</Link>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default function BlogPost({ post }) {
    if (!post) return <p>Post not found.</p>;

    const { title, date, tags = [], hero, blocks = [], sources = [] } = post;

    // Build headings list for ToC and ids
    const headings = [];
    const enhancedBlocks = blocks.map((block) => {
        if (block.type === "heading" && (block.level === 2 || block.level === 3)) {
            const id = slugify(block.text);
            headings.push({ id, text: block.text, level: block.level });
            return { ...block, id };
        }
        return block;
    });

    const pageUrl = `https://www.healguid.com/blog/${post.slug}`;
    const heroImage = hero?.image || "/images/blog/functional-medicine-chronic-fatigue-uk-2025-hero-1200x630.webp";

    // Helper to render evidence badge for specific H3s
    const renderHeading = (block, idx, withinEvidence) => {
        const common = (Tag) => {
            const textKey = block.text.toLowerCase();
            const color = evidenceBadgeByHeading[textKey];
            return (
                <Tag key={idx} id={block.id} className={`${block.level===2?"mt-10 text-2xl md:text-3xl":"mt-8 text-xl md:text-2xl"} font-semibold text-p3 flex items-center gap-3`}>
                    {color && withinEvidence && (
                        <span aria-hidden className="inline-block" style={{ width: 60, height: 8, borderRadius: 4, backgroundColor: color }} />
                    )}
                    {block.text}
                </Tag>
            );
        };
        if (block.level === 2) return common("h2");
        return common("h3");
    };

    // Flags for inline CTA insertion
    let inEvidence = false;

    // Determine FAQ pairs for JSON-LD
    const faqIndex = enhancedBlocks.findIndex(b => b.type === 'heading' && b.level === 2 && b.text.toLowerCase().includes('frequently asked questions'));
    const faqPairs = [];
    if (faqIndex !== -1) {
        for (let i = faqIndex + 1; i < enhancedBlocks.length; i++) {
            const b = enhancedBlocks[i];
            if (b.type === 'heading' && b.level === 2) break;
            if (b.type === 'heading' && b.level === 3) {
                const q = b.text;
                const next = enhancedBlocks[i + 1];
                if (next && next.type === 'paragraph') {
                    faqPairs.push({ q, a: next.text });
                }
            }
        }
    }

    const lastUpdatedISO = "2025-10-21T00:00:00Z";

    return (
        <>
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-white border border-b11 rounded px-3 py-2 z-50">Skip to content</a>

            <Head>
                <title>Chronic Fatigue UK: Functional Medicine Guide (2025)</title>
                <meta name="description" content="Functional medicine for chronic fatigue in the UK: real costs (£2-4k/year), evidence review, and what 404k people with ME/CFS should know. No hype, 2025 guide." />
                <link rel="canonical" href={pageUrl} />

                <meta property="og:type" content="article" />
                <meta property="og:title" content="Chronic Fatigue UK: Functional Medicine Guide (2025)" />
                <meta property="og:description" content="Evidence-based guide to functional medicine for chronic fatigue: UK costs, what works, and how to choose practitioners. 404k people in England have ME/CFS." />
                <meta property="og:image" content={heroImage || "/og-default-1200x630.jpg"} />
                <meta property="og:url" content={pageUrl} />
                <meta property="article:published_time" content="2025-10-21T00:00:00Z" />
                <meta property="article:modified_time" content="2025-10-21T00:00:00Z" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Chronic Fatigue UK: Functional Medicine Guide (2025)" />
                <meta name="twitter:description" content="Evidence-based guide to functional medicine for chronic fatigue: UK costs, what works, and how to choose practitioners." />
                <meta name="twitter:image" content={heroImage || "/og-default-1200x630.jpg"} />

                {heroImage && <link rel="preload" as="image" href={heroImage} imagesrcset={`${heroImage} 1x`} />}

                {/* JSON-LD: MedicalWebPage */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalWebPage",
                    headline: "Chronic Fatigue Treatment UK: Functional Medicine Guide 2025",
                    description: "Evidence-based guide to functional medicine for chronic fatigue in the UK, including costs, evidence review, and practitioner selection criteria.",
                    author: { "@type": "Organization", name: "HealGuid Editorial Team" },
                    publisher: { "@type": "Organization", name: "HealGuid", logo: { "@type": "ImageObject", url: "https://www.healguid.com/logo.png" } },
                    datePublished: "2025-10-21",
                    dateModified: "2025-10-21",
                    image: heroImage || "[hero-image-url]",
                    mainEntityOfPage: pageUrl,
                    reviewedBy: { "@type": "Person", name: "[Medical Reviewer Name]", jobTitle: "[Credentials]" }
                }) }} />

                {/* JSON-LD: BreadcrumbList */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.healguid.com" },
                        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.healguid.com/blog" },
                        { "@type": "ListItem", position: 3, name: "Chronic Fatigue UK: Functional Medicine Guide", item: pageUrl },
                    ],
                }) }} />

                {/* JSON-LD: FAQPage */}
                {faqPairs.length > 0 && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqPairs.map(({ q, a }) => ({
                            "@type": "Question",
                            name: q,
                            acceptedAnswer: { "@type": "Answer", text: a },
                        })),
                    }) }} />
                )}
            </Head>

            <Header data={{ menus: faqs.menus, type: "faq", extra: "faq" }} />

            <main id="main" className="min-h-screen pb-20 md:pb-0">
                {/* Hero/Header */}
                <section className="bg-b3/60 border-b border-b11/50">
                    <div className="mx-auto px-4 pt-28 md:pt-36 pb-8 max-w-6xl">
                        <nav className="text-sm text-gray-500 mb-3" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2">
                                <li>
                                    <Link href="/" className="hover:text-p1">Home</Link>
                                </li>
                                <li aria-hidden className="text-gray-300">/</li>
                                <li>
                                    <Link href="/blog" className="hover:text-p1">Blog</Link>
                                </li>
                                <li aria-hidden className="text-gray-300">/</li>
                                <li className="text-p3" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                        <header className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-p3">{title}</h1>
                                <p className="mt-2 text-sm text-gray-600">
                                    Last updated: <time dateTime={lastUpdatedISO}>21 Oct 2025</time> • ~10 min read • Medically reviewed by [Name], [Credentials]
                                </p>
                                <QuickAnswerBox />
                                {tags.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {tags.map((t) => (
                                            <Tag key={t}>{t}</Tag>
                                        ))}
                                    </div>
                                )}
                                {hero?.summary && <p className="mt-5 text-lg text-p3/90">{hero.summary}</p>}
                            </div>
                            <StickyDualCTA />
                        </header>
                    </div>
                </section>

                {/* Article + ToC */}
                <div className="mx-auto px-4 py-10 max-w-6xl grid md:grid-cols-[1fr_300px] gap-8">
                    <article className="max-w-3xl">
                        {enhancedBlocks.map((block, idx) => {
                            // Detect section contexts
                            if (block.type === 'heading' && block.level === 2) {
                                inEvidence = block.text.toLowerCase().startsWith('evidence check');
                            }

                            switch (block.type) {
                                case "heading": {
                                    // Insert cost table after the costs H2
                                    const isCostsH2 = block.level === 2 && block.text.toLowerCase().startsWith("costs in the uk");
                                    const isGoodLooksH2 = block.level === 2 && block.text.toLowerCase().includes('what "good" looks like');
                                    const isRealisticH2 = block.level === 2 && block.text.toLowerCase().startsWith('realistic expectations');
                                    const isFaqH2 = block.level === 2 && block.text.toLowerCase().startsWith('frequently asked questions');

                                    const headingEl = renderHeading(block, idx, inEvidence);

                                    return (
                                        <div key={idx}>
                                            {/* Bottom CTA block should appear before FAQ section */}
                                            {isFaqH2 && (
                                                <section className="mt-10 rounded-2xl bg-b3/50 p-6">
                                                    <p className="text-p3">
                                                        If you want a hand pressure-testing a plan—or you want to find HealGuid-verified practitioners who meet strict safety and ethics checks—we've built the trust rails for exactly this moment.
                                                    </p>
                                                    <Link href="/practitioners" className="mt-3 inline-flex items-center justify-center rounded-md bg-p1 px-5 py-2.5 text-white font-medium hover:bg-p4 transition-colors">Find verified practitioners →</Link>
                                                </section>
                                            )}

                                            {headingEl}
                                            {isCostsH2 && <CostsTable />}
                                            {/* Inline CTA after good-looks section */}
                                            {isGoodLooksH2 && (
                                                <section aria-label="Inline CTA after good standards">
                                                    {/* CTA will be inserted after the list for this section, so nothing here */}
                                                </section>
                                            )}
                                            {/* Add image placeholders per spec (lazy below fold) */}
                                            {block.level === 2 && block.text.toLowerCase().startsWith('evidence check') && (
                                                <figure className="mt-4">
                                                    <img src="/images/blog/lab-work.webp" alt="private blood testing functional medicine uk" loading="lazy" width="800" height="534" className="w-full h-auto rounded" />
                                                    <noscript><img src="/images/blog/lab-work.jpg" alt="private blood testing functional medicine uk" width="800" height="534" className="w-full h-auto rounded" /></noscript>
                                                </figure>
                                            )}
                                            {isCostsH2 && (
                                                <figure className="mt-4">
                                                    <img src="/images/blog/supplements.webp" alt="mitochondrial support supplements coq10 nadh" loading="lazy" width="800" height="534" className="w-full h-auto rounded" />
                                                    <noscript><img src="/images/blog/supplements.jpg" alt="mitochondrial support supplements coq10 nadh" width="800" height="534" className="w-full h-auto rounded" /></noscript>
                                                </figure>
                                            )}
                                            {isRealisticH2 && (
                                                <figure className="mt-4">
                                                    <img src="/images/blog/consultation.webp" alt="functional medicine practitioner consultation uk" loading="lazy" width="800" height="534" className="w-full h-auto rounded" />
                                                    <noscript><img src="/images/blog/consultation.jpg" alt="functional medicine practitioner consultation uk" width="800" height="534" className="w-full h-auto rounded" /></noscript>
                                                </figure>
                                            )}
                                        </div>
                                    );
                                }
                                case "paragraph":
                                    return (
                                        <p key={idx} className="mt-4 text-p3/90 leading-7">
                                            {block.text}
                                        </p>
                                    );
                                case "list": {
                                    const listEl = block.ordered ? (
                                        <ol key={idx} className="mt-4 ml-5 list-decimal space-y-2 text-p3/90">
                                            {block.items.map((it, i) => (
                                                <li key={i}>{it}</li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <ul key={idx} className="mt-4 ml-5 list-disc space-y-2 text-p3/90">
                                            {block.items.map((it, i) => (
                                                <li key={i}>{it}</li>
                                            ))}
                                        </ul>
                                    );
                                    // After specified sections, inject CTAs
                                    // After "What \"good\" looks like" section list
                                    const prev = enhancedBlocks[idx - 1];
                                    const afterGoodLooks = prev && prev.type === 'heading' && prev.level === 2 && prev.text.toLowerCase().includes('what "good" looks like');
                                    const afterCosts = prev && prev.type === 'heading' && prev.level === 2 && prev.text.toLowerCase().startsWith('costs in the uk');
                                    const ctas = [];
                                    if (afterGoodLooks) {
                                        ctas.push(
                                            <div key={`${idx}-goodlink`} className="mt-6">
                                                <p className="text-p3/90">
                                                    Learn how HealGuid vets clinics and clinicians in <Link href="/about/verification-standards" className="text-p1 underline">HealGuid's verification flow</Link>.
                                                </p>
                                            </div>
                                        );
                                        ctas.push(
                                            <section key={`${idx}-cta1`} className="mt-4">
                                                <div className="rounded-2xl border border-b11 bg-b10 p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-p3">Ready to find practitioners who meet these standards?</h3>
                                                        <p className="mt-1 text-p3/90">Search HealGuid's verified practitioners →</p>
                                                    </div>
                                                    <Link href="/practitioners?verified=true&specialty=functional-medicine" className="inline-flex items-center justify-center rounded-full bg-p1 px-5 py-2.5 text-white font-medium hover:bg-p4 transition-colors">Search</Link>
                                                </div>
                                            </section>
                                        );
                                    }
                                    if (afterCosts) {
                                        ctas.push(
                                            <section key={`${idx}-cta2`} className="mt-6">
                                                <div className="rounded-2xl border border-b11 bg-b10 p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-p3">Compare pricing and read verified patient reviews</h3>
                                                        <p className="mt-1 text-p3/90">Browse by budget →</p>
                                                    </div>
                                                    <Link href="/practitioners?sort=price" className="inline-flex items-center justify-center rounded-full bg-p1 px-5 py-2.5 text-white font-medium hover:bg-p4 transition-colors">Browse</Link>
                                                </div>
                                            </section>
                                        );
                                    }
                                    return (
                                        <div key={idx}>
                                            {listEl}
                                            {ctas}
                                        </div>
                                    );
                                }
                                case "blockquote":
                                    return (
                                        <blockquote key={idx} className="mt-6 border-l-4 border-p1 pl-4 italic text-p3/90">
                                            {block.text}
                                        </blockquote>
                                    );
                                case "callout":
                                    return (
                                        <Callout key={idx} title={block.title} tone={block.tone}>
                                            <p>{block.text}</p>
                                        </Callout>
                                    );
                                case "hr":
                                    // Insert big CTA just before FAQ (i.e., before hr that precedes FAQ in content we keep original order).
                                    return <hr key={idx} className="my-8 border-b11/70" />;
                                case "sources":
                                    return <Sources key={idx} items={block.items} />;
                                case "cta":
                                    return (
                                        <section key={idx} className="mt-10">
                                            <div className="rounded-2xl border border-b11 bg-b10 p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-p3">{block.title}</h3>
                                                    {block.text && <p className="mt-1 text-p3/90">{block.text}</p>}
                                                </div>
                                                {block.href && (
                                                    <a
                                                        href={block.href}
                                                        className="inline-flex items-center justify-center rounded-full bg-p1 px-5 py-2.5 text-white font-medium hover:bg-p4 transition-colors"
                                                    >
                                                        {block.ctaLabel || "Learn more"}
                                                    </a>
                                                )}
                                            </div>
                                        </section>
                                    );
                                default:
                                    return null;
                            }
                        })}

                        {/* Bottom CTA block before FAQ */}
                        <section className="mt-10 rounded-2xl bg-b3/50 p-6">
                            <p className="text-p3">
                                If you want a hand pressure-testing a plan—or you want to find HealGuid-verified practitioners who meet strict safety and ethics checks—we've built the trust rails for exactly this moment.
                            </p>
                            <Link href="/practitioners" className="mt-3 inline-flex items-center justify-center rounded-md bg-p1 px-5 py-2.5 text-white font-medium hover:bg-p4 transition-colors">Find verified practitioners →</Link>
                        </section>

                        <Sources items={sources} />

                        {/* Author & Review section */}
                        <section className="mt-10 p-4 rounded-lg" style={{ backgroundColor: "#F3F4F6" }}>
                            <p className="text-p3 font-medium">Written by: HealGuid Editorial Team</p>
                            <p className="text-p3/80">Date: 21 October 2025</p>
                            <div className="mt-3">
                                <p className="text-p3 font-medium">Medically reviewed by: [Name], [Credentials]</p>
                                <p className="text-p3/80">Review date: [Date]</p>
                            </div>
                        </section>
                    </article>

                    <ToC headings={headings} />
                </div>
            </main>

            <Footer data={{ type: "clients" }} />
        </>
    );
}

export async function getStaticPaths() {
    return { paths: posts.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
    return { props: { post: posts.find((p) => p.slug === params.slug) || null } };
}
