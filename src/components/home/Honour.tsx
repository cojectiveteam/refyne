import Image from "next/image";

export default function Honour() {
    return (
        <section className="bg-primary">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 xl:gap-10 fp max-container">
                <div className="relative w-full lg:w-[60%] 2xl:w-[70%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-auto border-8 border-text-light rounded-2xl overflow-hidden ">
                    <Image src="/images/home/nss-1.webp" fill alt="" className="object-cover" />
                </div>
                <div className="w-full lg:w-[40%] 2xl:w-[30%] flex flex-col gap-5 lg:gap-9 p-5 bg-text-light rounded-3xl ">
                    <div className="flex flex-col gap-4">
                        <h5 className="f-h5 text-secondary font-medium">A Moment of Honour at Nyay Seva Sangam</h5>
                        <p className="text-text-dark">Today Nyay Seva Sangam Mega welfare camp of Rajasthan State Legal Service Authority was organised in Amer in which Prabhuji was presented a shawl as a gift.</p>
                    </div>
                    <div className="relative w-full h-[236px] sm:h-[286px] lg:h-[236px] rounded-2xl overflow-hidden ">
                        <Image src="/images/home/nss-2.webp" fill alt="" className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}