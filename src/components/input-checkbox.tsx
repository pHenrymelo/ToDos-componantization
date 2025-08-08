import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import type React from "react";
import { Skeleton } from "./skeleton";

export const inputCheckboxWrapperVariants = cva(" inline-flex items-center justify-center cursor-pointer relative group")

export const inputCheckboxVariants = cva(`
    appearance-none peer flex items-center justify-center
    cursor-pointer transition duration-300 overflow-hidden
    `, {
        variants: {
            variant: {
                none: "",
                default: `
                 border-2 border-solid border-gray-400 hover:border-kaiserViolet-500
                hover:bg-kaiserViolet-700/20 checked:border-kaiserViolet-500 checked:bg-kaiserViolet-500
                group-hover:checked:border-kaiserViolet-700 group-hover:checked:bg-kaiserViolet-700
                `
            },
            size: {
                md: "w-5 h-5 rounded-sm" 
            },
            disabled: {
                true: "pointer-events-none"
            }
        },
        defaultVariants: {
            variant: "default",
            disabled: false,
            size: "md"
        }
    })

export const inputCheckboxIconVariants = cva(" absolute top-1/2 left-0.5 -translate-y-1/2 hidden peer-checked:block stroke-gray-100", {
    variants: {
        size: {
            md: "w-4 h-4"
        }
    },
    defaultVariants: {
        size: "md"
    }
})

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>, 
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
        loading?: boolean
    }

export function InputCheckbox({variant, size, disabled, className, loading, ...props}: InputCheckboxProps) {
    if(loading) {
        return (
            <Skeleton 
                rounded="sm"
                className={inputCheckboxVariants({variant: "none", size})}
            />
        )
    }

    return(
        <label className={inputCheckboxWrapperVariants({className})}>
            <input type="checkbox" className={inputCheckboxVariants({variant ,size, disabled})} {...props}/>
            <Check className={inputCheckboxIconVariants({size})}/>
        </label>
    )
}