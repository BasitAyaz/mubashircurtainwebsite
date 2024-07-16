import BABox from "../components/BABox";
import logo from '../assets/logo_white.png'
import Image from "next/image";
import BAPera from "../components/BAPera";
import Link from "next/link";

export default function FooterSection() {
    return <>
        <BABox className="p-10 bg-black text-white md:p-20">
            <BABox className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <BABox>
                    <Image width={150} src={logo} alt="Mubashir Curtain" />
                </BABox>
                <BABox>
                    <BAPera className="text-2xl ">Usefull Links</BAPera>
                    <Link href={"/about"} >About</Link>
                </BABox>
            </BABox>
        </BABox>
    </>
}