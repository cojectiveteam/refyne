"use client";
import { useRef } from "react";
import Image from "next/image";
import InteractiveGridLines from "../ui/InteractiveGridLines";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={containerRef}
            className="hero-container  md:h-[75vh] lg:h-[80vh] xl:h-screen w-full bg-linear-to-b from-primary  from-93% via-primary/25 via-100%   to-white to-100% relative flex items-center justify-center overflow-hidden"
        >
            {/* 1. The Grid (Background Layer) */}
            <InteractiveGridLines />

            {/* 2. The Content (Foreground Layer) */}
            <div className="relative z-10 flex flex-col md:flex-row gap-5 fpx pb-20 pt-25 text-text-light max-container">
                <div className="w-full md:w-1/2 xl:w-[60%] 2xl:w-[70%]">
                    <h1 className="text-[40px] mlg:text-[50px] sm:text-[55px] lg:text-[74px] xl:text-[100px] 2xl:text-[130px]  font-bold leading-none uppercase">The Art of <br /> Financial <br /> Timing</h1>
                </div>
                <div className="w-full md:w-1/2 xl:w-[40%] 2xl:w-[30%] flex flex-col gap-2 lg:gap-5 leading-tight uppercase">
                    <Image src="/images/home/coin.webp" alt="Coin Rupee" width={220} height={249} className="w-[30%] mlg:w-[25%] sm:w-[16%] md:w-[20%] lg:w-[25%] xl:w-[35%] h-auto 2xl:w-[220px] 2xl:h-[249px] mb-3 lg:mb-0" />
                    <h3 className="f-h5 2xl:text-[30px] font-medium ">India’s First Salary-Backed Financial Wellbeing Platform</h3>
                    <p className="f-sm 2xl:f-base">By Amitabh Kaushik Consultancy | In Association with Refyne</p>
                </div>
            </div>
            <div className="w-full scale-180 sm:scale-120 md:scale-none h-[434px] absolute bottom-[-40%] xl:bottom-[-32%]  left-0 z-0 bg-[url('/images/two-clouds.webp')] bg-left bg-repeat-x bg-contain" />
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