// src/pages/_app.js
import Head from "next/head";
import { useEffect } from "react";
import "../styles/global.css";

// Global Schema - contains all site-wide structured data
const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.healguid.com/#organization",
            name: "HealGuid",
            url: "https://www.healguid.com",
            logo: {
                "@type": "ImageObject",
                url: "https://www.healguid.com/images/logos/healguid-social.png",
                width: "180",
                height: "60",
            },
            description:
                "HealGuid is a holistic healthcare platform connecting individuals with certified, evidence-based holistic and functional medicine practitioners. Designed to support those with chronic illness, unexplained symptoms, and fatigue, HealGuid empowers patients to find personalised care that truly listens, understands, and heals.",
            sameAs: [
                "https://www.instagram.com/healguid",
                "https://www.linkedin.com/company/healguid",
                "https://www.facebook.com/HealGuid",
                "https://twitter.com/HealGuid",
            ],
            email: "info@healguid.com",
            slogan: "Making healthcare human again",
            keywords:
                "functional medicine experts, holistic healthcare platform, integrative health solutions, chronic illness support, verified holistic practitioners",
            contactPoint: {
                "@type": "ContactPoint",
                email: "info@healguid.com",
                contactType: "Customer Support",
            },
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
                description: "Platform available 24/7. Practitioner availability typically 9am-6pm local time.",
            },
        },
        {
            "@type": "WebSite",
            "@id": "https://www.healguid.com/#website",
            url: "https://www.healguid.com",
            name: "HealGuid - Holistic Healthcare Platform",
            description:
                "Connect with certified holistic and functional medicine practitioners for personalized care that addresses the root causes of chronic conditions.",
            publisher: {
                "@id": "https://www.healguid.com/#organization",
            },
            potentialAction: {
                "@type": "SearchAction",
                target: "https://www.healguid.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
            },
        },
        {
            "@type": "WebPage",
            "@id": "https://www.healguid.com/#webpage",
            url: "https://www.healguid.com",
            name: "HealGuid | Connect with Holistic Healthcare Practitioners",
            description:
                "HealGuid connects individuals with certified, evidence-based holistic and functional medicine practitioners who specialize in chronic conditions.",
            isPartOf: {
                "@id": "https://www.healguid.com/#website",
            },
            about: {
                "@id": "https://www.healguid.com/#organization",
            },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.healguid.com/images/og/healguid-og.png",
            },
            speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: [".speakable-intro", ".speakable-summary"],
                xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
            },
            inLanguage: "en",
        },
        {
            "@type": "SiteNavigationElement",
            "@id": "https://www.healguid.com/#sitenavigation",
            name: "Main Navigation",
            description: "Main navigation links for HealGuid website",
            hasPart: [
                {
                    "@type": "SiteNavigationElement",
                    name: "For Patients",
                    url: "https://www.healguid.com/",
                },
                {
                    "@type": "SiteNavigationElement",
                    name: "For Partners",
                    url: "https://www.healguid.com/partners",
                },
                {
                    "@type": "SiteNavigationElement",
                    name: "Privacy Policy",
                    url: "https://www.healguid.com/privacy-policy",
                },
                {
                    "@type": "SiteNavigationElement",
                    name: "FAQ",
                    url: "https://www.healguid.com/faq",
                },
            ],
        },
        {
            "@type": "SiteNavigationElement",
            "@id": "https://www.healguid.com/#section-navigation",
            name: "Section Navigation",
            description: "In-page section links for HealGuid homepage",
            hasPart: [
                {
                    "@type": "SiteNavigationElement",
                    name: "Why Us",
                    url: "https://www.healguid.com/#why-us",
                },
                {
                    "@type": "SiteNavigationElement",
                    name: "Our Offer",
                    url: "https://www.healguid.com/#our-offer",
                },
                {
                    "@type": "SiteNavigationElement",
                    name: "How It Works",
                    url: "https://www.healguid.com/#how-it-works",
                },
                {
                    "@type": "SiteNavigationElement",
                    name: "About",
                    url: "https://www.healguid.com/#about",
                },
            ],
        },

        {
            "@context": "https://schema.org",
            "@type": "HealthcareService",
            "@id": "https://www.healguid.com/#healthcareservice",
            name: "HealGuid Holistic Healthcare Platform",
            description:
                "Connecting individuals with certified holistic and functional medicine practitioners who specialize in chronic conditions, unexplained symptoms, and holistic wellness.",
            provider: {
                "@type": "Organization",
                "@id": "https://www.healguid.com/#organization",
            },
            availableService: [
                {
                    "@type": "MedicalService",
                    name: "Chronic Fatigue Treatment",
                    description:
                        "Evidence-based holistic approaches for chronic fatigue syndrome and persistent energy issues.",
                },
                {
                    "@type": "MedicalService",
                    name: "Autoimmune Protocol Support",
                    description: "Comprehensive care for autoimmune conditions using functional medicine approaches.",
                },
                {
                    "@type": "MedicalService",
                    name: "Gut Health Optimization",
                    description: "Targeted digestive health protocols for IBS, SIBO, and microbiome restoration.",
                },
                {
                    "@type": "MedicalService",
                    name: "Hormonal Balance",
                    description: "Natural approaches to thyroid disorders, adrenal fatigue, and reproductive health.",
                },
                {
                    "@type": "MedicalService",
                    name: "Mental Wellbeing Support",
                    description: "Holistic approaches to anxiety, depression, and stress management.",
                },
                {
                    "@type": "MedicalService",
                    name: "Virtual Consultations",
                    description: "Secure telehealth appointments with verified holistic practitioners.",
                },
            ],
            medicineSystem: [
                "Functional Medicine",
                "Naturopathic Medicine",
                "Traditional Chinese Medicine",
                "Ayurvedic Medicine",
                "Integrative Health",
                "Holistic Medicine",
            ],
            specialty: [
                "Chronic Fatigue Syndrome",
                "Fibromyalgia",
                "Autoimmune Disorders",
                "IBS and Digestive Health",
                "Thyroid Conditions",
                "Hormone Imbalances",
                "Women's Health",
                "Mental Wellbeing",
                "Environmental Illness",
                "Long COVID Recovery",
            ],
            healthPlanNetworkId: ["HealGuid Verified Network"],
            availableChannel: [
                {
                    "@type": "ServiceChannel",
                    name: "Online",
                    serviceUrl: "https://www.healguid.com/appointments",
                },
                {
                    "@type": "ServiceChannel",
                    name: "In-person",
                    serviceLocation: {
                        "@type": "Place",
                        name: "Various Practitioner Locations",
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "United Kingdom",
                        },
                    },
                },
            ],
        },

        {
            "@type": "ItemList",
            "@id": "https://www.healguid.com/#treatment-solutions",
            name: "HealGuid Treatment Solutions",
            description: "Specialized holistic treatment approaches for various health conditions",
            itemListElement: [
                {
                    "@type": "ListItem",
                    "@id": "https://www.healguid.com/#treatment-digestive",
                    position: 1,
                    name: "Digestive & Gut Health",
                    description:
                        "Holistic approaches to digestive disorders, IBS, leaky gut, and microbiome optimization",
                    url: "https://www.healguid.com/#our-offer/digestive-gut-health",
                },
                {
                    "@type": "ListItem",
                    "@id": "https://www.healguid.com/#treatment-fatigue",
                    position: 2,
                    name: "Chronic Fatigue & Energy Issues",
                    description:
                        "Comprehensive solutions for chronic fatigue syndrome, adrenal fatigue, and persistent low energy",
                    url: "https://www.healguid.com/#our-offer/chronic-fatigue",
                },
                {
                    "@type": "ListItem",
                    "@id": "https://www.healguid.com/#treatment-mental",
                    position: 3,
                    name: "Anxiety & Mental Wellbeing",
                    description:
                        "Integrative approaches to anxiety, depression, stress, and overall mental health optimization",
                    url: "https://www.healguid.com/#our-offer/mental-wellbeing",
                },
                {
                    "@type": "ListItem",
                    "@id": "https://www.healguid.com/#treatment-hormonal",
                    position: 4,
                    name: "Hormonal Imbalances",
                    description:
                        "Natural solutions for thyroid issues, adrenal dysfunction, reproductive hormones, and metabolic balance",
                    url: "https://www.healguid.com/#our-offer/hormonal-health",
                },
                {
                    "@type": "ListItem",
                    "@id": "https://www.healguid.com/#treatment-pain",
                    position: 5,
                    name: "Chronic Pain & Recovery",
                    description: "Holistic pain management strategies and rehabilitation for chronic pain conditions",
                    url: "https://www.healguid.com/#our-offer/chronic-pain",
                },
                {
                    "@type": "ListItem",
                    "@id": "https://www.healguid.com/#treatment-sleep",
                    position: 6,
                    name: "Sleep & Stress Management",
                    description: "Comprehensive approaches to insomnia, sleep disorders, and stress-related conditions",
                    url: "https://www.healguid.com/#our-offer/sleep-stress",
                },
                {
                    "@type": "ListItem",
                    "@id": "https://www.healguid.com/#treatment-autoimmune",
                    position: 7,
                    name: "Autoimmune Conditions",
                    description: "Functional medicine approaches to autoimmune disorders and inflammatory conditions",
                    url: "https://www.healguid.com/#our-offer/autoimmune",
                },
                {
                    "@type": "ListItem",
                    "@id": "https://www.healguid.com/#treatment-preventive",
                    position: 8,
                    name: "Preventive Health & Optimization",
                    description: "Proactive wellness strategies for optimal health, longevity, and disease prevention",
                    url: "https://www.healguid.com/#our-offer/preventive-health",
                },
            ],
        },
        {
            "@type": "Review",
            "@id": "https://www.healguid.com/#reviews",
            itemReviewed: {
                "@id": "https://www.healguid.com/#organization",
            },
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
            reviewBody:
                "As someone who struggled with unexplained symptoms for years navigating conventional medicine, I'm advising HealGuid to create what patients truly need—a trusted bridge to certified holistic practitioners.",
            author: {
                "@type": "Person",
                name: "Dr. Emily Carter, MD",
                jobTitle: "Health Advisor",
            },
            datePublished: "2025-03-15",
        },
    ],
};

// Modified analytics initialization to work with CookieYes// Modified analytics initialization to work with CookieYes
function initializeAnalytics() {
    if (typeof window !== "undefined") {
        // GTM loading should be triggered by consent being established
        window.addEventListener("cookieyes_loaded", function () {
            console.log("CookieYes loaded - consent initialized");

            // Now that consent is established, we can proceed with GTM
            // No need to check consent status for GTM - it will respect the consent settings
            setTimeout(() => {
                (function (w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l !== "dataLayer" ? "&l=" + l : "";
                    j.async = true;
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-K476PRB8");

                console.log("GTM loaded with consent management enabled");
            }, 500); // Small delay to ensure consent is fully processed
        });

        // Fallback - if CookieYes doesn't load within 3 seconds
        setTimeout(() => {
            if (!window.cookieyes || !window.cookieyes.getConsentStatus) {
                console.log("CookieYes not detected after timeout - loading GTM with default consent");

                // Load GTM with default consent settings
                (function (w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l !== "dataLayer" ? "&l=" + l : "";
                    j.async = true;
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-K476PRB8");
            }
        }, 3000);
    }
}

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        initializeAnalytics();
    }, []);

    // Safely stringify the schema with error handling
    const schemaString = (() => {
        try {
            return JSON.stringify(globalSchema);
        } catch (e) {
            console.error("Error stringifying navigation schema:", e);
            return "{}";
        }
    })();

    return (
        <>
            <Head>
                {/* Google Consent Mode initialization - MUST come first, before CookieYes */}
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
            // Define dataLayer
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent - leveraging our new Basic Consent Configuration in GTM
            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'granted', // Allow analytics by default
                'functionality_storage': 'granted',
                'security_storage': 'granted',
                'wait_for_update': 500
            });
            
            // Signal that consent has been initialized
            dataLayer.push({'event': 'consent_initialized'});
            `,
                    }}
                />

                {/* Schema data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: schemaString }}
                    key="navigation-schema"
                />
            </Head>

            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-K476PRB8"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
