import { useState, useEffect } from "react";
import clsx from "clsx";
import Button from "../ui/Button.jsx";
import PageTitle from "../ui/PageTitle.jsx";
import Head from "next/head";
import { jsonLdHowItWorks } from "../../constants/jsonLdData.jsx";

const HowItWorks = ({ data, func }) => {
    const [openBenefit, setOpenBenefit] = useState(new Set([]));

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

    // Function to handle smooth scrolling when clicking on anchors
    const scrollToSection = (e, targetId) => {
        e.preventDefault();

        // Update URL hash for bookmarking and history
        window.history.pushState(null, null, `#${targetId}`);

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        // Ensure the DOM is loaded and the component is mounted
        const lazyVideos = document.querySelectorAll("video[data-src]");
        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    video.src = video.dataset.src; // Replace 'data-src' with 'src'
                    video.load(); // Load video
                    observer.unobserve(video);
                }
            });
        });

        lazyVideos.forEach((video) => {
            videoObserver.observe(video);
        });
    });

    const openPDF = () => {
        // Adjust the path to your PDF file
        const pdfPath = "/images/how-it-works/preview.pdf";
        window.open(pdfPath, "_blank");
    };

    return (
        <section className="bg-b10 min-h-screen flex flex-col justify-center py-16 max-sm:py-20" id="how-it-works">
            <div id="How-It-Works" className="container md:mb-24 max-md:mb-4">
                <div className="flex flex-wrap mb-5">
                    <PageTitle
                        containerClass={data.howItWorks.pageTitleColor + " lg:w-1/2 max-lg:w-full  max-lg:text-center"}
                    >
                        {data.howItWorks.pageTitle}
                    </PageTitle>

                    <div className="lg:w-1/2 max-lg:w-full lg:text-xl max-lg:text-base flex flex-row lg:justify-end mt-2 max-lg:mb-6">
                        <div className="lg:text-right max-lg:text-left">
                            <h3 className="font-semibold tracking-2 md:text-xl max-lg:text-lg">
                                {data.howItWorks.subTitle}
                            </h3>
                            <p className="block max-md:text-base md:text-lg tracking-wide">
                                {data.howItWorks.mainDescription}
                            </p>

                            <Button
                                containerClassName={clsx(
                                    "lg:w-72 max-lg:w-64 mt-6 lg:ml-auto h-12 max-lg:mx-auto",
                                    data.howItWorks.buttonColor
                                )}
                                arialLabelText={data.howItWorks.buttonArialLabel}
                                textClassName="tracking-wide font-semibold lg:text-lg max-lg:text-normal"
                                onClick={() => {
                                    func.handleOpenModal();
                                }}
                            >
                                {data.howItWorks.buttonTitle}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap items-start text-center lg:gap-8 max-lg:gap-4 lg:-mt-12 justify-center lg:mt-4">
                    {data.howItWorks.steps.map(
                        ({
                            id,
                            icon,
                            iconColor,
                            textColor,
                            alt,
                            altTitle,
                            bgColor,
                            title,
                            caption,
                            reasons,
                            jsonLdProperty,
                        }) => (
                            <div className="flex-1 min-w-60 max-w-72" key={`steps_` + id}>
                                <div className={clsx("rounded-full inline-flex")}>
                                    <Head>
                                        <script type="application/ld+json">
                                            {JSON.stringify(jsonLdHowItWorks[jsonLdProperty])}
                                        </script>
                                    </Head>
                                    <img
                                        src={"/images/how-it-works/" + icon}
                                        alt={alt}
                                        title={altTitle}
                                        loading="lazy"
                                        className="h-28 mx-auto mt-8 mb-6"
                                    />
                                </div>
                                <div className="relative">
                                    <div className={clsx("sm:py-4 max-sm:py-2", "arrow-step", iconColor)}>
                                        <strong className="sm:text-xl max-sm:text-lg font-semibold">{title}</strong>
                                        <p className="max-lg:text-base lg:text-base text-gray-800 mt-1 italic tracking-2">
                                            {caption}
                                        </p>
                                    </div>
                                </div>

                                <ul
                                    className={clsx(
                                        "text-gray-600 mt-4 text-left rounded-2xl p-4 sm:pl-8 max-sm:pl-7 lg:pt-5 max-lg:pt-4 md:h-64 max-md:max-h-56 list-disc opacity-95",
                                        bgColor
                                    )}
                                >
                                    {reasons.map(({ id: reasonId, description, point }) => (
                                        <li
                                            key={description + reasonId}
                                            className="text-base md:mb-3 max-md:mb-1 tracking-2 text-gray-800"
                                        >
                                            <span className="font-semibold">{point} </span>
                                            {description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                    {/* <div className="flex-1 flex flex-wrap max-w-72 mt-auto justify-center max-lg:hidden">
                        <div>
                            {!videoError && !data.isSafari ? (
                                <video
                                    id="banner-video"
                                    className="size-max max-md:h-auto w-full mb-8"
                                    aria-label={data.howItWorks.sideAlt}
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                    preload="none"
                                    loading="lazy"
                                    onError={() => setVideoError(true)} // Handle video load failure
                                    data-src={data.howItWorks.sideVideo}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img
                                    src={data.howItWorks.sideImage}
                                    alt={data.howItWorks.sideAlt}
                                    title={data.howItWorks.sideAltTitle}
                                    loading="lazy"
                                    className=" mx-auto mt-8 mb-6"
                                />
                            )}
                            {data.type.includes("client") && (
                                <Button
                                    containerClassName="border-2 border-s1 w-full rounded-2xl mt-10 text-xl py-2"
                                    arialLabelText={data?.howItWorks?.buttonArialLabel}
                                    onClick={openPDF}
                                >
                                    See a Profile Preview
                                </Button>
                            )}
                        </div>
                    </div> */}

                    {/* Data Offers - Trust */}
                    <div>
                        <section className="flex-1 mb-8">
                            <h3 className="text-p1 text-2xl max-lg:mt-2 font-semibold mb-4">
                                {data.offers.list[2].type}
                            </h3>
                            <article className={clsx("flex flex-wrap flex-row items-stretch")}>
                                {data.offers.list[2].points.map(
                                    ({
                                        id: cardId,
                                        image,
                                        alt,
                                        altTitle,
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
                                                        "flex rounded-xl p-3 md:min-h-20 hover:shadow-2xl",
                                                        bgTitleColor
                                                    )}
                                                >
                                                    {image && (
                                                        <div className="flex items-center w-1/5">
                                                            <img
                                                                src={image}
                                                                alt={alt}
                                                                title={altTitle}
                                                                loading="lazy"
                                                                className="h-8 mx-auto"
                                                            />
                                                        </div>
                                                    )}

                                                    <b className="flex-1 sm:font-semibold max-sm:font-semibold sm:text-lg max-sm:text-lg text-center m-auto">
                                                        {title}
                                                    </b>
                                                    <div className="flex items-center w-1/12">
                                                        <img
                                                            src={"/images/offers/pointer.png"}
                                                            alt="chevron"
                                                            title="Click to expand or collapse the section"
                                                            loading="lazy"
                                                            className={clsx("h-3 mx-auto mt-auto", {
                                                                "rotate-90": isSetOpenBenefit(title),
                                                            })}
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className={clsx(
                                                        "col-span-2 pt-4 pb-4 pl-3 pr-2 rounded-xl",
                                                        bgColor,
                                                        data.offers.list[2].containerClass,
                                                        {
                                                            "h-auto max-h-[1000px] block transition-all duration-300":
                                                                isSetOpenBenefit(title),
                                                            "h-0 max-h-0 hidden overflow-hidden transition-all duration-0":
                                                                !isSetOpenBenefit(title),
                                                        }
                                                    )}
                                                >
                                                    {data.type.includes("client") && (
                                                        <p className="text-p1 sm:text-normal max-sm:text-sm">
                                                            {description}
                                                        </p>
                                                    )}
                                                    <ul className="list-disc max-lg:pl-8 max-sm:pl-4 lg:pl-4 mt-2 sm:text-normal max-sm:text-sm">
                                                        {!!benefits ? (
                                                            benefits.map(({ id: beneId, boldText, description }) => (
                                                                <li key={beneId} className="mt-2 text-base tracking-2">
                                                                    {boldText && (
                                                                        <span className="font-semibold">
                                                                            {boldText}{" "}
                                                                        </span>
                                                                    )}
                                                                    {description}
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <div>
                                                                <p className="lg:min-h-32 text-base font-normal">
                                                                    {categories.description}
                                                                </p>
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
                                            </div>
                                        </div>
                                    )
                                )}
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
