import Review from "../others/Review.jsx";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
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
        const indicesToStyle = data.type.includes("client") ? [4, 5] : [5, 6, 7];

        return words.map((word, index) => (
            <span key={index} className={indicesToStyle.includes(index) ? "text-s6" : ""}>
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
            }
        } else {
            setIsEmailValid(false);
        }
    };

    return (
        <section
            id="hero"
            className="relative flex flex-col justify-center xl:pt-16 2xl:pt-0 min-h-lvh max-lg:pb-16 max-sm:pb-6 max-lg:pt-20 max-md:pt-0 bg-b10"
        >
            {/* flow left to right (contain 4 + 1 divs)  */}
            <div className="container flex flex-wrap max-md:flex-wrap justify-between lg:mt-12 2xl:mt-0 items-center">
                {/* 1. Main Text + Description */}
                <div className="lg:w-5/12 max-lg:w-full max-lg:order-2 flex flex-col lg:text-container lg:justify-start max-lg:mt-8 max-lg:mb-8 lg:pt-4">
                    <h1
                        className="font-sans text-p4 md:font-semibold max-md:font-medium 
                                        max-sm:text-3xl max-xs:text-sm max-md:text-4xl md:text-5xl max-lg:h2 max-md:leading-12
                                        lg:text-left max-lg:text-center max-sm:text-center"
                    >
                        {processedTitle}
                    </h1>
                    <div className="max-sm:text-base max-md:text-xl md:text-xl md:leading-8 tracking-2 lg:text-left max-lg:text-center lg:mr-2 2xl:mr-10 lg:mt-12 max-lg:mt-4 max-lg:mx-20 max-md:mx-12 max-sm:mx-0">
                        <h2 className="block text-wrap mb-2 font-semibold">{data.hero.description}</h2>
                        <p className="inline font-light"> {data.hero?.secondDescription}</p>
                    </div>
                </div>

                {/* 2. Image */}
                <div className="lg:w-7/12 max-lg:full max-lg:order-1 flex justify-center items-center">
                    <div className="w-full max-lg:w-10/12 lg:w-4/5 xl:w-10/12 2xl:w-4/5 aspect-w-883 aspect-h-525 max-lg:mt-8 max-md:mt-24">
                        <Image
                            priority
                            src={data.hero.image}
                            alt={data.hero.alt}
                            width={883} // Use the actual width of your source image
                            height={525} // Use the actual height of your source image
                            id="hero-image"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

                {/* 3. Email */}
                <div className="lg:w-5/12 max-lg:w-full max-lg:order-3 lg:mt-2 2xl:mt-2 max-lg:mx-20 max-md:mx-12 max-sm:mx-0">
                    <div className={data.hero.newsletter.class + " mx-auto block text-center"}>
                        <h3 className="text-p1 md:text-xl font-semibold mb-6 text-center">
                            {data.hero.newsletter.title}
                        </h3>

                        <a
                            href={
                                data.type.includes("client")
                                    ? "https://book.healguid.com/book-consultation"
                                    : "https://book.healguid.com/apply"
                            }
                        >
                            <button
                                className="group bg-s1 hover:bg-p1 border-p1 mx-auto flex items-center justify-center font-medium md:h-14 md:w-38 max-md:h-10 max-md:w-56 text-white  md:px-6 md:py-2 rounded-full mb-4"
                                aria-label="Submit button with arrow icon to join the HealGuid mailing list."
                            >
                                <span className="md:text-xl transition-transform duration-200 ease-in-out group-hover:scale-110">
                                    {data.type.includes("partner") ? "Become a Healguid Partner" : "Get Matched Now"}
                                </span>
                            </button>
                        </a>

                        {data.type.includes("partner") && (
                            <div className="mb-6 flex items-center justify-center">
                                <ul className="pl-3 max-md:text-sm">
                                    <li className="flex items-center">
                                        <span className="mr-2 font-semibold text-2xl">•</span>
                                        <span className="max-md:text-sm">Founding members: £0 setup fees</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 font-semibold text-2xl">•</span>
                                        <span className="max-md:text-sm">Join the #1 Holistic Community in the UK</span>
                                    </li>
                                    <li className="text-red-800 mt-2 text-center">Only 24 founding spots remaining</li>
                                </ul>
                            </div>
                        )}

                        {data.type.includes("client") && (
                            <div className="mb-6 flex items-center justify-center">
                                <ul className="max-md:text-sm">
                                    <li className="flex items-center">
                                        <span className="mr-2 font-semibold text-2xl">•</span>
                                        <span className="max-md:text-sm">Free founding member pricing</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 font-semibold text-2xl">•</span>
                                        <span className="max-md:text-sm">
                                            Get weekly holistic health insights & more
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        )}

                        <span className="text-xs block opacity-70 text-center">{data.hero.newsletter.emailPolicy}</span>
                    </div>
                </div>

                {/* 4. Review */}
                <div className="lg:w-7/12 max-lg:w-full max-lg:order-4 lg:mt-2 2xl:mt-2 max-lg:mt-8 flex flex-col items-center">
                    <Review
                        item={data.hero.review}
                        containerClassName="flex flex-row max-lg:flex-wrap 2xl:w-10/12 xl:w-10/12 lg:w-10/12 max-lg:mx-12 max-sm:mx-0"
                        commentClassName="lg:mr-auto lg:basis-10/12 max-lg:basis-full italic text-center tracking-2 lg:mr-4 lg:font-medium text-lg max-lg:text-base"
                        userClassName="lg:ml-auto max-lg:mx-auto max-lg:basis-12/12"
                    />
                    <div className="flex flex-wrap">
                        {/* {data.type.includes("partner") && (
                            <>
                                <label htmlFor="email" className="sm:hidden text-black mb-2 font-medium">
                                    What's your specialty?
                                </label>
                                <div
                                    className={`sm:hidden flex rounded-full overflow-hidden mb-2  bg-white w-full xl:mr-12
                                ${!isEmailValid ? "border-rose-600 border-1" : "border-p1 border-2"}`}
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
                        )} */}
                        <div className="lg:mr-20">
                            <div className="flex flex-wrap lg:justify-center items-center lg:mt-auto max-lg:mt-8 w-full">
                                <span
                                    className={`
                                    text-lg max-lg:justify-center max-lg:mb-4 tracking-2 mb-3 mt-4 text-center w-full
                                    ${
                                        data.type.includes("partner")
                                            ? "lg:basis-1/2 lg:my-4 max-lg:basis-full"
                                            : "basis-full"
                                    }
                                `}
                                >
                                    Want to learn more first?
                                </span>
                                <div
                                    className={`flex rounded-full overflow-hidden mx-auto bg-transparent 
                                ${!isEmailValid ? "border-rose-600 border-1" : ""}
                                ${data.type.includes("client") ? "border-p1 border-2 basis-3/5" : "lg:my-4"}`}
                                >
                                    {data.type.includes("client") ? (
                                        <>
                                            <input
                                                type="email"
                                                placeholder="your.email@gmail.com"
                                                aria-label="Input field to enter email address for exclusive updates about HealGuid's launch."
                                                className={`flex-1 px-4 py-2 text-gray-600 bg-white 
                                                ${!isEmailValid ? "border-rose-600 border-1" : " outline-none"} 
                                            `}
                                                name="email"
                                                onChange={handleChange}
                                            />
                                            <div dir="rtl">
                                                <button
                                                    className="max-md:hidden group bg-b10 hover:bg-p1 border-l-2 border-p1 md:h-14 md:w-38 max-md:h-10 max-md:w-10  text-p1 hover:text-white md:px-4 md:py-2 rounded-s-full "
                                                    onClick={handleSubmitForm}
                                                    aria-label="Submit button with arrow icon to join the HealGuid mailing list."
                                                >
                                                    <span className="text-base transition-transform duration-200 ease-in-out group-hover:scale-110 inline-block">
                                                        Start Now
                                                    </span>
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <a href="https://calendly.com/healguid/healguid-partner-discovery">
                                            <button
                                                className="group bg-b10 hover:bg-p1 border-p1 border-2 text-p1 hover:text-white mx-auto flex items-center justify-center font-medium md:h-14 md:w-38 max-md:h-10 max-md:w-60  md:px-8 md:py-2 rounded-full"
                                                aria-label="Submit button with arrow icon to join the HealGuid mailing list."
                                            >
                                                <span className="md:text-xl transition-transform duration-200 ease-in-out group-hover:scale-110">
                                                    Book Your Free Discovery Call
                                                </span>
                                            </button>
                                        </a>
                                    )}
                                </div>
                                {data.type.includes("client") && (
                                    <div className="basis-full flex justify-center">
                                        <button
                                            className="group md:hidden text-sm bg-p1 h-10 w-28 mx-auto text-white rounded-full hover:bg-p1 my-2"
                                            onClick={handleSubmitForm}
                                        >
                                            <span className="group/arrow-2 text-base transition-transform duration-200 ease-in-out group-hover:scale-110 inline-block">
                                                <span className="">Start Now</span>
                                            </span>
                                        </button>
                                    </div>
                                )}

                                {!isEmailValid && (
                                    <span className="text-sm text-rose-600 w-full text-center mt-2">
                                        {" "}
                                        ➔ email is not valid!
                                    </span>
                                )}

                                <span className="text-xs block opacity-70 text-center w-full mt-2">
                                    {data.hero.newsletter.privacyPolicy}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${data.hero.expertise.class} max-2xl:hidden 2xl:block`}>
                <span className="flex justify-center text-base tracking-2">
                    {data.hero.expertise.points.map(({ id, text, textBold }) => (
                        <div className="basis-auto" key={id}>
                            <Image
                                src="/images/general/check-primary.svg"
                                width={24} // A base size like 24x24
                                height={24}
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
