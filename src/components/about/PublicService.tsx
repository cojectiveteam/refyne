"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const data = [
    {
        title: "Income Access",
        subTitle: "Salary is locked until payday",
        image: "/images/about/coin.webp",
        imageWidth: 41,
        imageHeight: 32,
        className: "left-0 top-0 md:left-15 lg:left-0 bg-primary",

    },
    {
        title: "Financial stress ",
        subTitle: "Unexpected expenses don’t wait",
        image: "/images/about/financial-stress.webp",
        imageWidth: 42,
        imageHeight: 38,
        className: "right-0 bottom-0 md:right-15 lg:right-0 bg-[#0045A8] ",

    }
]

export default function PublicService() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".ps-heading", { opacity: 0, y: 30 })
            .from(".ps-para", { opacity: 0, y: 20 })
            .from(".ps-image", { opacity: 0, scale: 0.8 })
            .from(".ps-card", { opacity: 0, y: 30, stagger: 0.2 });


    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-5 sm:gap-10 fp max-container">
                <div className="w-full lg:w-1/2 2xl:w-[60%] flex flex-col gap-5 lg:gap-8 xl:gap-12">
                    <h2 className="ps-heading | f-h4 md:f-h3 font-semibold">Over 3 decades in public service taught me one thing clearly.</h2>
                    <div className="flex flex-col gap-3">
                        <p className="ps-para">Financial stress in the workplace is rarely about income. It is about timing, awareness and access.</p>
                        <p className="ps-para">When I encountered Refyne, I recognised immediately what it was built to solve — and why it mattered.</p>
                    </div>
                </div>
                <div className="relative w-full lg:w-1/2 2xl:w-[40%] flex justify-center items-center">
                    <Image src="/icons/about/financial-growth.svg" alt="financial-growth" width={258} height={258} className="ps-image | w-[60%] sm:w-[40%] lg:w-[65%] h-auto xl:w-[258px] xl:h-[258px] my-10 lg:my-0" />

                    {data.map((item, index) => (
                        <div key={index} className={`ps-card | absolute ${item.className} flex items-center rounded-xl mlg:rounded-2xl shadow-xl  `}>
                            <div className="relative flex flex-col gap-1  z-10 py-3 pl-3 pr-6 sm:py-5 sm:pl-5 sm:pr-10  rounded-2xl  overflow-hidden ">
                                <h4 className="f-xs mlg:f-sm sm:f-base text-text-light font-bold ">{item.title}</h4>
                                <p className="text-[8px] mlg:f-xs sm:f-sm text-accent leading-tight ">{item.subTitle}</p>
                                <Image src={item.image} alt="Coins" width={item.imageWidth} height={item.imageHeight} className={`w-[15%] h-auto 2xl:w-[${item.imageWidth}px] 2xl:h-[${item.imageHeight}px] absolute right-0 bottom-0  z-20`} />

                                <Image src="/images/cloud.webp" alt="Cloud" width={937} height={434} className=" absolute right-0 bottom-0 -translate-y-1/4  opacity-30  -z-10 object-scale-down" />


                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}