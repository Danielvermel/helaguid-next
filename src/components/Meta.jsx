// components/Meta.jsx
import Head from "next/head";

export default function Meta({ title, description, path = "", ogImage = "/images/logos/healGuid.webp" }) {
    const canonicalUrl = `https://www.healguid.com${path ? `/${path}` : ""}`;
    console.log("canonicalUrl: ", canonicalUrl);

    return (
        <Head>
            <link rel="canonical" href={canonicalUrl} />
            <title>{title}</title>
            <meta name="description" content={description} />

            <meta
                name="keywords"
                content="holistic healthcare, functional medicine, chronic illness specialists, gut health experts, verified practitioners"
            />

            {/* OpenGraph Tags */}
            <meta property="og:title"         content={title} />
            <meta property="og:description"   content={description} />
            <meta property="og:url"           content={canonicalUrl} />
            <meta property="og:image"         content={ogImage} />   ← ① dynamic
            <meta property="og:type"          content="website" />

            {/* Twitter */}
            <meta name="twitter:card"        content="summary_large_image" />
            <meta name="twitter:site"        content="@HealGuid" />
            <meta name="twitter:title"       content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image"       content="https://www.healguid.com/images/social/healguid-twitter-card.jpg" />
            <meta name="twitter:image:alt"   content="HealGuid – Connecting patients with verified holistic practitioners" />
            <meta name="twitter:image"        content="https://www.healguid.com/images/social/healguid-twitter-card.jpg" />
            <meta name="twitter:image:alt"    content="HealGuid – Connecting patients with verified holistic practitioners" />

            {/* Robots */}
            <meta
                name="robots"
                content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />

            {/* Keywords */}
            <meta
                name="keywords"
                content="holistic healthcare, functional medicine, naturopathic doctors, chronic illness specialists, chronic fatigue treatment, fibromyalgia specialists, autoimmune support, gut health experts, verified practitioners, telehealth consultations, integrative medicine, long COVID recovery, digestive health, hormone balancing, holistic verification, root cause medicine, evidence-based natural medicine, patient-centered care"
            />

            {/* Standard Favicons - consistent across all pages */}
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
            <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />

            {/* iOS icons */}
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
            <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-icon-167x167.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />

            {/* Android icons */}
            <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-icon-512x512.png" />

            {/* Manifest for Android PWAs */}
            <link rel="manifest" href="/manifest.json" />
        </Head>
    );
}
