// src/pages/privacy-policy.js
import Head from "next/head";
import Header from "../components/sections/Header";
import { privacy } from "../constants/privacy";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Meta from "../components/Meta";
import Schema from "../components/Schema";

// Dynamically import components that need browser APIs
const Modal = dynamic(() => import("../components/ui/Modal"), { ssr: false });
const Newsletter = dynamic(() => import("../components/Newsletter"), { ssr: false });

export default function Privacy() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newsletterType, setNewsletterType] = useState("clients");

    // Fix multiple viewport tags issue
    useEffect(() => {
        // Remove any existing viewport meta tags
        const existingViewports = document.querySelectorAll('meta[name="viewport"]');
        if (existingViewports.length > 1) {
            for (let i = 1; i < existingViewports.length; i++) {
                existingViewports[i].parentNode.removeChild(existingViewports[i]);
            }
        }

        // Ensure the first one has the correct attributes
        if (existingViewports.length > 0) {
            existingViewports[0].setAttribute("content", "width=device-width, initial-scale=1");
        }
    }, []);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    // Add charset tag to fix encoding issue
    useEffect(() => {
        const charset = document.createElement("meta");
        charset.setAttribute("charset", "UTF-8");

        const existingCharset = document.querySelector("meta[charset]");
        if (!existingCharset) {
            document.head.prepend(charset);
        }
    }, []);

    return (
        <>
            <Meta
                title="Privacy Policy | How HealGuid Protects Your Health Data"
                description="Learn how HealGuid securely handles your personal and health information, maintains confidentiality, and protects your privacy while connecting you with trusted holistic practitioners."
                keywords="privacy policy, data protection, health information privacy, HIPAA compliant, holistic healthcare privacy"
                path="privacy-policy"
                canonicalUrl="https://healguid.com/privacy-policy"
            />

            <Schema
                schemas={[
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Privacy Policy | How HealGuid Protects Your Health Data",
                        description:
                            "Learn how HealGuid securely handles your personal and health information, maintains confidentiality, and protects your privacy while connecting you with trusted holistic practitioners.",
                        mainEntity: {
                            "@type": "WebContent",
                            about: {
                                "@type": "Thing",
                                name: "Healthcare Privacy",
                            },
                        },
                        audience: {
                            "@type": "Audience",
                            audienceType: ["Patients", "Healthcare Practitioners"],
                        },
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: "https://healguid.com",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Privacy Policy",
                                item: "https://healguid.com/privacy-policy",
                            },
                        ],
                    },
                ]}
            />

            <section className="py-16 max-md:pt-20 max-lg:pt-28 lg:pt-44 bg-b3 lg:min-h-lvh">
                {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <Newsletter type={newsletterType} onClose={handleCloseModal} />
                    </Modal>
                )}

                <Header data={{ menus: privacy.menus, type: "partners" }} func={{ handleOpenModal }} />
                <div className="min-h-screen bg-b3 py-12 px-6 lg:px-16">
                    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Visual header with icon */}
                        <div className="bg-p1 bg-opacity-10 p-6 border-b border-p1 border-opacity-20">
                            <div className="flex items-center">
                                <div className="mr-4 bg-p1 rounded-full p-3">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-800">Cookies and Privacy Policy</h1>
                            </div>
                        </div>

                        <div className="p-8">
                            {/* Quick links for better usability */}

                            {privacy.topics.length &&
                                privacy.topics.map(({ id, title, description, img, alt }) => (
                                    <section className="mb-8" key={id} id={id}>
                                        <div className="flex items-start">
                                            <div className="bg-p1 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                                                <img width="20" height="20" alt={alt} src={img} className="text" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
                                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                    <p className="text-gray-600 leading-relaxed">{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                ))}

                            {/* Contact card */}
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
                                <div className="flex items-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-p1 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-800">Questions about your data?</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    If you have any questions about our privacy practices, please contact us at:
                                </p>
                                <p className="text-p1 font-medium">info@healguid.com</p>
                            </div>

                            <footer className="text-center text-gray-500 text-sm pt-4 border-t">
                                <p>© {new Date().getFullYear()} HealGuid. All Rights Reserved.</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
