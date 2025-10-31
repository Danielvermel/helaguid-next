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
    const toneStyles = {
        info: "bg-b3 border-b11",
        warn: "bg-b4 border-b11",
        danger: "bg-e1 border-b11",
        success: "bg-b8 border-b11",
    };
    return (
        <aside className={`my-6 rounded-xl border ${toneStyles[tone]} p-4 md:p-5`}>
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
                            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-p1 hover:text-p4 underline">
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

export default function BlogPost({ post }) {
    if (!post) return <p>Post not found.</p>;

    const { title, date, tags = [], hero, blocks = [], sources = [] } = post;

    return (
        <>
            <Header data={{ menus: faqs.menus, type: "faq", extra: "faq" }} />

            <main className="min-h-screen">
                {/* Hero/Header */}
                <section className="bg-b3/60 border-b border-b11/50">
                    <div className="max-w-4xl mx-auto px-4 pt-28 md:pt-36 pb-8">
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
                                <li className="text-p3" aria-current="page">Post</li>
                            </ol>
                        </nav>
                        <header>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-p3">{title}</h1>
                            <p className="mt-2 text-sm text-gray-600">
                                <time>{date}</time>
                            </p>
                            {tags.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {tags.map((t) => (
                                        <Tag key={t}>{t}</Tag>
                                    ))}
                                </div>
                            )}
                            {hero?.summary && <p className="mt-5 text-lg text-p3/90">{hero.summary}</p>}
                        </header>
                    </div>
                </section>

                {/* Article */}
                <article className="max-w-3xl mx-auto px-4 py-10">
                    {blocks.map((block, idx) => {
                        switch (block.type) {
                            case "heading":
                                if (block.level === 2)
                                    return (
                                        <h2 key={idx} className="mt-10 text-2xl md:text-3xl font-semibold text-p3">
                                            {block.text}
                                        </h2>
                                    );
                                if (block.level === 3)
                                    return (
                                        <h3 key={idx} className="mt-8 text-xl md:text-2xl font-semibold text-p3">
                                            {block.text}
                                        </h3>
                                    );
                                return (
                                    <h4 key={idx} className="mt-6 text-lg font-semibold text-p3">
                                        {block.text}
                                    </h4>
                                );
                            case "paragraph":
                                return (
                                    <p key={idx} className="mt-4 text-p3/90 leading-7">
                                        {block.text}
                                    </p>
                                );
                            case "list":
                                return block.ordered ? (
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

                    <Sources items={sources} />
                </article>
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
