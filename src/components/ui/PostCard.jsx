import Link from "next/link";

export default function PostCard({ post }) {
    return (
        <article className="border border-gray-200 rounded-lg p-4 mb-6 hover:shadow-sm transition">
            <h2 className="text-xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="underline-offset-2 hover:underline">
                    {post.title}
                </Link>
            </h2>

            <p className="text-sm text-gray-500 mt-1">{post.date}</p>

            {post.excerpt && <p className="mt-3">{post.excerpt}</p>}

            {post.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 border rounded">
                            #{t}
                        </span>
                    ))}
                </div>
            )}

            <div className="mt-4">
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-sm underline underline-offset-2"
                    aria-label={`Read ${post.title}`}
                >
                    Read more →
                </Link>
            </div>
        </article>
    );
}
