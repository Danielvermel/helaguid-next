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
            {
                "@type": "Question",
                name: "What is HealGuid and how does it help with chronic health conditions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "HealGuid connects you with rigorously verified holistic practitioners who understand your unique health journey. Our live platform provides immediate access to specialists in functional medicine, naturopathy, integrative health, and more. We offer premium-verified practitioners across London and the UK specializing in chronic conditions, with an instant booking system for virtual and in-person consultations.",
                },
            },
            {
                "@type": "Question",
                name: "Is HealGuid available now, and when will the full platform launch?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "HealGuids MVP is live! You can browse our founding network of verified practitioners and book consultations today. Available now: Directory of verified holistic practitioners across London and the UK, secure practitioner profiles with credentials and patient reviews, direct booking system for consultations, and encrypted practitioner-patient messaging system.",
                },
            },
            {
                "@type": "Question",
                name: "Can I find holistic practitioners in London and the UK through HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! HealGuid connects you with verified holistic practitioners across London and the UK. Our founding network includes practitioners in Central London, North London, South London, East and West London, as well as Manchester, Birmingham, Edinburgh, with growing coverage across England, Scotland, and Wales.",
                },
            },
            {
                "@type": "Question",
                name: "What makes HealGuid different from conventional healthcare platforms?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "HealGuid reimagines holistic healthcare access by focusing on root cause approaches, verified expertise, and patient-centered experience. Practitioners investigate underlying causes of chronic conditions, provide personalized care plans, and integrate functional testing, nutrition, and lifestyle approaches.",
                },
            },
            {
                "@type": "Question",
                name: "What types of holistic practitioners will I find on HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our platform connects you with verified specialists including Functional Medicine Doctors, Integrative Medicine Physicians, Naturopathic Physicians, Nutritional Therapists, Clinical Nutritionists, Traditional Chinese Medicine practitioners, Ayurvedic Specialists, Medical Herbalists, Mind-Body Specialists, and Health Coaches.",
                },
            },
            {
                "@type": "Question",
                name: "How does booking a holistic consultation work on HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Browse verified practitioners by location, specialty, and condition focus. Review detailed profiles including credentials, patient reviews, and consultation fees. Contact practitioners directly through our secure messaging system. Arrange consultations (virtual or in-person) based on your preference. Complete intake forms if requested and begin your personalized wellness journey.",
                },
            },
            {
                "@type": "Question",
                name: "How can HealGuid help with specific conditions like chronic fatigue or autoimmune issues?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "HealGuid specializes in connecting you with practitioners experienced in complex chronic conditions. We have specialists for Chronic Fatigue SyndromeME, autoimmune conditions like rheumatoid arthritis and Hashimotos, digestive health disorders including IBS and SIBO, hormonal imbalances, fibromyalgia, Long COVID recovery, and environmental illness.",
                },
            },
            {
                "@type": "Question",
                name: "Is my health information safe with HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your privacy and data security are our top priorities. HealGuid is built with healthcare-grade security measures including GDPR compliance with explicit consent mechanisms, healthcare-grade encryption for all sensitive health information, secure messaging systems, and strict access controls ensuring only your chosen practitioners can access your information.",
                },
            },
            {
                "@type": "Question",
                name: "What about the cost of holistic healthcare through HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We believe holistic healthcare should be accessible and transparent. Platform access is free to browse our practitioner directory and educational resources with no booking fees. Consultation fees typically range from 75-200 depending on practitioner credentials and session length. We offer transparent pricing with all consultation fees clearly displayed before booking.",
                },
            },
            {
                "@type": "Question",
                name: "How much does it cost to join HealGuid as a practitioner?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Joining HealGuid is free with no upfront costs or setup fees. We offer free profile creation with professional verification, no payment information required to set up your listing, 3-month free trial of all premium features, and no long-term contracts with complete flexibility to leave anytime.",
                },
            },
            {
                "@type": "Question",
                name: "What are HealGuids practitioner subscription plans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer flexible options including Early Adopter Benefits with 3-month free trial until Dec 2025, Basic Plan at 49month with professional verified profile and standard placement, Premium Plan at 99month with priority placement and enhanced features, and Enterprise Solutions with custom pricing for multi-practitioner clinics.",
                },
            },
            {
                "@type": "Question",
                name: "Does HealGuid take any commission or percentage of my earnings?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we apply an 8-15 commission on consultations booked through our platform, depending on practitioner level and number of consultations. This creates perfect alignment between your success and ours - we only earn when we help you connect with new patients. No commission on existing patients you bring to the platform.",
                },
            },
            {
                "@type": "Question",
                name: "How does HealGuid verify holistic practitioners?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Were committed to maintaining the highest standards through comprehensive verification including credential verification of all degrees and certifications, active license confirmation with regulatory bodies, professional background checks, insurance verification, specialization review, continuing education verification, and ongoing quality assurance through patient feedback monitoring.",
                },
            },
            {
                "@type": "Question",
                name: "What if I need help using HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Were committed to supporting your holistic health journey with comprehensive help resources including a friendly support team knowledgeable about holistic healthcare, platform tutorials, live chat support during business hours, email support with responses within 24 hours, comprehensive FAQ section, and practitioner matching support.",
                },
            },
            {
                "@type": "Question",
                name: "How do I get started with HealGuid?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For patients: Browse our practitioner directory at healguid.combook, filter by location and specialty, review practitioner profiles, contact practitioners directly through our secure messaging system, schedule your consultation, and begin your personalized healing journey. For practitioners: Apply to join our verified network, complete verification process, create your professional profile, and start connecting with patients.",
                },
            },
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
                                                                                    <b className="font-semibold mb-1 mt-3">
                                                                                        {values.title}
                                                                                    </b>
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
