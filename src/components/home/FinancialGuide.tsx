import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function FinancialGuide() {
    return (
        <section className="bg-text-light">
            <div className="flex flex-col gap-5 lg:gap-10 items-center text-center fp max-container">
                <h3 className="f-h3  text-text-secondary font-semibold sm:max-w-[70%]">Strategic Financial Guidance for Modern Workplaces</h3>
                <div className="flex flex-col gap-4 md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] text-text-dark ">
                    <p className="">After more than three decades in senior government administration, I now advise organisations, startups and high-value clients on building clear, disciplined and responsible financial frameworks.</p>
                    <p>My work focuses on structure, governance and practical financial wellbeing, supported by modern platforms like Refyne.</p>
                </div>
                <div className=" w-full flex flex-col sm:flex-row justify-center gap-5">
                    <PrimaryButton buttonText="Consult With Me" icon="arrow-right" iconPosition="after" className="" />
                    <SecondaryButton buttonText="Learn About Refyne" />
                </div>
                <h3 className="unbound text-primary font-bold ">Clear guidance. Responsible systems. <span className="opacity-50">Confident decisions.</span></h3>
            </div>
        </section>
    );
}