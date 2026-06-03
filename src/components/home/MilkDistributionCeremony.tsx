import Image from "next/image";

export default function MilkDistributionCeremony() {
    return (
        <section className="bg-primary">
            <div className="grid grid-cols-5 lg:grid-cols-3 gap-3 lg:gap-10 fp max-container  ">
                <div className="relative h-[250px] sm:h-[300px] lg:h-auto  border-8 border-white rounded-2xl shadow-lg overflow-hidden col-span-3 lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-1 order-2 lg:order-1 ">
                    <Image src="/images/home/mdc-1.webp" alt="" fill className="object-cover " />
                </div>

                <div className="flex flex-col gap-5 lg:gap-7 text-text-light col-span-5 row-start-1 lg:col-span-2 order-1 lg:order-2 mb-2 lg:mb-0">
                    <h3 className="f-h3 font-semibold">Milk Distribution Ceremony at Apna Ghar Ashram, Jamdoli</h3>
                    <p className="max-w-[90%]">Today, Dainik Bhaskar Group is starting the distribution of milk for the devotees at Apna Ghar Ashram, Jamdoli. All the officials and members are requested to attend in large numbers and make this event a success. Thank you.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 col-start-4 lg:col-start-2 lg:col-span-2 gap-3 lg:gap-6 order-3 ">
                    <div className="relative h-full  lg:h-[264px]  border-8 border-white rounded-2xl shadow-lg overflow-hidden ">
                        <Image src="/images/home/mdc-2.webp" alt="" fill className="object-cover" /></div>
                    <div className="relative h-full lg:h-[264px]  border-8 border-white rounded-2xl shadow-lg overflow-hidden ">
                        <Image src="/images/home/mdc-3.webp" alt="" fill className="object-cover" /></div>
                </div>


            </div>
        </section>
    )
}