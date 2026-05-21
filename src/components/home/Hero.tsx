"use client";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!containerRef.current) return;

        const { left, top } = containerRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        containerRef.current.style.setProperty("--x", `${x}px`);
        containerRef.current.style.setProperty("--y", `${y}px`);
        containerRef.current.style.setProperty("--opacity", "1");
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        containerRef.current.style.setProperty("--opacity", "0");
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hero-container h-screen w-full bg-linear-to-b from-primary  from-93% via-primary/25 via-100%   to-white to-100% relative flex items-center justify-center overflow-hidden"
        >
            {/* 1. The Grid (Background Layer) */}
            <div className="absolute inset-0 w-full h-full grid-lines pointer-events-none z-0" />

            {/* 2. The Content (Foreground Layer) */}
            <div className="relative z-10 flex fp text-text-light max-container">
                <div className="w-[70%]">
                    <h1 className="text-[130px]  font-bold leading-none uppercase">The Art of Financial Timing</h1>
                </div>
                <div className="w-[30%] flex flex-col gap-5 leading-tight uppercase">
                    <Image src="/images/home/coin.webp" alt="Coin Rupee" width={220} height={249} className="" />
                    <h3 className="text-[30px] font-medium ">India’s First Salary-Backed Financial Wellbeing Platform</h3>
                    <p className="text-base">By Amitabh Kaushik Consultancy | In Association with Refyne</p>
                </div>
            </div>
            <div className="w-full h-[434px] absolute bottom-[-33%] left-0 z-0 bg-[url('/images/two-clouds.webp')] bg-left bg-repeat-x bg-contain" />
            {/* <div className="w-full h-[434px] absolute bottom-[-35%] left-0 z-0 flex overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="h-full w-[800px] shrink-0 bg-[url('/images/cloud.webp')] bg-left bg-contain bg-no-repeat -ml-[200px]"
                    />
                ))}
            </div> */}


        </section>
    );
}