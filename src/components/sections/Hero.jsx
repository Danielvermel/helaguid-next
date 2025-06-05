import Button from "../ui/Button.jsx";
import Review from "../Review.jsx";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import { jsonLdHero } from "../../constants/jsonLdData.jsx";
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
    // useEffect(() => {
    //     // Function to handle smooth scrolling
    //     const handleSmoothScroll = (e) => {
    //         // Check if the hash exists
    //         if (window.location.hash) {
    //             e.preventDefault();

    //             const targetId = window.location.hash.substring(1);
    //             const targetElement = document.getElementById(targetId);

    //             if (targetElement) {
    //                 // Add offset to account for fixed header
    //                 const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
    //                 window.scrollTo({
    //                     top: offsetTop,
    //                     behavior: "smooth",
    //                 });
    //             }
    //         }
    //     };

    //     // Handle initial load with hash
    //     if (window.location.hash) {
    //         setTimeout(() => {
    //             const targetId = window.location.hash.substring(1);
    //             const targetElement = document.getElementById(targetId);

    //             if (targetElement) {
    //                 const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
    //                 window.scrollTo({
    //                     top: offsetTop,
    //                     behavior: "smooth",
    //                 });
    //             }
    //         }, 100);
    //     }

    //     window.addEventListener("hashchange", handleSmoothScroll);

    //     return () => {
    //         window.removeEventListener("hashchange", handleSmoothScroll);
    //     };
    // }, []);

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
        const indicesToStyle = data.type.includes("client") ? [4, 5] : [0, 3];

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
                // Lazy load Firebase only when needed
                const { submitToFirestore } = await import("../../utils/lazyFirebase.js");

                const dataType = data.type.includes("client") ? " (patients)" : " (partners)";
                const extraData = formData.extra ? formData.extra + dataType : dataType;

                const submissionData = {
                    email: formData.email,
                    extra: extraData,
                    timestamp: new Date().toISOString(),
                };

                const response = await submitToFirestore(dbCollection, submissionData);

                if (response.id) {
                    // Redirect after successful submission
                    const type = data.type.includes("client") ? "client" : "partner";
                    window.location.href = "/thank-you?type=" + type;
                }
            } catch (error) {
                console.error("Error adding document: ", error);

                // const Swal = await import("sweetalert2").then((module) => module.default);
                // Swal.fire({
                //     title: "Error",
                //     text: "There was an error. Please try again.",
                //     icon: "error",
                // });
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
                <div className="lg:w-5/12 max-lg:w-full max-lg:order-2 max-lg:mt-8 flex flex-col text-container">
                    <h1
                        className="text-p1 md:font-semibold max-md:font-medium 
                                        max-sm:text-3xl max-xs:text-sm max-md:text-4xl md:text-5xl max-lg:h2 max-md:leading-12
                                        lg:text-left max-lg:text-center max-sm:text-center"
                    >
                        {processedTitle}
                    </h1>
                    <div className="max-sm:text-base max-md:text-xl md:text-xl md:leading-8 tracking-2 lg:text-left max-lg:text-center lg:mr-2 2xl:mr-10 lg:mt-12 max-lg:mt-4 max-lg:mx-20 max-md:mx-12 max-sm:mx-0">
                        <h2 className="block text-wrap mb-2 font-semibold">{data.hero.description}</h2>
                        <p className="inline font-normal"> {data.hero?.secondDescription}</p>
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
                        alt={data.hero.alt}
                        title={data.hero.altTitle}
                        loading="eager"
                        decoding="async"
                        className={"hero-image rounded-2xl max-md:mt-20 mx-auto" + data.hero.imageClass}
                    />
                    {/* 
                    <Image
                        src={data.hero.image}
                        alt={data.hero.alt}
                        title={data.hero.altTitle}
                        priority={true}
                        className={"hero-image rounded-2xl max-md:mt-20 mx-auto" + data.hero.imageClass}
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,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" // Add blur placeholder
                    /> */}
                </div>

                {/* className={
                            "hero-image rounded-2xl 2xl:w-12/12 xl:w-12/12 lg:w-10/12 max-lg:w-10/12 max-sm:w-full max-md:mt-20 mx-auto" +
                            data.hero.imageClass
                        } */}

                {/* 3. Email */}
                <div className="lg:w-5/12 max-lg:w-full max-lg:order-3 max-lg:mt-8 lg:mt-8 2xl:mt-20 max-lg:mx-20 max-md:mx-12 max-sm:mx-0">
                    <div className={data.hero.newsletter.class}>
                        <h3 className="text-p1 text-lg font-semibold mb-3">{data.hero.newsletter.title}</h3>
                        {data.type.includes("partner") && (
                            <ul className="list-disc pl-5 max-md:text-sm">
                                <li className="text-red-800 my-2">Only 19 of 50 founding spots left</li>
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
                                            {data.type.includes("partner") ? "Secure Your Spot" : "Get Early Access"}
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
                                        {data.type.includes("partner") ? "Secure Your Spot" : "Get Early Access"}
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
