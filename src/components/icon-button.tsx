import { cva, type VariantProps } from "class-variance-authority"
import type React from "react"
import { twMerge } from "tailwind-merge"
import { Skeleton } from "./skeleton"

export const IconButtonVariants = cva(" inline-flex items-center justify-center cursor-pointer transition duration-300 group", {
    variants: {
        variant: {
            none: "",
            primary: " bg-kaiserViolet-500 hover:bg-kaiserViolet-500/50 text-gray-100",
            secondary: "bg-gray-100 hover:bg-gray-100/50 text-kaiserViolet-500",
            ghost: "bg-transparent hover:bg-kaiserViolet-300 text-gray-400 hover:text-gray-100"
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
    icon: React.ReactNode,
    loading?: boolean
}

export function IconButton({icon, variant, size, disabled, className, loading, ...props}:iconButtonProps) {
    if(loading) {
        return (
            <Skeleton 
                rounded="sm"
                className={twMerge( IconButtonVariants({
                    variant: "none",
                    size
                }), className)}
            />
        )
    }

    return (
        <button className={twMerge(IconButtonVariants({variant, size, disabled}), className)} {...props}>
            {icon}
        </button>
    )
}