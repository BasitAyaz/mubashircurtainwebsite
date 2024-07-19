"use client"

import BABox from "@/app/components/BABox"
import BAPera from "@/app/components/BAPera"


export default function ServiceHeroSection(props: any) {
    const { text, imageUrl, subTitle } = props
    return <>
        <BABox sx={{ backgroundImage: `url(${imageUrl})` }} className="bg-center p-10 bg-cover">
            <BABox className='h-full p-10 md:p-20 customRounded md:w-1/2 shadow-lg w-full bg-[rgba(255,255,255,.6)]'>
                <BAPera className="text-4xl md:text-6xl text-black">{text}</BAPera>
                <BAPera className="text-2xl md:text-4xl text-black">{subTitle}</BAPera>
            </BABox>
        </BABox>
    </>
}