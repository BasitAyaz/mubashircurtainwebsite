import ServiceHeroSection from "@/app/reuseable_layouts/ServiceHeroSection/page";
import FooterSection from "../../reuseable_layouts/FooterSection";
import Navbar from "../../reuseable_layouts/Navbar";
import sofa from "../../assets/sofa.jpg"
import BABox from "@/app/components/BABox";
import BAPera from "@/app/components/BAPera";

export default function Sofa() {
    return <>
        <Navbar />
        <ServiceHeroSection
            imageUrl={sofa.src}
            text="Sofa"
            subTitle="Browse our selection of comfortable and stylish sofas, perfect for any living space. Choose from a variety of designs, fabrics, and colors to find the perfect match for your home."
        />
        <BABox className="p-10 md:p-20">
            <BABox className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BABox sx={{ backgroundImage: `url(${sofa.src})` }} className="bg-light h-[250px] bg-center bg-cover customRounded shadow-lg my-5">

                </BABox>
                <BABox className="p-5 md:p-20 customRounded h-full">
                    <BAPera className="text-4xl">Sofa</BAPera>
                    <BAPera>Browse our selection of comfortable and stylish sofas, perfect for any living space. Choose from a variety of designs, fabrics, and colors to find the perfect match for your home.</BAPera>
                </BABox>
            </BABox>
        </BABox>
        <FooterSection />
    </>
}