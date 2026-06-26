"use client";

import { useEffect, useRef } from 'react';
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo_white from "../../assets/logo_white.png";
// Suggestion: Add a high-quality detail shot of fabric or a finished room
// import about_detail from "../../assets/about_detail.jpg"; 

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal text lines one by one
            gsap.from(".reveal-text", {
                y: 60,
                opacity: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Subtle parallax for the logo/image side
            gsap.to(".parallax-element", {
                y: -50,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-black py-24 md:py-40 px-6 lg:px-20 overflow-hidden flex flex-col justify-center"
        >
            {/* Background Decorative Text - Ultra Premium Touch */}
            <div className="absolute top-10 right-[-5%] opacity-5 select-none pointer-events-none">
                <h2 className="text-[15vw] font-bold text-white leading-none tracking-tighter">
                    EST. 2026
                </h2>
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Side: Branding & Small Detail */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <div className="parallax-element">
                        <span className="text-neutral-500 text-xs uppercase tracking-[0.5em] mb-6 block">
                            Our Philosophy
                        </span>
                        <Image
                            width={220}
                            src={logo_white}
                            alt="Mubashir Curtain"
                            className="opacity-90 transition-opacity hover:opacity-100"
                        />
                    </div>

                    {/* Minimalist Stat or Quote */}
                    <div className="mt-12 border-l border-white/10 pl-6 hidden lg:block">
                        <p className="text-white/40 text-sm italic font-serif leading-relaxed">
                            &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
                        </p>
                    </div>
                </div>

                {/* Right Side: The Narrative */}
                <div className="lg:col-span-8">
                    <h2 className="reveal-text text-white text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-12">
                        Transform your living spaces with <br />
                        <span className="italic font-serif text-neutral-400">unparalleled elegance</span> and style.
                    </h2>

                    <div className="reveal-text max-w-2xl space-y-8">
                        <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
                            At <span className="text-white font-medium tracking-wide">Mubashir Curtain</span>, we specialize in creating beautiful, functional interiors that reflect your unique personality and lifestyle.
                        </p>

                        <p className="text-neutral-500 text-base md:text-lg font-light leading-relaxed border-t border-white/5 pt-8">
                            Our expert team of designers is dedicated to bringing your vision to life with custom solutions for every room in your home. From bespoke drapery to complete spatial transformations, we define the art of living.
                        </p>

                        <div className="pt-10">
                            <button className="group flex items-center gap-4 text-white uppercase tracking-[0.3em] text-xs transition-all hover:gap-6">
                                <span>Discover Our Story</span>
                                <div className="h-[1px] w-12 bg-white transition-all group-hover:w-20" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Corner Accent */}
            <div className="absolute bottom-20 left-20 hidden lg:block">
                <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
        </section>
    );
}