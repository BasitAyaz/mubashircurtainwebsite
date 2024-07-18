"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo_white.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#000000] text-[#F4C66E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link className="text-2xl font-bold" href="/">
                            <Image src={logo} width={120} alt='Mubashir Curtain' />
                        </Link>
                        <div className="hidden md:flex space-x-4 ml-10">
                            <Link href="/" className="hover:text-white">Home</Link>
                            <Link href="/about" className="hover:text-white">About</Link>
                            <Link href="/services" className="hover:text-white">Services</Link>
                            {/* <div className="relative group">
                                <button className="hover:text-white h-full">Services</button>
                                <div className="absolute hidden group-hover:block bg-[#000000] text-[#F4C66E] mt-2 py-2 w-48">
                                    <Link href="/services/blinds" className="block px-4 py-2 hover:bg-[#2A5565]">Blinds</Link>
                                    <Link href="/services/sofa" className="block px-4 py-2 hover:bg-[#2A5565]">Sofa</Link>
                                    <Link href="/services/interior-design" className="block px-4 py-2 hover:bg-[#2A5565]">Interior Design</Link>
                                    <Link href="/services/curtains" className="block px-4 py-2 hover:bg-[#2A5565]">Curtains</Link>
                                    <Link href="/services/french-wall" className="block px-4 py-2 hover:bg-[#2A5565]">French Wall</Link>
                                    <Link href="/services/pvd-folding-door" className="block px-4 py-2 hover:bg-[#2A5565]">PVD Folding Door</Link>
                                </div>
                            </div> */}
                            <Link href="/contact" className="hover:text-white">Contact</Link>
                            <Link href="/customer-reviews" className="hover:text-white">Customer Reviews</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-[#000000] inline-flex items-center justify-center p-2 rounded-md text-[#F4C66E] hover:text-white hover:bg-[#2A5565] focus:outline-none"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={`${isOpen ? 'hidden' : 'inline-flex'}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                                <path
                                    className={`${isOpen ? 'inline-flex' : 'hidden'}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white">Home</Link>
                    <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white">About</Link>
                    <div className="relative group">
                        <button className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:text-white">Services</button>
                        <div className="hidden group-focus:block group-hover:block bg-[#000000] text-[#F4C66E] mt-2 py-2 w-full">
                            <Link href="/services/blinds" className="block px-4 py-2 hover:bg-[#2A5565]">Blinds</Link>
                            <Link href="/services/sofa" className="block px-4 py-2 hover:bg-[#2A5565]">Sofa</Link>
                            <Link href="/services/interior-design" className="block px-4 py-2 hover:bg-[#2A5565]">Interior Design</Link>
                            <Link href="/services/curtains" className="block px-4 py-2 hover:bg-[#2A5565]">Curtains</Link>
                            <Link href="/services/french-wall" className="block px-4 py-2 hover:bg-[#2A5565]">French Wall</Link>
                            <Link href="/services/pvd-folding-door" className="block px-4 py-2 hover:bg-[#2A5565]">PVD Folding Door</Link>
                        </div>
                    </div>
                    <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white">Contact</Link>
                    <Link href="/customer-reviews" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white">Customer Reviews</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
