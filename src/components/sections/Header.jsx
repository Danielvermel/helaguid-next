import { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import clsx from "clsx";
import Head from "next/head";
import { jsonLdHeader } from "../../constants/jsonLdData.jsx";

const Header = ({ data, func }) => {
    const [progress, setProgress] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setScrolling] = useState(false);

    // Update the Progress Bar based on scroll position
    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            setScrolling(true); // User is scrolling

            // Clear the timeout if it's already set
            clearTimeout(timeoutId);

            // Set timeout to detect when user stops scrolling
            timeoutId = setTimeout(() => {
                setScrolling(false); // Mark as stopped after 200ms
            }, 200);

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
                    className="font-semibold text-lg text-p1 transition-colors duration-500 cursor-pointer hover:text-s1 max-lg:my-4 max-lg:h5"
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
                className="font-semibold text-lg text-p1 transition-colors duration-500 cursor-pointer hover:text-s1 max-lg:my-4 max-lg:h5"
                onClick={(e) => scrollToSection(e, targetId)}
            >
                {title}
            </a>
        );
    };

    return (
        <>
        {/* --- SKIP LINK FOR KEYBOARD USERS --- */}
    <a
      href="#hero"
      className="sr-only focus:not-sr-only absolute top-0 left-0 bg-white text-s1 p-2 z-50"
    >
      Skip to main content
    </a>

            <header
                className={clsx(
                    "fixed xs:bg-b13 top-0 left-0 z-10 w-full transition-all duration-500 max-lg:py-4 max-sm:py-0",
                    hasScrolled ? "pt-2 pb-2" : "pt-8 pb-6",
                    hasScrolled && "backdrop-blur-[24px] shadow-box"
                )}
            >
                <div className="container flex h-14 items-center max-lg:px-5">
                    <a className="max-lg:flex-1 cursor-pointer z-2" href="/">
                        <Head>
                            <script type="application/ld+json">{JSON.stringify(jsonLdHeader.logo)}</script>
                        </Head>
                        <img
                            src="/images/logos/healGuid.svg"
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

                                    <li className="nav-li">
                                        {func && (
                                            <>
                                                {" "}
                                                <Button
                                                    containerClassName="bg-s1 m-6 mx-0"
                                                    textClassName="tracking-wide font-bold"
                                                    onClick={() => {
                                                        func.handleOpenModal();
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    Join Us
                                                </Button>
                                            </>
                                        )}
                                    </li>
                                </ul>
                            </nav>

                            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90"></div>
                        </div>
                    </div>

                    {func && (
                        <>
                            {" "}
                            <Button
                                containerClassName="bg-s1 m-0 text-sm text-white sm:hidden"
                                textClassName="tracking-wide font-bold px-2 p-0"
                                textContainerClassName="min-h-[32px]"
                                onClick={() => {
                                    func.handleOpenModal();
                                    setIsOpen(false);
                                }}
                            >
                                Join Us
                            </Button>
                        </>
                    )}
                    <button
                        className="lg:hidden z-2 size-10 rounded-full flex justify-center items-center"
                        onClick={() => setIsOpen((prevState) => !prevState)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <img
                            src={"/images/header/" + (isOpen ? "close" : "hamburger") + ".svg"}
                            alt={isOpen ? "Close menu" : "Open menu"}
                            title={isOpen ? "Close menu" : "Open menu"}
                            className="size-6 object-contain"
                        />
                    </button>
                </div>
                <div className="relative">
                    <div
                        className={clsx("bg-s1 h-1 absolute mt-2 max-sm:mt-0", isOpen ? "invisible" : "visible")}
                        id="progressBar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </header>
        </>
    );
};

export default Header;
