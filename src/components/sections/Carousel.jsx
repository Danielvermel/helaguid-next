// components/PractitionerCarousel.jsx
"use client"; // This directive is needed if using Next.js App Router

import React from "react";
import PageTitle from "../ui/PageTitle.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// Import required modules
import { Navigation, Pagination } from "swiper/modules";

import PractitionerCard from "../ui/PractitionerCard.jsx";

const ChevronIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

const PractitionerCarousel = ({ data }) => {
    return (
        <section className="py-16" id="practioners-cards">
            <div className="container mx-auto">
                <PageTitle containerClass="text-center mb-10 text-xl">Meet Our Specialists</PageTitle>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next-carousel",
                        prevEl: ".swiper-button-prev-carousel",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="practitioner-carousel"
                >
                    {data.practitioners.map((practitioner) => (
                        <SwiperSlide key={practitioner.id}>
                            <PractitionerCard practitioner={practitioner} />
                        </SwiperSlide>
                    ))}

                    {/* Add the custom navigation arrows inside the Swiper component */}
                    <div className="swiper-button-prev-carousel absolute top-1/2 -translate-y-1/2 left-[-25px] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-teal-800 z-10 transition-all duration-300 hover:bg-teal-800 hover:text-white cursor-pointer max-md:hidden">
                        <ChevronIcon />
                    </div>
                    <div className="swiper-button-next-carousel absolute top-1/2 -translate-y-1/2 right-[-25px] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-teal-800 z-10 transition-all duration-300 hover:bg-teal-800 hover:text-white cursor-pointer max-md:hidden">
                        <ChevronIcon />
                    </div>
                </Swiper>
            </div>

            {data.practitioners.length > 0 && (
                <div className="flex justify-center">
                    <a
                        className="block mx-auto mt-6 rounded-3xl bg-s1 px-4 py-2 text-lg font-semibold tracking-wide text-white"
                        href="https://book.healguid.com/"
                        role="button"
                    >
                        Browse Our Experts
                    </a>
                </div>
            )}
        </section>
    );
};

export default PractitionerCarousel;
