import BABox from "../components/BABox";
import logo from '../assets/logo_white.png'
import Image from "next/image";
import BAPera from "../components/BAPera";
import Link from "next/link";
import { FacebookFilled, InstagramFilled, MailFilled, PhoneFilled } from "@ant-design/icons";

export default function FooterSection() {
    return <>
        <BABox className="p-10 bg-black text-white text-center md:text-start md:p-20">
            <BABox className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <BABox>
                    <BABox className="flex justify-center md:justify-start">
                        <Image width={150} src={logo} alt="Mubashir Curtain" />
                    </BABox>
                    <BABox className="py-10">
                        <a className="p-3" target="_blank" href="https://www.facebook.com/mubashircurtain786">
                            <FacebookFilled style={{ fontSize: 30 }} />
                        </a>
                        <a className="p-3" target="_blank" href="https://www.instagram.com/mubashir_curtain_interior/?fbclid=IwZXh0bgNhZW0CMTAAAR3Jfjy-0KNd9sNuM7_9Bs82pEZdbQYrEiZXsiQ09ASq4r05qjwuiFtKVZs_aem_mtaB-f371uVUrkpENCXTfg">
                            <InstagramFilled style={{ fontSize: 30 }} />
                        </a>
                    </BABox>
                </BABox>
                <BABox>
                    <BAPera className="text-3xl mb-3">Usefull Links</BAPera>
                    <Link className="hover:underline block" href={"/about"} >About</Link>
                    <Link className="hover:underline block" href={"/services"} >Services</Link>
                    <Link className="hover:underline block" href={"/contact"} >Contact</Link>
                </BABox>
                <BABox>
                    <BAPera className="text-3xl mb-3">Contact Us</BAPera>
                    <a className="block p-2" href="tel:+923004128984">
                        <PhoneFilled style={{ fontSize: 25 }} />
                        +92 300 4128984
                    </a>
                    <a className="block p-2" href="mailto:info@mubasircurtain.com">
                        <MailFilled style={{ fontSize: 25 }} />
                        info@mubashircurtain.com
                    </a>
                </BABox>
            </BABox>
        </BABox>
    </>
}