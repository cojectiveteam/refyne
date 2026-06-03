"use client"
import { useRef } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function FinancialGuide() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const split = new SplitText(".reveal-text", { type: "words,chars" });

        // Set initial state of characters to light faded primary color
        gsap.set(split.chars, { opacity: 0.25 });

        // Scrub opacity to 1 as the text moves through the viewport
        gsap.to(split.chars, {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
                trigger: ".reveal-text",
                start: "top 85%",
                end: "bottom 60%",
                scrub: true
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-text-light">
            <div className="flex flex-col gap-5 lg:gap-10 items-center text-center fp max-container">
                <h3 className="f-h3  text-text-secondary font-semibold sm:max-w-[70%]">Strategic Financial Guidance for Modern Workplaces</h3>
                <div className="flex flex-col gap-4 md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] text-text-dark ">
                    <p className="">After more than three decades in senior government administration, I now advise organisations, startups and high-value clients on building clear, disciplined and responsible financial frameworks.</p>
                    <p>My work focuses on structure, governance and practical financial wellbeing, supported by modern platforms like Refyne.</p>
                </div>
                <div className=" w-full flex flex-col sm:flex-row justify-center gap-5">
                    <PrimaryButton buttonText="Consult With Me" icon="arrow-right" iconPosition="after" className="" />
                    <SecondaryButton href="/about-us" buttonText="Learn About Refyne" />
                </div>
                <h3 className="reveal-text | unbound text-primary font-bold">Clear guidance. Responsible systems. Confident decisions.</h3>
            </div>
        </section>
    );
}