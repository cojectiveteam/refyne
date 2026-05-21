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
            <Orbit size={750} className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/3 " circleClassName="border-primary" dotClassName="bg-primary/25" />
            <div className="flex gap-15 fp max-container ">
                <div className="w-[45%] relative">
                    <div className="relative w-full h-full ">
                        <Image src="/images/app-splash-tilt2.webp" alt="" width={670} height={818} className="absolute top-0 -left-10" />
                    </div>
                </div>
                <div className="w-[55%] flex flex-col gap-5">
                    <h2 className="text-[50px] text-secondary font-bold mb-3">Why I Associate My Name With Refyne</h2>
                    <p className="text-text-dark ">I do not recommend platforms I have not examined thoroughly. I do not associate with systems I do not trust completely.</p>
                    <p className="text-text-dark ">Refyne met every standard I apply in my advisory work</p>

                    <div className="w-max grid grid-cols-2  gap-5">
                        {points.map((point) => (
                            <div key={point} className="w-max flex gap-6 items-center">
                                <Icon name="check-mark" width={26} height={26} className="text-primary" />
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