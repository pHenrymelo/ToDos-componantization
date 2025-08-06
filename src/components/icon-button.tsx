import { cva, type VariantProps } from "class-variance-authority"
import type React from "react"
import { twMerge } from "tailwind-merge"

export const IconButtonVariants = cva(" inline-flex items-center justify-center cursor-pointer transition duration-300 group", {
    variants: {
        variant: {
            primary: " bg-kaiserViolet-500 hover:bg-kaiserViolet-500/50 text-gray-100",
            secondary: "bg-gray-100 hover:bg-gray-100/50 text-kaiserViolet-500",
            ghost: "bg-transparent hover:bg-kaiserViolet-300 text-kaiserViolet-500 hover:text-gray-100"
        },
        size: {
            sm: "w-8 h-8 p-1.5 rounded"
        },
        disabled: {
            true: "opacity-50 pointer-events-none"
        },
    },
    defaultVariants: {
        variant: "primary",
        disabled: false,
        size: "sm",
    }
})

interface iconButtonProps extends VariantProps<typeof IconButtonVariants>,
 Omit<React.ComponentProps<"button">, "size" | "disabled"> {
    icon: React.ReactNode
}

export function IconButton({icon, variant, size, disabled, className, ...props}:iconButtonProps) {
    return (
        <button className={twMerge(IconButtonVariants({variant, size, disabled}), className)} {...props}>
            {icon}
        </button>
    )
}