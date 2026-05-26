import Image from "next/image";
const work = [

    "Assess financial behaviour and stress points",
    "Identify practical and responsible solutions",
    "Plan and guide structured implementation",
    "Ensure governance, compliance and clarity",
    "Support communication and adoption",
    "Track outcomes and effectiveness"

]
export default function Work() {
    return (
        <section>
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-15 fp max-container">
                <div className="w-full xl:w-1/2 flex flex-col gap-5 xl:gap-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="f-h3 2xl:f-h2 text-black font-bold ">How I Work With Organisations</h2>
                        <p className="text-text-dark">This is how I work with organizations—through collaboration, clarity, and results.</p>
                    </div>
                    <div className="flex flex-col gap-4 xl:gap-6">
                        {work.map((item, index) => (
                            <div key={index} className="flex gap-4 items-center ">
                                <span className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] flex justify-center items-center f-base md:f-h5 text-white font-medium bg-primary rounded-full shrink-0 ">{index + 1}</span>
                                <p className="f-base md:f-h5 text-text-dark">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-text-dark">My role is to ensure financial systems are useful, responsible and well understood.</p>
                </div>
                <div className="w-full  xl:w-1/2 grid grid-cols-2 xl:grid-rows-[1fr_auto] gap-5">
                    <div className="w-full h-[230px] sm:h-[280px] xl:h-auto  relative rounded-2xl overflow-hidden col-span-2">
                        <Image src="/images/home/meeting.webp" fill alt="meeting" className="object-cover" />
                    </div>
                    <div className="w-full h-[120px] sm:h-[160px] lg:h-[180px] relative rounded-2xl overflow-hidden">
                        <Image src="/images/home/meeting.webp" fill alt="meeting" className="object-cover" />
                    </div>
                    <div className="w-full h-[120px] sm:h-[160px] lg:h-[180px] relative rounded-2xl overflow-hidden">
                        <Image src="/images/home/meeting.webp" fill alt="meeting" className="object-cover" />
                    </div>
                </div>

            </div>
        </section>
    );
}