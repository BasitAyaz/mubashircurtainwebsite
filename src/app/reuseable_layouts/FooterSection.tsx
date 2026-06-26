"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FacebookFilled,
    InstagramFilled,
    MailFilled,
    PhoneFilled,
    EnvironmentFilled
} from "@ant-design/icons";
import logo from '../assets/logo_white.png';

// Solid Premium Palette
const GOLD = "#D4AF37";
const PURE_WHITE = "#FFFFFF";

export default function FooterSection() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] pt-24 pb-12 px-6 lg:px-20 border-t border-[#D4AF37]/30">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-8 flex flex-col items-center md:items-start">
                        <Image width={180} src={logo} alt="Mubashir Curtain" className="opacity-90" />
                        <p className="text-[#FFFFFF] text-sm font-light leading-relaxed tracking-wide text-center md:text-left">
                            Defining luxury interiors with bespoke craftsmanship and visionary design. Your window to a more elegant life.
                        </p>
                        <div className="flex gap-6">
                            <a target="_blank" href="https://www.facebook.com/mubashircurtain786" className="text-[#D4AF37] hover:text-white transition-colors">
                                <FacebookFilled style={{ fontSize: 24 }} />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/mubashir_curtain_interior/" className="text-[#D4AF37] hover:text-white transition-colors">
                                <InstagramFilled style={{ fontSize: 24 }} />
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Contact', 'Customer Reviews'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-[#FFFFFF] text-sm font-light tracking-widest hover:text-[#D4AF37] transition-all hover:pl-2"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Quick Link */}
                    <div className="hidden lg:block text-left">
                        <h4 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-8">Offerings</h4>
                        <ul className="space-y-4">
                            {['Curtains', 'Blinds', 'Sofa Customization', 'Wall Panels'].map((item) => (
                                <li key={item} className="text-[#FFFFFF] text-sm font-light tracking-widest opacity-80 cursor-default">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center md:text-left">
                        <h4 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-8">Get In Touch</h4>
                        <div className="space-y-6">
                            <a href="tel:+923004128984" className="flex items-center justify-center md:justify-start gap-4 text-[#FFFFFF] hover:text-[#D4AF37] transition-colors group">
                                <PhoneFilled className="text-[#D4AF37]" />
                                <span className="text-sm tracking-tighter">+92 300 4128984</span>
                            </a>
                            <a href="mailto:info@mubashircurtain.com" className="flex items-center justify-center md:justify-start gap-4 text-[#FFFFFF] hover:text-[#D4AF37] transition-colors group">
                                <MailFilled className="text-[#D4AF37]" />
                                <span className="text-sm tracking-tighter">info@mubashircurtain.com</span>
                            </a>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-[#FFFFFF]">
                                <EnvironmentFilled className="text-[#D4AF37]" />
                                <span className="text-sm tracking-tighter">Karachi, Pakistan</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
                        © {currentYear} MUBASHIR CURTAIN INTERIOR. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
                        DESIGNED BY <span className="text-[#D4AF37]">TETRA SOLUTIONS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}