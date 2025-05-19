import Button from "../ui/Button.jsx";
import Review from "../Review.jsx";
import { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import { jsonLdHero } from "../../constants/jsonLdData.jsx";
import { initializeFirebase } from "../../utils/lazyFirebase.js";
import { clientNewsletter, partnerNewsletter } from "../../constants/general.jsx";

const Hero = ({ data, func }) => {
    // Replace multiple windowSize checks with responsive CSS classes
    const [isModalOpen, setIsModalOpen] = useState(false);

    const newsletterData = data.type.includes("client") ? clientNewsletter : partnerNewsletter;

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
        extra: "",
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

                const dataType = data.type.includes("client") ? " (patients)" : " (partners)";
                const extraData = formData.extra ? formData.extra + dataType : dataType;
                console.log("extraData: ", extraData);

                // Store form data in Firestore
                const response = await addDoc(collection(db, dbCollection), {
                    email: formData.email,
                    extra: extraData,
                });

                console.log("response: ", response);

                if (response.id) {
                    // Redirect after successful submission
                    // const type = data.type.includes("client") ? "client" : "partner";
                    // window.location.href = "/thank-you?type=" + type;
                }
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
            {/* flow left to right (contain 4 + 1 divs)  */}
            <div className="container flex flex-wrap max-md:flex-wrap justify-between lg:mt-12">
                {/* 1. Main Text + Description */}
                <div className="lg:w-5/12 max-lg:w-full max-lg:order-2 max-lg:mt-8 flex flex-col">
                    <h1
                        className="text-p1 md:font-semibold max-md:font-medium 
                                        max-sm:text-3xl max-xs:text-sm max-md:text-4xl md:text-5xl max-lg:h2 max-md:leading-12
                                        lg:text-left max-lg:text-center max-sm:text-center"
                    >
                        {processedTitle}
                    </h1>
                    <div className="max-sm:text-base max-md:text-xl md:text-xl md:leading-8 tracking-2 lg:text-left max-lg:text-center lg:mr-2 2xl:mr-10 lg:mt-12 max-lg:mt-4 max-lg:mx-20 max-md:mx-12 max-sm:mx-0">
                        <h2 className="block text-wrap mb-2 font-semibold">{data.hero.description}</h2>
                        <b className="inline font-normal"> {data.hero?.secondDescription}</b>
                        <h3 className="inline"> {data.hero?.thirdDescription}</h3>
                    </div>
                </div>

                {/* 2. Image */}
                <div className="lg:w-7/12 max-lg:full max-lg:order-1">
                    <Head>
                        <link rel="preload" href={data.hero.image} as="image" type="image/webp" />
                        <script type="application/ld+json">{JSON.stringify(jsonLdHero.conversation)}</script>
                    </Head>
                    <img
                        src={data.hero.image}
                        width="883"
                        height="525"
                        alt={data.hero.alt}
                        title={data.hero.altTitle}
                        loading="eager"
                        decoding="async"
                        className={
                            "hero-image rounded-2xl 2xl:w-12/12 xl:w-12/12 lg:w-10/12 max-lg:w-10/12 max-sm:w-full max-md:mt-20 mx-auto" +
                            data.hero.imageClass
                        }
                    />
                </div>

                {/* 3. Email */}
                <div className="lg:w-5/12 max-lg:w-full max-lg:order-3 max-lg:mt-8 lg:mt-8 2xl:mt-20 max-lg:mx-20 max-md:mx-12 max-sm:mx-0">
                    <div className={data.hero.newsletter.class}>
                        <h3 className="text-p1 text-lg font-semibold mb-3">{data.hero.newsletter.title}</h3>
                        {data.type.includes("partner") && (
                            <ul className="list-disc pl-5 max-md:text-sm">
                                <li className="text-red-800 my-2">Only 19 of 50 founding spots left</li>
                                {JSON.stringify(formData)}
                            </ul>
                        )}
                        <div className="flex flex-wrap">
                            {data.type.includes("partner") && (
                                <>
                                    <label htmlFor="email" className="sm:hidden text-black mb-2 font-medium">
                                        What's your specialty?
                                    </label>
                                    <div
                                        className={`sm:hidden flex rounded-full overflow-hidden mb-2 bg-white border-2 w-full xl:mr-12
                                ${!isEmailValid ? "border-rose-600 border-1" : "border-p1"}`}
                                    >
                                        <select
                                            className="flex-1 px-4 py-2 text-gray-600 outline-none bg-white"
                                            name="extra"
                                            value={formData.extra}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>
                                                Select your Specialisation
                                            </option>
                                            {newsletterData.listOfType.map((op, index) => (
                                                <option value={op} key={index}>
                                                    {op}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </>
                            )}
                            <div
                                className={`flex rounded-full overflow-hidden mb-2 bg-white border-2 w-full xl:mr-12
                                ${!isEmailValid ? "border-rose-600 border-1" : "border-p1"}`}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Input field to enter email address for exclusive updates about HealGuid's launch."
                                    className="flex-1 px-4 py-2 text-gray-600 outline-none bg-white"
                                    name="email"
                                    onChange={handleChange}
                                />
                                <div dir="rtl">
                                    <button
                                        className="max-md:hidden group bg-s1 hover:bg-p1 border-l-2 border-p1 md:h-14 md:w-38 max-md:h-10 max-md:w-10 text-white md:px-3 md:py-2 rounded-s-full "
                                        onClick={handleSubmitForm}
                                        aria-label="Submit button with arrow icon to join the HealGuid mailing list."
                                    >
                                        <span className="text-base transition-transform duration-200 ease-in-out group-hover:scale-110 inline-block">
                                            {/* ➔ */}
                                            {data.type.includes("partner") ? "Secure Your Spot" : "Get Started Now"}
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <button
                                className="group md:hidden text-sm bg-s1 h-10 w-44 mx-auto text-white rounded-full hover:bg-p1 my-2"
                                onClick={handleSubmitForm}
                            >
                                <span className="group/arrow-2 text-base transition-transform duration-200 ease-in-out group-hover:scale-110 inline-block">
                                    <span className="mr-3">
                                        {" "}
                                        {data.type.includes("partner") ? "Secure Your Spot" : "Get Started Now"}
                                    </span>
                                    ➔
                                </span>
                            </button>
                        </div>
                        {!isEmailValid && <span className="text-sm text-rose-600"> ➔ email is not valid!</span>}
                        {data.type.includes("partner") && (
                            <ul className="list-disc pl-5 pt-2 max-md:text-sm">
                                <li>Exclusive founding member pricing</li>
                                <li>Priority patient matching, with pre-qualified leads</li>
                            </ul>
                        )}
                        {data.type.includes("client") && (
                            <ul className="list-disc pl-5 pt-2 max-md:text-sm">
                                <li>Get early access trusted by 100+ patients</li>
                                <li>Get weekly holistic health insights & more</li>
                            </ul>
                        )}
                        <span className="text-xs block opacity-70 mt-3"> {data.hero.newsletter.privacyPolicy}</span>
                    </div>
                </div>
                {/* 4. Review */}
                <div className="lg:w-7/12 max-lg:w-full max-lg:order-4 lg:mt-8 2xl:mt-20 max-lg:mt-8 flex flex-col items-center">
                    <Review
                        item={data.hero.review}
                        containerClassName="flex flex-row max-lg:flex-wrap 2xl:w-10/12 xl:w-10/12 lg:w-10/12 max-lg:mx-12 max-sm:mx-0"
                        commentClassName="lg:mr-auto lg:basis-10/12 max-lg:basis-full italic text-center tracking-2 lg:mr-4 lg:font-medium text-lg max-lg:text-base"
                        userClassName="lg:ml-auto max-lg:mx-auto max-lg:basis-12/12"
                    />
                    <div className="flex flex-wrap justify-center items-center lg:mt-auto max-lg:mt-8 w-full">
                        <span className="basis-auto text-lg max-lg:justify-center max-lg:mb-4 tracking-2 my-auto">
                            Want to learn more first?
                        </span>
                        <div className="lg:basis-6/12 max-lg:basis-full flex items-center justify-center flex-col">
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

            <div className={`${data.hero.expertise.class} max-2xl:hidden 2xl:block`}>
                <span className="flex justify-center text-base tracking-2">
                    {data.hero.expertise.points.map(({ id, text, textBold }) => (
                        <div className="basis-auto" key={id}>
                            <img
                                src="/images/general/check-primary.svg"
                                width="100%"
                                height="100%"
                                className="sm:size-6 max-sm:max-h-4 max-sm:my-auto text-s1 basis-1 mr-1 ml-8 inline"
                                alt="check icon"
                                title="Checkmark icon indicating expertise point"
                            />
                            {textBold && <strong className="inline">{textBold} </strong>}
                            <span className="inline">{text}</span>
                        </div>
                    ))}
                </span>
            </div>
        </section>
    );
};

export default Hero;
