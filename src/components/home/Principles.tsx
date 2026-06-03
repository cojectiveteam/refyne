import Image from "next/image";

const principles = [
    {
        icon: "/icons/trust.svg",
        title: "Trust",
        description: "Building and maintaining trust through consistent actions and transparent communication.",
    },
    {
        icon: "/icons/integrity.svg",
        title: "Integrity",
        description: "Upholding the highest ethical standards in every decision and interaction.",
    },
    {
        icon: "/icons/punctuality.svg",
        title: "Punctuality",
        description: "Respecting time commitments and delivering on promises when expected.",
    },
    {
        icon: "/icons/discipline.svg",
        title: "Discipline",
        description: "Maintaining focus, consistency, and dedication to achieving excellence.",
    },
    {
        icon: "/icons/clarity.svg",
        title: "Clarity",
        description: "Communicating with precision and ensuring understanding at every level.",
    },
    {
        icon: "/icons/diligence.svg",
        title: "Due diligence",
        description: "Thorough research and careful attention to detail in all undertakings.",
    },
];

export default function Principles() {
    return (
        <section className="bg-primary">
            <div className="fp max-container">
                <div className="flex flex-col gap-5 lg:gap-8 xl:gap-13 p-6 lg:p-10 bg-accent rounded-2xl lg:rounded-4xl">
                    <div className="flex flex-col items-center gap-5 text-center">
                        <h2 className="f-h3 2xl:f-h2 text-primary font-bold">My Professional Principles</h2>
                        <p className="text-text-dark">These principles guided my public service career and continue to guide my consulting work.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
                        {principles.map((principle, index) => (
                            <div key={index} className="flex flex-col gap-3 xl:gap-5 p-4 lg:p-5 bg-white rounded-xl shadow-lg ">
                                <div className="flex items-center gap-3 xl:gap-4">
                                    {/* <div className="w-[50px] h-[50px] flex justify-center items-center bg-button rounded-full">
                                        <Image src={principle.icon} alt={`${principle.title}`} width={28.39} height={31.51} />
                                    </div> */}
                                    <Image src={principle.icon} alt={`${principle.title}`} width={50} height={50} className="w-[18%] mmd:w-[16%] mlg:w-[14%] h-auto 2xl:w-[50px] 2xl:h-[50px]" />
                                    <h3 className="f-h5 font-semibold bg-button text-transparent bg-clip-text">{principle.title}</h3>
                                </div>
                                <p className="f-sm mlg:f-base text-text-dark">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}