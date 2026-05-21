import Icon from "../ui/IconSprite";

const cards = [
    {
        title: "RBI Compliant",
        titleClassName: "text-text-light",
        iconClassName: "text-text-light",
        dotClassName: "bg-[#BDD7FD]",
        cardClassName: "bg-[#0045A8] -rotate-4",
    },
    {
        title: "ISO 27001 & SOC 2 ",
        titleClassName: "text-text-light",
        iconClassName: "text-secondary",
        dotClassName: "bg-[#0045A8]",
        cardClassName: "bg-primary rotate-4",
    },
    {
        title: "Data Encrypted",
        titleClassName: "text-secondary",
        iconClassName: "text-secondary",
        dotClassName: " bg-primary",
        cardClassName: "bg-[#BDD7FD]",
    }
]

const certifications = [
    {
        title: "RBI Compliant",
        description: "Refyne is fully RBI compliant and holds ISO 27001 and SOC 2 certifications — the same standards expected of leading financial institutions worldwide.",
    },
    {
        title: "Data Encrypted",
        description: "All data is encrypted at rest and in transit. KYC processes follow RBI's mandatory guidelines. A dedicated Information Security team monitors operations continuously.",
    },
    {
        description: "This is one of the primary reasons I chose to work with Refyne. The compliance framework is not marketed. It is practised.",
    }
]

export default function Compliance() {
    return (
        <section className="relative bg-text-light">
            <div className="grid grid-cols-3 gap-8 fp max-container">
                <div className="flex flex-col justify-between">
                    <h2 className="text-[50px] text-secondary font-bold">Why Compliance Matters </h2>
                    <div className="flex flex-col gap-3 text-text-dark">
                        <p>In my years of working with governance and financial systems, I have seen what happens when compliance is treated as a formality.</p>
                        <p>It is not a formality. It is a foundation.</p>
                    </div>
                </div>
                <div className="p-8 bg-primary rounded-4xl ">
                    <div className="w-full h-full flex flex-col justify-center gap-8 p-7 bg-text-light rounded-2xl">
                        {cards.map((card, index) => (
                            <div key={index} className={`flex justify-between items-center p-5  ${card.cardClassName} rounded-xl`}>
                                <Icon name="check-mark-rounded" className={card.iconClassName} />
                                <p className={`font-bold ${card.titleClassName}`}>{card.title}</p>
                                <div className={`w-2 h-2 ${card.dotClassName} rounded-full`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {certifications.map((certification, index) => (
                        <div key={index} className={`flex flex-col gap-3 pb-5 ${index === certifications.length - 1 ? "" : "border-b"} border-[#DFDFDF]`}>
                            {certification.title && (
                                <h6 className="text-base font-bold text-secondary">{certification.title}</h6>
                            )}
                            <p className="text-text-dark">{certification.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}