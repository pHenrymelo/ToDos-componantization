import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { twMerge } from "tailwind-merge";

export const skeletonVariants = cva(`animate-pulse bg-gray-500 pointer-events-none`, {
    variants: {
        rounded: {
            sm: "rounded-sm",
            lg: "rounded-lg",
            full: "rounded-full"
        }
    },
    defaultVariants: {
        rounded: "lg"
    }
})

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, React.ComponentProps<"div"> {}

export function Skeleton({rounded, className, ...props}:SkeletonProps){
    return <div className={twMerge(skeletonVariants({rounded}), className)} {...props} />
}