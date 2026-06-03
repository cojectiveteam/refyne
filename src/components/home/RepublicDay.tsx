import Image from "next/image";

export default function RepublicDay() {
    return (
        <section className="bg-primary">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 fp max-container">
                <div className="w-full lg:w-1/2 flex flex-col gap-5 2xl:gap-8 text-text-light">
                    <h5 className="f-h5 font-medium ">On the occasion of 77th Republic Day, institutions/individuals who have rendered excellent services and remarkable contribution in the medical field in the state were honoured at the Medical Education Department, Rajasthan Government, located in Sethi Colony.</h5>
                    <div className="flex flex-col gap-5">
                        <p>In this dignified ceremony, IAS Shri Naresh Goyal, Commissioner, Medical Education Department, Government of Rajasthan honored Apna Ghar Ashram, Jamdoli by presenting a certificate and a symbol for its remarkable and selfless services towards Prabhuji in the field of human welfare.</p>
                        <p>President Amitabh Kaushik, Secretary Rimmu Khandelwal, Vice President Kavita Meena and Treasurer Advocate Sandeep Kumar Sogani were present on behalf of Apna Ghar Ashram, Jamdoli to receive the honour. On this occasion, the chief guest, Commissioner Shri Naresh Goyal, while praising the work being done by Apna Ghar Ashram in the field of human service, called it a source of inspiration for the society.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-auto relative border-7 border-text-light rounded-2xl overflow-hidden">
                    <Image src="/images/home/republic-day.webp" alt="" fill className="object-cover" />
                </div>
            </div>
        </section>
    )
}