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
            <div className="flex gap-12 fp max-container">
                <div className="w-[40%] relative">
                    <div className="relative w-[70%] h-full  rounded-2xl overflow-hidden  ">
                        <Image src="/images/home/meeting.webp" alt="" fill className="object-cover" />
                    </div>
                    <div className="absolute w-[40%] h-[164px] border-10 border-white  rounded-2xl overflow-hidden right-0 top-1/2  -translate-y-1/2  ">
                        <Image src="/images/home/meeting.webp" alt="" fill className="object-cover" />
                    </div>
                </div>
                <div className="w-[60%] flex flex-col gap-10">
                    <h2 className="text-[50px] text-secondary font-bold">These dignitaries from MGUMST  were present during MOU at VC office MGUMST</h2>
                    <div className=" flex flex-col gap-4 bg-primary p-8 rounded-2xl">
                        {digniatries.map((item, index) => {
                            return (
                                <div className="flex items-center gap-5" key={index}>
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <p className="text-[22px] text-text-light">{item}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </section>
    )
}