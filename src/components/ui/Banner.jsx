import { useEffect, useState } from "react";
import clsx from "clsx";

const Banner = ({ data }) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={clsx(
                "bg-b11 z-40 w-full py-2 max-lg:hidden transition-all duration-300 ease-in-out",
                hasScrolled ? "sticky -top-5 -translate-y-5 shadow-md" : "fixed -translate-y-0"
            )}
        >
            <span className="flex justify-center text-base">{data.banner.text}</span>
        </div>
    );
};

export default Banner;
