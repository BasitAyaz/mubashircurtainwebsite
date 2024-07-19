import BABox from "../components/BABox";
import BAPera from "../components/BAPera";
import FooterSection from "../reuseable_layouts/FooterSection";
import Navbar from "../reuseable_layouts/Navbar";
import PageHeroSection from "../reuseable_layouts/PageHeroSection";

export default function Contact() {
    return <>
        <Navbar />
        <PageHeroSection text="Contact US" />
        <BABox className="p-10 md:p-20">
            <BAPera className="text-4xl">Contact US</BAPera>
        </BABox>
        <FooterSection />
    </>
}