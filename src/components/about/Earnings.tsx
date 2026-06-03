import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import GlowEffect from "../ui/GlowEffect";
import Image from "next/image";

export default function Earnings() {
    return (
        <section>
            <div className="fp max-container pt-20 lg:pt-30 2xl:pt-40 lg:pb-10 overflow-hidden">
                <div className="relative bg-primary rounded-2xl">
                    {/* Background Layer: Overflow Hidden to clip the glow to the card corners */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-0">
                        <div className="flex gap-10 px-10 pt-10 h-full w-full">
                            <div className="w-1/2 relative h-full">

                                <GlowEffect size={150} blur={75} color="bg-white" className="lg:hidden left-1/2 top-0 lg:top-1/2 -translate-x-1/2 -translate-y-1/2" />
                                <GlowEffect size={430} color="bg-white" className="hidden left-1/2 top-0 lg:top-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>

                    {/* Foreground Layer: Overflow Visible so the image pops out */}
                    <div className="relative flex flex-col-reverse lg:flex-row gap-5 xl:gap-10 px-5 sm:px-13 z-10">

                        <div className="w-full lg:w-[55%] xl:w-1/2 flex flex-col justify-center gap-5 lg:gap-10 py-5 sm:py-13 text-text-light">
                            <div className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-left">
                                <h2 className="f-h3 font-bold">Ready to access your earnings anytime with Refyne?</h2>
                                <p className="w-full sm:w-[80%] lg:w-full">If you are looking for structured guidance, clear thinking and responsible financial decisions, I can help.</p>
                                <h5 className="f-base 2xl:f-h5">Presented by Amitabh Kaushik Counsultancy</h5>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start  gap-4">
                                <PrimaryButton buttonText="Consult With Me" icon="arrow-right" iconPosition="after" />
                                <SecondaryButton href="/about-us" buttonText="Learn About Refyne" borderColor="border-text-light" textColor="text-text-light" />
                            </div>
                        </div>
                        <div className="w-full h-30 mmd:h-45 mlg:h-55 sm:h-35 md:h-50 lg:h-auto lg:w-[45%] xl:w-1/2 relative  flex justify-center ">
                            <Image src="/images/app2.webp" alt="App" width={584} height={568} className="absolute left-1/2 -bottom-12 sm:-bottom-20 lg:bottom-0 2xl:-bottom-8 -translate-x-2/5 2xl:-translate-x-1/2 sm:w-[60%] lg:w-full ] sm:h-auto 2xl:w-[584px] 2xl:h-[568px]  z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}