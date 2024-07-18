import BABox from "@/app/components/BABox";
import BAHeading from "@/app/components/BAHeading";
import BAPera from "@/app/components/BAPera";
import blind from "../../assets/blind.jpg";
import sofa from "../../assets/sofa.jpg"
import cutains from "../../assets/curtains.jpg"
import french_wall from "../../assets/french_wall.jpg"
import pvc_folding_door from "../../assets/pvc_folding_door.jpg"
import service_back from "../../assets/service_back.jpg"
import wallpaper from "../../assets/wallpaper.jpg"
import mediawall from "../../assets/mediawall.jpg"
import puStoneWall from "../../assets/puStoneWall.jpg"
import Wallpanal from "../../assets/wallpanal.jpg"
import geomatryMoldingWall from "../../assets/geomatrymoldinwall.jpg"

export default function ServiceSection() {
    return <>
        <BABox sx={{ backgroundImage: `url(${service_back.src})` }} className="p-10 md:p-20 bg-center bg-cover">
            <BAHeading>Services</BAHeading>
            <BABox className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BABox sx={{ backgroundImage: `url(${blind.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">Blinds</BAPera>
                    <BAPera>Discover a wide variety of blinds that add both function and flair to your windows.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${sofa.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">Sofa</BAPera>
                    <BAPera>Explore our collection of custom-made sofas that combine comfort and style.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${cutains.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">Curtains</BAPera>
                    <BAPera>Choose from our exquisite range of curtains that complement any decor.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${french_wall.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">French Wall</BAPera>
                    <BAPera>Enhance your walls with our elegant French wall designs.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${pvc_folding_door.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">PVC Folding Door</BAPera>
                    <BAPera>Innovative and stylish PVC folding doors for modern spaces.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${wallpaper.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">Wallpapers</BAPera>
                    <BAPera>Transform your walls with our extensive range of beautiful and unique wallpapers.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${mediawall.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">Media Walls</BAPera>
                    <BAPera>Create a stunning focal point in your living space with our custom media walls.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${puStoneWall.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">PU Stone Wall</BAPera>
                    <BAPera>Add texture and elegance with our premium PU stone wall designs.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${Wallpanal.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">Wall Panel</BAPera>
                    <BAPera>Elevate your interiors with our modern and stylish wall panels.</BAPera>
                </BABox>
                <BABox sx={{ backgroundImage: `url(${geomatryMoldingWall.src})` }} className="p-10 bg-light bg-center bg-cover customRounded shadow-lg my-5">
                    <BAPera className="text-4xl">Geomatrical Molding Wall</BAPera>
                    <BAPera>Enhance your space with our creative geometric molding wall designs.</BAPera>
                </BABox>
            </BABox>
        </BABox>
    </>
}