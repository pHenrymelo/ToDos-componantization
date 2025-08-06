import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export const textVariants = cva("font-sans text-gray-100", {
    variants: {
        variant: {
            "body-sm-bold": " text-sm leading-5 font-semibold",
            "body-md": "text-base leading-6 font-normal",
            "body-md-bold": "text-base leading-6 font-semibold",
            "heading": "text-3xl leading-12 font-bold"
        },
    },
    defaultVariants: {
        variant: "body-md"
    },
})

interface textProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements
    className?: string
    children?: React.ReactNode
}

export function Text({
    as = 'span',
    variant,
    children,
    className,
    ...props
}: textProps) {
    const Component = as
    return(
        <Component className={twMerge(textVariants({variant}), className)} {...props}>
            {children}
        </Component>
    )
}