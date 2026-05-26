
import Link from "next/link";
import Icon, { IconName } from "./IconSprite";

interface ButtonProps {
    icon?: IconName;
    iconColor?: string;
    iconPosition?: "before" | "after";
    buttonText: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    className?: string;
    href?: string;

}

export default function SecondaryButton({ icon, iconPosition = "before", iconColor, buttonText, backgroundColor = "transparent", textColor = "text-black", borderColor = "border-black", className = "", href }: ButtonProps) {
    return (
        <Link href={href || "#"} className={`flex justify-center gap-3 items-center px-7 py-4 lg:py-5 border f-base ${borderColor} rounded-full  transition-colors duration-300  leading-none z-1 ${backgroundColor} ${textColor} ${className}`}>
            {icon && iconPosition === "before" && (

                <Icon name={icon} className={`shrink-0 ${iconColor || 'text-current'}`} width={17} height={14} />

            )}
            {buttonText}
            {icon && iconPosition === "after" && (

                <Icon name={icon} className={`shrink-0 ${iconColor || 'text-current'}`} width={17} height={14} />

            )}
        </Link>
    )
}