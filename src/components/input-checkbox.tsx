import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import type React from "react";

export const inputCheckboxWrapperVariants = cva(" inline-flex items-center justify-center cursor-pointer relative group")

export const inputCheckboxVariants = cva(`
    appearance-none peer flex items-center justify-center
    border-2 border-solid border-kaiserViolet-500 hover:border-kaiserViolet-700
    hover:bg-kaiserViolet-700/20 transition duration-300 overflow-hidden
    checked:border-kaiserViolet-500 checked:bg-kaiserViolet-500
    group-hover:checked:border-kaiserViolet-700 group-hover:checked:bg-kaiserViolet-700
    cursor-pointer
    `, {
        variants: {
            size: {
                md: "w-5 h-5 rounded-sm" 
            },
            disabled: {
                true: "pointer-events-none"
            }
        },
        defaultVariants: {
            disabled: false,
            size: "md"
        }
    })

export const inputCheckboxIconVariants = cva(" absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block stroke-gray-100", {
    variants: {
        size: {
            md: "w-3 h-3"
        }
    },
    defaultVariants: {
        size: "md"
    }
})

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>, 
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export function InputCheckbox({size, disabled, className, ...props}: InputCheckboxProps) {
    return(
        <label className={inputCheckboxWrapperVariants({className})}>
            <input type="checkbox" className={inputCheckboxVariants({size, disabled})} {...props}/>
            <Check className={inputCheckboxIconVariants({size})}/>
        </label>
    )
}