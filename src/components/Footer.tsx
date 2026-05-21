import React from "react";
import Link from "next/link";

const footerLinks = [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Use", url: "#" },
]

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="flex justify-between fpx py-10 max-container">
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
        </footer>
    )
}