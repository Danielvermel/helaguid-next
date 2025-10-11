//
// components/PractitionerCarousel.jsx
"use client";

import React from "react";
import PageTitle from "../ui/PageTitle.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Make sure you import Swiper CSS somewhere in your app entry:
// import "swiper/css";
// import "swiper/css/pagination";

import PractitionerCard from "../ui/PractitionerCard.jsx";

const ChevronIcon = ({ dir = "right" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.5"
        stroke="currentColor"
        className={`w-5 h-5 md:w-6 md:h-6 ${dir === "left" ? "rotate-180" : ""}`}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

const PractitionerCarousel = ({ data }) => {
    return (
        <section className="py-16" id="practioners-cards">
            <div className="container mx-auto">
                <PageTitle containerClass="text-center mb-10 text-xl">Meet Our Specialists</PageTitle>

                {/* Relative wrapper anchors absolute arrows */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = ".swiper-button-prev-carousel";
                            swiper.params.navigation.nextEl = ".swiper-button-next-carousel";
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 30 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                        className="practitioner-carousel"
                    >
                        {data.practitioners.map((practitioner) => (
                            <SwiperSlide key={practitioner.id}>
                                <PractitionerCard practitioner={practitioner} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Arrows (visible on all screens; mobile-friendly positioning) */}
                    {/* Arrows – compact & semi-transparent on mobile */}
                    <button
                        type="button"
                        aria-label="Previous"
                        className="
    swiper-button-prev-carousel
    absolute top-1/2 -translate-y-1/2
    left-1.5 md:left-[-18px]
    flex items-center justify-center
    rounded-full border border-teal-700
    bg-teal-800 text-teal-700 shadow-sm
    transition-all duration-300
    z-20

    /* mobile styles */
    w-7 h-7 opacity-70 hover:opacity-100

    /* desktop override */
    md:w-9 md:h-9 md:opacity-100 md:hover:bg-teal-600  md:hover:text-white
  "
                    >
                        <ChevronIcon dir="left" />
                    </button>

                    <button
                        type="button"
                        aria-label="Next"
                        className="
    swiper-button-next-carousel
    absolute top-1/2 -translate-y-1/2
    right-1.5 md:right-[-18px]
    flex items-center justify-center
    rounded-full border border-teal-700
     bg-teal-800 text-teal-700 shadow-sm
    transition-all duration-300
    z-20

    /* mobile styles */
    w-7 h-7 opacity-70 hover:opacity-1000

    /* desktop override */
    md:w-9 md:h-9 md:opacity-100 md:hover:bg-teal-600 md:hover:text-white
  "
                    >
                        <ChevronIcon dir="right" />
                    </button>
                </div>

                {data.practitioners.length > 0 && (
                    <div className="flex justify-center">
                        <a
                            className="block mx-auto mt-6 rounded-3xl bg-s1 px-4 py-2 text-lg font-semibold tracking-wide text-white"
                            href="https://healguid.com/book"
                            role="button"
                        >
                            Browse Our Experts
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PractitionerCarousel;
