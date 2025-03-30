import { useState, useEffect } from "react";
import { footer } from "../../constants/general.jsx";
import { initializeFirebase } from "../../utils/lazyFirebase.js";

const Footer = ({ data }) => {
    const [formData, setFormData] = useState({
        email: "",
        extra: "footer-newsletter",
    });

    const [isEmailValid, setIsEmailValid] = useState(true);

    const dbCollection = data.type?.includes("client") ? "clients" : "partners";

    // Handle smooth scrolling for anchor links
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (!target) return;

            const href = target.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            e.preventDefault();

            const targetId = href.substring(1);
            const element = document.getElementById(targetId);

            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });

                // Update URL hash without page reload
                window.history.pushState(null, null, href);
            }
        };

        document.getElementById("footer")?.addEventListener("click", handleSmoothScroll);

        return () => {
            document.getElementById("footer")?.removeEventListener("click", handleSmoothScroll);
        };
    }, []);

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

                // Facebook tracking - Check if fbq exists first
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
                    * Exclusive updates about our mission to reimagine holistic healthcare<br>
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
        <footer id="footer" className="bg-b3 max-md:pb-12">
            <div className="bg-white p-4 rounded-t-xl flex flex-wrap container py-10">
                <div className="md:w-1/3 max-md:w-full max-md:mb-8">
                    <img
                        src={footer?.newsletter?.logo}
                        alt={footer?.newsletter?.alt}
                        loading="lazy"
                        className="mb-3 max-md:h-10 max-md:mb-6 max-sm:hidden"
                    />
                    <strong className="text-p1 text-lg font-semibold mb-3">{footer.newsletter.title}</strong>
                    <p className="font-light mb-2">{footer.newsletter.description}</p>
                    <div className="flex flex-wrap max-sm:mt-6">
                        <div
                            className={`flex border rounded-full overflow-hidden mb-2 md:w-4/5 max-md:flex-1
                                ${!isEmailValid ? "border-rose-600 border-1" : "border-gray-300"}`}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Input field to enter email address for exclusive updates about HealGuid's launch."
                                className="flex-1 px-4 py-2 text-gray-600 outline-none"
                                name="email"
                                onChange={handleChange}
                            />
                            <button
                                className="max-lg:hidden bg-s1 md:h-14 md:w-14 max-md:h-10 max-md:w-10 text-white md:px-4 md:py-2 rounded-full border-white border-4"
                                onClick={handleSubmitForm}
                                aria-label="Submit button with arrow icon to join the HealGuid mailing list."
                            >
                                ➔
                            </button>
                        </div>
                        <button
                            className="lg:hidden text-sm bg-s1 h-10 w-10 ml-2 text-white rounded-full"
                            onClick={handleSubmitForm}
                            aria-label="Submit email"
                        >
                            ➔
                        </button>
                    </div>
                    {!isEmailValid && <span className="text-sm text-rose-600"> ➔ email is not valid!</span>}
                    <span className="text-xs block opacity-70 mt-3">{footer.newsletter.privacyPolicy}</span>
                </div>
                <div className="md:w-2/3 max-md:w-full flex flex-wrap">
                    <div className="flex md:ml-auto">
                        {footer?.links.map(({ id, title: mainTitle, list }) => (
                            <div className="md:px-10 max-md:px-4" key={id + "_" + mainTitle}>
                                <strong className="text-p1 font-semibold mb-4">{mainTitle}</strong>
                                <ul>
                                    {list.map(({ id, title, url, alt }) => (
                                        <li
                                            key={id + title}
                                            className="cursor-pointer hover:text-s1 md:my-2 md:text-base"
                                        >
                                            <a
                                                href={url}
                                                aria-label={alt || title}
                                                target={
                                                    url.startsWith("http") || url.startsWith("mailto:")
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
                                            >
                                                {title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-left text-gray-500 text-sm w-full">
                    <hr className="pb-3" />© HealGuid. All Rights Reserved {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
