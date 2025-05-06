import { useState, useEffect } from "react";
import clsx from "clsx";
import Button from "../ui/Button.jsx";
import PageTitle from "../ui/PageTitle.jsx";
import Head from "next/head";
import { jsonLdHowItWorks } from "../../constants/jsonLdData.jsx";

const HowItWorks = ({ data, func }) => {
    const [videoError, setVideoError] = useState(false);

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
                <div className="flex flex-row flex-wrap items-start text-center lg:gap-8 max-lg:gap-4 lg:-mt-12 justify-center">
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
                                        <h4 className="sm:text-xl max-sm:text-lg font-semibold">{title}</h4>
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
                                    {reasons.map(({ id: reasonId, description }) => (
                                        <li
                                            key={description + reasonId}
                                            className="text-base md:mb-3 max-md:mb-1 tracking-2 text-gray-800"
                                        >
                                            <span className="font-semibold"> </span>
                                            {description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                    <div className="flex-1 flex flex-wrap max-w-72 mt-auto justify-center max-lg:hidden">
                        <div>
                            {!videoError && !data.isSafari ? (
                                <video
                                    id="banner-video"
                                    className="size-max max-md:h-auto w-full"
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
                            {data.type.includes("client") ? (
                                <Button
                                    containerClassName="border-2 border-s1 w-full rounded-2xl mt-10 text-xl py-2"
                                    arialLabelText={data?.howItWorks?.buttonArialLabel}
                                    onClick={openPDF}
                                >
                                    See a Profile Preview
                                </Button>
                            ) : (
                                <a
                                    href={`#${data.howItWorks.jumpToNext}`}
                                    onClick={(e) => scrollToSection(e, data.howItWorks.jumpToNext)}
                                >
                                    <Button
                                        containerClassName="border-2 border-s1 w-full rounded-2xl mt-10 text-xl py-2"
                                        aria-label={data.howItWorks.buttonArialLabelText}
                                    >
                                        See Verification Process
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
