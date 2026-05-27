import GlowEffect from "../ui/GlowEffect";
import Orbit from "../ui/Orbit";
import Image from "next/image";

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

export default function Refyne() {
    return (
        <section className="relative bg-primary overflow-hidden">

            <div className="relative  flex flex-col-reverse lg:flex-row gap-10 fp max-container">

                <div className="relative w-full lg:w-1/2  flex justify-center  ">
                    <Orbit size={{ default: 300, sm: 480, md: 600, '2xl': 780 }} className="absolute left-0 bottom-0 -translate-x-3/12 translate-y-1/3 z-0" />
                    <GlowEffect size={300} blur={150} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1" />
                    <Image src="/images/refyne.webp" alt="app-splash-tilt" width={281} height={437} className="w-[70%] mmd:w-[60%] sm:w-[55%] md:w-[45%]  h-auto lg:w-[281px] lg:h-[437px] xl:-translate-x-10 2xl:-translate-x-20 xl:translate-y-5 2xl:translate-y-10  z-2" />

                    {data.map((item, index) => (
                        <div key={index} className={`absolute ${item.className} flex items-center rounded-xl sm:rounded-2xl bg-text-light/10 backdrop-blur-lg border border-t-[#81DDFF] border-l-[#81DDFF]/60 border-b-[#81DDFF]/30 border-r-[#81DDFF]/40 shadow-xl z-3 `}>
                            <div className="relative flex flex-col gap-1  z-10 py-3 pl-3 pr-6 sm:py-5 sm:pl-5 sm:pr-10 ">
                                <h4 className="f-xs sm:f-sm md:f-base lg:f-sm text-text-light font-bold ">{item.title}</h4>
                                <p className="text-[8px] sm:f-xs md:f-sm lg:f-xs text-accent leading-tight ">{item.subTitle}</p>
                                <Image src={item.image} alt="Coins" width={41} height={32} className="absolute right-0 bottom-0 w-[20%] h-auto 2xl:w-[41px] 2xl:h-[32px] " />
                            </div>
                        </div>
                    ))}


                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 text-text-light">
                    <h2 className="f-h3 2xl:f-h2 font-bold">What Refyne Is</h2>
                    <div className="flex flex-col gap-3 sm:gap-5">
                        <p>Refyne is India's first Earned Wage Access platform and today, Asia's largest financial wellness ecosystem.</p>
                        <p>It is not a lending app. It is not a banking replacement.</p>
                        <p>It is a platform that sits between an employee's work and their wellbeing — giving them structured, responsible access to what they have already earned, when they actually need it.</p>
                        <p>Exactly the kind of system I look for before associating my name with anything.</p>

                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px] font-bold">Simple,</h2>
                </div>
            </div>
        </section>
    )
}