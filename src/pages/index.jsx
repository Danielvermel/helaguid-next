// src/pages/index.js
import Head from "next/head";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Cause from "../components/sections/Cause";
import WhyUs from "../components/sections/WhyUs";
import HowItWorks from "../components/sections/HowItWorks";
import WhatWeOffer from "../components/sections/WhatWeOffer";
import AboutUs from "../components/sections/AboutUs";
import Footer from "../components/sections/Footer";
import { menus, hero, causes, whyUs, comparisonTable, howItWorks, offers } from "../constants/clients";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Meta from "../components/Meta";
import Schema from "../components/Schema";

// Dynamically import components that need browser APIs
const Modal = dynamic(() => import("../components/ui/Modal"), { ssr: false });
const Newsletter = dynamic(() => import("../components/Newsletter"), { ssr: false });

export default function Home() {
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
                title="Find Certified Experts for Chronic Illness Near You | HealGuid"
                description="Struggling with chronic fatigue, fibromyalgia, or long COVID? HealGuid connects you with trusted holistic specialists online or near you. Start healing today!"
            />

            <Schema
                schemas={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "HealGuid",
                        url: "https://www.healguid.com",
                        logo: "https://www.healguid.com/images/logos/healGuid.png",
                        description:
                            "HealGuid connects patients with verified holistic practitioners who understand chronic conditions and provide personalized care.",
                        sameAs: [
                            "https://www.instagram.com/healguid",
                            "https://www.linkedin.com/company/healguid",
                            "https://www.facebook.com/HealGuid",
                            "https://twitter.com/HealGuid",
                        ],
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        serviceType: "Holistic Healthcare Connection",
                        provider: {
                            "@type": "Organization",
                            name: "HealGuid",
                        },
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Health Specialties",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Digestive & Gut Health",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Chronic Fatigue & Energy Issues",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Anxiety & Mental Wellbeing",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Hormonal Imbalances",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Chronic Pain & Recovery",
                                    },
                                },
                            ],
                        },
                    },
                ]}
            />

            <main className="overflow-hidden">
                {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <Newsletter type="clients" onClose={handleCloseModal} />
                    </Modal>
                )}

                <Header data={{ menus, type: "clients" }} func={{ handleOpenModal }} />
                <Hero data={{ hero, type: "clients", isModalOpen, isSafari }} func={{ handleOpenModal }} />
                <WhyUs data={{ whyUs, comparisonTable, type: "clients", isModalOpen }} func={{ handleOpenModal }} />
                <Cause data={{ causes, type: "clients" }} />
                <WhatWeOffer data={{ offers, type: "clients", isModalOpen }} func={{ handleOpenModal }} />
                <HowItWorks data={{ howItWorks, type: "clients", isModalOpen, isSafari }} func={{ handleOpenModal }} />
                <AboutUs data={{ type: "clients", isSafari }} />
                <Footer data={{ type: "clients" }} />
            </main>
        </>
    );
}
