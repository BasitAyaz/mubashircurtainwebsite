"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    RadiusSettingOutlined,
    LikeOutlined,
    UsergroupAddOutlined,
    SmileOutlined
} from '@ant-design/icons';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <RadiusSettingOutlined />,
        title: "Personalized Designs",
        desc: "Tailored architectural solutions that transform your specific vision into a living reality."
    },
    {
        icon: <LikeOutlined />,
        title: "Quality Materials",
        desc: "Sourcing global textures and premium fabrics that define the standard of luxury."
    },
    {
        icon: <UsergroupAddOutlined />,
        title: "Expert Team",
        desc: "A collective of visionary designers dedicated to technical precision and aesthetic grace."
    },
    {
        icon: <SmileOutlined />,
        title: "Client Experience",
        desc: "An end-to-end white-glove service ensuring your journey is as seamless as the final design."
    }
];

export default function ChooseUsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-item", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#050505] py-24 md:py-40 px-6 lg:px-20">
            <div className="container mx-auto">

                {/* Header: Solid White and Solid Gold with No Gradients */}
                <div className="mb-24 border-l-4 border-[#D4AF37] pl-8">
                    <span className="text-[#D4AF37] text-[11px] uppercase tracking-[0.8em] font-bold block mb-4">
                        The Standard
                    </span>
                    <h2 className="text-5xl md:text-8xl font-extralight tracking-tighter text-[#FFFFFF] uppercase leading-[0.9]">
                        Driven By <br />
                        <span className="italic font-serif text-[#D4AF37]">Perfection.</span>
                    </h2>
                </div>

                {/* Grid: Solid Borders and Solid Backgrounds */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#D4AF37]">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="feature-item group relative p-12 border-b md:border-r border-[#D4AF37] bg-[#0A0A0A] transition-colors duration-300 hover:bg-[#151515]"
                        >
                            <div className="relative z-10">
                                {/* Icon: Pure Solid Gold */}
                                <div className="mb-10 text-[#D4AF37] transition-transform duration-500 group-hover:scale-110">
                                    {item.icon && <item.icon.type {...item.icon.props} style={{ fontSize: 48 }} />}
                                </div>

                                {/* Title: Pure Solid White */}
                                <h3 className="text-xl font-light tracking-[0.15em] text-[#FFFFFF] mb-6 uppercase">
                                    {item.title}
                                </h3>

                                {/* Description: Pure Solid White for Max Readability */}
                                <p className="text-[#FFFFFF] font-light leading-relaxed text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Corner Label: Solid Gold */}
                            <div className="absolute top-6 right-6">
                                <span className="text-[#D4AF37] text-xs font-mono font-bold tracking-widest">
                                    [ 0{index + 1} ]
                                </span>
                            </div>

                            {/* Hover Indicator: Solid Gold Bar */}
                            <div className="absolute bottom-0 left-0 h-2 w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}