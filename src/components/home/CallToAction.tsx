import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import GlowEffect from "../ui/GlowEffect";
import Image from "next/image";

export default function CallToAction() {
    return (
        <section>
            <div className="fp max-container pt-20 lg:pt-30 2xl:pt-40 lg:pb-10">
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
                    <div className="flex flex-col lg:flex-row gap-5 xl:gap-10 px-5 lg:px-10 pt-0 pb-5 sm:pb-10 xl:pb-0 lg:pt-10 relative z-10">
                        <div className="w-full lg:w-[45%] xl:w-1/2 relative  flex justify-center translate-x-4 lg:translate-none">
                            <Image src="/images/app2.webp" alt="App" width={584} height={568} className="sm:w-[60%] lg:w-full xl:w-[90%] sm:h-auto 2xl:w-[584px] 2xl:h-[568px] relative -mt-15 -mb-5 lg:-mt-30 2xl:-mt-40 2xl:-mb-10 z-10" />
                        </div>
                        <div className="w-full lg:w-[55%] xl:w-1/2 flex flex-col justify-center gap-5 lg:gap-10 text-text-light">
                            <div className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-left">
                                <h2 className="f-h3 font-bold">Let’s Work Together</h2>
                                <p className="w-full sm:w-[80%] lg:w-full">If you are looking for structured guidance, clear thinking and responsible financial decisions, I can help.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start  gap-4">
                                <PrimaryButton buttonText="Consult With Me" icon="arrow-right" iconPosition="after" />
                                <SecondaryButton buttonText="Learn About Refyne" borderColor="border-text-light" textColor="text-text-light" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}