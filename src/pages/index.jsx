// src/pages/index.js
import Head from "next/head";
import Banner from "../components/ui/Banner";
import Header from "../components/sections/Header";
// import HeroClient from "../components/sections/HeroClient";
import Hero from "../components/sections/Hero";
import HeroLoop from "../components/sections/HeroLoop";
import Cause from "../components/sections/Cause";
import WhyUs from "../components/sections/WhyUs";
import HowItWorks from "../components/sections/HowItWorks";
import WhatWeOffer from "../components/sections/WhatWeOffer";
import AboutUs from "../components/sections/AboutUs";
import Footer from "../components/sections/Footer";
import { practitioners } from "../constants/carousel";
import PractitionerCarousel from "../components/sections/Carousel";
import Approaches from "../components/sections/Approaches";

import { banner, menus, hero, causes, whyUs, comparisonTable, howItWorks, offers } from "../constants/clients";
import { healingApproaches } from "../constants/approaches";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { jsonLdHero } from "../constants/jsonLdData";

import Meta from "../components/others/Meta";

// Dynamically import components that need browser APIs
const Modal = dynamic(() => import("../components/ui/Modal"), { ssr: false });
const Newsletter = dynamic(() => import("../components/others/Newsletter"), { ssr: false });

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
                title=" Find Certified Experts for Chronic Illness Near You | HealGuid"
                description="Struggling with chronic fatigue, fibromyalgia, or long COVID? HealGuid connects you with trusted holistic specialists online or near you. Start healing today"
            />

            <main className="overflow-hidden">
                {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <Newsletter type="clients" onClose={handleCloseModal} />
                    </Modal>
                )}
                {/* <Banner data={{ banner, type: "clients" }} /> */}
                {/* <Header data={{ menus, type: "clients" }} /> */}
                {/* <HeroClient data={{ hero, isModalOpen, isSafari }} func={{ handleOpenModal }} /> */}
                <Head>
                    <link rel="preload" href={hero.image} as="image" type="image/webp" />
                    <script type="application/ld+json">{JSON.stringify(jsonLdHero.conversation)}</script>
                </Head>
                <HeroLoop data={{ menus, type: "clients" }} />
                <PractitionerCarousel data={{ practitioners }} />
                <Approaches data={healingApproaches} />
                {/* <Hero data={{ hero, type: "clients", isModalOpen, isSafari }} func={{ handleOpenModal }} /> */}
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

// // For SSG, ensure the page is pre-rendered
// export async function getStaticProps() {
//     return {
//         props: {},
//     };
// }
