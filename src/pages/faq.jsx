// src/pages/faq.js
import Head from "next/head";
import { faqs } from "../constants/general";
import { useState } from "react";
import clsx from "clsx";
import Button from "../components/ui/Button";
import Header from "../components/sections/Header";
import dynamic from "next/dynamic";

import Meta from "../components/Meta";
import Schema from "../components/Schema";

// Dynamically import components that need browser APIs
const Modal = dynamic(() => import("../components/ui/Modal"), { ssr: false });
const Newsletter = dynamic(() => import("../components/Newsletter"), { ssr: false });

export default function FAQ() {
    const [openQuestions, setOpenQuestions] = useState(
        new Set([
            "🌿 The Basics",
            "👩‍⚕️ For Holistic Healthcare Practitioners",
            "🌱 For Patients Seeking Holistic Care",
            "💫 Privacy and Support",
        ])
    );

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newsletterType, setNewsletterType] = useState("clients");

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const addOpenQuestion = (question) => {
        setOpenQuestions((prev) => {
            const newSet = new Set(prev);
            newSet.add(question);
            return newSet;
        });
    };

    const removeOpenQuestion = (question) => {
        setOpenQuestions((prev) => {
            const newSet = new Set(prev);
            newSet.delete(question);
            return newSet;
        });
    };

    const isSetOpenQuestion = (question) => {
        return openQuestions.has(question);
    };

    const menus = faqs.menus;

    const ChevronIcon = ({ isOpen, className }) => (
        <svg
            className={("size-6 ml-2 text-p1 ", className)}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d={isOpen ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} />
        </svg>
    );

    return (
        <>
            <Meta
                title="Holistic Healthcare FAQs | HealGuid Support"
                description="What conditions does holistic medicine treat? How do you choose a holistic practitioner? Find expert answers on holistic treatments, functional medicine, and how to book your first consultation."
                path="faq"
            />

            <Schema
                schemas={[
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.questionGroups.flatMap(({ questions }) =>
                            questions.map(({ question, answer }) => ({
                                "@type": "Question",
                                name: question,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: answer,
                                },
                            }))
                        ),
                    },
                ]}
            />

            <section className="py-16 max-md:pt-20 max-lg:pt-28 lg:pt-44 bg-b3 lg:min-h-lvh">
                {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <Newsletter type={newsletterType} onClose={handleCloseModal} />
                    </Modal>
                )}

                <Header data={{ menus, type: "partners" }} func={{ handleOpenModal }} />

                <div className="container">
                    <h1 className="font-medium lg:h3 max-lg:h4 max-md:text-2xl text-p1 max-lg:mb-0 max-md:mb-4 max-md:leading-10 whitespace-pre-line max-lg:mx-auto">
                        {faqs.title}
                    </h1>
                    <p className="mt-4 text-lg mb-12 font-normal">{faqs.description}</p>
                    <div className="flex flex-wrap">
                        {faqs.questionGroups.length &&
                            faqs.questionGroups.map(({ id, title, questions }) => (
                                <div key={id} className="basis-full mb-8 flex flex-wrap">
                                    <h2 className="flex-none font-semibold text-2xl max-md:text-xl">{title}</h2>

                                    {/* Group of Questions */}
                                    <div
                                        className={clsx(
                                            "mt-3 basis-full tracking-2",
                                            !isSetOpenQuestion(title) && "hidden"
                                        )}
                                    >
                                        {questions.map(({ id, question, answer, button }) => (
                                            <div
                                                className="mb-4 flex flex-wrap flex-row justify-between ml-4 max-md:ml-4 cursor-pointer"
                                                key={id}
                                                onClick={() =>
                                                    !isSetOpenQuestion(question)
                                                        ? addOpenQuestion(question)
                                                        : removeOpenQuestion(question)
                                                }
                                            >
                                                <div className="flex items-center">
                                                    <h3 className="font-semibold tracking-3 md:text-xl max-md:text-lg text-p1 text-wrap">
                                                        {question}
                                                    </h3>
                                                    <ChevronIcon
                                                        isOpen={isSetOpenQuestion(question)}
                                                        className="w-6 h-6 flex-shrink-0 ml-2 text-p1"
                                                    />
                                                </div>

                                                {isSetOpenQuestion(question) && (
                                                    <div className=" mt-2 mb-8 w-full">
                                                        <p className="w-full text-lg mb-4 max-md:text-base whitespace-pre-line">
                                                            {answer}
                                                        </p>
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
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}
