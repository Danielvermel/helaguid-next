// src/pages/faq.js
import Head from "next/head";
import { faqs } from "../constants/faq";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Button from "../components/ui/Button";
import Header from "../components/sections/Header";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

import Meta from "../components/Meta";
import Schema from "../components/Schema";

// Dynamically import components that need browser APIs
const Modal = dynamic(() => import("../components/ui/Modal"), { ssr: false });
const Newsletter = dynamic(() => import("../components/Newsletter"), { ssr: false });

export default function FAQ() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [openQuestions, setOpenQuestions] = useState(new Set());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newsletterType, setNewsletterType] = useState("clients");
    const [activeFeedback, setActiveFeedback] = useState({});

    // Enhanced initial state - open first question of each category for better SEO
    useEffect(() => {
        // Initialize with first question of each category open
        const initialOpenSet = new Set();
        faqs.questionGroups.forEach((group) => {
            initialOpenSet.add(group.title);
            if (group.questions.length > 0) {
                initialOpenSet.add(group.questions[0].question);
            }
        });
        setOpenQuestions(initialOpenSet);

        // Check for URL hash to open specific question
        if (router.asPath.includes("#")) {
            const id = router.asPath.split("#")[1];
            const groupToOpen = faqs.questionGroups.find((group) => group.id === id);
            if (groupToOpen) {
                handleToggleQuestion(groupToOpen.title);
            }
        }
    }, [router.asPath]);

    // Enhanced search functionality
    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredQuestions([]);
            return;
        }

        const query = searchQuery.toLowerCase();
        const results = [];

        faqs.questionGroups.forEach((group) => {
            group.questions.forEach((q) => {
                if (q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query)) {
                    results.push({
                        ...q,
                        groupTitle: group.title,
                        groupId: group.id,
                    });
                }
            });
        });

        setFilteredQuestions(results);
    }, [searchQuery]);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleToggleQuestion = (question) => {
        setOpenQuestions((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(question)) {
                newSet.delete(question);
            } else {
                newSet.add(question);
            }
            return newSet;
        });
    };

    const isQuestionOpen = (question) => {
        return openQuestions.has(question);
    };

    const handleFeedback = (questionId, isHelpful) => {
        setActiveFeedback((prev) => ({
            ...prev,
            [questionId]: isHelpful,
        }));

        // Here you would typically send this feedback to your analytics or backend
        console.log(`Feedback for question ${questionId}: ${isHelpful ? "Helpful" : "Not helpful"}`);
    };

    const ChevronIcon = ({ isOpen, className }) => (
        <svg
            className={clsx("size-6 ml-2 text-p1", className)}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d={isOpen ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} />
        </svg>
    );

    // Process answers to be more SEO-friendly in schema
    const processAnswerForSchema = (answer) => {
        // Remove emoji at the beginning
        let processed = answer.replace(/^[^\w]*✨\s*/, "");
        // Remove bullet points and replace with commas for readability
        processed = processed.replace(/\n- /g, ", ");
        // Remove all other newlines and replace with spaces
        processed = processed.replace(/\n/g, " ");
        return processed;
    };

    const breadcrumbSchema = {
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
                name: "FAQs",
                item: "https://healguid.com/faq",
            },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.healguid.com/faq#faqpage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is HealGuid and how does it help with chronic health conditions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Think of us as your wellness matchmaker! We connect you with trusted holistic health practitioners who specialize in chronic conditions and truly understand your unique health and wellness journey...",
                },
            },
            {
                "@type": "Question",
                name: "What types of holistic practitioners can I find on HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We're bringing together amazing practitioners in Functional Medicine, Naturopathic Medicine, Traditional Chinese Medicine, Ayurvedic Practice, Nutrition & Wellness, Integrative Medicine, Mind-Body Specialists, and Herbalists & Botanical Medicine...",
                },
            },
            {
                "@type": "Question",
                name: "How does HealGuid verify holistic practitioners?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We're here to showcase practitioners' expertise and build trust with patients! Our thorough verification process ensures practitioners stand out as trusted holistic care providers...",
                },
            },
            {
                "@type": "Question",
                name: "Is my health information safe with HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! We prioritize security and confidentiality. We are HIPAA-compliant and GDPR-ready to meet the highest data protection standards...",
                },
            },
            {
                "@type": "Question",
                name: "How do I get started with HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Getting started is simple! Create your free profile, browse our verified practitioners by specialty or condition, schedule a consultation, and begin your personalized health journey.",
                },
            },
            {
                "@type": "Question",
                name: "What conditions do holistic practitioners treat?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Holistic practitioners on HealGuid address a wide range of health conditions including chronic fatigue syndrome, fibromyalgia, autoimmune disorders, digestive issues like IBS and SIBO, hormonal imbalances, thyroid conditions, and more.",
                },
            },
            {
                "@type": "Question",
                name: "Can I use HealGuid if I'm already seeing a conventional doctor?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Many users work with both conventional and holistic practitioners to create a comprehensive approach to health.",
                },
            },
            {
                "@type": "Question",
                name: "Are virtual consultations available through HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, most practitioners on HealGuid offer secure virtual consultations, making holistic healthcare accessible regardless of your location.",
                },
            },
        ],
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.healguid.com/faq#webpage",
        url: "https://www.healguid.com/faq",
        name: "Holistic Healthcare FAQ | Natural Health & Wellness",
        description:
            "Discover how holistic medicine works, what conditions it treats, and how to find the right functional practitioner for your health journey.",
        isPartOf: {
            "@id": "https://www.healguid.com/#website",
        },
        about: {
            "@type": "Thing",
            name: "Holistic Healthcare",
            description:
                "Comprehensive approach to health that treats the whole person and addresses root causes of health conditions.",
        },
        keywords: "holistic healthcare faq, natural health, wellness, chronic conditions, holistic practitioners",
        datePublished: "2025-01-15T08:00:00Z",
        dateModified: "2025-04-01T10:30:00Z",
        inLanguage: "en-US",
    };

    const popularTopicsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": "https://www.healguid.com/faq#popularTopics",
        name: "Popular Holistic Health Topics",
        description: "Frequently searched holistic health topics on HealGuid",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Natural Medicine",
                url: "https://www.healguid.com/topics/natural-medicine",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Chronic Fatigue",
                url: "https://www.healguid.com/topics/chronic-fatigue",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Autoimmune Support",
                url: "https://www.healguid.com/topics/autoimmune-support",
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "Gut Health",
                url: "https://www.healguid.com/topics/gut-health",
            },
            {
                "@type": "ListItem",
                position: 5,
                name: "Naturopathy",
                url: "https://www.healguid.com/topics/naturopathy",
            },
            {
                "@type": "ListItem",
                position: 6,
                name: "Hormone Balance",
                url: "https://www.healguid.com/topics/hormone-balance",
            },
            {
                "@type": "ListItem",
                position: 7,
                name: "Integrative Health",
                url: "https://www.healguid.com/topics/integrative-health",
            },
            {
                "@type": "ListItem",
                position: 8,
                name: "Natural Wellness",
                url: "https://www.healguid.com/topics/natural-wellness",
            },
        ],
    };

    // Helper to render any schema
    const renderSchema = (schema) => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
    return (
        <>
            <Head>
                {renderSchema(breadcrumbSchema)}
                {renderSchema(faqSchema)}
                {renderSchema(webPageSchema)}
                {renderSchema(popularTopicsSchema)}
            </Head>

            <Meta
                title="Holistic Healthcare FAQ | Natural Health & Wellness"
                description="Discover how holistic medicine works, what conditions it treats, and how to find the right functional practitioner for your health journey."
                keywords="holistic healthcare faq, natural health, wellness, chronic conditions, holistic practitioners"
                path="faq"
                canonicalUrl="https://healguid.com/faq"
            />

            <section className="py-16 max-md:pt-20 max-lg:pt-28 lg:pt-44 bg-b3 lg:min-h-lvh">
                {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <Newsletter type={newsletterType} onClose={handleCloseModal} />
                    </Modal>
                )}

                <Header data={{ menus: faqs.menus, type: "partners" }} func={{ handleOpenModal }} />

                <div className="container">
                    <div className="mb-16">
                        <h1 className="font-medium lg:h3 max-lg:h4 max-md:text-2xl text-p1 max-lg:mb-0 max-md:mb-4 max-md:leading-10 max-lg:mx-auto">
                            {faqs.title}
                        </h1>
                        <p className="mt-4 text-lg mb-8 font-normal">{faqs.description}</p>

                        {/* Enhanced search bar */}
                        <div className="relative max-w-2xl mx-auto mb-12">
                            <input
                                type="text"
                                placeholder="Search questions about holistic healthcare..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full p-4 pl-12 text-lg border-2 border-p1 rounded-full focus:outline-none focus:ring-2 focus:ring-p1"
                                aria-label="Search frequently asked questions"
                            />
                            <svg
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        {/* Search results */}
                        {searchQuery.trim() !== "" && (
                            <div className="mb-12">
                                <h2 className="text-xl font-semibold mb-4">
                                    Search Results ({filteredQuestions.length})
                                </h2>
                                {filteredQuestions.length === 0 ? (
                                    <p>No questions found. Try different keywords or browse all questions below.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {filteredQuestions.map((q) => (
                                            <div
                                                key={q.id}
                                                className="p-4 border border-gray-200 rounded-lg hover:border-p1 transition-colors"
                                            >
                                                <Link href={`#${q.groupId}`} className="block">
                                                    <h3 className="font-semibold text-p1">{q.question}</h3>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Category: {q.groupTitle}
                                                    </p>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Quick navigation removed as requested */}
                    </div>

                    <div className="flex flex-wrap">
                        {faqs.questionGroups.length > 0 &&
                            faqs.questionGroups.map(({ id, title, questions }) => (
                                <div id={id} key={id} className="basis-full mb-16 flex flex-wrap scroll-mt-32">
                                    <div
                                        className="w-full flex items-center justify-between cursor-pointer"
                                        onClick={() => handleToggleQuestion(title)}
                                    >
                                        <h2 className="flex-none font-semibold text-2xl max-md:text-xl">{title}</h2>
                                        <ChevronIcon
                                            isOpen={isQuestionOpen(title)}
                                            className="w-6 h-6 flex-shrink-0 ml-2 text-p1"
                                        />
                                    </div>

                                    {/* Group of Questions */}
                                    <div
                                        className={clsx(
                                            "mt-6 basis-full tracking-2",
                                            !isQuestionOpen(title) && "opacity-0 h-0 overflow-hidden"
                                        )}
                                    >
                                        {questions.map(({ id: qId, question, answer, button }) => (
                                            <div
                                                className="mb-8 rounded-lg p-4 border-l-4 border-s1 hover:border-p1 transition-colors bg-white"
                                                key={qId}
                                                id={qId}
                                            >
                                                <div
                                                    className="flex items-center justify-between cursor-pointer"
                                                    onClick={() => handleToggleQuestion(question)}
                                                >
                                                    <h3 className="font-semibold tracking-3 md:text-xl max-md:text-lg text-p1 text-wrap">
                                                        {question}
                                                    </h3>
                                                    <ChevronIcon
                                                        isOpen={isQuestionOpen(question)}
                                                        className="w-6 h-6 flex-shrink-0 ml-2 text-p1"
                                                    />
                                                </div>

                                                <div
                                                    className={clsx(
                                                        "mt-4 mb-2 w-full",
                                                        !isQuestionOpen(question) && "opacity-0 h-0 overflow-hidden"
                                                    )}
                                                >
                                                    <div className="prose prose-lg max-w-none mb-6">
                                                        {answer.split("\n\n").map((paragraph, index) => {
                                                            if (paragraph.startsWith("- ")) {
                                                                return (
                                                                    <ul
                                                                        key={index}
                                                                        className="list-disc list-inside space-y-2 ml-4 text-lg mb-4 max-md:text-base"
                                                                    >
                                                                        {paragraph.split("\n- ").map((item, i) => (
                                                                            <li key={i}>{item.replace("- ", "")}</li>
                                                                        ))}
                                                                    </ul>
                                                                );
                                                            } else {
                                                                return (
                                                                    <p
                                                                        key={index}
                                                                        className="text-lg mb-4 max-md:text-base"
                                                                    >
                                                                        {paragraph}
                                                                    </p>
                                                                );
                                                            }
                                                        })}
                                                    </div>
                                                    {button?.hasButton &&
                                                        (button?.hasNewsletter ? (
                                                            <Button
                                                                arialLabelText={button.alt}
                                                                containerClassName={button.containerClass}
                                                                textClassName={button.textClass}
                                                                onClick={() => {
                                                                    setNewsletterType(button.newsletterType);
                                                                    handleOpenModal();
                                                                }}
                                                            >
                                                                {button.label}
                                                            </Button>
                                                        ) : (
                                                            <a href={button.href}>
                                                                <Button
                                                                    arialLabelText={button.alt}
                                                                    containerClassName={button.containerClass}
                                                                    textClassName={button.textClass}
                                                                >
                                                                    {button.label}
                                                                </Button>
                                                            </a>
                                                        ))}

                                                    {/* Feedback mechanism */}
                                                    <div className="mt-6 flex items-center justify-end space-x-4 text-sm text-gray-500">
                                                        <span>Was this answer helpful?</span>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleFeedback(qId, true);
                                                            }}
                                                            className={clsx(
                                                                "px-3 py-1 rounded-full",
                                                                activeFeedback[qId] === true
                                                                    ? "bg-green-100 text-green-700"
                                                                    : "bg-gray-100 hover:bg-green-50"
                                                            )}
                                                            aria-label="This answer was helpful"
                                                        >
                                                            Yes
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleFeedback(qId, false);
                                                            }}
                                                            className={clsx(
                                                                "px-3 py-1 rounded-full",
                                                                activeFeedback[qId] === false
                                                                    ? "bg-red-100 text-red-700"
                                                                    : "bg-gray-100 hover:bg-red-50"
                                                            )}
                                                            aria-label="This answer was not helpful"
                                                        >
                                                            No
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Related content section with keyword-rich text */}
                    <div className="mt-12 p-6 bg-b5 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Still Have Questions About Holistic Healthcare?</h2>
                        <p className="mb-6">
                            Can't find what you're looking for? We're here to help with your holistic healthcare
                            journey, whether you're a patient seeking care or a practitioner interested in joining our
                            network.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-3">Popular Holistic Health Topics</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                <div className="bg-white p-3 rounded-lg text-center">Natural Medicine</div>
                                <div className="bg-white p-3 rounded-lg text-center">Chronic Fatigue</div>
                                <div className="bg-white p-3 rounded-lg text-center">Autoimmune Support</div>
                                <div className="bg-white p-3 rounded-lg text-center">Gut Health</div>
                                <div className="bg-white p-3 rounded-lg text-center">Naturopathy</div>
                                <div className="bg-white p-3 rounded-lg text-center">Hormone Balance</div>
                                <div className="bg-white p-3 rounded-lg text-center">Integrative Health</div>
                                <div className="bg-white p-3 rounded-lg text-center">Natural Wellness</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold mb-3">Contact Our Support Team</h3>
                                <p className="mb-4">
                                    Our team is ready to answer any questions about holistic health treatments, natural
                                    approaches, and connecting with the right practitioner for your needs.
                                </p>
                                <a
                                    href="mailto:info@healguid.com"
                                    className="inline-flex items-center text-p1 font-medium hover:underline"
                                >
                                    Email Our Holistic Health Team
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold mb-3">Join Our Holistic Health Community</h3>
                                <p className="mb-4">
                                    Connect with others on their holistic health journey, learn about natural approaches
                                    for chronic conditions, and get personalized support.
                                </p>
                                <button
                                    onClick={() => {
                                        setNewsletterType("client");
                                        handleOpenModal();
                                    }}
                                    className="inline-flex items-center text-p1 font-medium hover:underline"
                                >
                                    Get Natural Health Updates
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// For SSG, ensure the page is pre-rendered
export async function getStaticProps() {
    return {
        props: {},
    };
}
