import Pill from "../ui/Pill";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="bg-primary">
            <div className="flex gap-20 fp max-container">
                <div className="w-[35%] flex items-center justify-center">
                    <Image src="/images/home/founder.webp" alt="" width={412} height={412} />
                </div>
                <div className="w-[65%] flex flex-col gap-10 text-text-light">
                    <div className="flex flex-col gap-5">
                        <Pill text="About Me" bg="bg-white" color="text-primary" />
                        <h2 className="text-[50px] font-bold">Three decades of service,now in your corner</h2>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p>Former Senior Government Officer with over 30 years of experience in administration, finance, compliance and people management.</p>
                        <p>Currently advising the Indian Express Group, managing CSR and fund operations for Apna Ghar NGO, and working with corporates, startups and high-net-worth individuals on financial strategy and due diligence.</p>
                        <p>I also work as a channel partner with Refyne and advise on real estate and industrial investment projects.</p>
                        <p>My approach is direct, disciplined and rooted in trust.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}