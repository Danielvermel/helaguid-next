"use client";

import React from "react";
// 1. Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ApproachCard from "../ui/ApproachedCard";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import PageTitle from "../ui/PageTitle";

const Approaches = ({ data }) => {
    return (
        <section className="py-16 bg-b3">
            <div className="container mx-auto">
                {/* Swiper Container */}
                <div className="container mx-auto">
                    <PageTitle containerClass="text-center mb-10 text-xl">Our Treatment Approaches</PageTitle>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        // Connect navigation to our custom buttons
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{
                            // when window width is >= 550px
                            550: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // when window width is >= 850px
                            850: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            // when window width is >= 1200px
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        className="approaches-carousel" // Keep this class for potential custom styling
                    >
                        {data.map((approach) => (
                            <SwiperSlide key={approach.id}>
                                <ApproachCard approach={approach} key={"appr-" + approach.id} />
                            </SwiperSlide>
                        ))}

                        {/* Custom Navigation Arrows (hidden on mobile) */}
                        <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-[-25px] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-teal-800 z-10 transition-all duration-300 hover:bg-teal-800 hover:text-white cursor-pointer max-md:hidden">
                            <ChevronRightIcon className="w-6 h-6" />
                        </div>
                        <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-[-25px] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-teal-800 z-10 transition-all duration-300 hover:bg-teal-800 hover:text-white cursor-pointer max-md:hidden">
                            <ChevronRightIcon className="w-6 h-6" />
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Approaches;
