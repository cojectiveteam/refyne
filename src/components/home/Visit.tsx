import Image from "next/image";

export default function Visit() {
    return (
        <section>
            <div className="grid grid-cols-7 gap-x-7 gap-y-15 fp max-container">
                <h3 className="text-[36px] text-secondary font-semibold col-span-3">A Memorable Visit by Justice Chandrachud to Jamdoli Ashram</h3>
                <p className="text-text-dark col-span-4 col-start-4">The Honorable Justice Dhananjay Yashwant Chandrachud, retired Indian jurist, was welcomed by the devotees of Apna Ghar Ashram, Jamdoli, by applying tilak and wearing a scarf. The Honorable distributed Kheer Prasad to the devotees, spoke with the devotees, inspected the Ashram, took stock of the arrangements, and expressed satisfaction. The items prepared by the devotees were presented as gifts.</p>
                <div className="relative h-[442px] border-8 border-white rounded-2xl shadow-lg overflow-hidden col-span-3 row-span-4 row-start-2">
                    <Image src="/images/home/meeting.webp" fill className="object-cover" alt="" />
                </div>
                <div className="relative h-[442px] border-8 border-white rounded-2xl shadow-lg overflow-hidden col-span-2 row-span-4 col-start-4 row-start-2">
                    <Image src="/images/home/meeting.webp" fill className="object-cover" alt="" />
                </div>
                <div className="relative h-[442px] border-8 border-white rounded-2xl shadow-lg overflow-hidden col-span-2 row-span-4 col-start-6 row-start-2">
                    <Image src="/images/home/meeting.webp" fill className="object-cover" alt="" />
                </div>
            </div>
        </section>
    )
}