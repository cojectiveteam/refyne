import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import GlowEffect from "../ui/GlowEffect";
import Image from "next/image";

export default function CallToAction() {
    return (
        <section>
            <div className="fp max-container pt-40 pb-10">
                <div className="relative bg-primary rounded-2xl">
                    {/* Background Layer: Overflow Hidden to clip the glow to the card corners */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-0">
                        <div className="flex gap-10 px-10 pt-10 h-full w-full">
                            <div className="w-1/2 relative h-full">

                                <GlowEffect size={430} color="bg-white" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>

                    {/* Foreground Layer: Overflow Visible so the image pops out */}
                    <div className="flex gap-10 px-10 pt-10 relative z-10">
                        <div className="w-1/2 relative">
                            <Image src="/images/app2.webp" alt="App" width={584} height={568} className="z-10 relative -mt-40 -mb-10" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center gap-10 text-text-light">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-[50px] font-bold">Let’s Work Together</h2>
                                <p>If you are looking for structured guidance, clear thinking and responsible financial decisions, I can help.</p>
                            </div>
                            <div className="flex gap-4">
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