import { cva, cx, type VariantProps } from "class-variance-authority";
import { Text } from "./text";
import { twMerge } from "tailwind-merge";
import { Skeleton } from "./skeleton";

export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
    variants: {
        variant: {
            none: "",
            primary: "bg-successLight",
            secondary: "bg-dangerLight"
        },
        size: {
            sm: "py-0.5 px-2"
        }
    },
    defaultVariants: {
        size: "sm",
        variant: "primary"
    }
})

export const badgeTextVariants = cva("", {
    variants: {
        variant: {
            none: "",
            primary: "text-successLow",
            secondary: "text-dangerLow"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

export const badgeSkeletonVariants = cva("", {
    variants: {
        size: {
            sm: "w-6 h-6"
        }
    },
    defaultVariants: {
        size: "sm"
    }
})

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
    loading?: boolean
}

export function Badge({variant, size, className, children, loading, ...props}: BadgeProps) {

    if(loading) {
        return <Skeleton 
        rounded="full" 
        className={cx(badgeVariants({variant: "none"}), 
        badgeSkeletonVariants({size}))} 
        />
    }

    return (
        <div className={twMerge(badgeVariants({variant, size}), className)} {...props}>
            <Text variant="body-sm-bold" className={badgeTextVariants({variant})}>
                {children}
            </Text>
        </div>
    )
}