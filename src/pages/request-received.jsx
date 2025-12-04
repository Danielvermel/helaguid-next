import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import { receivedRequest } from "../constants/received";
import Link from "next/link";

import Meta from "../components/others/Meta";
import Schema from "../components/others/Schema";

export default function ReceivedRequest() {
    const [description, setDescription] = useState("");

    // Helper component for social icons
    function SocialIcon({ type }) {
        const iconPaths = {
            instagram: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
            facebook: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            twitter: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
            email: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
        };

        return iconPaths[type] || null;
    }

    // Helper to format markdown bold
    function formatBold(text) {
        return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    }

    // Render content item (could be string or array)
    function renderContentItem(item, idx) {
        // If it's an array, render as bullet list
        if (Array.isArray(item)) {
            return (
                <ul key={idx} className="list-disc list-inside text-gray-700 ml-2">
                    {item.map((listItem, listIdx) => (
                        <li key={listIdx} dangerouslySetInnerHTML={{ __html: formatBold(listItem) }} />
                    ))}
                </ul>
            );
        }

        // Otherwise, it's a string - split by /n
        const [main, extra] = item.split("/n");
        const formattedMain = formatBold(main);

        return (
            <div key={idx} className="flex flex-col items-start mt-3">
                <span dangerouslySetInnerHTML={{ __html: formattedMain }} className="" />
                {extra && <span className="text-gray-700">{extra.trim()}</span>}
            </div>
        );
    }

    return (
        <>
            <Meta
                title="Request Received | HealGuid"
                description="Your practitioner matching request has been received. We're reviewing your request and will match you with a verified HealGuid practitioner."
                keywords="confirmation, practitioner, appointment, holistic health, wellness"
                path="request-confirmation"
                canonicalUrl="https://healguid.com/request-confirmation"
                robotContent="noindex, follow"
            />

            <Header data={{ menus: receivedRequest.menus, type: "thanks", extra: "thanks" }} />

            <section className="py-16 max-md:pt-20 max-lg:pt-28 lg:pt-24 bg-b3 min-h-screen">
                <div className="container mx-auto px-6 py-8 max-w-3xl">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        {/* Title and Subtitle */}
                        <h1 className="text-4xl font-bold text-p1 mb-4">{receivedRequest.title}</h1>
                        <p className="text-gray-700 mb-10">{receivedRequest.subtitle}</p>

                        {/* Sections from data */}
                        {receivedRequest.sections?.map((section, sectionIdx) => {
                            // Skip empty sections
                            if (!section.content || section.content.length === 0) {
                                return null;
                            }

                            // Skip sections with empty title and single empty content
                            if (section.title === "" && section.content.length === 1 && section.content[0] === "") {
                                return null;
                            }

                            return (
                                <div
                                    key={sectionIdx}
                                    className={`mb-8 ${
                                        section.id === "pro-tip" ? "bg-p1 bg-opacity-10 p-4 rounded-lg" : ""
                                    }`}
                                >
                                    {/* Section Title */}
                                    {section.title && (
                                        <h2 className="text-2xl font-semibold text-p1 mb-4">{section.title}</h2>
                                    )}

                                    {/* Section Content */}
                                    {section.id === "closing" || section.id === "support" ? (
                                        // Special centered layout for closing and support
                                        <div className="text-center">
                                            {section.content.map((item, idx) => (
                                                <div key={idx}>
                                                    <p
                                                        className={
                                                            idx === 0
                                                                ? "font-semibold text-lg mb-2 text-gray-700"
                                                                : "text-p1"
                                                        }
                                                        dangerouslySetInnerHTML={{ __html: formatBold(item) }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>
                                            {section.content.map((item, contentIdx) =>
                                                renderContentItem(item, contentIdx)
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Support and Social */}
                        <div className="border-t pt-6">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="mb-4 md:mb-0">
                                    <p className="text-gray-600">
                                        Having trouble?{" "}
                                        <Link href="mailto:info@healguid.com" className="text-p1 hover:underline">
                                            Contact Us
                                        </Link>{" "}
                                        |{" "}
                                        <Link href="/privacy-policy" className="text-p1 hover:underline">
                                            Privacy Policy
                                        </Link>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-600 mb-2">Stay in touch:</p>
                                    <div className="flex space-x-4">
                                        {receivedRequest.socialLinks &&
                                            receivedRequest.socialLinks.map((social) => (
                                                <a
                                                    key={social.id}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-p1 hover:text-s1 transition-colors"
                                                    aria-label={social.id}
                                                >
                                                    <SocialIcon type={social.icon} />
                                                </a>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer data={{ type: "clients" }} />
        </>
    );
}

// For SSG, ensure the page is pre-rendered
export async function getStaticProps() {
    return {
        props: {},
    };
}
