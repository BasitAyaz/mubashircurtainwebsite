import Image from "next/image";
import BABox from "./components/BABox";
import Navbar from "./reuseable_layouts/Navbar";
import HeroSetion from "./reuseable_layouts/home/HeroSection";
import AboutSection from "./reuseable_layouts/home/AboutSection";
import ServiceSection from "./reuseable_layouts/home/ServiceSection";
import ChooseUsSection from "./reuseable_layouts/home/ChooseUsSection";
import ReviewSection from "./reuseable_layouts/home/ReviewSection";
import FooterSection from "./reuseable_layouts/FooterSection";

export default function Home() {
  return (
    <BABox>
      <Navbar />
      <HeroSetion />
      <AboutSection />
      <ServiceSection />
      <ChooseUsSection />
      <ReviewSection />
      <FooterSection />
    </BABox>
  );
}
