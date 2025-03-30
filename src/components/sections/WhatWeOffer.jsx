import { useState, useEffect } from "react";
import PageTitle from "../ui/PageTitle.jsx";
import Button from "../ui/Button.jsx";
import clsx from "clsx";

const WhatWeOffer = ({ data, func }) => {
    const [openBenefit, setOpenBenefit] = useState(
        new Set([
            "Access to New Patients",
            "Manage Patients Easily",
            "Professional Profile & Accreditation",
            "Patient Progress Tracking",
            "Personalized Care",
            "Verified Expertise",
            "Care On Your Terms",
            "Supported Journey",
        ])
    );

    const handleOpenBenefit = (benefit) => {
        setOpenBenefit((prev) => {
            const newSet = new Set(prev); // Clone the previous set
            isSetOpenBenefit(benefit) ? newSet.delete(benefit) : newSet.add(benefit);

            return newSet; // Return the updated set
        });
    };

    const isSetOpenBenefit = (benefit) => {
        return openBenefit.has(benefit); // Check if the benefit is in the set
    };

    useEffect(() => {
        if (data.isModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [data.isModalOpen]);

    // Handle smooth scrolling when hash changes
    useEffect(() => {
        // Function to handle smooth scrolling
        const handleSmoothScroll = (e) => {
            // Check if the hash exists
            if (window.location.hash) {
                e.preventDefault();

                const targetId = window.location.hash.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Add offset to account for fixed header
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                    });
                }
            }
        };

        // Handle initial load with hash
        if (window.location.hash) {
            setTimeout(() => {
                const targetId = window.location.hash.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                    });
                }
            }, 100);
        }

        // Listen for hash changes
        window.addEventListener("hashchange", handleSmoothScroll);
        return () => window.removeEventListener("hashchange", handleSmoothScroll);
    }, []);

    return (
        <section
            className="min-h-screen flex flex-col justify-center lg:p-8 max-lg:py-8 max-sm:py-20 bg-b2"
            id="our-offer"
        >
            <div id="Our-Offer" className="container">
                <div className="flex flex-wrap mb-5">
                    <PageTitle containerClass="lg:w-1/2 max-lg:w-full max-lg:text-center">
                        {data.offers.title}
                    </PageTitle>
                    <div className="lg:w-1/2 max-lg:w-full lg:text-xl max-lg:text-base flex flex-row lg:justify-end mt-2">
                        <div className="lg:text-right max-lg:text-left">
                            <span className="font-semibold tracking-2 md:text-xl max-lg:text-lg">
                                {data.offers.subTitle}
                            </span>
                            <span className="block max-md:text-base md:text-lg tracking-2">
                                {data.offers.description}
                            </span>
                            <Button
                                containerClassName={clsx(
                                    "lg:w-72 max-lg:w-64 mt-6 lg:ml-auto h-12 max-lg:mx-auto",
                                    data.offers.buttonColor
                                )}
                                textClassName="tracking-wide font-semibold lg:text-lg max-lg:text-normal"
                                arialLabelText={data.offers.buttonArialLabel}
                                onClick={() => {
                                    func.handleOpenModal();
                                }}
                            >
                                {data.offers.buttonTitle}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-6">
                    {data.offers.list.map(({ id, type, points, containerClass }, index) => (
                        <section key={id + index} id={id} className="flex-1 mb-8 ">
                            <h3 className="text-p1 text-2xl max-lg:mt-2 font-semibold mb-4">{type}</h3>
                            <article className={clsx("flex flex-wrap flex-row items-stretch")}>
                                {points.map(
                                    ({
                                        id: cardId,
                                        image,
                                        alt,
                                        bgColor,
                                        bgTitleColor,
                                        title,
                                        description,
                                        benefits = false,
                                        categories = false,
                                    }) => (
                                        <div
                                            className={clsx(
                                                "rounded-xl cursor-pointer mb-6",
                                                "lg:w-3/12 max-lg:w-6/12 max-md:w-full"
                                            )}
                                            key={cardId}
                                            onClick={() => handleOpenBenefit(title)}
                                        >
                                            <div
                                                className={clsx(
                                                    "flex flex-col mr-4 rounded-xl h-full",
                                                    isSetOpenBenefit(title) && bgColor
                                                )}
                                            >
                                                <div
                                                    className={clsx(
                                                        "flex rounded-xl p-3 md:min-h-20 hover:shadow-xl",
                                                        bgTitleColor
                                                    )}
                                                >
                                                    {image && (
                                                        <div className="flex items-center w-1/5">
                                                            <img
                                                                src={image}
                                                                alt={alt}
                                                                loading="lazy"
                                                                className="h-8 mx-auto"
                                                            />
                                                        </div>
                                                    )}

                                                    <span className="flex-1 sm:font-semibold max-sm:font-semibold sm:text-lg max-sm:text-lg text-center m-auto">
                                                        {title}
                                                    </span>
                                                    <div className="flex items-center w-1/12">
                                                        {!!index && (
                                                            <img
                                                                src={"/images/offers/pointer.png"}
                                                                alt="chevron"
                                                                loading="lazy"
                                                                className={clsx("h-3 mx-auto mt-auto", {
                                                                    "rotate-90": isSetOpenBenefit(title),
                                                                })}
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                {isSetOpenBenefit(title) && (
                                                    <div
                                                        className={clsx(
                                                            "col-span-2 pt-4 pb-4 pl-3 pr-2 rounded-xl h-full",
                                                            bgColor,
                                                            containerClass
                                                        )}
                                                    >
                                                        {data.type.includes("client") && (
                                                            <p className="text-p1 sm:text-normal max-sm:text-sm">
                                                                {description}
                                                            </p>
                                                        )}
                                                        <ul className="list-disc max-lg:pl-8 max-sm:pl-4 lg:pl-4 mt-2 sm:text-normal max-sm:text-sm">
                                                            {!!benefits ? (
                                                                benefits.map(
                                                                    ({ id: beneId, boldText, description }) => (
                                                                        <li
                                                                            key={beneId}
                                                                            className="mt-2 text-base tracking-2"
                                                                        >
                                                                            {boldText && (
                                                                                <span className="font-semibold">
                                                                                    {boldText}{" "}
                                                                                </span>
                                                                            )}
                                                                            {description}
                                                                        </li>
                                                                    )
                                                                )
                                                            ) : (
                                                                <div>
                                                                    <div className="lg:min-h-32 text-base">
                                                                        {categories.description}
                                                                    </div>
                                                                    <div className="mt-4">
                                                                        {categories.offers.map(
                                                                            ({ id: categoriesId, title, points }) => (
                                                                                <div key={categoriesId}>
                                                                                    <span className="font-semibold text-lg">
                                                                                        {title}
                                                                                    </span>
                                                                                    <ul className="list-disc pl-5 mb-4 text-base">
                                                                                        {points.map(({ id, text }) => (
                                                                                            <li key={id + "_" + text}>
                                                                                                {text}
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </article>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
