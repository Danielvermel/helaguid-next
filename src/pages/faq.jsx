// src/pages/faq.js
import Head from "next/head";
import { faqs } from "../constants/faq";
import { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import Header from "../components/sections/Header";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

import Meta from "../components/others/Meta";
import Schema from "../components/others/Schema";

// Dynamically import components that need browser APIs
const Modal = dynamic(() => import("../components/ui/Modal"), { ssr: false });
const Newsletter = dynamic(() => import("../components/others/Newsletter"), { ssr: false });

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

    // --- UI IMPROVEMENT: Revamped ChevronIcon for smooth rotation animation ---
    const ChevronIcon = ({ isOpen, className }) => (
        <svg
            className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : ""
            } ${className}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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
            { "@type": "ListItem", position: 1, name: "Home", item: "https://healguid.com" },
            { "@type": "ListItem", position: 2, name: "FAQs", item: "https://healguid.com/faq" },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.healguid.com/faq#faqpage",
        mainEntity: [
            /* ... existing schema data ... */
        ],
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.healguid.com/faq#webpage",
        /* ... existing schema data ... */
    };

    const popularTopicsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": "https://www.healguid.com/faq#popularTopics",
        /* ... existing schema data ... */
    };

    // Helper to render any schema
    const renderSchema = (schema) => (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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

                <Header data={{ menus: faqs.menus, type: "faq", extra: "faq" }} func={{ handleOpenModal }} />

                <div className="container">
                    <div className="mb-16">
                        <h1 className="font-medium lg:h3 max-lg:h4 max-md:text-2xl text-p1 max-lg:mb-0 max-md:mb-4 max-md:leading-10 max-lg:mx-auto">
                            {faqs.title}
                        </h1>
                        <p className="mt-4 text-lg mb-8 font-normal">{faqs.description}</p>

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
                    </div>

                    <div className="space-y-16">
                        {faqs.questionGroups.length > 0 &&
                            faqs.questionGroups.map(({ id, title, questions }) => (
                                // --- UI IMPROVEMENT: Category group is now a collapsible accordion ---
                                <div id={id} key={id} className="scroll-mt-32">
                                    <div
                                        className="w-full flex items-center justify-between cursor-pointer border-b-2 border-gray-200 pb-4"
                                        onClick={() => handleToggleQuestion(title)}
                                    >
                                        <h2 className="flex-none font-semibold text-2xl max-md:text-xl text-p1">
                                            {title}
                                        </h2>
                                        <ChevronIcon isOpen={isQuestionOpen(title)} className="size-7 text-p1" />
                                    </div>

                                    {/* --- UI IMPROVEMENT: Added transition for smooth expand/collapse --- */}
                                    <div
                                        className={`overflow-hidden transition-all duration-700 ease-in-out ${
                                            isQuestionOpen(title)
                                                ? "max-h-[9999px] opacity-100 pt-8"
                                                : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <div className="space-y-4">
                                            {questions.map(
                                                ({ id: qId, question, answer, description, points, button }) => (
                                                    // --- UI IMPROVEMENT: Restructured question item for better styling and animation ---
                                                    <div
                                                        className="rounded-lg bg-white transition-all duration-300 border border-gray-200 hover:shadow-lg hover:border-p1/50"
                                                        key={qId}
                                                        id={qId}
                                                    >
                                                        <div
                                                            className="flex items-center justify-between cursor-pointer p-6"
                                                            onClick={() => handleToggleQuestion(question)}
                                                        >
                                                            <h3 className="font-semibold tracking-3 md:text-xl max-md:text-lg text-p1 pr-4">
                                                                {question}
                                                            </h3>
                                                            <ChevronIcon
                                                                isOpen={isQuestionOpen(question)}
                                                                className="size-6 text-p1"
                                                            />
                                                        </div>

                                                        {/* --- UI IMPROVEMENT: Container for collapsible content with smooth animation --- */}
                                                        <div
                                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                                                isQuestionOpen(question)
                                                                    ? "max-h-[1500px] opacity-100"
                                                                    : "max-h-0 opacity-0"
                                                            }`}
                                                        >
                                                            <div className="px-6 pb-6">
                                                                <div className="prose prose-lg max-w-none mb-6 border-t border-gray-200 pt-4">
                                                                    {answer.split("\n\n").map((paragraph, index) => {
                                                                        if (paragraph.startsWith("- ")) {
                                                                            return (
                                                                                <ul
                                                                                    key={index}
                                                                                    className="list-disc list-inside space-y-2 ml-4 text-lg mb-4 max-md:text-base"
                                                                                >
                                                                                    {paragraph
                                                                                        .split("\n- ")
                                                                                        .map((item, i) => (
                                                                                            <li key={i}>
                                                                                                {item.replace("- ", "")}
                                                                                            </li>
                                                                                        ))}
                                                                                </ul>
                                                                            );
                                                                        }
                                                                        return (
                                                                            <p
                                                                                key={index}
                                                                                className=" mb-4 max-md:text-base"
                                                                            >
                                                                                {paragraph}
                                                                            </p>
                                                                        );
                                                                    })}
                                                                    {points.length &&
                                                                        points.map((values) => {
                                                                            // List of BulletPoints
                                                                            return (
                                                                                <>
                                                                                    <h3 className="font-semibold mb-1 mt-3">
                                                                                        {values.title}
                                                                                    </h3>
                                                                                    <ul
                                                                                        className={
                                                                                            values.specialClasses
                                                                                                ? values.specialClasses
                                                                                                : "list-disc pl-10"
                                                                                        }
                                                                                    >
                                                                                        {values.bullets.map(
                                                                                            (bullet) => {
                                                                                                return (
                                                                                                    <li>
                                                                                                        <span className="font-semibold">
                                                                                                            {
                                                                                                                bullet.highlight
                                                                                                            }
                                                                                                        </span>{" "}
                                                                                                        {bullet.text}
                                                                                                    </li>
                                                                                                );
                                                                                            }
                                                                                        )}
                                                                                    </ul>
                                                                                </>
                                                                            );
                                                                        })}

                                                                    {description && (
                                                                        <p className="mt-4">{description}</p>
                                                                    )}
                                                                </div>
                                                                <div className="flex max-sm:justify-center">
                                                                    {button.length > 1
                                                                        ? button.map((data) => {
                                                                              return (
                                                                                  data?.hasButton && (
                                                                                      <a href={data.href}>
                                                                                          <Button
                                                                                              arialLabelText={data.alt}
                                                                                              containerClassName={
                                                                                                  data.containerClass
                                                                                              }
                                                                                              textClassName={
                                                                                                  data.textClass
                                                                                              }
                                                                                          >
                                                                                              {data.label}
                                                                                          </Button>
                                                                                      </a>
                                                                                  )
                                                                              );
                                                                          })
                                                                        : button?.hasButton && (
                                                                              <a href={button.href}>
                                                                                  <Button
                                                                                      arialLabelText={button.alt}
                                                                                      containerClassName={
                                                                                          button.containerClass
                                                                                      }
                                                                                      textClassName={button.textClass}
                                                                                  >
                                                                                      {button.label}
                                                                                  </Button>
                                                                              </a>
                                                                          )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="mt-12 p-6 bg-b5 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
                        <p className="mb-6">
                            Contact our friendly support team at support@healguid.com - we're here to help you navigate
                            your holistic health journey.
                        </p>

                        <hr></hr>
                        <div className="my-8">
                            <div>
                                <b>Document Version:</b> <span>1.0 - July 2025</span>
                            </div>
                            <div>
                                <b> Last Updated:</b> <span>July 23, 2025</span>
                            </div>
                            <div>
                                <b>Next Review:</b> <span>September 2025</span>
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
