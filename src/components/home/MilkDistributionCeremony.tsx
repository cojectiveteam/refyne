import Image from "next/image";

export default function MilkDistributionCeremony() {
    return (
        <section className="bg-primary">
            <div className="grid grid-cols-3 gap-10 fp max-container  ">
                <div className="relative  border-8 border-white rounded-2xl shadow-lg overflow-hidden row-span-2"><Image src="/images/home/meeting.webp" alt="" fill className="object-cover" /></div>

                <div className="flex flex-col gap-7 text-text-light col-span-2">
                    <h3 className="text-[36px] font-semibold">Milk Distribution Ceremony at Apna Ghar Ashram, Jamdoli</h3>
                    <p className="max-w-[90%]">Today, Dainik Bhaskar Group is starting the distribution of milk for the devotees at Apna Ghar Ashram, Jamdoli. All the officials and members are requested to attend in large numbers and make this event a success. Thank you.</p>
                </div>
                <div className="grid grid-cols-2 col-start-2 col-span-2 gap-6 ">
                    <div className="relative h-[264px]  border-8 border-white rounded-2xl shadow-lg overflow-hidden "><Image src="/images/home/meeting.webp" alt="" fill className="object-cover" /></div>
                    <div className="relative h-[264px]  border-8 border-white rounded-2xl shadow-lg overflow-hidden "><Image src="/images/home/meeting.webp" alt="" fill className="object-cover" /></div>
                </div>


            </div>
        </section>
    )
}