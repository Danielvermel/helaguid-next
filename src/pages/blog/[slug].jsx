import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";
import { menus } from "../../constants/clients";
import { posts } from "../../constants/posts";

export default function BlogPost({ post }) {
    if (!post) return <p>Post not found.</p>;

    return (
        <>
            <Header data={{ menus }} />
            <main className="max-w-3xl mx-auto px-4 pt-28 md:pt-32 pb-16">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                <div className="prose mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
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
