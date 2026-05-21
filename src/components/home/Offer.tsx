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
                <div className="flex flex-col gap-4 bg-accent p-10 rounded-xl">
                    <Pill text="What I Offer" />
                    <div className="grid grid-cols-2 gap-y-10 gap-x-15">
                        <h2 className="text-[50px] font-bold text-black">Solutions That Deliver</h2>
                        <p className="text-text-dark flex flex-col justify-center ">All services are flexible and fully tailored—designed to meet your unique goals without any fixed packages.</p>
                        <div className="rounded-3xl relative overflow-hidden">
                            <Image src="/images/home/meeting.webp" alt="" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-7">
                            {Solutions.map((solution, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <Icon name="check-mark" width={32} height={32} className="" />
                                    <p className="text-secondary font-medium">{solution}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}