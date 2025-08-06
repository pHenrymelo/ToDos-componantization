import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

export const cardVariants = cva(" rounded-lg border border-solid border-gray-600 bg-gray-700 text-gray-100 shadow-lg shadow-gray-950/50", {
    variants: {
        size: {
            none: "",
            md: "p-5"
        }
    },
    defaultVariants: {
        size: "none"
    }
})

interface CardProps extends VariantProps<typeof cardVariants>, React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements

}

export function Card({as = "div", size, children, className, ...props}:CardProps) {
    return React.createElement(
    as,
    {
        className: twMerge(cardVariants({size}), className),
        ...props,
    },
    children
);
}
