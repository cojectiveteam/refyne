"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { usePopup } from "@/app/context/PopupContext";
import PrimaryButton from "./ui/PrimaryButton";

const nav = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about-us",
    },
];

const mobileNav = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about-us",
    },
    {
        label: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        label: "Terms of Use",
        href: "/terms-of-use",
    },
];

export default function Header() {
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const lenis = useLenis();
    const { openPopup } = usePopup();

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
            lenis?.stop();
        } else {
            document.body.style.overflow = 'unset';
            lenis?.start();
        }
        return () => {
            document.body.style.overflow = 'unset';
            lenis?.start();
        };
    }, [isDrawerOpen, lenis]);

    return (
        <header className="absolute top-0 w-full left-0 right-0 z-50 pointer-events-none">
            <div className="flex justify-between items-center fpx max-container py-6">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white pointer-events-auto">
                    Refyne
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:block pointer-events-auto">
                    <ul className="flex gap-6">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`text-base leading-none ${pathname === item.href ? "bg-[#f8f8f8] text-primary" : "bg-[#3984FF] text-[#F8F8F8]"} px-4 py-2 rounded-full`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4 pointer-events-auto">
                    <PrimaryButton buttonText="Get a free quote" className="hidden lg:block" />

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        type="button"
                        className="flex lg:hidden flex-col gap-2 sm:gap-2.5 cursor-pointer p-2 -mr-2 focus:outline-none"
                        aria-label="Open navigation menu"
                    >
                        <span className="w-8 ml:w-9 sm:w-10 h-0.5 sm:h-[2.5px] bg-white rounded-full transition-all"></span>
                        <span className="w-8 ml:w-9 sm:w-10 h-0.5 sm:h-[2.5px] bg-white rounded-full transition-all"></span>
                        <span className="w-8 ml:w-9 sm:w-10 h-0.5 sm:h-[2.5px] bg-white rounded-full transition-all"></span>
                    </button>
                </div>
            </div>

            {/* Navigation Drawer Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300 pointer-events-auto ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsDrawerOpen(false)}
            />

            {/* Navigation Drawer Panel */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-[350px] bg-linear-to-b from-[#0560D8] to-[#033C84] text-text-light shadow-2xl p-8 flex flex-col gap-8 z-50 transition-transform duration-300 ease-in-out pointer-events-auto ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Refyne</h2>
                    <button
                        onClick={() => setIsDrawerOpen(false)}
                        type="button"
                        className="text-white/80 hover:text-white hover:scale-110 transition-all p-1"
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col gap-6 mt-4">
                    <ul className="flex flex-col gap-4">
                        {mobileNav.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsDrawerOpen(false)}
                                    className={`block text-lg font-medium py-2.5 px-4 rounded-xl transition-all ${pathname === item.href ? "bg-white text-primary shadow-sm" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto">
                    <PrimaryButton
                        buttonText="Get a free quote"
                        className="w-full justify-center py-4"
                        onClick={() => {
                            setIsDrawerOpen(false);
                            openPopup();
                        }}
                    />
                </div>
            </div>
        </header>
    );
}