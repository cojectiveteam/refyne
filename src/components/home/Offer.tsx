import Icon from "@/components/ui/IconSprite";
import Image from "next/image";
import Pill from "@/components/ui/Pill";

const Solutions = [
    "Consulting and advisory for organisations and individuals",
    "Strategy planning and financial structuring",
    "Due diligence for investments, projects and compliance matters",
    "Speaking engagements and leadership sessions",
    "Custom-designed solutions based on specific client needs",
    "There are no fixed packages. Every engagement is tailored"
]

export default function Offer() {
    return (
        <section>
            <div className=" fp max-container">
                <div className="flex flex-col gap-4 bg-accent p-5 lg:p-10 rounded-xl">
                    <Pill text="What I Offer" />
                    <div className="grid grid-cols-1  lg:grid-cols-2 gap-y-5 lg:gap-y-10  lg:gap-x-10 xl:gap-x-15">
                        <h2 className="f-h3 2xl:f-h2 font-bold text-black order-1">Solutions That Deliver</h2>
                        <p className="text-text-dark flex flex-col justify-center order-2 ">All services are flexible and fully tailored—designed to meet your unique goals without any fixed packages.</p>
                        <div className="w-full h-[180px] sm:h-[300px] lg:h-auto rounded-xl lg:rounded-3xl relative overflow-hidden sm:mt-5 lg:mt-0 order-4">
                            <Image src="/images/home/meeting.webp" alt="" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-5 xl:gap-7 order-3">
                            {Solutions.map((solution, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <Icon name="check-mark" width={32} height={32} className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7" />
                                    <p className="f-sm mlg:f-base text-secondary font-medium">{solution}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}