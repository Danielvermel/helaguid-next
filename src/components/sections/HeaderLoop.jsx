import { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import clsx from "clsx";
import Head from "next/head";
import { jsonLdHeader } from "../../constants/jsonLdData.jsx";

const HeaderLoop = ({ data }) => {
    const [progress, setProgress] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setScrolling] = useState(false);

    // Update the Progress Bar based on scroll position
    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            // Clear the timeout if it's already set
            clearTimeout(timeoutId);

            // Set timeout to detect when user stops scrolling

            setHasScrolled(window.scrollY > 32);

            const section = document.querySelector("#footer");
            const scrolled = section ? (window.scrollY / (section?.offsetTop - 400)) * 100 : 0;

            setProgress(Math.min(scrolled, 100));
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
        setIsOpen(false);

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

    const NavLink = ({ title, url, titleAttribute }) => {
        // For external links or links to other pages
        if (url && !url.startsWith("#")) {
            return (
                <a
                    href={url}
                    title={titleAttribute}
                    className={clsx(
                        "font-semibold text-lg tracking-wide transition-colors duration-500 cursor-pointer hover:text-s1 max-lg:my-4 max-lg:h5 max-lg:text-p1",
                        hasScrolled ? "text-p1" : "lg:text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                >
                    {title}
                </a>
            );
        }

        // For hash/anchor links within the same page
        const targetId = url ? url.replace("#", "") : title.toLowerCase().replace(/\s+/g, "-");

        return (
            <a
                href={`#${targetId}`}
                title={titleAttribute}
                className={clsx(
                    "font-semibold text-lg tracking-wide transition-colors duration-500 cursor-pointer hover:text-s1 max-lg:my-4 max-lg:h5  max-lg:text-p1",
                    hasScrolled ? "text-p1" : "lg:text-white"
                )}
                onClick={(e) => scrollToSection(e, targetId)}
            >
                {title}
            </a>
        );
    };

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-20 w-full transition-all duration-300",
                    hasScrolled ? " bg-white shadow-lg" : "bg-transparent sm:p-4 ",
                    hasScrolled && "backdrop-blur-[24px] shadow-box"
                )}
            >
                <div
                    className={clsx(
                        "container mx-auto flex justify-between items-center max-lg:py-3 py-4",
                        !hasScrolled &&
                            "bg-slate-600/30 backdrop-blur-[8px] sm:rounded-3xl shadow-lg px-6 border-0 border-s1",
                        hasScrolled && "px-6"
                    )}
                >
                    <a className="max-lg:flex-1 cursor-pointer z-2" href="/">
                        <Head>
                            <script type="application/ld+json">{JSON.stringify(jsonLdHeader.logo)}</script>
                        </Head>
                        <img
                            src="/images/logos/healGuid-v2.svg"
                            className="lg:w-72 h-auto max-lg:w-44 lg:-mt-2"
                            alt="HealGuid logo - connecting patients with holistic health solutions"
                            title="logo"
                        />
                    </a>
                    <div
                        className={clsx(
                            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-b1 max-lg:opacity-0",
                            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
                        )}
                    >
                        <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                                <ul className="flex max-lg:block max-lg:px-12">
                                    {data.menus.map(({ id, title, url, titleAttribute }) => (
                                        <li className="nav-li" key={`menu_` + id}>
                                            <NavLink title={title} url={url} titleAttribute={titleAttribute} />
                                        </li>
                                    ))}

                                    {/* <li className="nav-li">
                                        <Button
                                            containerClassName="bg-s1 m-6 mx-0"
                                            textClassName="tracking-wide font-bold text-white"
                                            href={
                                                data?.type?.includes("client")
                                                    ? "/book-consultation"
                                                    : "/apply"
                                            }
                                        >
                                            {data?.type?.includes("client") ? "Get Matched" : "Apply Now"}
                                        </Button>
                                    </li> */}
                                </ul>
                            </nav>

                            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90"></div>
                        </div>
                    </div>

                    <Button
                        containerClassName={clsx(" m-0 text-sm text-white ", hasScrolled ? "bg-p1" : "bg-s1")}
                        textClassName="tracking-wide font-semibold p-0 text-sm"
                        textContainerClassName="min-h-[36px] md:min-w-[130px] px-2 mx-0"
                        href={data?.type?.includes("client") ? "/get-matched" : "/apply"}
                    >
                        {/* Join Us */}
                        {data?.type?.includes("client") ? "Get Matched" : "Apply Now"}
                    </Button>

                    <button
                        className="lg:hidden z-2 size-10 rounded-full flex justify-center items-center sm:ml-4 "
                        onClick={() => setIsOpen((prevState) => !prevState)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <img
                            src={
                                "/images/header/" +
                                (isOpen ? "close" : hasScrolled ? "hamburger-white" : "hamburger") +
                                ".svg"
                            }
                            alt={isOpen ? "Close menu" : "Open menu"}
                            title={isOpen ? "Close menu" : "Open menu"}
                            className="size-6 object-contain"
                        />
                    </button>
                </div>
                <div className="relative">
                    <div
                        className={clsx("bg-s1 h-1 absolute mt-0 max-sm:mt-0", isOpen ? "invisible" : "visible")}
                        id="progressBar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </header>
        </>
    );
};

export default HeaderLoop;
