import FooterSection from "../reuseable_layouts/FooterSection";
import ReviewSection from "../reuseable_layouts/home/ReviewSection";
import Navbar from "../reuseable_layouts/Navbar";
import PageHeroSection from "../reuseable_layouts/PageHeroSection";

export default function CustomerReviews() {
    return <>
        <Navbar />
        <PageHeroSection text="Customer Reviews" />
        <ReviewSection />
        <FooterSection />
    </>
}