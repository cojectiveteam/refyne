import Image from "next/image";

const data = [
    {
        title: "Income Access",
        subTitle: "Salary is locked until payday",
        image: "/images/about/coin.webp",
        className: "left-0 top-0 bg-primary",

    },
    {
        title: "Financial stress ",
        subTitle: "Unexpected expenses don’t wait",
        image: "/images/about/coin.webp",
        className: "right-0 bottom-0 bg-[#0045A8] ",

    }
]

export default function PublicService() {
    return (
        <section>
            <div className="flex gap-10 fp max-container">
                <div className="w-[60%] flex flex-col gap-12">
                    <h2 className="text-[36px] font-semibold">Over 3 decades in public service taught me one thing clearly.</h2>
                    <div className="flex flex-col gap-3">
                        <p>Financial stress in the workplace is rarely about income. It is about timing, awareness and access.</p>
                        <p>When I encountered Refyne, I recognised immediately what it was built to solve — and why it mattered.</p>
                    </div>
                </div>
                <div className="relative w-[40%] flex justify-center items-center">
                    <Image src="/icons/about/financial-growth.svg" alt="financial-growth" width={258} height={258} />

                    {data.map((item, index) => (
                        <div key={index} className={`absolute ${item.className} flex items-center rounded-2xl shadow-xl  `}>
                            <div className="relative flex flex-col gap-1  z-10 py-5 pl-5 pr-10  rounded-2xl  overflow-hidden ">
                                <h4 className="text-base text-text-light font-bold ">{item.title}</h4>
                                <p className="text-[14px] text-accent leading-tight ">{item.subTitle}</p>
                                <Image src={item.image} alt="Coins" width={41} height={32} className="absolute right-0 bottom-0  z-20" />

                                <Image src="/images/cloud.webp" alt="Cloud" width={937} height={434} className=" absolute right-0 bottom-0 -translate-y-1/4  opacity-30  -z-10 object-scale-down" />


                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}