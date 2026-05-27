import Support from "@/components/about/Support";
import PublicService from "@/components/about/PublicService";
import Refyne from "@/components/about/Refyne";
import Offer from "@/components/about/Offer";
import Scale from "@/components/about/Scale";
import Compliance from "@/components/about/Compliance";
import Testimonials from "@/components/about/Testimonials";
import Associate from "@/components/about/Associate";
import RefyneOffers from "@/components/about/RefyneOffers";
import Earnings from "@/components/about/Earnings";


export default function AboutUs() {
    return (
        <main>
            <Support />
            <PublicService />
            <Refyne />
            <RefyneOffers />
            <Scale />
            <Compliance />
            <Testimonials />
            <Associate />
            <Earnings />
        </main>
    );
}