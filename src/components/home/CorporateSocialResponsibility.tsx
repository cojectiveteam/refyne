import Image from "next/image";

const csrContent = [
    {
        image: "/images/home/meeting.webp",
        title: "Strategic MoU Signing Ceremony at IOCL Rajasthan State Office, Jaipur",
        description: "On 6th January 2026, at Indian Oil Corporation Limited Rajasthan State Office, Jaipur, an MoU was signed in the presence of Mr. Manoj Gupta, State Head, Indian Oil Corporation and Mr. C.L. Meena, State Head (CSR), IOCL, for providing 500 steel beds to Apna Ghar Ashram Bharatpur. On this occasion, National Secretary of Bharatpur Ashram, Mr. Vinod Singhal, Anjan Kumar HR, Jamdoli Ashram President, Mr. Amitabh Kaushik, Vice President Kavita Meena and other dignitaries were present.",
        imageFirst: true
    },
    {
        image: "/images/home/meeting.webp",
        title: "Bhaskar Group Pays Tribute with Noble Initiative at Jamdoli",
        description: "A service program was organized today at Apna Ghar Ashram in Jamdoli as part of the 81st birthday Prerana Utsav of late Shri Rameshchandra ji Agarwal, Chairman of Bhaskar Group. On this occasion, Bhaskar Group made arrangements to provide milk mixed with saffron and dry fruits to Prabhuji residing in the Ashram for the entire year. Bhaskar Group's Managing Editor Shri Jagdish Sharma, Chief Editor Shri Pant, Jaipur Head Shri Tarun, IPS Shri Yogesh Dadhich graced the occasion. The program was held in the presence of President Mr. Amitabh Kaushik, Secretary Mr. Rinmu Khandelwal, Vice President Mrs. Kavita Meena, and Treasurer Advocate Sandeep Sogani from the Ashram family.",
        imageFirst: false
    }
]

export default function CorporateSocialResponsibility() {
    return (
        <section>
            <div className="flex flex-col gap-10 lg:gap-13 fp max-container ">
                {csrContent.map((item, index) => (
                    <div key={index} className={`flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 xl:gap-15 ${item.imageFirst ? "" : "flex-col lg:flex-row-reverse"}`}>
                        <div className="relative w-full lg:w-[40%] min-h-[300px] md:min-h-[370px] border-8 border-white rounded-2xl shadow-lg overflow-hidden"><Image src={item.image} alt="" fill className="object-cover" /></div>
                        <div className="w-full lg:w-[60%] flex flex-col justify-center gap-5 xl:gap-8">
                            <h3 className="f-h4 sm:f-h3 text-secondary font-semibold">{item.title}</h3>
                            <p className="text-text-dark">{item.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}