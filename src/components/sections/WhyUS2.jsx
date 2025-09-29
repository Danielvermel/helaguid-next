import Button from "../ui/Button.jsx";
import PageTitle from "../ui/PageTitle.jsx";
import { useEffect } from "react";
import clsx from "clsx";

const WhyUs = ({ data = {}, func = {} }) => {
    const isModalOpen = !!data?.isModalOpen;

    useEffect(() => {
        if (isModalOpen) document.body.classList.add("overflow-hidden");
        else document.body.classList.remove("overflow-hidden");
        return () => document.body.classList.remove("overflow-hidden");
    }, [isModalOpen]);

    const TextComponent = ({ text = "", strong = "" }) => {
        const s = String(strong ?? "");
        const t = String(text ?? "");
        if (!s) return <div>{t}</div>;
        const [before = "", after = ""] = t.split(s);
        return (
            <div>
                {before}
                <span className="font-semibold">{s}</span>
                {after}
            </div>
        );
    };

    // safe accessors
    const typeStr = typeof data?.type === "string" ? data.type : "";
    const whyUs = data?.whyUs ?? {};
    const exclusive = whyUs?.exclusiveBenefits ?? {};
    const majorPoints = Array.isArray(exclusive?.majorPoints) ? exclusive.majorPoints : [];

    return (
        <section id="why-us" className={`py-16 lg:py-20 ${data?.type?.includes("client") ? "bg-white" : "bg-b3"}`}>
            <div className="container max-w-6xl mx-auto px-4">
                {/* Centered title + subtitle */}
                <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
                    <h2 className="text-4xl font-bold tracking-tight mb-3 text-p1">
                        {data?.whyUs?.title ?? "Why Join HealGuid Early?"}
                    </h2>
                    {data?.whyUs?.subTitle && <p className="text-lg text-gray-600">{data.whyUs.subTitle}</p>}
                </div>

                {/* 2-column card grid */}
                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                    {(Array.isArray(data?.whyUs?.exclusiveBenefits?.majorPoints)
                        ? data.whyUs.exclusiveBenefits.majorPoints
                        : []
                    ).map(({ id, subTitle, points }) => (
                        <div key={id ?? subTitle} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-p1 mb-4">{subTitle}</h3>
                            <ul className="space-y-3">
                                {(Array.isArray(points) ? points : []).map(({ id: pid, text, strong }) => (
                                    <li key={pid ?? text} className="flex gap-3 leading-relaxed">
                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-p1 shrink-0" />
                                        <span>
                                            <TextComponent text={text} strong={strong} />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
