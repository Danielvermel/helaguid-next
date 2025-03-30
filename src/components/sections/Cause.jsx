import PageTitle from "../ui/PageTitle";
import Head from "next/head";
import { jsonLdCauses } from "../../constants/jsonLdData.jsx";
import { useEffect } from "react";

const Cause = ({ data }) => {
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
        console.log("targetId: ", targetId);
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

    return (
        <section
            className={` ${
                data.type.includes("partner") ? "bg-white" : "bg-b3"
            } min-h-screen flex flex-col justify-center lg:p-8 max-lg:py-8 max-sm:py-20`}
        >
            <div id="Cause" className="container">
                <div className="flex flex-col">
                    <PageTitle containerClass="text-center mx-auto">{data.causes.title}</PageTitle>
                    <p className="text-center sm:mx-10 max-lg:mx-28 max-md:mx-12 max-sm:mx-2 font-light lg:mt-6 max-lg:mt-6  max-md:mt-4 lg:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base leading-8">
                        {data.causes.description}
                    </p>

                    <div className="sm:mt-8 max-sm:mt-4 flex-row flex flex-wrap justify-center max-md:mx-0 md:gap-4 xl:mx-8 lg:mx-12 max-lg:mx-4 max-sm:mx-2">
                        {data.causes.points.map(({ id, icon, text, alt, description, jsonLdProperty }) => (
                            <div
                                key={`cause_` + id}
                                className="items-center flex-1 sm:min-w-[calc(50%-1rem)] sm:px-2 max-sm:basis-full flex flex-row lg:gap-3 max-lg:gap-x-2 sm:my-2 max-sm:my-5"
                            >
                                <Head>
                                    <script type="application/ld+json">
                                        {JSON.stringify(jsonLdCauses[jsonLdProperty])}
                                    </script>
                                </Head>
                                <img
                                    src={`/images/causes/${icon}`}
                                    alt={alt}
                                    loading="lazy"
                                    className="sm:w-12 sm:h-12 max-sm:w-7 max-sm:h-7"
                                />
                                <div className="sm:font-semibold max-sm:font-medium tracking-2">
                                    <strong className="font-semibold md:text-xl max-md:text-lg text-p1">{text}</strong>
                                    {description && (
                                        <span className="block font-light text-p1 md:text-lg max-md:text-base">
                                            {description}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center mx-20 max-lg:mx-28 max-md:mx-12 max-sm:mx-4 font-light lg:mt-12 max-lg:mt-8 lg:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base leading-8">
                        {data.causes.subDescription}
                    </p>

                    <div className="flex flex-wrap justify-center mt-10 gap-4 lg:mt-16">
                        <a
                            href={`#${data.causes.jumpToNext}`}
                            className="bg-p1 max-xs:w-full tracking-2 justify-center h-12 text-white lg:text-lg max-sm:text-base max-sm:min-h-[55px] rounded-3xl relative flex items-center sm:min-h-[42px] px-4"
                            onClick={(e) => scrollToSection(e, data.causes.jumpToNext)}
                            aria-label={data.causes.buttonArialLabelText}
                        >
                            {data.causes.buttonText}
                        </a>

                        <a
                            href={`#${data.causes.jumpToNext}`}
                            className=""
                            onClick={(e) => scrollToSection(e, data.causes.jumpToNext)}
                        >
                            <img
                                src="/images/causes/arrow-down.svg"
                                loading="lazy"
                                alt="arrow down"
                                className="cursor-pointer lg:ml-4"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Cause;
