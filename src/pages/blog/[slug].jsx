// src/pages/blog/[slug].jsx
import { posts } from "../../constants/posts";

export default function BlogPost({ post }) {
    if (!post) return <p>Post not found.</p>;

    return (
        <article style={{ padding: "2rem" }}>
            <h1>{post.title}</h1>
            <p>
                <small>{post.date}</small>
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    );
}

export async function getStaticPaths() {
    const paths = posts.map((p) => ({
        params: { slug: p.slug },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = posts.find((p) => p.slug === params.slug) || null;
    return { props: { post } };
}
