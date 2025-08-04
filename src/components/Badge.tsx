import { cva, type VariantProps } from "class-variance-authority";
import { Text } from "./Text";

export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
    variants: {
        variant: {
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
            primary: "text-successLow",
            secondary: "text-dangerLow"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {

}

export function Badge({variant, size, className, children}: BadgeProps) {
    return (
        <div className={badgeVariants({variant, size, className})}>
            <Text variant="body-sm-bold" className={badgeTextVariants({variant})}>
                {children}
            </Text>
        </div>
    )
}