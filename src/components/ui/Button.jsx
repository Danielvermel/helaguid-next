import clsx from "clsx";

const Button = ({
    icon,
    children,
    href,
    containerClassName,
    textClassName,
    onClick,
    arialLabelText,
    markerFill,
    disabled = false,
}) => {
    const Inner = () => (
        <>
            <span className={clsx("relative flex justify-center items-center min-h-[42px] px-4", textClassName)}>
                <span className={clsx("relative z-2", textClassName)}>{children}</span>
            </span>
        </>
    );
    return href ? (
        <a className={clsx("relative rounded-3xl", containerClassName)} href={href} aria-label={arialLabelText}>
            <Inner />
        </a>
    ) : (
        <div className="flex">
            <button
                className={clsx("relative rounded-3xl", containerClassName)}
                onClick={onClick}
                aria-label={arialLabelText}
                disabled={disabled}
            >
                <Inner />
            </button>
        </div>
    );
};
export default Button;
