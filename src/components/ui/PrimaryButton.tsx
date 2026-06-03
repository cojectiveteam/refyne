"use client"
import Link from "next/link";
import Icon, { IconName } from "./IconSprite";
import { usePopup } from "@/app/context/PopupContext";
interface ButtonProps {
    icon?: IconName;
    iconColor?: string;
    iconPosition?: "before" | "after";
    buttonText: string;
    backgroundColor?: string;
    textColor?: string;
    className?: string;
    href?: string;
    onClick?: () => void;

}



export default function PrimaryButton({ icon, iconPosition = "before", iconColor, buttonText, backgroundColor = "bg-button", textColor = "text-white", className = "", href, onClick }: ButtonProps) {
    const { openPopup } = usePopup();

    const buttonClass = `flex justify-center gap-3 items-center px-7 py-4 lg:py-5 f-base rounded-full transition-colors duration-300 leading-none z-1 ${backgroundColor} ${textColor} ${className}`;

    const content = (
        <>
            {icon && iconPosition === "before" && (
                <Icon name={icon} className={`shrink-0 ${iconColor || 'text-current'}`} width={17} height={14} />
            )}
            {buttonText}
            {icon && iconPosition === "after" && (
                <Icon name={icon} className={`shrink-0 ${iconColor || 'text-current'}`} width={17} height={14} />
            )}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={buttonClass} onClick={onClick}>
                {content}
            </Link>
        );
    }

    return (
        <button className={buttonClass} onClick={onClick ?? openPopup}>
            {content}
        </button>
    );
}