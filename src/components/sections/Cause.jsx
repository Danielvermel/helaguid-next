import PageTitle from "../ui/PageTitle";
import Head from "next/head";
import { jsonLdCauses } from "../../constants/jsonLdData.jsx";
import { useEffect } from "react";

const Cause = ({ data }) => {
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            if (window.location.hash) {
                e.preventDefault();
                const targetId = window.location.hash.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
            }
        };

        if (window.location.hash) {
            setTimeout(() => {
                const targetId = window.location.hash.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
            }, 100);
        }

        window.addEventListener("hashchange", handleSmoothScroll);
        return () => window.removeEventListener("hashchange", handleSmoothScroll);
    }, []);

    const scrollToSection = (e, targetId) => {
        e.preventDefault();
        window.history.pushState(null, null, `#${targetId}`);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
    };

    return (
        <section
            className={`${
                data.type.includes("partner") ? "bg-white" : "bg-b3"
            } min-h-screen flex flex-col justify-center lg:p-8 max-lg:py-8 max-sm:py-20`}
        >
            <div id="Cause" className="container">
                <div className="flex flex-col">
                    <PageTitle containerClass="text-center mx-auto">{data.causes.title}</PageTitle>

                    <div className="text-center sm:mx-10 max-lg:mx-28 max-md:mx-12 max-sm:mx-2 font-light lg:mt-6 max-lg:mt-6 max-md:mt-4 lg:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base leading-8">
                        <span className="inline">{data.causes?.secondDescription}</span>
                        <h3 className="inline">{data.causes.description}</h3>
                        <span className="inline">{data.causes?.thirdDescription}</span>
                    </div>

                    {/* Cards grid */}
                    <div className="sm:mt-8 max-sm:mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:mx-8 lg:mx-12 max-lg:mx-4 max-sm:mx-2">
                        {data.causes.points.map(({ id, icon, text, alt, altTitle, description }) => (
                            <article
                                key={`cause_${id}`}
                                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6 flex flex-col h-full"
                                aria-labelledby={`cause_title_${id}`}
                            >
                                <div className="flex items-start gap-3">
                                    <img
                                        src={`/images/causes/${icon}`}
                                        alt={alt}
                                        title={altTitle}
                                        loading="lazy"
                                        className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
                                    />
                                    <h4
                                        id={`cause_title_${id}`}
                                        className="font-semibold md:text-xl max-md:text-lg text-p1 leading-snug"
                                    >
                                        {text}
                                    </h4>
                                </div>

                                {description && (
                                    <p className="mt-3 md:text-lg max-md:text-base font-light text-p1 leading-relaxed">
                                        {description}
                                    </p>
                                )}

                                {/* subtle divider accent */}
                                <div className="mt-5 border-t border-gray-100" />
                            </article>
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
                            onClick={(e) => scrollToSection(e, data.causes.jumpToNext)}
                            className="sr-only"
                        >
                            {data.causes.buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cause;
