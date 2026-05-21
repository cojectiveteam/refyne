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
            <div className="flex gap-15 fp max-container">
                <div className="w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-[50px] text-black font-bold ">How I Work With Organisations</h2>
                        <p className="text-text-dark">This is how I work with organizations—through collaboration, clarity, and results.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        {work.map((item, index) => (
                            <div key={index} className="flex gap-4 items-center">
                                <span className="w-[40px] h-[40px] flex justify-center items-center text-[24px] text-white font-medium bg-primary rounded-full ">{index + 1}</span>
                                <p className="text-[24px] text-text-dark">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-text-dark">My role is to ensure financial systems are useful, responsible and well understood.</p>
                </div>
                <div className="w-1/2 grid grid-cols-2 gap-5">
                    <div className="relative rounded-2xl overflow-hidden col-span-2">
                        <Image src="/images/home/meeting.webp" fill alt="meeting" className="object-cover" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image src="/images/home/meeting.webp" fill alt="meeting" className="object-cover" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image src="/images/home/meeting.webp" fill alt="meeting" className="object-cover" />
                    </div>
                </div>

            </div>
        </section>
    );
}