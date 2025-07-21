// src/pages/partners.js
import Head from "next/head";
import Banner from "../components/ui/Banner";
import Header from "../components/sections/Header";
// import HeroPartner from "../components/sections/HeroPartner";
import HeroLoop from "../components/sections/HeroLoop";
import Hero from "../components/sections/Hero";
import Cause from "../components/sections/Cause";
import WhyUs from "../components/sections/WhyUs";
import HowItWorks from "../components/sections/HowItWorks";
import WhatWeOffer from "../components/sections/WhatWeOffer";
import AboutUs from "../components/sections/AboutUs";
import Footer from "../components/sections/Footer";
import { banner, menus, hero, causes, whyUs, comparisonTable, howItWorks, offers } from "../constants/partners";
import { healingApproaches } from "../constants/approaches";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Meta from "../components/Meta";

import { practitioners } from "../constants/carousel";
import PractitionerCarousel from "../components/sections/Carousel";
import Approaches from "../components/sections/Approaches";

import { jsonLdHero } from "../constants/jsonLdData";

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
                title="Grow Your Holistic Practice & Connect with 500+ Monthly Patient Searches | HealGuid"
                description="Join 50+ verified holistic practitioners connecting with patients seeking holitisc and natural care. Get 3X more consultations with our trusted verification system."
                path="partners"
            />

            <main className="overflow-hidden">
                {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <Newsletter type="partners" onClose={handleCloseModal} />
                    </Modal>
                )}
                <Header data={{ menus, type: "partners" }} />
                <Head>
                    <link rel="preload" href={hero.image} as="image" type="image/webp" />
                    <script type="application/ld+json">{JSON.stringify(jsonLdHero.conversation)}</script>
                </Head>
                {/* <HeroLoop data={{ menus, type: "partners" }} /> */}
                {/* <PractitionerCarousel data={{ practitioners }} /> */}
                {/* <Approaches data={healingApproaches} /> */}

                <Hero data={{ hero, type: "partners", isModalOpen, isSafari }} func={{ handleOpenModal }} />
                {/* <HeroPartner data={{ hero, isModalOpen, isSafari }} func={{ handleOpenModal }} /> */}
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
