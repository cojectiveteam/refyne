"use client";
import { useRef } from "react";
import Orbit from "../ui/Orbit";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InteractiveGridLines from "../ui/InteractiveGridLines";

gsap.registerPlugin(ScrollTrigger);


const data = [
    {
        title: "Smarter Financial Decisions",
        subTitle: "Plan & manage finances better",
        image: "/images/about/coin.webp",
        imageWidth: 41,
        imageHeight: 32,
        className: "-left-3 top-5 mmd:-left-2 sm:left-12 lg:left-23 xl:left-50  2xl:left-65 2xl:top-35  w-max",

    },
    {
        title: "Earned Salary Access",
        subTitle: "Withdraw your salary in advance anytime",
        image: "/images/about/coin.webp",
        imageWidth: 41,
        imageHeight: 32,
        className: "-right-3.5 top-8 mmd:-right-1 mlg:-right-3 sm:right-8 lg:right-20 xl:right-47 lg:top-12 2xl:right-64 2xl:top-10 lg:w-[274px]",

    },
    {
        title: "Secure your Future",
        subTitle: "Start saving and build security",
        image: "/images/about/piggy-bank.webp",
        imageWidth: 46,
        imageHeight: 45,
        className: "right-3 bottom-5 mmd:right-5 sm:right-21 lg:right-29 xl:right-57 mlg:bottom-7 lg:bottom-16  2xl:right-75 2xl:bottom-10 lg:w-[234px]",

    },
]

export default function Support() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
        tl.from(".support-heading", {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
        }).from(".support-image", {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "power2.out"
        }, "<0.5").from(".support-card", {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
        }, "-=0.5")
    }, { scope: containerRef });
    return (
        <section ref={containerRef} className="relative  lg:h-screen bg-linear-to-b from-primary  from-93% via-primary/25 via-100%   to-white to-100% flex items-center justify-center overflow-hidden">
            {/* 1. The Grid (Background Layer) */}
            <InteractiveGridLines />
            <Orbit size={{ default: 400, md: 650, lg: 852 }} className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-5" />
            <Image src="/images/cloud.webp" alt="" width={1015} height={471} className="absolute bottom-0 left-0 -translate-x-1/2  translate-y-1/2 mlg:translate-y-2/3 xl:translate-y-1/2  2xl:translate-y-1/2 z-5" />
            <Image src="/images/cloud.webp" alt="" width={1015} height={471} className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 mlg:translate-y-2/3 xl:translate-y-1/2  2xl:translate-y-1/2 z-5" />
            {/* 2. The Content (Foreground Layer) */}
            <div className="relative h-full flex flex-col items-center justify-end gap-4 sm:gap-7 lg:ap-10 fpx pt-20 z-10 max-container ">

                <div className="flex flex-col gap-5 items-center text-center">
                    <h1 className="support-heading |  f-h3 mlg:f-h2 text-text-light font-bold mmd:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[65%]  2xl:max-w-[60%]">Supporting Better Financial Well-being with Asia’s Largest Financial Wellness Platform
                    </h1>
                    <h5 className="hidden text-[22px] text-accent font-medium">India's First Salary-Backed Financial
                        Wellbeing Platform</h5>
                </div>

                <div className="relative w-full h-[150px] mmd:h-[180px] mlg:h-[210px] sm:h-[250px] md:h-[280px] lg:h-[400px] flex justify-center ">
                    <Image src="/images/app-splash.webp" alt="App Splash" width={303} height={595} className="support-image | absolute w-[40%] sm:w-[35%] md:w-[30%] xl:w-[25%] h-auto 2xl:w-[303px] 2xl:h-[595px] " />

                    {data.map((item, index) => (
                        <div key={index} className={`support-card | absolute ${item.className} flex items-center rounded-lg md:rounded-xl lg:rounded-2xl bg-text-light/10 backdrop-blur-lg border border-t-[#81DDFF] border-l-[#81DDFF]/60 border-b-[#81DDFF]/30 border-r-[#81DDFF]/40 shadow-xl  `}>
                            <div className="relative flex flex-col gap-1  z-10 p-2 mlg:p-2 sm:p-3 md:p-4 lg:p-5 ">
                                <h4 className="text-[7px] mlg:text-[9px] sm:f-sm lg:f-base text-text-light font-bold ">{item.title}</h4>
                                <p className="text-[5px] mlg:text-[7px] sm:f-xs lg:f-sm text-accent leading-tight ">{item.subTitle}</p>
                                <Image src={item.image} alt="Coins" width={item.imageWidth} height={item.imageHeight} className={`w-[15%] h-auto lg:w-[${item.imageWidth}px] lg:h-[${item.imageHeight}px] absolute right-0 bottom-0  z-20`} />
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}//