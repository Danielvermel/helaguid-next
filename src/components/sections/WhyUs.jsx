import Button from "../ui/Button.jsx";
import PageTitle from "../ui/PageTitle.jsx";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Head from "next/head";
import { jsonLdWhyUs } from "../../constants/jsonLdData.jsx";

const WhyUs = ({ data, func }) => {
    const [openBenefit, setOpenBenefit] = useState(new Set([]));

    useEffect(() => {
        if (data.isModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [data.isModalOpen]);

    const isSetOpenBenefit = (benefit) => {
        return openBenefit.has(benefit); // Check if the benefit is in the set
    };

    const TextComponent = ({ text, strong }) => {
        // Split the main text around the strong part
        const [before, after] = text.split(strong);

        return (
            <div>
                {before}
                <span className="font-semibold">{strong}</span>
                {after}
            </div>
        );
    };

    return (
        <section
            className={`min-h-screen flex flex-col justify-center lg:p-8 max-lg:py-8 max-sm:py-20 ${
                data.type.includes("client") ? "bg-white" : "bg-b3"
            }`}
            id="why-us"
        >
            <div className="container max-lg:flex max-lg:flex-wrap">
                <PageTitle containerClass="max-lg:basis-full max-lg:text-center mb-8">{data.whyUs.title}</PageTitle>
                <div className="lg:text-xl max-lg:text-base flex flex-row lg:justify-end lg:-mt-16 max-lg:mt-8 lg:mb-12 max-lg:mb-6 mt-8 max-lg:hidden">
                    <Button
                        containerClassName={clsx("lg:w-72 max-lg:w-64 mt-6 mx-0 h-12", data.whyUs.buttonColor)}
                        textClassName="tracking-wide md:font-semibold lg:text-lg max-lg:text-normal"
                        arialLabelText={data.whyUs.buttonArialText}
                        onClick={() => {
                            func.handleOpenModal();
                        }}
                    >
                        {data.whyUs.buttonText}
                    </Button>
                </div>

                <div className="flex lg:gap-16 lg:flex-nowrap flex-wrap max-md:gap-5 lg:-mt-8 max-lg:basis-full max-lg:mx-auto">
                    {/* Points */}
                    <div className="lg:basis-1/2 max-lg:basis-full lg:mt-8 max-lg:mt-4 max-md:mt-2 mb-3 flex">
                        <div className="flex flex-col ">
                            {/* <h2 className="text-4xl font-bold mb-3 text-[#146869]">{data.whyUs.title}</h2> */}

                            <h3 className="text-2xl font-semibold mb-2 text-p1">
                                {data.whyUs.exclusiveBenefits.pointTitle}
                            </h3>
                            <p className="mb-6 text-lg text-gray-600 text-left max-w-2xl">
                                {data.whyUs.exclusiveBenefits.description}
                            </p>
                            <div className="w-full max-w-3xl flex flex-col md:gap-4 max-md:gap-2">
                                {data.whyUs.exclusiveBenefits.majorPoints.map(
                                    ({ id, subTitle, description, points }) => (
                                        <div
                                            key={id}
                                            className="bg-gray-50 rounded-xl shadow flex items-center md:px-6 md:py-4 max-md:px-4 max-md:py-2"
                                        >
                                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-p1 text-white flex items-center justify-center text-xl font-semibold mr-6">
                                                {id}
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="md:text-xl max-md:text-lg text-left font-semibold text-p1">
                                                    {subTitle}
                                                </h4>
                                                <h5>{description}</h5>
                                                <ul className="pl-4 list-disc">
                                                    {points.map(({ id, text }) => (
                                                        <li
                                                            key={id}
                                                            className="md:text-base max-md:text-sm text-gray-700"
                                                        >
                                                            {text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="mt-8 text-gray-500 italic text-sm">
                                Standards last reviewed: Oct 2025&nbsp;•&nbsp;
                                <a href="/faq" className="text-primary-600 hover:underline font-semibold not-italic">
                                    See here
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="max-w-4xl mx-auto sm:p-4 max-sm:p-1 lg:basis-1/2 max-lg:basis-full max-lg:mt-10 lg:mt-4">
                        <h3 className="text-p1 font-semibold mb-6 tracking-2 max-lg:text-center text-2xl">
                            {data.whyUs.tableTitle}
                        </h3>

                        {/* Desktop Table */}
                        <div className="max-sm:hidden">
                            {/* Header Row */}
                            <div className="grid sm:grid-cols-11 max-sm:grid-cols-9 sm:gap-3 max-sm:gap-2 mb-3 text-center text-white">
                                <div className="rounded-lg p-4 sm:col-span-3 max-sm:col-span-3 flex items-center">
                                    <span className="m-auto">{data.whyUs.matterText}</span>
                                </div>
                                <div className="bg-p1 tracking-wider rounded-lg sm:p-4 max-sm:p-3 max-sm:text-xs sm:font-medium max-sm:font-semibold sm:col-span-4 max-sm:col-span-3 flex items-center">
                                    <span className="m-auto">{data.whyUs.company}</span>
                                </div>
                                <div className="bg-p1 tracking-wider rounded-lg sm:p-4 max-sm:p-3 max-sm:text-xs sm:font-medium max-sm:font-semibold sm:col-span-4 max-sm:col-span-3 flex">
                                    <span className="m-auto">{data.whyUs.competitor}</span>
                                </div>
                            </div>

                            {/* Table Content */}
                            <div className="grid sm:grid-cols-11 max-sm:grid-cols-9 sm:gap-4 max-sm:gap-2 rounded-lg">
                                {data.comparisonTable.map(({ id, feature, companyInfo, conventionMedicineInfo }) => (
                                    <div key={id} className="contents">
                                        {/* Feature Name */}
                                        <div className="text-center sm:p-4 max-sm:p-2 bg-p1 text-white rounded-lg sm:text-sm max-sm:text-xs sm:font-medium max-sm:font-medium sm:col-span-3 max-sm:col-span-3 flex">
                                            <span className="m-auto  tracking-2">{feature}</span>
                                        </div>

                                        {/* Company Info - Custom Color */}
                                        <div className="sm:p-4 max-sm:p-2 bg-e1 text-center sm:text-sm max-sm:text-xs text-gray-700 sm:col-span-4 max-sm:col-span-3 rounded flex border ">
                                            <span className="m-auto tracking-2">{companyInfo}</span>
                                        </div>

                                        {/* Competitor Info - Custom Color */}
                                        <div className="sm:p-4 max-sm:p-2 bg-e2 text-gray-700 text-center sm:text-sm max-sm:text-xs sm:col-span-4 max-sm:col-span-3 rounded flex border">
                                            <span className="m-auto tracking-2">{conventionMedicineInfo}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile View - Cards */}
                        <div className="max-w-lg mx-auto space-y-12 sm:hidden">
                            {data.comparisonTable.map(({ id, feature, companyInfo, conventionMedicineInfo }) => (
                                <div key={id}>
                                    <span className="text-xl font-semibold text-teal-700 mb-3">{feature}</span>
                                    <div className="space-y-3 ">
                                        {/* HealGuid's Vision */}
                                        <div className="border bg-e1  rounded-lg p-5 flex flex-wrap shadow-sm">
                                            <span className="text-amber-700 font-semibold basis-full tracking-2">
                                                HealGuid
                                            </span>
                                            <span className="text-gray-700 basis-full tracking-2">{companyInfo}</span>
                                        </div>

                                        {/* Mainstream Approach */}
                                        <div className="bg-e2 border  rounded-lg p-5 flex flex-wrap shadow-sm">
                                            <span className="text-gray-700 font-semibold tracking-2 basis-full">
                                                Mainstream Approach
                                            </span>
                                            <span className=" text-gray-600 tracking-2">{conventionMedicineInfo}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Data Offers - Trust */}
                {/* <div>
                    { data.type.includes("partner") && (
                        <section className="flex-1 mb-8 lg:mt-4">
                            <h3 className="text-p1 text-2xl max-lg:mt-2 font-semibold mb-4">{data.offers.list[2].type}</h3>
                            <article className={clsx("flex flex-wrap flex-row items-stretch")}>
                                {data.offers.list[2].points.map(
                                    ({
                                         id: cardId,
                                         image,
                                         alt,
                                         altTitle,
                                         bgColor,
                                         bgTitleColor,
                                         title,
                                         description,
                                         benefits = false,
                                         categories = false,
                                     }) => (
                                        <div
                                            className={clsx(
                                                "rounded-xl cursor-pointer mb-6",
                                                "lg:w-3/12 max-lg:w-6/12 max-md:w-full"
                                            )}
                                            key={cardId}
                                            onClick={() => handleOpenBenefit(title)}
                                        >
                                            <div
                                                className={clsx(
                                                    "flex flex-col mr-4 rounded-xl h-full",
                                                    isSetOpenBenefit(title) && bgColor
                                                )}
                                            >
                                                <div
                                                    className={clsx(
                                                        "flex rounded-xl p-3 md:min-h-20 hover:shadow-2xl",
                                                        bgTitleColor
                                                    )}
                                                >
                                                    {image && (
                                                        <div className="flex items-center w-1/5">
                                                            <img
                                                                src={image}
                                                                alt={alt}
                                                                title={altTitle}
                                                                loading="lazy"
                                                                className="h-8 mx-auto"
                                                            />
                                                        </div>
                                                    )}

                                                    <b className="flex-1 sm:font-semibold max-sm:font-semibold sm:text-lg max-sm:text-lg text-center m-auto">
                                                        {title}
                                                    </b>
                                                    <div className="flex items-center w-1/12">
                                                        <img
                                                            src={"/images/offers/pointer.png"}
                                                            alt="chevron"
                                                            title="Click to expand or collapse the section"
                                                            loading="lazy"
                                                            className={clsx("h-3 mx-auto mt-auto", {
                                                                "rotate-90": isSetOpenBenefit(title),
                                                            })}
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className={clsx(
                                                        "col-span-2 pt-4 pb-4 pl-3 pr-2 rounded-xl",
                                                        bgColor,
                                                        data.offers.list[2].containerClass,
                                                        {
                                                            "h-auto max-h-[1000px] block transition-all duration-300":
                                                                isSetOpenBenefit(title),
                                                            "h-0 max-h-0 hidden overflow-hidden transition-all duration-0":
                                                                !isSetOpenBenefit(title),
                                                        }
                                                    )}
                                                >
                                                    {data.type.includes("client") && (
                                                        <p className="text-p1 sm:text-normal max-sm:text-sm">
                                                            {description}
                                                        </p>
                                                    )}
                                                    <ul className="list-disc max-lg:pl-8 max-sm:pl-4 lg:pl-4 mt-2 sm:text-normal max-sm:text-sm">
                                                        {!!benefits ? (
                                                            benefits.map(({ id: beneId, boldText, description }) => (
                                                                <li key={beneId} className="mt-2 text-base tracking-2">
                                                                    {boldText && (
                                                                        <span className="font-semibold">{boldText} </span>
                                                                    )}
                                                                    {description}
                                                                </li>
                                                            ))
                                                        ) : (
                                                             <div>
                                                                 <p className="lg:min-h-32 text-base font-normal">
                                                                     {categories.description}
                                                                 </p>
                                                                 <div className="mt-4">
                                                                     {categories.offers.map(
                                                                         ({ id: categoriesId, title, points }) => (
                                                                             <div key={categoriesId}>
                                                                            <span className="font-semibold text-lg">
                                                                                {title}
                                                                            </span>
                                                                                 <ul className="list-disc pl-5 mb-4 text-base">
                                                                                     {points.map(({ id, text }) => (
                                                                                         <li key={id + "_" + text}>
                                                                                             {text}
                                                                                         </li>
                                                                                     ))}
                                                                                 </ul>
                                                                             </div>
                                                                         )
                                                                     )}
                                                                 </div>
                                                             </div>
                                                         )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </article>
                        </section>
                    )


                    }

                </div> */}
            </div>
        </section>
    );
};
export default WhyUs;
