import Icon from "../ui/IconSprite";
import Image from "next/image";
import Orbit from "../ui/Orbit";

const points = [
    "Transparency",
    "Genuine impact",
    "Compliance",
    "Responsible design.",
]

export default function Associate() {
    return (
        <section className="relative overflow-hidden">
            <Orbit size={{ default: 350, sm: 450, lg: 600, xl: 700, '2xl': 750 }} className="absolute left-1/2 lg:left-0 bottom-0 -translate-x-1/2 lg:-translate-x-1/3 translate-y-1/3 " circleClassName="border-primary" dotClassName="bg-primary/25" />
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-15 fp max-container ">
                <div className="relative w-full lg:w-[45%] flex justify-center ">
                    {/* Card */}
                    <div className="absolute -right-2 -top-4 sm:right-10 md:right-25 lg:right-0 xl:right-5 lg:top-0 flex gap-2 mlg:gap-3 items-center p-2 mlg:p-3 lg:p-5 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-t-white/10 border-l-white/10 border-b-white/40 border-r-white/30 z-1">
                        <div className="w-7 h-7 mlg:w-9 mlg:h-9 sm:w-10 sm:h-10 bg-[url(/images/about/amitabh.webp)] bg-cover bg-top rounded-full shrink-0"></div>
                        <div className="flex flex-col gap-0.5">
                            <h4 className="f-sm mlg:f-base font-bold text-secondary">Amitabh Kowshik</h4>
                            <p className="text-text-dark f-xs mlg:f-sm">Financial Consultant</p>
                        </div>
                    </div>
                    {/* End of Card */}
                    <Image src="/images/app-splash-tilt2.webp" alt="" width={670} height={818} className="relative lg:absolute w-full sm:w-[70%] md:w-[60%] lg:w-[85%] xl:w-full h-auto 2xl:w-[678px] 2xl:h-[818px] lg:top-0 lg:-left-10" />
                </div>
                <div className="w-full lg:w-[55%] flex flex-col gap-5">
                    <h2 className="f-h3 2xl:f-h2 text-secondary font-bold lg:mb-3">Why I Associate My Name With Refyne</h2>
                    <p className="text-text-dark ">I do not recommend platforms I have not examined thoroughly. I do not associate with systems I do not trust completely.</p>
                    <p className="text-text-dark ">Refyne met every standard I apply in my advisory work</p>

                    <div className="w-max grid grid-cols-1 lg:grid-cols-2  gap-5">
                        {points.map((point) => (
                            <div key={point} className="w-max flex gap-4 lg:gap-6 items-center">
                                <Icon name="check-mark" width={26} height={26} className="w-[20px] h-[20px] 2xl:w-[26px] 2xl:h-[26px] text-primary" />
                                <p className="text-secondary font-bold">{point}</p>
                            </div>
                        ))}

                    </div>
                    <p className="text-text-dark ">If you are an organisation looking to implement Refyne, or an individual wanting to understand what it can do for your workforce — I am here to guide that conversation with the same directness and due diligence I bring to every engagement.</p>
                </div>

            </div>
        </section>
    );
}