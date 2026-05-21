import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function FinancialGuide() {
    return (
        <section className="bg-text-light">
            <div className="flex flex-col gap-10 items-center text-center  fp max-container">
                <h3 className="text-[36px] text-text-secondary font-semibold max-w-4xl">Strategic Financial Guidance for Modern Workplaces</h3>
                <div className="flex flex-col gap-4 max-w-4xl text-text-dark ">
                    <p>After more than three decades in senior government administration, I now advise organisations, startups and high-value clients on building clear, disciplined and responsible financial frameworks.</p>
                    <p>My work focuses on structure, governance and practical financial wellbeing, supported by modern platforms like Refyne.</p>
                </div>
                <div className="flex justify-center gap-5">
                    <PrimaryButton buttonText="Consult With Me" icon="arrow-right" iconPosition="after" />
                    <SecondaryButton buttonText="Learn About Refyne" />
                </div>
                <h3 className="text-[100px] text-primary font-bold ">Clear guidance. Responsible systems. <span className="opacity-50">Confident decisions.</span></h3>
            </div>
        </section>
    );
}