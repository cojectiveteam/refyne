import Image from "next/image";

const digniatries = [
    "Dr Achal Gulati-Vice Chancellor, MGUMS, Jaipur.",
    "Dr V K Kapoor - Pro- Vice Chancellor, MGUMST.",
    "Mr Pradip Pyne- Registrar, MGUMST.",
    "⁠Dr Madhusudan Tiwari, Principal, MG Physiotherapy College, MGUMST."
]
export default function Dignitaries() {
    return (
        <section>
            <div className="flex flex-col-reverse lg:flex-row gap-8 xl:gap-12 fp max-container">
                <div className="w-full lg:w-[40%] relative">
                    <div className="relative w-[70%] h-[250px] mlg:h-[300px] sm:h-[400px] md:h-[500px] lg:h-full  rounded-2xl overflow-hidden  ">
                        <Image src="/images/home/meeting.webp" alt="" fill className="object-cover" />
                    </div>
                    <div className="absolute w-[50%] xl:w-[40%] h-[120px] mlg:h-[135px] sm:h-[180px] md:h-[225px] lg:h-[164px] border-10 border-white  rounded-2xl overflow-hidden right-0 top-1/2  -translate-y-1/2  ">
                        <Image src="/images/home/meeting.webp" alt="" fill className="object-cover" />
                    </div>
                </div>
                <div className="w-full lg:w-[60%] flex flex-col gap-5 lg:gap-10">
                    <h2 className="f-h3 2xl:f-h2 text-secondary font-bold">These dignitaries from MGUMST  were present during MOU at VC office MGUMST</h2>
                    <div className=" flex flex-col gap-3 lg:gap-4 bg-primary p-5 lg:p-8 rounded-2xl">
                        {digniatries.map((item, index) => {
                            return (
                                <div className="flex items-center gap-4 lg:gap-5" key={index}>
                                    <div className="w-1.5 2xl:w-2 h-1.5 2xl:h-2 bg-white rounded-full shrink-0"></div>
                                    <p className="f-sm mmd:f-base xl:text-lg 2xl:text-xl text-text-light">{item}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </section>
    )
}