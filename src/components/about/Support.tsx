"use client";
import { useRef } from "react";
import Orbit from "../ui/Orbit";
import Image from "next/image";

const data = [
    {
        title: "Smarter Financial Decisions",
        subTitle: "Plan & manage finances better",
        image: "/images/about/coin.webp",
        className: "left-75 top-35 w-max",

    },
    {
        title: "Earned Salary Access",
        subTitle: "Withdraw your salary in advance anytime",
        image: "/images/about/coin.webp",
        className: "right-76 top-10 w-[274px]",

    },
    {
        title: "Secure your Future",
        subTitle: "Start saving and build security",
        image: "/images/about/coin.webp",
        className: "right-85 bottom-10 w-[234px]",

    },
]

export default function Support() {
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
        <section ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave} className="relative h-screen bg-linear-to-b from-primary  from-93% via-primary/25 via-100%   to-white to-100% flex items-center justify-center overflow-hidden">
            {/* 1. The Grid (Background Layer) */}
            <div className="absolute inset-0 w-full h-full grid-lines pointer-events-none z-0" />
            <Orbit size={852} className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-5" />
            <Image src="/images/cloud.webp" alt="" width={1015} height={471} className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 z-5" />
            <Image src="/images/cloud.webp" alt="" width={1015} height={471} className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 z-5" />
            {/* 2. The Content (Foreground Layer) */}
            <div className="relative h-full flex flex-col items-center justify-end gap-15 z-10 max-container ">

                <div className="flex flex-col gap-5 items-center text-center">
                    <h1 className="text-[50px] text-text-light font-bold">Supporting Better Financial Well-being with Asia’s Largest Financial Wellness Platform
                    </h1>
                    <h5 className="text-[22px] text-accent font-medium">India's First Salary-Backed Financial
                        Wellbeing Platform</h5>
                </div>

                <div className="relative w-full h-[400px] flex justify-center">
                    <Image src="/images/app-splash.webp" alt="App Splash" width={303} height={595} className="absolute " />

                    {data.map((item, index) => (
                        <div key={index} className={`absolute ${item.className} flex items-center rounded-2xl bg-text-light/10 backdrop-blur-lg border border-t-[#81DDFF] border-l-[#81DDFF]/60 border-b-[#81DDFF]/30 border-r-[#81DDFF]/40 shadow-xl  `}>
                            <div className="relative flex flex-col gap-1  z-10 p-5 ">
                                <h4 className="text-base text-text-light font-bold ">{item.title}</h4>
                                <p className="text-[14px] text-accent leading-tight ">{item.subTitle}</p>
                                <Image src={item.image} alt="Coins" width={41} height={32} className="absolute right-0 bottom-0  z-20" />
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}//