"use client"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Orbit from "../ui/Orbit";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    {
        value: 500,
        suffix: "+",
        text: "Organizations\n across India"
    },
    {
        value: 8,
        suffix: "M+",
        text: "Employees on the\n platform"
    },
    {
        value: 23,
        suffix: "+",
        text: "Industries\n served"
    },
    {
        value: 11,
        suffix: "+",
        text: "Regional\n languages"
    },
    {
        value: 30,
        suffix: "M",
        text: "Funding\n raised"
    },
    {
        value: 10,
        suffix: "M+",
        text: "Lives\n impacted"
    }
]


export default function Scale() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
            const targetVal = parseInt(el.getAttribute("data-value") || "0", 10);
            gsap.fromTo(el, {
                innerText: "0"
            }, {
                innerText: targetVal,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative bg-primary overflow-hidden">
            <Orbit size={{ default: 350, lg: 852 }} className="absolute top-0 right-0 lg:left-0 lg:bottom-0 translate-x-1/2 -translate-y-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 xl:translate-y-1/3  " />
            <div className="flex flex-col xl:flex-row gap-10 fp max-container">
                <div className="w-full xl:w-[30%] flex flex-col gap-5 xl:gap-8">
                    <h2 className="f-h3 2xl:f-h2 text-text-light font-bold">The Scale Behind It</h2>
                    <p className="text-accent">This is not a new idea still finding its feet.
                        Refyne operates at a scale that reflects genuine trust - earned over time.</p>
                </div>
                <div className="w-full xl:w-[70%] grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-5 lg:gap-10 xl:gap-8 2xl:gap-10">
                    {stats.map((item, index) => (
                        <div key={index} className="relative aspect-square w-full h-full flex flex-col gap-1 mmd:gap-2 lg:gap-3 justify-center items-center text-center">

                            <span className="f-h3 mmd:f-h2 text-text-light font-bold leading-none">
                                <span className="stat-number" data-value={item.value}>0</span>{item.suffix}
                            </span>
                            <p className="text-[7px] mmd:text-[9.5px] mlg:f-sm lg:f-base  text-accent whitespace-pre-wrap">{item.text}</p>
                            <Orbit size="100%" className="absolute inset-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}