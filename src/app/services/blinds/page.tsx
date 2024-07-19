import ServiceHeroSection from "@/app/reuseable_layouts/ServiceHeroSection/page";
import FooterSection from "../../reuseable_layouts/FooterSection";
import Navbar from "../../reuseable_layouts/Navbar";
import blinds from "../../assets/blind.jpg"
import BABox from "@/app/components/BABox";
import BAPera from "@/app/components/BAPera";
import office_roller_blind from "../../assets/office_roller_blinds.jpg";
import wooden_blind from "../../assets/wooden_blind.jpg";
import zebra_blind from "../../assets/zebra_blind.jpg";
import shangri_la_blind from "../../assets/shagri_la_blind.jpg";
import chick_blind from "../../assets/chick_blind.jpg";
import venetian_blind from "../../assets/venetian_blind.jpg";
import roman_blind from "../../assets/roman_blind.jpg"

export default function Blinds() {
    return <>
        <Navbar />
        <ServiceHeroSection
            imageUrl={blinds.src}
            text="Blinds"
            subTitle="Discover our diverse collection of blinds, designed to provide both functionality and style"
        />
        <BABox className="p-10 md:p-20">
            <BABox className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BABox sx={{ backgroundImage: `url(${office_roller_blind.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">

                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Office Roller Blinds</BAPera>
                    <BAPera>Enhance your workspace with our sleek and modern office roller blinds. These blinds are perfect for controlling light and ensuring privacy in your office environment.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${wooden_blind.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">
                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Wooden Blinds</BAPera>
                    <BAPera>Add a touch of elegance and warmth to your rooms with our wooden blinds. Available in various finishes, these blinds offer durability and timeless appeal.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${zebra_blind.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">
                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Zebra Blinds</BAPera>
                    <BAPera>Combine style and functionality with our zebra blinds, featuring alternating sheer and solid fabric panels to control light and privacy effortlessly.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${shangri_la_blind.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">
                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Shangri-la Blinds</BAPera>
                    <BAPera>Experience luxury with Shangri-la blinds, which blend the softness of sheer fabric with the functionality of blinds for a sophisticated look.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${chick_blind.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">
                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Chick Blinds</BAPera>
                    <BAPera>Introduce a rustic charm to your home with chick blinds, made from natural materials for a cozy and inviting atmosphere.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${venetian_blind.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">
                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Mini Venetian Blinds</BAPera>
                    <BAPera>Our mini Venetian blinds offer a compact and stylish solution for controlling light and privacy in smaller windows.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${roman_blind.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">
                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Roman Blinds</BAPera>
                    <BAPera>Bring a classic and elegant touch to your interiors with Roman blinds, featuring soft fabric folds for a sophisticated appearance.</BAPera>
                </BABox>
            </BABox>
        </BABox>
        <FooterSection />
    </>
}