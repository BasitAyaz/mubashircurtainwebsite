import BABox from "@/app/components/BABox";
import BAHeading from "@/app/components/BAHeading";
import BAPera from "@/app/components/BAPera";
import {
    RadiusSettingOutlined,
    LikeOutlined,
    UsergroupDeleteOutlined,
    SmileOutlined
} from '@ant-design/icons';

export default function ChooseUsSection() {
    return <>
        <BABox className="p-10 md:p-20">
            <BAHeading>Why Choose Us?</BAHeading>
            <BABox className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <BABox className="p-5 bg-[#E8E8E8] text-[#264653] shadow-lg customRounded text-center">
                    <BABox className="p-4">
                        <RadiusSettingOutlined style={{ fontSize: 60 }} />
                    </BABox>
                    <BAPera className='text-3xl mb-4 text-center'>Personalized Designs</BAPera>
                    <BAPera>Every project is unique, reflecting your taste and requirements.</BAPera>
                </BABox>
                <BABox className="p-5 bg-[#E8E8E8] text-[#264653] shadow-lg customRounded text-center">
                    <BABox className="p-4">
                        <LikeOutlined style={{ fontSize: 60 }} />
                    </BABox>
                    <BAPera className='text-3xl mb-4 text-center'>Quality Materials</BAPera>
                    <BAPera>We use only the highest quality materials to ensure durability and luxury.</BAPera>
                </BABox>
                <BABox className="p-5 bg-[#E8E8E8] text-[#264653] shadow-lg customRounded text-center">
                    <BABox className="p-4">
                        <UsergroupDeleteOutlined style={{ fontSize: 60 }} />
                    </BABox>
                    <BAPera className='text-3xl mb-4 text-center'>Expert Team</BAPera>
                    <BAPera>Our experienced designers are passionate about creating beautiful interiors.</BAPera>
                </BABox>
                <BABox className="p-5 bg-[#E8E8E8] text-[#264653] shadow-lg customRounded text-center">
                    <BABox className="p-4">
                        <SmileOutlined style={{ fontSize: 60 }} />
                    </BABox>
                    <BAPera className='text-3xl mb-4 text-center'>Customer Satisfaction</BAPera>
                    <BAPera>We prioritize our clients&apos; satisfaction above all.</BAPera>
                </BABox>
            </BABox>
        </BABox>
    </>
}