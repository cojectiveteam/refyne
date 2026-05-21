import Image from "next/image";

export default function Honour() {
    return (
        <section className="bg-primary">
            <div className="flex gap-10 fp max-container">
                <div className="relative w-[70%] border-8 border-text-light rounded-2xl overflow-hidden ">
                    <Image src="/images/home/meeting.webp" fill alt="" className="object-cover" />
                </div>
                <div className="w-[30%] flex flex-col gap-9 p-5 bg-text-light rounded-3xl ">
                    <div className="flex flex-col gap-4">
                        <h5 className="text-[24px] text-secondary font-medium">A Moment of Honour at Nyay Seva Sangam</h5>
                        <p className="text-text-dark">Today Nyay Seva Sangam Mega welfare camp of Rajasthan State Legal Service Authority was organised in Amer in which Prabhuji was presented a shawl as a gift.</p>
                    </div>
                    <div className="relative w-full h-[236px] rounded-2xl overflow-hidden ">
                        <Image src="/images/home/meeting.webp" fill alt="" className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}