import GlowEffect from "../ui/GlowEffect";
import Orbit from "../ui/Orbit";
import Image from "next/image";

const data = [
    {
        title: "Lorem Impus dot spoil",
        subTitle: "Lorem impus",
        image: "/images/about/coin.webp",
        className: "left-5 top-20 w-max",

    },
    {
        title: "Lorem Impus dot spoil",
        subTitle: "Lorem impus",
        image: "/images/about/coin.webp",
        className: "right-15 bottom-0",

    }
]

export default function Refyne() {
    return (
        <section className="relative bg-primary overflow-hidden">

            <div className="relative  flex gap-10 fp max-container">

                <div className="relative w-1/2 flex ">
                    <Orbit size={780} className="absolute left-0 bottom-0 -translate-x-3/12 translate-y-1/3 z-0" />
                    <GlowEffect size={300} blur={150} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1" />
                    <Image src="/images/app-splash-tilt.webp" alt="app-splash-tilt" width={322} height={425} className="translate-x-30 translate-y-10 z-2" />

                    {data.map((item, index) => (
                        <div key={index} className={`absolute ${item.className} flex items-center rounded-2xl bg-text-light/10 backdrop-blur-lg border border-t-[#81DDFF] border-l-[#81DDFF]/60 border-b-[#81DDFF]/30 border-r-[#81DDFF]/40 shadow-xl z-3 `}>
                            <div className="relative flex flex-col gap-1  z-10 py-5 pl-5 pr-10 ">
                                <h4 className="text-base text-text-light font-bold ">{item.title}</h4>
                                <p className="text-[14px] text-accent leading-tight ">{item.subTitle}</p>
                                <Image src={item.image} alt="Coins" width={41} height={32} className="absolute right-0 bottom-0 " />
                            </div>
                        </div>
                    ))}


                </div>
                <div className="w-1/2 flex flex-col gap-10 text-text-light">
                    <h2 className="text-[50px] font-bold">What Refyne Is</h2>
                    <div className="flex flex-col gap-5">
                        <p>Refyne is India's first Earned Wage Access platform and today, Asia's largest financial wellness ecosystem.</p>
                        <p>It is not a lending app. It is not a banking replacement.</p>
                        <p>It is a platform that sits between an employee's work and their wellbeing — giving them structured, responsible access to what they have already earned, when they actually need it.</p>
                        <p>Exactly the kind of system I look for before associating my name with anything.</p>

                    </div>
                    <h2 className="text-[110px] font-bold">Simple,</h2>
                </div>
            </div>
        </section>
    )
}