import BABox from "../components/BABox";
import BAHeading from "../components/BAHeading";
import BAPera from "../components/BAPera";
import FooterSection from "../reuseable_layouts/FooterSection";
import Navbar from "../reuseable_layouts/Navbar";
import PageHeroSection from "../reuseable_layouts/PageHeroSection";

export default function About() {
    return <>
        <BABox>
            <Navbar />
            <PageHeroSection text={"About Us"} />
            <BABox className="p-10 md:p-20">
                <BAHeading>About Us</BAHeading>
                <BAPera>
                    Mubashir Curtain is a renowned and well-known curtain manufacturing company.
                    We specialize in producing high-quality, durable, and stylish curtains that meet your needs and expectations.
                </BAPera>
            </BABox>
            <FooterSection />
        </BABox>
    </>
}