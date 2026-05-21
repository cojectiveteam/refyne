import Orbit from "../ui/Orbit";

const stats = [
    {
        number: "500+",
        text: "Organizations across\n India"
    },
    {
        number: "8M+",
        text: "Employees on the\n platform"
    },
    {
        number: "23+",
        text: "Industries\n served"
    },
    {
        number: "11+",
        text: "Regional\n languages"
    },
    {
        number: "30M",
        text: "Funding\n raised"
    },
    {
        number: "10M+",
        text: "Lives\n impacted"
    }
]


export default function Scale() {
    return (
        <section className="relative bg-primary overflow-hidden">
            <Orbit size={852} className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2" />
            <div className="flex gap-10 fp max-container">
                <div className="w-[30%] flex flex-col gap-8">
                    <h2 className="text-[50px] text-text-light font-bold">The Scale Behind It</h2>
                    <p className="text-accent">This is not a new idea still finding its feet.
                        Refyne operates at a scale that reflects genuine trust - earned over time.</p>
                </div>
                <div className="w-[70%] grid grid-cols-3 grid-rows-2 gap-10">
                    {stats.map((item, index) => (
                        <div key={index} className="relative aspect-square w-full h-full flex flex-col gap-3 justify-center items-center text-center">

                            <span className="text-[50px] text-text-light font-bold leading-none">{item.number}</span>
                            <p className="text-sm text-accent whitespace-pre-wrap">{item.text}</p>
                            <Orbit size="100%" className="absolute inset-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}