import React from "react";
import Link from "next/link";

const footerLinks = [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Use", url: "#" },
]

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="flex flex-col fpx gap-5 py-5 sm:py-8 lg:py-10 f-xs mlg:f-sm sm:f-base max-container ">
                <div className="flex flex-col gap-2 lg:gap-0 md:flex-row md:justify-between items-center  ">
                    <span>© 2025 Amitabh Kaushik Consultancy | Jaipur, India</span>

                    <nav className="flex gap-3">
                        {footerLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <Link href={link.url}>{link.title}</Link>
                                {index < footerLinks.length - 1 && <span>|</span>}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
                <div className="w-full h-px bg-accent/30"></div>
                <div className="flex justify-center items-center">
                    <span>Another beautiful website by ❤️ Cojective</span>
                </div>

            </div>
        </footer>
    )
}