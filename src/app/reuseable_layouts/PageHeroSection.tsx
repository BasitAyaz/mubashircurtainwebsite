"use client"

import BABox from "../components/BABox"
import BAPera from "../components/BAPera"
import hero_back from "../assets/page_hero_back.jpg"

type propsType = {
    text: string
}

export default function PageHeroSection(props: propsType) {
    const { text } = props
    return <>
        <BABox sx={{ backgroundImage: `url(${hero_back.src})` }} className="bg-center bg-cover">
            <BABox className='flex h-full p-10 md:p-20 content-center items-center bg-[rgba(0,0,0,.3)]'>
                <BAPera className="text-6xl md:text-9xl text-white text-center">{text}</BAPera>
            </BABox>
        </BABox>
    </>
}