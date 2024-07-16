"use client"

import BABox from "../../components/BABox"
import hero_back from "../../assets/hero_back.jpg"
import BAPera from "../../components/BAPera"

export default function HeroSetion() {
    return <>
        <BABox sx={{ backgroundImage: `url(${hero_back.src})` }} className="h-screen bg-center bg-cover">
            <BABox className='flex h-full content-center items-center bg-[rgba(0,0,0,.3)]'>
                <BAPera className="text-6xl md:text-9xl text-white text-center">Transform your living spaces with elegance and style.</BAPera>
            </BABox>
        </BABox>
    </>
}