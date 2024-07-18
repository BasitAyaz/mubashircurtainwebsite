import FooterSection from "../reuseable_layouts/FooterSection";
import Navbar from "../reuseable_layouts/Navbar";
import PageHeroSection from "../reuseable_layouts/PageHeroSection";
import AllServices from "../reuseable_layouts/services/AllServices";

export default function Services() {
    return <>
        <Navbar />
        <PageHeroSection text="Services" />
        <AllServices />
        <FooterSection />
    </>
}