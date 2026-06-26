"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero_back from "../../assets/hero_back.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(bgRef.current,
                { scale: 1.1, filter: "brightness(0.3)" },
                { scale: 1, filter: "brightness(0.6)", duration: 2, ease: "power2.out" }
            );

            gsap.from(".reveal-item", {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                delay: 0.5
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            // FIX 1: pt-20 (or pt-24) ensures content starts below the fixed navbar
            className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 md:pt-32"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    ref={bgRef}
                    src={hero_back}
                    alt="Interior Design"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* FIX 2: Responsive Fluid Typography using Tailwind 'clamp' style classes */}
                {/* text-4xl for mobile, scaling up to 7xl for desktop */}
                <h1 className="reveal-item mb-6">
                    <span className="block text-white font-light tracking-tighter leading-none text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase">
                        Transforming <span className="italic font-serif text-neutral-300">Spaces</span>
                    </span>
                    <span className="block text-white font-light tracking-tighter leading-none text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase">
                        With Pure <span className="text-neutral-400">Elegance</span>
                    </span>
                </h1>

                <p className="reveal-item text-neutral-300 text-sm md:text-base tracking-[0.3em] uppercase mb-10 max-w-2xl mx-auto">
                    Curated Curtains & Interior Excellence
                </p>

                <div className="reveal-item flex flex-wrap justify-center gap-4">
                    <Button
                        type="primary"
                        size="large"
                        className="h-12 px-8 bg-white text-black border-none rounded-none uppercase tracking-widest text-[10px] hover:!bg-neutral-200"
                    >
                        Our Services
                    </Button>
                    <Button
                        ghost
                        size="large"
                        className="h-12 px-8 border-white text-white rounded-none uppercase tracking-widest text-[10px] hover:!bg-white hover:!text-black"
                    >
                        Contact Us
                    </Button>
                </div>
            </div>

            {/* Elegant bottom accent */}
            <div className="absolute bottom-8 w-full flex justify-center opacity-30">
                <div className="w-[1px] h-16 bg-white animate-pulse" />
            </div>
        </section>
    );
}