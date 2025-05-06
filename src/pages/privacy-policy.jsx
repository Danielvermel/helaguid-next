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

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <Meta
                title="Privacy Policy | How HealGuid Protects Your Health Data"
                description="HealGuid protects your health data with strong encryption, strict confidentiality, and privacy-first practices connecting you to trusted practitioners."
                keywords="privacy policy, data protection, health information privacy, HIPAA compliant, holistic healthcare privacy"
                path="privacy-policy"
                canonicalUrl="https://healguid.com/privacy-policy"
            />

            {/* <Schema
                schemas={[
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Privacy Policy | How HealGuid Protects Your Health Data",
                        description:
                            "HealGuid protects your health data with strong encryption, strict confidentiality, and privacy-first practices connecting you to trusted practitioners.",
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
            /> */}

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
                                <h1 className="text-3xl font-bold text-gray-800">{privacy.title}</h1>
                            </div>
                            <p className="mt-4 ml-14 text-gray-600 whitespace-pre-wrap">{privacy.subtitle}</p>
                        </div>

                        <div className="p-8">
                            {/* Map through privacy sections from constants file */}
                            {privacy.sections.map((section) => (
                                <section className="mb-8" id={section.id} key={section.id}>
                                    <div className="flex items-start">
                                        <div className="bg-p1 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                                            <IconForSection sectionId={section.id} />
                                        </div>
                                        <div className="flex flex-wrap">
                                            <h2 className="text-2xl font-semibold text-gray-700 mb-4 w-full">
                                                {section.title}
                                            </h2>
                                            <div className="bg-gray-50 p-4 rounded-lg mb-4 w-full">
                                                {section.content.map((paragraph, idx) => {
                                                    // Check if the paragraph is a heading (bolded text)
                                                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                                                        return (
                                                            <h3 key={idx} className="font-medium mb-2">
                                                                {paragraph.replace(/\*\*/g, "")}
                                                            </h3>
                                                        );
                                                    }
                                                    // Check if it's a list
                                                    else if (paragraph.startsWith("*")) {
                                                        return (
                                                            <ul
                                                                key={idx}
                                                                className="list-disc list-inside space-y-2 ml-4 mb-4"
                                                            >
                                                                {paragraph.split("\n").map((item, itemIdx) => {
                                                                    // Extract text after the bullet point
                                                                    let text = item.replace(/^\* /, "");

                                                                    // Check if there's bold text inside the item
                                                                    if (text.includes("**")) {
                                                                        const parts = text.split(/(\*\*.*?\*\*)/);
                                                                        return (
                                                                            <li key={itemIdx}>
                                                                                {parts.map((part, partIdx) => {
                                                                                    if (
                                                                                        part.startsWith("**") &&
                                                                                        part.endsWith("**")
                                                                                    ) {
                                                                                        return (
                                                                                            <span
                                                                                                key={partIdx}
                                                                                                className="font-medium"
                                                                                            >
                                                                                                {part.replace(
                                                                                                    /\*\*/g,
                                                                                                    ""
                                                                                                )}
                                                                                            </span>
                                                                                        );
                                                                                    }
                                                                                    return part;
                                                                                })}
                                                                            </li>
                                                                        );
                                                                    }

                                                                    return <li key={itemIdx}>{text}</li>;
                                                                })}
                                                            </ul>
                                                        );
                                                    }
                                                    // Regular paragraph
                                                    else {
                                                        return (
                                                            <p key={idx} className="mb-3">
                                                                {paragraph}
                                                            </p>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))}

                            {/* Questions about your data - This content isn't in the constants file, 
                                so we keep it here for now. You could move it to constants later. */}
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
                                    <h3 className="text-lg font-medium text-gray-800">Need more information?</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    You can manage your cookie preferences or request details about your data by
                                    contacting our Privacy Team.
                                </p>
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => console.log("Open cookie preferences")}
                                        className="px-4 py-2 bg-p1 text-white rounded-md hover:bg-opacity-90 transition-colors"
                                    >
                                        Manage Cookies
                                    </button>
                                    <a
                                        href="mailto:privacy@healguid.com"
                                        className="px-4 py-2 border border-p1 text-p1 rounded-md hover:bg-p1 hover:bg-opacity-10 transition-colors"
                                    >
                                        Contact Privacy Team
                                    </a>
                                </div>
                            </div>

                            <div className="text-center text-gray-500 text-sm pt-4 border-t">
                                <p>HealGuid: Building the trust layer for holistic healthcare.</p>
                                <p className="mt-2">© {new Date().getFullYear()} HealGuid. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// Helper component for section icons
function IconForSection({ sectionId }) {
    const iconPaths = {
        "information-collected": (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
        ),
        "information-use": (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
        ),
        "health-data-protection": (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
        ),
        "privacy-rights": (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            ></path>
        ),
        cookies: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            ></path>
        ),
        "third-party": (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
        ),
        "international-transfers": (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
        ),
        "policy-changes": (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
        ),
        contact: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
        ),
        // Default icon if section ID doesn't match
        default: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
        ),
    };

    return (
        <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            {iconPaths[sectionId] || iconPaths["default"]}
        </svg>
    );
}

// For SSG, ensure the page is pre-rendered
export async function getStaticProps() {
    return {
        props: {},
    };
}
