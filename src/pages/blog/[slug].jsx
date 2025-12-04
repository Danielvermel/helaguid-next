import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";
import { faqs } from "../../constants/faq";
import { posts } from "../../constants/posts";

function Tag({ children }) {
    return <span className="text-xs px-2.5 py-1 rounded-full bg-b3 text-p3 border border-b11">#{children}</span>;
}

function Callout({ title, tone = "info", children }) {
    if (tone === "danger") {
        return (
            <aside className="my-6 rounded-lg border-l-4 bg-red-50 border-red-400 p-6">
                {title && <h3 className="text-base font-semibold text-p3 mb-2">{title}</h3>}
                <div className="text-p3/90">{children}</div>
            </aside>
        );
    }
    const toneStyles = {
        info: "bg-b3 border-b11",
        warn: "bg-yellow-50 border-yellow-400",
        success: "bg-green-50 border-green-400",
    };
    return (
        <aside className={`my-6 rounded-xl border p-4 md:p-5 ${toneStyles[tone] || "bg-blue-50 border-blue-400"}`}>
            {title && <h3 className="text-base font-semibold text-p3 mb-1">{title}</h3>}
            <div className="text-p3/90">{children}</div>
        </aside>
    );
}

function Sources({ items = [] }) {
    if (!items?.length) return null;
    return (
        <footer className="mt-10 pt-6 border-t border-b11/70">
            <h2 className="text-lg font-semibold text-p3 mb-4">Sources</h2>
            <ol className="list-decimal ml-5 space-y-2 text-p3/90">
                {items.map((source, i) => (
                    <li key={i}>
                        {source.url ? (
                            <a
                                href={source.url}
                                className="text-p1 hover:text-p4 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {source.label || source.url}
                            </a>
                        ) : (
                            <span>{source.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </footer>
    );
}

function ImageBlock({ block }) {
    return (
        <figure className="my-12">
            <Image
                src={block.src}
                alt={block.alt || ""}
                width={800}
                height={450}
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                // Fixed: Remove placeholder="blur" or add blurDataURL
            />
            {block.caption && (
                <figcaption className="mt-4 text-center text-sm text-gray-500 italic px-4">{block.caption}</figcaption>
            )}
        </figure>
    );
}

const slugify = (str = "") =>
    str
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

function ToC({ headings = [] }) {
    if (!headings.length) return null;
    return (
        <>
            <details className="md:hidden border border-b11 rounded-lg p-3 mb-6" open>
                <summary className="cursor-pointer text-sm text-p3 font-semibold mb-2">On this page</summary>
                <ul className="mt-2 text-sm text-p3/80">
                    {headings.map((h, index) => (
                        <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
                            <a
                                href={`#${h.id}`}
                                className="hover:text-p1 block py-1"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {index}. {h.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </details>
            <nav className="hidden md:block sticky top-24 max-h-[70vh] overflow-auto text-sm text-p3/80 bg-11">
                <h2 className="text-p3 text-sm font-semibold mb-3 sticky top-0 p-2 border-b">On this page</h2>
                <ul className="border-l border-b11/50 pl-3">
                    {headings.map((h, index) => (
                        <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
                            <a
                                href={`#${h.id}`}
                                className="hover:text-p1 block py-1"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {index + 1}. {h.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

// Render heading dynamically based on level
function renderHeading(block, idx) {
    const baseClasses = "font-bold text-p3 scroll-mt-20";
    const h2Classes = "mt-16 mb-8 text-3xl md:text-4xl";
    const h3Classes = "mt-12 mb-6 text-2xl md:text-3xl";
    const className = block.level === 2 ? `${baseClasses} ${h2Classes}` : `${baseClasses} ${h3Classes}`;

    if (block.level === 2) {
        return (
            <h2 key={idx} id={block.id} className={className}>
                {block.text}
            </h2>
        );
    }
    return (
        <h3 key={idx} id={block.id} className={className}>
            {block.text}
        </h3>
    );
}

export default function BlogPost({ post }) {
    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-p3 mb-4">Post not found</h1>
                    <Link href="/blog" className="text-p1 underline hover:text-p4">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const { title, date, tags = [], hero = {}, blocks = [], excerpt, sources = [] } = post;

    // Extract sources from blocks if they exist there
    const allSources = sources.length ? sources : blocks.find((b) => b.type === "sources")?.items || [];

    // Generate headings for ToC
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
    const heroImage = hero.image || "/images/blog/default-hero.webp";
    const publishedDate = date ? new Date(date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0];

    return (
        <>
            <Head>
                <title>{title} | HealGuid Blog</title>
                <meta name="description" content={excerpt || `${title} - Practical insights from HealGuid`} />
                <link rel="canonical" href={pageUrl} />

                {/* Open Graph / Twitter */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={excerpt} />
                <meta property="og:image" content={heroImage} />
                <meta property="og:url" content={pageUrl} />
                <meta name="twitter:card" content="summary_large_image" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            headline: title,
                            description: excerpt,
                            image: heroImage,
                            author: { "@type": "Organization", name: "HealGuid" },
                            publisher: {
                                "@type": "Organization",
                                name: "HealGuid",
                                logo: { "@type": "ImageObject", url: "https://www.healguid.com/logo.png" },
                            },
                            datePublished: publishedDate,
                            mainEntityOfPage: pageUrl,
                        }),
                    }}
                />
            </Head>

            <Header data={{ menus: faqs.menus, type: "faq", extra: "faq" }} />

            <main className="min-h-screen">
                {/* Hero */}
                <section className="bg-gradient-to-b from-b3/20 to-white border-b border-b11/50">
                    <div className="max-w-6xl mx-auto px-4 pt-20 pb-10">
                        <nav className="text-sm text-gray-500 mb-6 mt-4" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2">
                                <li>
                                    <Link href="/" className="hover:text-p1">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-gray-300">/</li>
                                <li>
                                    <Link href="/blog" className="hover:text-p1">
                                        Blog
                                    </Link>
                                </li>
                                <li className="text-gray-300">/</li>
                                <li className="text-p3 font-medium">{title}</li>
                            </ol>
                        </nav>

                        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
                            <div>
                                {tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {tags.map((tag) => (
                                            <Tag key={tag}>{tag}</Tag>
                                        ))}
                                    </div>
                                )}
                                <h1 className="text-4xl md:text-5xl font-bold text-p3 leading-tight mb-6">{title}</h1>
                                <div className="text-sm text-gray-600 mb-8 flex flex-wrap items-center gap-4">
                                    <time dateTime={publishedDate}>{publishedDate}</time>
                                    <span>•</span>
                                    <span>~{Math.round(blocks.length / 10)} min read</span>
                                </div>
                                {hero.summary && (
                                    <p className="text-xl text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
                                        {hero.summary}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content + ToC */}
                <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-[1fr_280px] gap-12">
                    <article className="max-w-4xl prose prose-p3 max-w-none">
                        {enhancedBlocks.map((block, idx) => {
                            switch (block.type) {
                                case "heading":
                                    return renderHeading(block, idx);

                                case "paragraph":
                                    return (
                                        <p
                                            key={idx}
                                            className="mt-6 text-lg text-gray-700 leading-relaxed whitespace-pre-wrap"
                                        >
                                            {block.text}
                                        </p>
                                    );

                                case "italic":
                                    return (
                                        <i
                                            key={idx}
                                            className="mt-8 text-lg text-gray-700 leading-relaxed whitespace-pre-wrap"
                                        >
                                            {block.text}
                                        </i>
                                    );

                                case "bold":
                                    return (
                                        <b
                                            key={idx}
                                            className="mt-1 block text-lg text-gray-700 leading-relaxed whitespace-pre-wrap"
                                        >
                                            {block.text}
                                        </b>
                                    );

                                case "list": {
                                    const ListTag = block.ordered ? "ol" : "ul";
                                    return (
                                        <ListTag
                                            key={idx}
                                            className={`mt-8 mb-8 ml-6 space-y-3 ${
                                                block.ordered ? "list-decimal" : "list-disc"
                                            }`}
                                        >
                                            {block.items.map((item, i) => (
                                                <li key={i} className="text-lg text-gray-700">
                                                    {item}
                                                </li>
                                            ))}
                                        </ListTag>
                                    );
                                }

                                case "callout":
                                    return (
                                        <Callout key={idx} title={block.title} tone={block.tone}>
                                            {block.text}
                                        </Callout>
                                    );

                                case "cta":
                                    return (
                                        <section
                                            key={idx}
                                            className="my-12 p-8 rounded-2xl bg-gradient-to-r from-p1/5 to-p4/5 border border-p1/20"
                                        >
                                            <div className="max-w-2xl mx-auto text-center">
                                                {block.title && (
                                                    <h3 className="text-2xl font-bold text-p3 mb-4">{block.title}</h3>
                                                )}
                                                {block.text && (
                                                    <p className="text-lg text-gray-700 mb-6">{block.text}</p>
                                                )}
                                                {block.href && (
                                                    <Link
                                                        href={block.href}
                                                        className="inline-block bg-p1 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-p4 transition-all shadow-lg hover:shadow-xl"
                                                    >
                                                        {block.ctaLabel || "Learn more"}
                                                    </Link>
                                                )}
                                            </div>
                                        </section>
                                    );

                                case "image":
                                    return <ImageBlock key={idx} block={block} />;

                                case "hr":
                                    return <hr key={idx} className="my-16 border-b11/30" />;

                                case "sources":
                                    return <Sources key={idx} items={block.items} />;

                                default:
                                    return null;
                            }
                        })}

                        <Sources items={allSources} />
                    </article>

                    <aside className="hidden lg:block sticky top-24 self-start">
                        <ToC headings={headings} />
                    </aside>
                </div>
            </main>

            <Footer data={{ type: "clients" }} />
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: posts.map((p) => ({ params: { slug: p.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = posts.find((p) => p.slug === params.slug);
    return {
        props: { post: post || null },
    };
}
