import Image from "next/image";
import Orbit from "../ui/Orbit";

export default function RefyneOffers() {
    return (
        <section className="bg-text-light">
            <div className="flex flex-col gap-8 lg:gap-18 fpx fpt max-container">
                <div className="flex flex-col gap-5 items-center text-center">
                    <h2 className="f-h3 2xl:f-h2 text-secondary font-bold">What Refyne Offers</h2>
                    <p className="text-text-dark">Refyne is the one-stop destination for all your financial needs.</p>
                </div>
                <div className="relative flex flex-col gap-5 sm:gap-10 xl:gap-15 2xl:gap-20 px-5 pt-5 lg:px-10 lg:pt-10 bg-primary rounded-t-4xl">
                    <Orbit size={{ default: 250, sm: 350, md: 400, lg: 500, xl: 600 }} className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/5" />
                    <Image src="/images/cloud.webp" alt="" width={937} height={434} className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/2 opacity-50 z-0" />
                    <Image src="/images/cloud.webp" alt="" width={937} height={434} className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/2 opacity-50 z-0" />
                    <div className="flex flex-col items-center text-center gap-5">
                        <h4 className="f-h3 text-text-light font-semibold">Salary On-Demand</h4>
                        <p className="text-accent w-full lg:max-w-3xl">Access a portion of your earned salary anytime before payday instead of taking a loan or paying interest. It gives you flexibility when you need it most, without creating a future financial burden.</p>
                    </div>
                    <div className="w-full h-full flex justify-center items-end gap-2 md:gap-4 lg:gap-6 xl:gap-10 z-1 ">
                        <Image src="/images/about/offers-1.webp" alt="" width={260} height={320} className="w-[30%] h-auto 2xl:w-[260px] 2xl:h-[320px]" />
                        <Image src="/images/about/offers-2.webp" alt="" width={293} height={377} className="w-[32%] h-auto 2xl:w-[293px] 2xl:h-[377px]" />
                        <Image src="/images/about/offers-3.webp" alt="" width={222} height={310} className="w-[27%] h-auto 2xl:w-[222px] 2xl:h-[310px]" />
                    </div>
                </div>


            </div>
        </section>
    );
}