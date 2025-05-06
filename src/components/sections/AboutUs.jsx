import clsx from "clsx";
import { useState, useEffect } from "react";
import PageTitle from "../ui/PageTitle";
import Head from "next/head";
import { jsonLdAbout } from "../../constants/jsonLdData";
import { aboutUs } from "../../constants/general.jsx";
import Button from "../ui/Button";

const AboutUs = ({ data }) => {
    const [videoErrors, setVideoErrors] = useState({}); // Track errors for each video

    const handleVideoError = (id) => {
        setVideoErrors((prevErrors) => ({ ...prevErrors, [id]: true }));
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

    return (
        <section id="about" className="bg-b10">
            <article className="flex flex-col ">
                <div className="container lg:py-16 max-lg:py-12">
                    <div className="max-lg:text-center">
                        <PageTitle>{aboutUs.title}</PageTitle>
                    </div>

                    <div className="lg:ml-auto flex mb-3 lg:-mt-8 container">
                        <h3 className="lg:font-semibold max-lg:font-medium text-xl max-lg:mt-2 lg:ml-auto max-lg:mx-auto max-md:text-center">
                            {aboutUs.subTitle}
                        </h3>
                    </div>

                    <h3 className="text-center text-p1 lg:text-3xl max-lg:text-2xl lg:mt-24 max-lg:mt-6 max-sm:mt-20 lg:mb-10 max-lg:mb-4 font-semibold">
                        {aboutUs.mainMessage}
                    </h3>
                    <p className="text-center text-xl max-md:text-lg lg:leading-10 max-lg:mt-8 lg:mx-32 max-lg:mx-20 max-md:mx-12 max-sm:mx-6">
                        {aboutUs.description}
                    </p>
                </div>
                <div className="flex flex-wrap mt-10">
                    {aboutUs.points.map(
                        ({
                            id,
                            title,
                            description,
                            img,
                            video,
                            alt,
                            bgColor,
                            jsonLdProperty,
                            points = [],
                            joinButton = {},
                        }) => (
                            <div key={id} className={clsx("w-full ", bgColor)}>
                                <div
                                    className={clsx(
                                        "flex flex-col lg:flex-row container py-12",
                                        !!(+id % 2) && "lg:flex-row-reverse"
                                    )}
                                >
                                    {/* Image */}
                                    <div className="relative">
                                        <div
                                            className={clsx(
                                                "h-full w-full lg:rounded-none",
                                                !!(+id % 2) ? "lg:rounded-l-none" : "lg:rounded-r-none",
                                                { last: id == 2 }
                                            )}
                                        >
                                            {videoErrors[id] || data.isSafari ? (
                                                <img
                                                    src={img}
                                                    alt={title}
                                                    loading="lazy"
                                                    className="max-lg:mx-auto max-lg:h-80 max-md:h-64 max-sm:h-44"
                                                />
                                            ) : (
                                                <>
                                                    <Head>
                                                        <script type="application/ld+json">
                                                            {JSON.stringify(jsonLdAbout[jsonLdProperty])}
                                                        </script>
                                                    </Head>
                                                    <video
                                                        id={`banner-video-${id}`}
                                                        autoPlay
                                                        muted
                                                        data-src={video}
                                                        aria-label={alt}
                                                        playsInline
                                                        loop
                                                        className="max-lg:mx-auto max-lg:h-80 max-md:h-48 lg:h-72"
                                                        preload="none"
                                                        loading="lazy"
                                                        onError={() => handleVideoError(id)} // Handle video load failure
                                                    >
                                                        {/* <source data-src={video} type="video/webm" /> */}
                                                    </video>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full lg:w-11/12 p-6 lg:p-10 text-center lg:text-left tracking-2">
                                        <h3 className="text-p1 md:text-3xl max-md:text-2xl font-bold mb-4">{title}</h3>
                                        <p className="md:text-lg max-md:text-base text-gray-700 mb-2">{description}</p>
                                        {title.includes("Practitioners") && data.type.includes("clients") && (
                                            <a href={joinButton.url}>
                                                <Button
                                                    containerClassName={joinButton.containerClass}
                                                    textClassName={joinButton.textClass}
                                                    arialLabelText={joinButton.arial}
                                                >
                                                    {joinButton.text}
                                                </Button>
                                            </a>
                                        )}

                                        {title.includes("Patients") && data.type.includes("partners") && (
                                            <a href={joinButton.url}>
                                                <Button
                                                    containerClassName={joinButton.containerClass}
                                                    textClassName={joinButton.textClass}
                                                    arialLabelText={joinButton.arial}
                                                >
                                                    {joinButton.text}
                                                </Button>
                                            </a>
                                        )}
                                        {points.length > 0 && (
                                            <ul className="list-disc pl-5 space-y-2 max-lg:text-left md:text-lg max-md:text-base">
                                                {points.map(({ id, text }) => (
                                                    <li key={id}>{text}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    )}

                    {/* end Info */}
                    <div className="w-full bg-b6">
                        <div className="container pt-16 text-center">
                            <h3 className="text-p1 lg:text-3xl max-lg:text-2xl lg:mb-10 max-lg:mb-4 font-semibold">
                                {aboutUs.endInfo.title}
                            </h3>
                            <p className="text-p1 text-xl mb-4 font-medium italic">{aboutUs.endInfo.subTitle}</p>
                            <p className="lg:text-xl lg:leading-10 mb-4 lg:mx-48 md:mx-24 max-md:mx-4 whitespace-pre-line italic">
                                {aboutUs.endInfo.description}
                            </p>
                            <h4 className="text-p1 lg:text-3xl max-lg:text-2xl mb-6 font-semibold mt-6">
                                {aboutUs.endInfo.text}
                            </h4>
                        </div>
                        <div className="flex flex-wrap justify-between container-no-padding -mt-24 max-lg:hidden">
                            {videoErrors[aboutUs.endInfo.altStart] || data.isSafari ? (
                                <img
                                    src={aboutUs.endInfo.imageStart}
                                    alt={aboutUs.endInfo.altStart}
                                    className="h-56"
                                    loading="lazy"
                                />
                            ) : (
                                <>
                                    <Head>
                                        <script type="application/ld+json">
                                            {JSON.stringify(jsonLdAbout.celebrate)}
                                        </script>
                                    </Head>
                                    <video
                                        id="banner-video"
                                        className="h-56"
                                        autoPlay
                                        muted
                                        playsInline
                                        loop
                                        preload="none"
                                        loading="lazy"
                                        data-src={aboutUs.endInfo.videoStart}
                                        aria-label={aboutUs.endInfo.altStart}
                                        onError={() => handleVideoError(aboutUs.endInfo.altStart)} // Handle video load failure
                                    >
                                        {/* <source
                                                data-src={aboutUs.endInfo.videoStart}
                                                aria-label={aboutUs.endInfo.altStart}
                                                type="video/webm"
                                            /> */}
                                        Your browser does not support the video tag.
                                    </video>
                                </>
                            )}

                            {videoErrors[aboutUs.endInfo.altEnd] || data.isSafari ? (
                                <img
                                    src={aboutUs.endInfo.imageEnd}
                                    alt={aboutUs.endInfo.altEnd}
                                    className="h-56"
                                    loading="lazy"
                                />
                            ) : (
                                <>
                                    <Head>
                                        <script type="application/ld+json">{JSON.stringify(jsonLdAbout.cog)}</script>
                                    </Head>
                                    <video
                                        id="banner-video"
                                        className="h-56"
                                        autoPlay
                                        muted
                                        playsInline
                                        loop
                                        preload="none"
                                        loading="lazy"
                                        data-src={aboutUs.endInfo.videoEnd}
                                        aria-label={aboutUs.endInfo.altEnd}
                                        onError={() => handleVideoError(aboutUs.endInfo.altEnd)} // Handle video load failure
                                    >
                                        {/* <source
                                                data-src={aboutUs.endInfo.videoEnd}
                                                aria-label={aboutUs.endInfo.altEnd}
                                                type="video/webm"
                                            /> */}
                                        Your browser does not support the video tag.
                                    </video>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default AboutUs;
