import Image from "next/image";

export default function Advisory() {
    return (
        <section className="bg-background2">
            <div className="flex flex-col-reverse lg:flex-row gap-10 fp max-container">
                <div className="w-full lg:w-[45%] h-[300px] lg:h-auto flex items-end justify-center bg-white rounded-3xl relative ">
                    <Image src="/images/home/man.webp" alt="man" fill className="object-contain object-bottom pt-5" />
                </div>
                <div className="w-full lg:w-[55%] flex flex-col gap-5 xl:gap-10 text-text-light">
                    <h2 className="f-h3 2xl:f-h2 font-bold leading-tight">Why My Advisory Exists</h2>
                    <div className="flex flex-col gap-5 xl:gap-7">
                        <p>During my public service career, I regularly witnessed individuals and employees struggle not due to lack of income, but due to limited financial awareness, emotional decision-making and unstructured access to credit.</p>
                        <p>Many turned to informal borrowing, high-interest loans, credit cards and unplanned financial commitments, which eventually created long-term pressure.</p>
                        <p>My consulting practice was built to address these gaps with discipline, due diligence and transparency.</p>
                    </div>
                    <h5 className="f-h5 font-medium">I do not promote shortcuts or trends.</h5>
                    <h5 className="f-h5 font-medium">I focus on sound judgement, responsible access and long-term stability.</h5>
                </div>
            </div>
        </section>
    );
}