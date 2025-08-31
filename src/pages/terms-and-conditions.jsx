import { useState, useEffect } from "react";
import Header from "../components/sections/Header";
import { termsData } from "../constants/terms";
import Meta from "../components/others/Meta";

export default function TermsAndConditions() {
    const [openSections, setOpenSections] = useState(
        new Set([
            "introduction",
            "definitions",
            "platform-overview",
            "verification",
            "exclusivity",
            "financial-terms",
            "professional-standards",
            "data-protection",
            "insurance-liability",
            "termination",
            "dispute-resolution",
            "compliance",
            "",
        ])
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredSections, setFilteredSections] = useState([]);

    // Search functionality
    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredSections([]);
            return;
        }

        const query = searchQuery.toLowerCase();
        const results = termsData.sections.filter(
            (section) => section.title.toLowerCase().includes(query) || section.content.toLowerCase().includes(query)
        );

        setFilteredSections(results);
    }, [searchQuery]);

    const handleToggleSection = (sectionId) => {
        setOpenSections((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(sectionId)) {
                newSet.delete(sectionId);
            } else {
                newSet.add(sectionId);
            }
            return newSet;
        });
    };

    const isSectionOpen = (sectionId) => {
        return openSections.has(sectionId);
    };

    const ChevronIcon = ({ isOpen }) => (
        <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );

    const formatContent = (content) => {
        return content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("**") && paragraph.includes("**")) {
                const boldPattern = /\*\*(.*?)\*\*/g;
                const parts = paragraph.split(boldPattern);
                return (
                    <div key={index} className="mb-4">
                        {parts.map((part, i) =>
                            i % 2 === 1 ? (
                                <h4 key={i} className="font-semibold text-lg mb-2 text-teal-700">
                                    {part}
                                </h4>
                            ) : (
                                part && (
                                    <p key={i} className="mb-2 text-gray-800">
                                        {part}
                                    </p>
                                )
                            )
                        )}
                    </div>
                );
            } else if (paragraph.includes("- ")) {
                const lines = paragraph.split("\n");
                const bullets = lines.filter((line) => line.trim().startsWith("- "));
                const nonBullets = lines.filter((line) => !line.trim().startsWith("- ") && line.trim());

                return (
                    <div key={index} className="mb-4">
                        {nonBullets.map((line, i) => (
                            <p key={i} className="mb-2 text-gray-800">
                                {line}
                            </p>
                        ))}
                        {bullets.length > 0 && (
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800">
                                {bullets.map((bullet, i) =>
                                    bullet.includes("***") ? (
                                        <li key={i}>
                                            {bullet.split("***")[0].replace("- ", "")}
                                            <strong>{bullet.split("***")[1]}</strong>
                                            {bullet.split("***")[2]}
                                        </li>
                                    ) : (
                                        <li key={i}>{bullet.replace("- ", "")}</li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>
                );
            } else if (paragraph.match(/^\d+\./)) {
                return (
                    <ol key={index} className="list-decimal list-inside space-y-2 ml-4 mb-4 text-gray-800">
                        <li>{paragraph.replace(/^\d+\.\s*/, "")}</li>
                    </ol>
                );
            } else {
                return (
                    <p key={index} className="mb-4 text-gray-800">
                        {paragraph}
                    </p>
                );
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Meta
                title="Terms & Conditions – HealGuid"
                description="Read HealGuid’s Terms & Conditions covering verification, patient bookings, fees and platform use."
                keywords="terms and conditions, partnership agreements, therapist terms, platform use, legal agreements, practitioner responsibilities, client rights, HealGuid terms"
                path="terms-and-conditions"
                canonicalUrl="https://healguid.com/terms-and-conditions"
            />
            <Header data={{ menus: termsData.menus, type: "terms", extra: "terms" }} />

            {/* Main Content */}

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-teal-700 mb-4">{termsData.title}</h1>
                    <p className="text-lg text-gray-700 mb-8">{termsData.description}</p>

                    {/* Document Info */}
                    <div className="w-full max-w-4xl mx-auto mb-8 rounded-lg p-8 text-center bg-blue-50 border border-blue-200">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl mb-2" role="img" aria-label="Handshake">
                                🤝
                            </span>
                            <h2 className="text-3xl font-medium mb-4">Our Partnership Promise</h2>
                            <p className="text-lg mb-4">
                                Building Trust Through Clear Terms &amp; Fair Practice — These terms protect both your
                                practice and our platform, ensuring we build something great together.
                            </p>
                            <div className="flex flex-wrap gap-8 justify-center text-sm  mt-2">
                                <div>
                                    <span className="font-semibold text-gray-700">Effective Date:</span>
                                    <div className="text-gray-600">{termsData.effectiveDate}</div>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-700">Last Updated:</span>
                                    <div className="text-gray-600">{termsData.lastUpdated}</div>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-700">Version:</span>
                                    <div className="text-gray-600">{termsData.version}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative mb-8">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search terms and conditions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border-2 border-s1 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-p1 focus:border-p1"
                        />
                    </div>

                    {/* Search Results */}
                    {searchQuery.trim() !== "" && (
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                Search Results ({filteredSections.length})
                            </h2>
                            {filteredSections.length === 0 ? (
                                <p className="text-gray-600">
                                    No sections found. Try different keywords or browse all sections below.
                                </p>
                            ) : (
                                <div className="space-y-3">
                                    {filteredSections.map((section) => (
                                        <div
                                            key={section.id}
                                            className="p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors cursor-pointer bg-white"
                                            onClick={() => {
                                                setSearchQuery("");
                                                handleToggleSection(section.id);
                                                document
                                                    .getElementById(section.id)
                                                    ?.scrollIntoView({ behavior: "smooth" });
                                            }}
                                        >
                                            <h3 className="font-semibold text-teal-700 flex items-center">
                                                <span className="mr-2">{section.emoji}</span>
                                                {section.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                                {section.content.substring(0, 150)}...
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Terms Sections */}
                <div className="space-y-4">
                    {termsData.sections.map((section) => (
                        <div
                            key={section.id}
                            id={section.id}
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                        >
                            {/* Section Header */}
                            <div
                                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => handleToggleSection(section.id)}
                            >
                                <h3 className="flex items-center text-xl font-semibold text-teal-700">
                                    <span className="mr-3 text-2xl">{section.emoji}</span>
                                    {section.title}
                                </h3>
                                <ChevronIcon isOpen={isSectionOpen(section.id)} />
                            </div>

                            {/* Section Content */}
                            {isSectionOpen(section.id) && (
                                <div className="px-6 pb-6 border-t border-gray-100">
                                    <div className="pt-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            {formatContent(section.content)}
                                        </div>

                                        {section.id === "introduction" && (
                                            <div className="mt-6">
                                                <a
                                                    href="https://drive.google.com/file/d/1N1_AhDzc-wChk2s3YT84XivwTy5l-pEd/view?usp=sharing"
                                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-colors"
                                                >
                                                    Download PDF Copy →
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Questions About These Terms?</h2>
                    <p className="mb-6 text-gray-700">
                        Contact our legal team at{" "}
                        <a href="mailto:legal@healguid.com" className="text-teal-600 hover:text-teal-800">
                            legal@healguid.com
                        </a>{" "}
                        or our support team at{" "}
                        <a href="mailto:support@healguid.com" className="text-teal-600 hover:text-teal-800">
                            support@healguid.com
                        </a>{" "}
                        for clarification on any provisions in these terms and conditions.
                    </p>

                    <hr className="border-gray-300 my-6" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                            <strong>Document Version:</strong> <span>{termsData.version} - July 2025</span>
                        </div>
                        <div>
                            <strong>Last Updated:</strong> <span>{termsData.lastUpdated}</span>
                        </div>
                        <div>
                            <strong>Next Review:</strong> <span>January 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
