import Button from "../ui/Button.jsx";
import Review from "../Review.jsx";
import { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import { jsonLdHero } from "../../constants/jsonLdData.jsx";
import { initializeFirebase } from "../../utils/lazyFirebase.js";

const Hero = ({ data, func }) => {
    // Replace multiple windowSize checks with responsive CSS classes
    const [isModalOpen, setIsModalOpen] = useState(false);

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

        window.addEventListener("hashchange", handleSmoothScroll);

        return () => {
            window.removeEventListener("hashchange", handleSmoothScroll);
        };
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

    const processedTitle = useMemo(() => {
        if (!data?.hero?.title) return null;

        const words = data.hero.title.split(" ");
        const indicesToStyle = data.type.includes("client") ? [1, 5] : [0, 3];

        return words.map((word, index) => (
            <span key={index} className={indicesToStyle.includes(index) ? "text-s1" : ""}>
                {word} {""}
            </span>
        ));
    }, [data?.hero?.title]);

    const [formData, setFormData] = useState({
        email: "",
        extra: data.type.includes("client") ? "patients" : "partners",
    });

    const [isEmailValid, setIsEmailValid] = useState(true);

    const dbCollection = data.type.includes("client") ? "clients" : "partners";

    const handleChange = async (e) => {
        const { name, value, type, checked } = e.target;

        await setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        // check if email is valid
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        if (isValid) {
            setIsEmailValid(isValid);
            try {
                // Dynamically import Firebase Firestore
                const { db, addDoc, collection } = await initializeFirebase();
                const Swal = (await import("sweetalert2")).default;

                // Store form data in Firestore
                await addDoc(collection(db, dbCollection), {
                    email: formData.email,
                    extra: formData.extra,
                });

                // Facebook tracking if available
                if (typeof fbq === "function") {
                    fbq("track", "CompleteRegistration", {
                        value: 0.0,
                        currency: "GBP",
                    });
                }

                Swal.fire({
                    title: "Thank You for Joining HealGuid! 🌿",
                    html: `
                    <p style="text-align: left; font-family: sans-serif; line-height: 1.5;">
                    Your early access signup is confirmed, and we're building something extraordinary—with practitioners like you leading the way. <br><br>

                    Here's what's next:<br>
                    * You'll be the first to receive insights into our platform's evolution<br>
                    * Exclusive updates about our mission to re-imagine holistic healthcare<br>
                    * Early opportunities to shape our development roadmap<br><br>
                    
                    Your expertise is our compass. Together, we're not just creating a platform—we're sparking a healthcare revolution.<br><br>
                    
                    Stay tuned—something remarkable is coming.
                    </p>
                `,
                    icon: "success",
                });
            } catch (error) {
                console.error("Error adding document: ", error);

                const Swal = await import("sweetalert2").then((module) => module.default);
                Swal.fire({
                    title: "Error",
                    text: "There was an error. Please try again.",
                    icon: "error",
                });
            }
        } else {
            setIsEmailValid(false);
        }
    };

    return (
        <section
            id="hero"
            className="relative flex flex-col justify-center xl:pt-16 2xl:pt-4 min-h-lvh max-lg:pb-16 max-sm:pb-6 max-lg:pt-20 max-md:pt-0 bg-b10"
        >
            <div className="container flex flex-wrap max-md:flex-wrap justify-between">
                <div className="xl:relative lg:basis-5/12 max-lg:basis-full max-lg:max-w-[650px] max-lg:mx-auto max-lg:order-2 pr-3">
                    <h1
                        className="text-p1 md:font-semibold max-md:font-medium 
                                        max-sm:text-3xl max-xs:text-sm max-md:text-4xl md:text-5xl lg:mt-8 max-lg:mb-7 lg:mb-8 max-lg:h2 max-md:mb-4 max-md:leading-12
                                        lg:text-left max-lg:text-center max-sm:text-center"
                    >
                        {processedTitle}
                    </h1>
                    <p className="max-lg:mb-18 max-sm:mb-6 mb-10 max-sm:text-base max-md:text-xl md:text-xl md:leading-8 tracking-2 lg:text-left max-lg:text-center lg:mr-10">
                        {data.hero.description}
                    </p>
                    {/* Email */}
                    <div className={data.hero.newsletter.class + " xl:absolute xl:bottom-0"}>
                        <p className="text-p1 text-lg font-semibold mb-3">{data.hero.newsletter.title}</p>
                        <div className="flex flex-wrap">
                            <div
                                className={`flex rounded-full overflow-hidden mb-2 max-md:flex-1 bg-white border-2 w-full xl:mr-12
                                ${!isEmailValid ? "border-rose-600 border-1" : "border-p1"}`}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Input field to enter email address for exclusive updates about HealGuid's launch."
                                    className="flex-1 px-4 py-2 text-gray-600 outline-none bg-white "
                                    name="email"
                                    onChange={handleChange}
                                />
                                <button
                                    className="max-md:hidden group bg-s1 hover:bg-p1 md:h-14 md:w-14 max-md:h-10 max-md:w-10 text-white md:px-4 md:py-2 rounded-full border-white border-4"
                                    onClick={handleSubmitForm}
                                    aria-label="Submit button with arrow icon to join the HealGuid mailing list."
                                >
                                    <span className="text-base transition-transform duration-200 ease-in-out group-hover:scale-150 inline-block">
                                        ➔
                                    </span>
                                </button>
                            </div>
                            <button
                                className="group md:hidden text-sm bg-s1 h-10 w-10 ml-2 text-white rounded-full hover:bg-p1"
                                onClick={handleSubmitForm}
                            >
                                <span className="group/arrow-2 text-base transition-transform duration-200 ease-in-out group-hover:scale-150 inline-block">
                                    ➔
                                </span>
                            </button>
                        </div>
                        {!isEmailValid && <span className="text-sm text-rose-600"> ➔ email is not valid!</span>}
                        {data.type.includes("partner") && (
                            <ul className="list-disc pl-5 pt-2">
                                <li>Exclusive founding member pricing</li>
                                <li>Priority patient matching, and more</li>
                            </ul>
                        )}
                        <span className="text-xs block opacity-70 mt-3"> {data.hero.newsletter.privacyPolicy}</span>
                    </div>
                </div>

                <div className="lg:basis-7/12 max-lg:basis-full sm:mt-2 md:mt-8 max-lg:order-1 lg:order-2 2xl:pl-16 xl:pl-12 max-xl:pl-0 max-md:mx-0 max-lg:mx-16">
                    <Head>
                        <link rel="preload" href={data.hero.image} as="image" type="image/webp" />
                        <script type="application/ld+json">{JSON.stringify(jsonLdHero.conversation)}</script>
                    </Head>
                    <img
                        src={data.hero.image}
                        width="883"
                        height="525"
                        alt="Illustration of a patient and a holistic practitioner having a conversation, symbolizing trust and care."
                        loading="eager"
                        decoding="async"
                        className={data.hero.imageClass}
                    />

                    {/* Replaced conditional rendering with CSS responsive classes */}
                    <div>
                        <div className="lg:block max-lg:hidden">
                            <Review
                                item={data.hero.review}
                                containerClassName="flex max-lg:flex-wrap my-12 max-lg:mt-4 max-sm:my-16"
                                commentClassName="lg:basis-9/12 max-lg:basis-full italic text-center tracking-2 mr-4 lg:font-medium text-lg max-lg:text-base"
                                userClassName="lg:basis-3/12 max-lg:mx-auto max-lg:basis-12/12"
                            />
                            <div className="flex flex-wrap max-xl:mt-10 xl:mt-6 justify-center">
                                <span className="basis-auto text-lg tracking-2 my-auto">
                                    Want to learn morse first?
                                </span>
                                <div className="basis-6/12 flex items-center justify-center flex-col">
                                    <a
                                        href={data.hero.buttons.href}
                                        onClick={(e) => scrollToSection(e, data.hero.buttons.jumpTo)}
                                    >
                                        <Button
                                            arialLabelText={data.hero.buttons.alt}
                                            containerClassName={data.hero.buttons.containerClass}
                                            textClassName={data.hero.buttons.textClass}
                                        >
                                            {data.hero.buttons.label}
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile view components */}
            <div className="max-lg:block lg:hidden">
                <Review
                    item={data.hero.review}
                    containerClassName="flex flex-wrap max-sm:my-16 my-6"
                    commentClassName="basis-full italic text-center tracking-2 max-lg:mx-44 max-md:mx-20 max-sm:mx-8"
                    userClassName="basis-12/12 mx-auto"
                />
                <div className="flex flex-wrap mt-10 justify-center max-sm:hidden md:block">
                    <span className="basis-6/12 text-lg max-md:text-base tracking-2 my-auto">
                        Want to learn more first?
                    </span>
                    <div className="basis-6/12 max-md:basis-full max-md:mt-2 flex items-center justify-center flex-col">
                        <a href={data.hero.buttons.href} onClick={(e) => scrollToSection(e, data.hero.buttons.jumpTo)}>
                            <Button
                                arialLabelText={data.hero.buttons.alt}
                                containerClassName={data.hero.buttons.containerClass + data.hero.buttons.textClass}
                            >
                                {data.hero.buttons.label}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <div className={`${data.hero.expertise.class} max-2xl:hidden 2xl:block`}>
                <span className="flex justify-center text-base tracking-2">
                    {data.hero.expertise.points.map(({ id, text }) => (
                        <div className="basis-auto" key={id}>
                            <img
                                src="/images/general/check-primary.svg"
                                width="100%"
                                height="100%"
                                className="sm:size-6 max-sm:max-h-4 max-sm:my-auto text-s1 basis-1 mr-1 ml-8 inline"
                                alt="check icon"
                            />
                            <h3 className="inline">{text}</h3>
                        </div>
                    ))}
                </span>
            </div>
        </section>
    );
};

export default Hero;
