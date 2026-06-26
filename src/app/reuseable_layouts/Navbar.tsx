"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Dropdown } from 'antd';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import gsap from 'gsap';
import logo from '../assets/logo_white.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const pathname = usePathname();

    // 1. Scroll & Body Lock Logic
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        // Prevent background scrolling when mobile menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    // 2. GSAP Entrance & Menu Animations
    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
        );
    }, []);

    const serviceItems = [
        { key: '1', label: <Link href="/services/blinds">Blinds</Link> },
        { key: '2', label: <Link href="/services/sofa">Sofa</Link> },
        { key: '3', label: <Link href="/services/interior-design">Interior Design</Link> },
        { key: '4', label: <Link href="/services/curtains">Curtains</Link> },
        { key: '5', label: <Link href="/services/french-wall">French Wall</Link> },
        { key: '6', label: <Link href="/services/pvd-folding-door">PVD Folding Door</Link> },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Reviews', href: '/customer-reviews' },
    ];

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || isOpen
                        ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10'
                        : 'bg-transparent py-8'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="relative z-[110] w-32 md:w-40 transition-opacity hover:opacity-80">
                            <Image src={logo} alt='Logo' priority className="object-contain" />
                        </Link>

                        {/* Desktop Menu - Hidden on Mobile */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.slice(0, 2).map((link) => (
                                <Link key={link.href} href={link.href} className={`nav-link-premium ${pathname === link.href ? 'text-white' : 'text-neutral-400'}`}>
                                    {link.name}
                                </Link>
                            ))}

                            <Dropdown menu={{ items: serviceItems }} placement="bottom" arrow>
                                <span className="nav-link-premium text-neutral-400 cursor-pointer flex items-center">
                                    Services <DownOutlined className="ml-2 text-[10px]" />
                                </span>
                            </Dropdown>

                            {navLinks.slice(2).map((link) => (
                                <Link key={link.href} href={link.href} className={`nav-link-premium ${pathname === link.href ? 'text-white' : 'text-neutral-400'}`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-[110] lg:hidden text-white p-2"
                        >
                            {isOpen ? <CloseOutlined className="text-2xl" /> : <MenuOutlined className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Full-Screen Overlay */}
            <div
                className={`fixed inset-0 z-[90] bg-black transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col h-full justify-center items-center p-8 space-y-6">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-light uppercase tracking-widest text-white transition-transform duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Services Section */}
                    <div className={`pt-6 border-t border-white/10 w-full text-center space-y-4 transition-all duration-700 delay-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] mb-4">Our Services</p>
                        <div className="grid grid-cols-2 gap-4">
                            {serviceItems.map((item) => (
                                <div key={item.key} onClick={() => setIsOpen(false)} className="text-sm text-neutral-300">
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for Premium Hover Effects */}
            <style jsx>{`
                .nav-link-premium {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    transition: all 0.3s ease;
                }
                .nav-link-premium:hover {
                    color: white;
                    letter-spacing: 0.35em;
                }
            `}</style>
        </>
    );
};

export default Navbar;