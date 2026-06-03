import Image from "next/image";

export default function Visit() {
    return (
        <section>
            <div className="grid grid-cols-2 lg:grid-cols-7 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 lg:gap-y-8 xl:gap-y-15 fp max-container">
                <h3 className="f-h4 mlg:f-h3 text-secondary font-semibold col-span-2 lg:col-span-3 mb-2 lg:mb-0">A Memorable Visit by Justice Chandrachud to Jamdoli Ashram</h3>
                <p className="text-text-dark col-span-2 lg:col-span-4 lg:col-start-4 mb-2 lg:mb-0">The Honorable Justice Dhananjay Yashwant Chandrachud, retired Indian jurist, was welcomed by the devotees of Apna Ghar Ashram, Jamdoli, by applying tilak and wearing a scarf. The Honorable distributed Kheer Prasad to the devotees, spoke with the devotees, inspected the Ashram, took stock of the arrangements, and expressed satisfaction. The items prepared by the devotees were presented as gifts.</p>
                <div className="relative w-full h-[300px] 2xl:h-[442px] border-8 border-white rounded-2xl shadow-lg overflow-hidden col-span-2 lg:col-span-3 lg:row-span-4 lg:row-start-2">
                    <Image src="/images/home/ashram-1.webp" fill className="object-cover" alt="" />
                </div>
                <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[300px] 2xl:h-[442px] border-8 border-white rounded-2xl shadow-lg overflow-hidden col-span-1 lg:col-span-2 lg:row-span-4 lg:col-start-4 lg:row-start-2">
                    <Image src="/images/home/ashram-2.webp" fill className="object-cover" alt="" />
                </div>
                <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[300px] 2xl:h-[442px] border-8 border-white rounded-2xl shadow-lg overflow-hidden col-span-1 lg:col-span-2 lg:row-span-4 lg:col-start-6 lg:row-start-2">
                    <Image src="/images/home/ashram-3.webp" fill className="object-cover" alt="" />
                </div>
            </div>
        </section>
    )
}