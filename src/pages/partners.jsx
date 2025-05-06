// src/pages/partners.js
import Head from "next/head";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Cause from "../components/sections/Cause";
import WhyUs from "../components/sections/WhyUs";
import HowItWorks from "../components/sections/HowItWorks";
import WhatWeOffer from "../components/sections/WhatWeOffer";
import AboutUs from "../components/sections/AboutUs";
import Footer from "../components/sections/Footer";
import { menus, hero, causes, whyUs, comparisonTable, howItWorks, offers } from "../constants/partners";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Meta from "../components/Meta";
import Schema from "../components/Schema";

// Dynamically import components that need browser APIs
const Modal = dynamic(() => import("../components/ui/Modal"), { ssr: false });
const Newsletter = dynamic(() => import("../components/Newsletter"), { ssr: false });

export default function Partners() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSafari, setIsSafari] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Browser detection logic
            const isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
            setIsSafari(isSafari);
        }
    }, []);

    return (
        <>
            <Meta
                title="Grow Your Holistic Practice & Cut Admin Time | HealGuid"
                description="Spend less time on admin and more time healing. HealGuid connects you with verified patients and helps grow your holistic practice — effortlessly."
                path="partners"
            />

            {/* <Schema
                schemas={[
                    {
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        name: "HealGuid for Practitioners",
                        url: "https://www.healguid.com/partners",
                        logo: "https://www.healguid.com/images/logos/healGuid.png",
                        description:
                            "HealGuid connects holistic practitioners with patients seeking natural healthcare solutions. Join our partner network to grow your practice, simplify administration, and focus on healing.",
                        slogan: "Heal Your Patients, Guide Your Practice",
                        serviceType: "Holistic Healthcare Platform",
                        audience: {
                            "@type": "Audience",
                            audienceType: "Holistic Healthcare Practitioners",
                        },
                        provider: {
                            "@type": "Organization",
                            name: "HealGuid",
                            url: "https://www.healguid.com",
                        },
                        offers: {
                            "@type": "Offer",
                            name: "Founding Member Access",
                            description:
                                "Join early for exclusive benefits including priority patient matching and founding member pricing.",
                            availability: "LimitedAvailability",
                        },

                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Practitioner Benefits",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Access to New Patients",
                                        description:
                                            "Expand your reach by connecting with patients who value holistic care.",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Manage Patients Easily",
                                        description:
                                            "Simplify scheduling and billing with automation and reduce no-shows through personalized appointment reminders.",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Professional Profile & Accreditation",
                                        description:
                                            "Use a website-like profile highlighting your skills and expertise, earn trust with HealGuid accreditation.",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Patient Progress Tracking",
                                        description:
                                            "Share health reports easily and effectively to keep patients engaged and log milestones to celebrate successes together.",
                                    },
                                },
                            ],
                        },
                        areaServed: "Worldwide",
                        knowsAbout: [
                            "Holistic Medicine",
                            "Integrative Healthcare",
                            "Naturopathy",
                            "Functional Medicine",
                            "Digestive Health",
                            "Chronic Fatigue",
                            "Anxiety & Mental Wellbeing",
                            "Hormonal Imbalances",
                            "Chronic Pain",
                            "Sleep & Stress Management",
                            "Autoimmune Conditions",
                            "Preventive Health",
                        ],
                        serviceOutput: {
                            "@type": "Thing",
                            name: "Practice Growth and Patient Connection",
                            description:
                                "Simplified practice management and meaningful patient relationships for holistic practitioners.",
                        },
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            lastReviewed: "2025-03-30",
                            "@id": "https://www.healguid.com/partners",
                        },
                    },
                ]}
            /> */}

            <main className="overflow-hidden">
                {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <Newsletter type="partners" onClose={handleCloseModal} />
                    </Modal>
                )}

                {/* <Banner data={{ banner }} /> */}
                <Header data={{ menus, type: "partners" }} func={{ handleOpenModal }} />
                <Hero data={{ hero, type: "partners", isModalOpen, isSafari }} func={{ handleOpenModal }} />
                <Cause data={{ causes, type: "partners" }} />
                <WhyUs data={{ whyUs, comparisonTable, type: "partners", isModalOpen }} func={{ handleOpenModal }} />
                <WhatWeOffer data={{ offers, type: "partners", isModalOpen }} func={{ handleOpenModal }} />
                <HowItWorks data={{ howItWorks, type: "partners", isModalOpen, isSafari }} func={{ handleOpenModal }} />
                <AboutUs data={{ type: "partners", isSafari }} />
                <Footer data={{ type: "partners" }} />
            </main>
        </>
    );
}

// For SSG, ensure the page is pre-rendered
// export async function getStaticProps() {
//     return {
//         props: {},
//     };
// }
