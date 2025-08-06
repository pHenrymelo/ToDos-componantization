import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { twMerge } from "tailwind-merge";

export const buttonVariants = cva("flex items-center justify-center cursor-pointer transition rounded-lg group gap-2 duration-300 border-2", {
    variants: {
        variant: {
            primary: "bg-kaiserViolet-500 text-gray-200 hover:bg-kaiserViolet-700 hover:border-kaiserViolet-700 border-kaiserViolet-500 ",
            secondary: "bg-gray-200 hover:bg-gray-400 hover:border-gray-400 text-kaiserViolet-700 border-gray-200",
            ghost: "bg-transparent text-kaiserViolet-300 hover:bg-kaiserViolet-300 hover:text-gray-200 border-kaiserViolet-300",
        },
        size: {
            md: "h-14 py-4 px-5"
        },
        disabled: {
            true: "opacity-50 pointer-events-none"
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false
    }
})

export const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-gray-200"
        },
        size: {
            md: "w-5 h-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }

})

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {}

export function Button({variant, size, disabled, className, children, ...props}:ButtonProps){
    return (
        <button className={twMerge(buttonVariants({variant, size, disabled}), className)} {...props}>
            {children}
        </button>
    )
}