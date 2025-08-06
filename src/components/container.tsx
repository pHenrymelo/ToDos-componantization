import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

export const containerVariants = cva("mx-auto", {
    variants: {
        size: {
            md: "max-w-[31.5rem] px-2"
        }
    },
    defaultVariants: {
        size: "md"
    }
})

interface ContainerProps extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements;
}

export function Container({as = "div", size, children, className, ...props}:ContainerProps){
    return React.createElement(
        as,
        {
            className: twMerge(containerVariants({size}), className),
            ...props
        },
        children
    )
}