import Button from "../ui/Button.jsx";
import PageTitle from "../ui/PageTitle.jsx";
import { useEffect } from "react";
import clsx from "clsx";
import Head from "next/head";
import { jsonLdWhyUs } from "../../constants/jsonLdData.jsx";

const WhyUs = ({ data, func }) => {
    useEffect(() => {
        if (data.isModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [data.isModalOpen]);

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
                <PageTitle containerClass="max-lg:basis-full max-lg:text-center">{data.whyUs.title}</PageTitle>
                <div className="lg:text-xl max-lg:text-base flex flex-row lg:justify-end lg:-mt-16 max-lg:mt-8 lg:mb-12 max-lg:mb-6 max-lg:hidden">
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

                {/* <h1 className="text-center mx-auto text-p1 lg:h4 max-lg:h5">{causes.title}</h1> */}

                <div className="flex lg:gap-16 lg:flex-nowrap flex-wrap max-md:gap-5 lg:-mt-8 max-lg:basis-full max-lg:mx-auto">
                    {/* Points */}
                    <div className="lg:basis-1/2 max-lg:basis-full lg:mt-14 max-lg:mt-4 max-md:mt-2 mb-3 flex">
                        {data?.whyUs?.exclusiveBenefits?.majorPoints.length && (
                            <div className="h-full mx-auto">
                                {/* Care Benefits */}
                                <div className="lg:basis-full max-lg:mx-auto">
                                    <h3 className="text-p1 text-2xl font-semibold lg:mb-8 lg:-mt-6 max-lg:text-center tracking-2 max-lg:hidden">
                                        {data.whyUs?.exclusiveBenefits?.title}
                                    </h3>
                                    {data?.whyUs?.exclusiveBenefits?.majorPoints.map(({ id, subTitle, points }) => (
                                        <div key={id} className="max-lg:flex max-lg:flex-wrap lg:ml-6">
                                            <h4 className="text-p1 text-xl font-semibold max-lg:basis-full max-lg:text-center tracking-2">
                                                {subTitle}
                                            </h4>
                                            <ul className="list-disc sm:pl-8 max-sm:pl-4 max-lg:mx-auto max-lg:mb-8 lg:mb-8">
                                                {points.map(({ id, text, strong }) => (
                                                    <li
                                                        key={id}
                                                        className="relative z-2 basis-full sm:text-lg py-1 max-sm:text-base max-md:flex-320"
                                                    >
                                                        <TextComponent text={text} strong={strong} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <Head>
                                    <script type="application/ld+json">{JSON.stringify(jsonLdWhyUs.doctor)}</script>
                                </Head>
                                <img
                                    src="/images/why-us/doctor-conventional.webp"
                                    loading="lazy"
                                    alt="image of a doctor holding a herbal cup and a stethoscope, symbolizing integrative medicine"
                                    title="integrative medicine"
                                    className="rounded-xl mt-6 max-w-full h-auto max-h-32 max-lg:mx-auto"
                                />
                            </div>
                        )}
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
                                <div className="bg-p1 rounded-lg p-4 sm:col-span-3 max-sm:col-span-3 opacity-0"></div>
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
            </div>
        </section>
    );
};
export default WhyUs;
