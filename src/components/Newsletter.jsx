import { useState } from "react";
import Button from "./ui/Button";
import { clientNewsletter, partnerNewsletter, newsletterGeneralData } from "../constants/general.jsx";
// import { db, addDoc, collection } from "../firebase.js"; // Adjust the path as needed
// import { addDoc, collection } from "firebase/firestore";
import clsx from "clsx";
import { initializeFirebase } from "../utils/lazyFirebase";

const Newsletter = ({ type, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        extra: "",
    });
    const [emailError, setEmailError] = useState("");

    const data = type.includes("client") ? clientNewsletter : partnerNewsletter;
    const dbCollection = type.includes("client") ? "clients" : "partners";
    console.log("dbCollection: ", dbCollection);

    const validateEmail = (email) => {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const { db, addDoc, collection } = await initializeFirebase();
        // const { db, collection, addDoc } = (await import("../firebase.js")).default;

        if (validateEmail(formData.email)) {
            setEmailError("");

            const Swal = (await import("sweetalert2")).default;

            try {
                // Store form data in Firestore
                await addDoc(collection(db, dbCollection), {
                    name: formData.name,
                    email: formData.email,
                    extra: formData.extra,
                });

                onClose();

                // Facebook tracking
                fbq("track", "CompleteRegistration", {
                    value: 0.0,
                    currency: "GBP",
                });

                Swal.fire({
                    title: "Thank You for Joining HealGuid! 🌿",
                    html: `
                    <p style="text-align: left; font-family: sans-serif; line-height: 1.5;">
                    ${
                        type.includes("client")
                            ? "Your early access signup is confirmed, and we're building something extraordinary—with your health journey in mind."
                            : "Your early access signup is confirmed, and we're building something extraordinary—with practitioners like you leading the way."
                    }<br><br>

                    Here's what's next:<br>
                   
                    *  ${
                        type.includes("client")
                            ? "Be first to connect with verified holistic practitioners"
                            : "You'll be the first to receive insights into our platform's evolution"
                    }<br>
                    *  ${
                        type.includes("client")
                            ? "Receive exclusive wellness insights from our expert community"
                            : "Exclusive updates about our mission to reimagine holistic healthcare"
                    }<br>
                    *  ${
                        type.includes("client")
                            ? "Help shape a platform that puts your health needs first"
                            : "Early opportunities to shape our development roadmap"
                    }<br><br>

${
    type.includes("client")
        ? "Your wellness matters to us. Together, we're not just creating a platform—we're making holistic healthcare more accessible for everyone."
        : "Your expertise is our compass. Together, we're not just creating a platform—we're sparking a healthcare revolution."
}<br><br>

${
    type.includes("client")
        ? "Stay tuned—your path to better health starts here."
        : "Stay tuned—something remarkable is coming."
}
                    </p>
                `,
                    icon: "success",
                });
            } catch (error) {
                console.error("Error adding document: ", error);

                Swal.fire({
                    title: "Error",
                    text: "There was an error. Please try again.",
                    icon: "error",
                });
            }
        } else {
            setEmailError("Please enter a valid email address.");
        }
    };

    return (
        <div className={clsx("container relative py-14 px-6 gap-6 inset-0 my-20", data.bgColor)}>
            <button
                className="absolute md:top-3 max-md:top-8 right-5 text-gray-500 hover:text-gray-700 z-50 text-2xl"
                onClick={onClose}
            >
                ✕
            </button>
            <div className="flex sm:flex-nowrap max-sm:flex-wrap">
                <div className="max-md:basis-full md:basis-7/12">
                    <h2 className="lg:text-5xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl tracking font-semibold text-p1 tracking-2">
                        {data.title}
                    </h2>
                    <p className="lg:text-lg max-lg:text-lg max-md:text-base max-sm:text-sm mt-4 max-sm:mt-2 tracking-2">
                        {data.description}
                    </p>
                    <form
                        className={clsx(
                            "opacity-90 w-10/12  px-4 py-4 my-4 md:mx-6 max-md:mx-auto pb-0 rounded-xl md:space-y-4 max-md:space-y-2 max-md:w-full",
                            data.bgFormColor
                        )}
                    >
                        <div className="sm:flex items-center gap-2 w-full">
                            <label
                                htmlFor="email"
                                className="text-black lg:text-lg max-lg:text-base max-md:text-sm w-1/4"
                            >
                                E-mail:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full lg:p-2 max-lg:p-1 max-md:px-1 max-md:py-0 rounded-lg bg-white text-black shadow-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            {emailError && (
                                <div className="flex items-center sm:w-3/4 max-sm:w-full ">
                                    <p className="text-red-500 text-sm -mt-2">{emailError}</p>
                                </div>
                            )}
                        </div>

                        <div className="sm:flex items-center gap-2w-full">
                            <label
                                htmlFor="name"
                                className="text-black lg:text-lg max-lg:text-base max-md:text-sm w-1/4"
                            >
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full lg:p-2 max-lg:p-1 max-md:px-1 max-md:py-0 rounded-lg bg-white text-black shadow-sm"
                                placeholder="Optional: Your name"
                            />
                        </div>

                        <div className="sm:flex items-center gap-2 w-full">
                            <label
                                htmlFor="email"
                                className="text-black lg:text-lg max-lg:text-base max-md:text-sm basis-5/12"
                            >
                                {type.includes("client") ? "Health Interest:" : "Specialization:"}
                            </label>

                            <select
                                className="w-full lg:p-2 max-lg:p-1 max-md:px-1 max-md:py-0 rounded-lg bg-white text-black shadow-sm"
                                name="extra"
                                value={formData.extra}
                                onChange={handleChange}
                            >
                                <option value="" disabled hidden>
                                    {type.includes("client")
                                        ? "Select your Health Interest (Optional)"
                                        : "Select your Specialisation (Optional)"}
                                </option>
                                {data.listOfType.map((op, index) => (
                                    <option value={op} key={index}>
                                        {op}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex mb-4 justify-center">
                            <Button
                                containerClassName={clsx(
                                    "bg-p1 sm:w-72 max-sm:w-64 lg:h-14 max-lg:h-10 max-md:h-8 md:m-3 max-md:my-2 mx-auto justify-center",
                                    data.buttonColor,
                                    {
                                        "opacity-30 cursor-not-allowed": !formData.email,
                                    }
                                )}
                                textClassName="tracking-wide font-arial font-normal lg:text-xl max-lg:text-lg max-md:text-base  max-md:min-h-4"
                                onClick={formData.email ? handleSubmitForm : undefined}
                                disabled={!formData.email}
                            >
                                {type.includes("client") ? "Start Your Health Journey" : " Get Early Access"}
                            </Button>
                        </div>

                        <p className="pb-4 lg:text-base max-lg:text-sm">
                            {data.privacy.text + " "}
                            <a className="underline underline-offset-2" href={"/privacy-policy"}>
                                Privacy Policy
                            </a>
                        </p>
                    </form>

                    <div>
                        <h6 className="lg:font-bold max-lg:font-semibold lg:text-lg max-lg:text-base max-md:text-sm text-p1">
                            {data.getTitle}
                        </h6>
                        <ul className="pl-0 flex flex-row flex-wrap">
                            {data.get.map(({ id, desc }) => (
                                <li key={id} className="lg:w-6/12 max-lg:w-full lg:text-base max-lg:text-sm">
                                    <img
                                        src="/images/general/check.svg"
                                        className="lg:size-7 max-lg:size-5 font-bold inline mr-1"
                                        alt="check icon"
                                    />
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="max-md:basis-full md:basis-5/12 flex">
                    <div className="mt-auto sm:ml-auto mr-10">
                        <img src="/images/newsletter/people.svg" className="max-sm:hidden -translate-y-14" />

                        <div className="sm:flex-row-reverse max-sm:items-center max-sm:flex">
                            <div className="sm:mt-8 max-sm:mt-4 flex justify-end max-sm:basis-1/2">
                                <img
                                    src="/images/logos/healGuid.png"
                                    className="inline sm:max-h-20 max-sm:max-h-8 max-sm:mr-auto"
                                />
                            </div>
                            <div className="flex flex-row sm:mt-8 max-sm:mt-4 justify-end max-sm:basis-1/2 ">
                                {newsletterGeneralData.socialMedia.length &&
                                    newsletterGeneralData.socialMedia.map(({ id, icon, alt, link }) => (
                                        <a key={id} href={link}>
                                            <img
                                                id={id + "_" + link}
                                                alt={alt}
                                                src={"/images/socials/" + icon + ".svg"}
                                                className="sm:ml-10 max-sm:ml-6 sm:max-h-8 max-sm:max-h-5 cursor-pointer"
                                            />
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
