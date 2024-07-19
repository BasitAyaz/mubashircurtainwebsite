import ServiceHeroSection from "@/app/reuseable_layouts/ServiceHeroSection/page";
import FooterSection from "../../reuseable_layouts/FooterSection";
import Navbar from "../../reuseable_layouts/Navbar";
import BABox from "@/app/components/BABox";
import BAPera from "@/app/components/BAPera";
import curtain from "../../assets/curtains.jpg";
import sheer_curtain from "../../assets/sheer_curtain.jpg";
import single_curtain from "../../assets/single_curtain.jpg";
import double_curtain from "../../assets/double_curtain.jpg";

export default function Curtains() {
    return <>
        <Navbar />
        <ServiceHeroSection
            imageUrl={curtain.src}
            text="Curtains"
            subTitle="Enhance your windows with our range of curtains, available in different styles to suit your decor needs."
        />
        <BABox className="p-10 md:p-20">
            <BABox className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BABox sx={{ backgroundImage: `url(${sheer_curtain.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">

                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Sheer Curtains</BAPera>
                    <BAPera>Let in natural light while maintaining privacy with our elegant sheer curtains.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${single_curtain.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">

                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Single Curtains</BAPera>
                    <BAPera>Simple and versatile, our single curtains come in various fabrics and colors to complement any room.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${double_curtain.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">

                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Double Curtains</BAPera>
                    <BAPera>Add depth and style to your windows with our double curtains, featuring a combination of sheer and solid panels.</BAPera>
                </BABox>
            </BABox>
        </BABox>
        <FooterSection />
    </>
}