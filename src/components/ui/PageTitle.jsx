import clsx from "clsx";
import React from "react";

const PageTitle = ({ 
    as: Component = "h2", 
    containerClass, 
    children,
    ...props 
}) => (
    <Component
        className={clsx(
            "font-medium lg:h3 max-lg:h4 max-md:text-3xl text-p1 max-lg:mb-0 max-md:mb-4 max-md:leading-10 whitespace-pre-line max-lg:mx-auto",
            containerClass
        )}
        {...props}
    >
        {children}
    </Component>
);

export default PageTitle;