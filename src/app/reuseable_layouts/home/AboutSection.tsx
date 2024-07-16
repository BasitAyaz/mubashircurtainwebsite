import BABox from "@/app/components/BABox";
import BAHeading from "@/app/components/BAHeading";
import BAPera from "@/app/components/BAPera";
import logo_black from "../../assets/logo_white.png"
import Image from "next/image";

export default function AboutSection() {
    return <>
        <BABox className="h-full p-10 md:p-20 bg-black">
            <BAHeading textColor="text-white">About <Image width={180} src={logo_black} alt="" className="inline-block" /></BAHeading>
            <BAPera className="text-white text-3xl">Transform your living spaces with elegance and style. At Mubashir Curtain, we specialize in creating beautiful, functional interiors that reflect your personality and lifestyle. Our expert team of designers is dedicated to bringing your vision to life with custom solutions for every room in your home.</BAPera>
        </BABox>
    </>
}