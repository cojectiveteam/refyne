import Orbit from "../ui/Orbit";
import Image from "next/image";

const offers = [
    {
        title: "Salary On-Demand",
        description: "Employees access a portion of their already-earned salary before payday. A transparent, slab-based convenience fee applies. No interest. No hidden charges. No paperwork. Just access — when it is needed most.",
        image: "/images/about/salary-on-demand.webp",
        imageWidth: 291,
        imageHeight: 497,
        imageClassName: "left-1/2 bottom-0 -translate-x-7/12 translate-y-[42%] rotate-13",
        className: "col-span-2"
    },
    {
        title: "MoneyGuru Financial Literacy",
        description: "Employees access a portion of their already-earned salary before payday. A transparent, slab-based convenience fee applies. No interest. No hidden charges. No paperwork. Just access — when it is needed most.",
        image: "/images/about/financial-literacy.webp",
        imageWidth: 291,
        imageHeight: 497,
        imageClassName: "left-1/2 bottom-0 -translate-x-1/2 translate-y-[42%] ",
        className: "col-span-2 col-start-3"
    },
    {
        title: "FinSuite Financial Planning",
        description: "Employees access a portion of their already-earned salary before payday. A transparent, slab-based convenience fee applies. No interest. No hidden charges. No paperwork. Just access — when it is needed most.",
        image: "/images/about/financial-planning.webp",
        imageWidth: 250,
        imageHeight: 520,
        imageClassName: "right-1/2 translate-x-7/12  bottom-0 translate-y-[45%] -rotate-13",
        className: "col-span-2 col-start-5"
    },
    {
        title: "Refyne Privilege Club",
        description: "Employees access a portion of their already-earned salary before payday. A transparent, slab-based convenience fee applies. No interest. No hidden charges. No paperwork. Just access — when it is needed most.",
        image: "/images/about/privilege-club.webp",
        imageWidth: 249,
        imageHeight: 517,
        imageClassName: "left-1/2 -translate-x-7/12  bottom-0 translate-y-[45%] rotate-13",
        className: "col-span-2 col-start-2"
    },
    {
        title: "RuPay Credit Cards",
        description: "Employees access a portion of their already-earned salary before payday. A transparent, slab-based convenience fee applies. No interest. No hidden charges. No paperwork. Just access — when it is needed most.",
        image: "/images/about/credit-cards.webp",
        imageWidth: 251,
        imageHeight: 521,
        imageClassName: "right-1/2 translate-x-7/12  bottom-0 translate-y-[45%] -rotate-13",
        className: "col-span-2 col-start-4"
    }
]

export default function Offer() {
    return (
        <section className="bg-text-light">
            <div className="flex flex-col gap-13 fp max-containier">
                <div className="flex flex-col gap-5 items-center text-center">
                    <h2 className="text-[50px] text-secondary font-bold">What Refyne Offers</h2>
                    <p className="text-text-dark max-w-xl">Refyne is not a single product. It is a complete financial wellness suite
                        each offering built around a specific, real need.</p>
                </div>

                <div className="grid grid-cols-6 gap-12">
                    {offers.map((offer, index) => (
                        <div key={index} className={`relative flex flex-col items-center text-center gap-5 px-6 pt-8 bg-linear-to-b from-[#0A53BC] to-[#1072FF] rounded-2xl  overflow-hidden ${offer.className}`}>
                            <Orbit size={320} className="absolute left-1/2 -translate-x-1/2 bottom-0" />
                            <h4 className="text-[22px] font-bold text-text-light ">{offer.title}</h4>
                            <p className="text-accent">{offer.description}</p>
                            <div className="relative w-full h-[300px]">
                                <Image src={offer.image} alt={offer.title} width={offer.imageWidth} height={offer.imageHeight} className={`absolute ${offer.imageClassName}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}