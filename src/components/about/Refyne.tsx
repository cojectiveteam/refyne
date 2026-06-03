"use client"
import GlowEffect from "../ui/GlowEffect";
import Orbit from "../ui/Orbit";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

const data = [
    {
        title: "Instant Salary Access",
        subTitle: "No dependence on payday",
        image: "/images/about/coin.webp",
        className: "-right-3 mmd:right-0 sm:right-7 md:right-15 lg:-right-6 xl:right-15 2xl:right-35 -top-7 2xl:top-0 w-max",

    },
    {
        title: "Better Financial Control",
        subTitle: "Manage, plan, & stay prepared",
        image: "/images/about/coin.webp",
        className: "-left-3 mmd:left-0 sm:left-4 md:left-12 lg:-left-8 xl:left-0 2xl:-left-10 -bottom-3 2xl:bottom-0",

    }
]

const highlights = [
    "Simple",
    "Secure",
    "Seamless"
]

export default function Refyne() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Infinite Text Change Logic
        const highlightsElements = gsap.utils.toArray<HTMLElement>(".highlight-text");
        if (highlightsElements.length === 0) return;

        // Split all highlights so we can stagger their words
        const splits = highlightsElements.map(highlight => new SplitText(highlight, {
            type: "lines,words",
            mask: "lines",
            linesClass: "overflow-hidden pb-2"
        }));

        // Hide all initially
        gsap.set(highlightsElements, { autoAlpha: 0, y: -50 });

        // Show first one and animate its words in immediately
        gsap.set(highlightsElements[0], { autoAlpha: 1, y: 0 });
        gsap.from(splits[0].words, {
            y: "100%", opacity: 0, duration: 1, stagger: 0.01, ease: "power3.out"
        });

        let currentIndex = 0;

        function nextText() {
            const currentHighlight = highlightsElements[currentIndex];
            const nextIndex = (currentIndex + 1) % highlightsElements.length;
            const nextHighlight = highlightsElements[nextIndex];
            const nextWords = splits[nextIndex].words;

            const tl = gsap.timeline();

            // Current text container slides up and fades out
            tl.to(currentHighlight, {
                autoAlpha: 0,
                y: -50,
                duration: 0.8,
                ease: "power2.inOut"
            }, 0);

            // Next text container becomes visible in place, and its words stagger UP from bottom
            gsap.set(nextHighlight, { autoAlpha: 1, y: 0 });
            tl.fromTo(nextWords, {
                y: "100%",
                opacity: 0
            }, {
                y: "0%",
                opacity: 1,
                duration: 1,
                stagger: 0.01,
                ease: "power3.out"
            }, 0.2); // Start staggering words in shortly after current text starts fading

            currentIndex = nextIndex;
        }

        // Loop the animation every 4 seconds
        gsap.delayedCall(4, function loop() {
            nextText();
            gsap.delayedCall(4, loop);
        });

        // ----------------------------------------------------
        // Pin Section and transition between Part 1 and Part 2
        // ----------------------------------------------------
        // Hide Part 2 initially
        gsap.set(".refyne-part-2", { autoAlpha: 0, y: 50 });

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=120%", // Scroll distance for pinning
                pin: true,
                scrub: true,
                invalidateOnRefresh: true,
            }
        });

        // Animate Part 1 out (hides or goes to top of the section)
        pinTl.to(".refyne-part-1", {
            autoAlpha: 0,
            y: -80,
            duration: 1,
            ease: "power2.inOut"
        }, 0)
        // Animate ONLY the badges UP off the screen to the top
        .to(".refyne-badge", {
            y: -600,
            autoAlpha: 0,
            duration: 1,
            ease: "power2.inOut"
        }, 0)
        // Animate Part 2 in (displays and continues scroll)
        .to(".refyne-part-2", {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
        }, "-=0.5"); // Overlap slightly for a premium cross-fade transition!

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative min-h-screen bg-primary flex items-center overflow-hidden">

            <div className="relative w-full flex flex-col-reverse lg:flex-row gap-10 fp max-container">
                {/* Left Column */}
                <div className="relative w-full lg:w-1/2  flex justify-center  ">
                    <Orbit size={{ default: 300, sm: 480, md: 600, '2xl': 780 }} className="absolute left-0 bottom-0 -translate-x-3/12 translate-y-1/3 z-0" />
                    <GlowEffect size={300} blur={150} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1" />
                    <Image src="/images/refyne.webp" alt="app-splash-tilt" width={281} height={437} className="refyne-phone-img w-[70%] mmd:w-[60%] sm:w-[55%] md:w-[45%]  h-auto lg:w-[281px] lg:h-[437px] xl:-translate-x-10 2xl:-translate-x-20 xl:translate-y-5 2xl:translate-y-10  z-2" />

                    {data.map((item, index) => (
                        <div key={index} className={`refyne-badge absolute ${item.className} flex items-center rounded-xl sm:rounded-2xl bg-text-light/10 backdrop-blur-lg border border-t-[#81DDFF] border-l-[#81DDFF]/60 border-b-[#81DDFF]/30 border-r-[#81DDFF]/40 shadow-xl z-3 `}>
                            <div className="relative flex flex-col gap-1  z-10 py-3 pl-3 pr-6 sm:py-5 sm:pl-5 sm:pr-10 ">
                                <h4 className="f-xs sm:f-sm md:f-base lg:f-sm text-text-light font-bold ">{item.title}</h4>
                                <p className="text-[8px] sm:f-xs md:f-sm lg:f-xs text-accent leading-tight ">{item.subTitle}</p>
                                <Image src={item.image} alt="Coins" width={41} height={32} className="absolute right-0 bottom-0 w-[20%] h-auto 2xl:w-[41px] 2xl:h-[32px] " />
                            </div>
                        </div>
                    ))}


                </div>
                {/* End of Left Column */}


                {/* Right Column */}
                <div className="w-full lg:w-1/2 grid grid-cols-1 grid-row-1 gap-5 lg:gap-10 text-text-light">
                    <div className="refyne-part-1 flex flex-col gap-5 lg:gap-10 col-start-1 row-start-1">
                        <h2 className="f-h3 2xl:f-h2 font-bold">What Refyne Is</h2>
                        <div className="flex flex-col gap-3 sm:gap-5">
                            <p>Refyne is India's first Earned Wage Access platform and today, Asia's largest financial wellness ecosystem.</p>
                            <p>It is not a lending app. It is not a banking replacement.</p>
                            <p>It is a platform that sits between an employee's work and their wellbeing — giving them structured, responsible access to what they have already earned, when they actually need it.</p>
                            <p>Exactly the kind of system I look for before associating my name with anything.</p>

                        </div>
                        <div className="w-full grid grid-cols-1 grid-rows-1 overflow-hidden">
                            {highlights.map((item, index) => (
                                <h2 key={index} className="highlight-text invisible opacity-0 | text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px] font-bold col-start-1 row-start-1 leading-none">{item}</h2>
                            ))}

                        </div>
                    </div>
                    <div className="refyne-part-2 flex flex-col gap-5 lg:gap-10 col-start-1 row-start-1">
                        <h2 className="f-h3 2xl:f-h2 font-bold">The problem it was built to solve</h2>
                        <div className="flex flex-col gap-3 sm:gap-5">
                            <p>Refyne is India's first Earned Wage Access platform and today, Asia's largest financial wellness ecosystem.</p>
                            <p>It is not a lending app. It is not a banking replacement.</p>
                            <p>It is a platform that sits between an employee's work and their wellbeing — giving them structured, responsible access to what they have already earned, when they actually need it.</p>
                            <p>Exactly the kind of system I look for before associating my name with anything.</p>

                        </div>
                    </div>


                </div>
                {/* End of Right Column */}
            </div>
        </section>
    )
}