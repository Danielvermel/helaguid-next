import Link from "next/link";

export default function PostCard({ post }) {
    return (
        <article className="h-full flex flex-col rounded-2xl border border-b11 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <header>
                <h2 className="text-lg md:text-xl font-semibold text-p3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-p1 transition-colors">
                        {post.title}
                    </Link>
                </h2>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-b11" aria-hidden />
                    <time>{post.date}</time>
                </p>
            </header>

            {post.excerpt && <p className="mt-3 text-gray-600">{post.excerpt}</p>}

            {post.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-b3 text-p3 border border-b11">#{t}</span>
                    ))}
                </div>
            )}

            <div className="mt-5 pt-3 border-t border-b11/60">
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-p1 font-medium hover:text-p4"
                    aria-label={`Read ${post.title}`}
                >
                    Read more <span aria-hidden>→</span>
                </Link>
            </div>
        </article>
    );
}
