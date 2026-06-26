"use client";

import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Asset Imports
import blind from "../../assets/blind.jpg";
import sofa from "../../assets/sofa.jpg";
import cutains from "../../assets/curtains.jpg";
import french_wall from "../../assets/french_wall.jpg";
import pvc_folding_door from "../../assets/pvc_folding_door.jpg";
import wallpaper from "../../assets/wallpaper.jpg";
import mediawall from "../../assets/mediawall.jpg";
import puStoneWall from "../../assets/puStoneWall.jpg";
import Wallpanal from "../../assets/wallpanal.jpg";
import geomatryMoldingWall from "../../assets/geomatrymoldinwall.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: "Bespoke Blinds", desc: "Function meets flair for your windows.", img: blind, path: "/services/blinds" },
    { title: "Custom Sofas", desc: "Comfort engineered for your lifestyle.", img: sofa, path: "/services/sofas" },
    { title: "Luxury Curtains", desc: "Exquisite drapery for elegant homes.", img: cutains, path: "/services/curtains" },
    { title: "French Walls", desc: "Classic European paneling aesthetic.", img: french_wall, path: "/services/french-wall" },
    { title: "Folding Doors", desc: "Innovative PVC solutions for modern spaces.", img: pvc_folding_door, path: "/services/pvd-folding-door" },
    { title: "Designer Wallpaper", desc: "Unique textures for every wall.", img: wallpaper, path: "/services/wallpaper" },
    { title: "Media Walls", desc: "The ultimate focal point for entertainment.", img: mediawall, path: "/services/media-walls" },
    { title: "PU Stone Walls", desc: "Premium stone textures and elegance.", img: puStoneWall, path: "/services/pu-stone" },
    { title: "3D Wall Panels", desc: "Modern architectural depth and style.", img: Wallpanal, path: "/services/wall-panel" },
    { title: "Geometric Molding", desc: "Creative patterns with precision molding.", img: geomatryMoldingWall, path: "/services/geometric-molding" },
];

export default function ServiceSection() {
    const router = useRouter();
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-neutral-950 py-24 px-6 md:px-12 lg:px-20">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="mb-20 space-y-4">
                    <span className="text-neutral-500 text-xs uppercase tracking-[0.5em] block">Our Expertise</span>
                    <h2 className="text-5xl md:text-7xl text-white font-light tracking-tighter">
                        Curated <span className="italic font-serif text-neutral-400">Services</span>
                    </h2>
                    <div className="w-20 h-[1px] bg-neutral-700 mt-6" />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(item.path)}
                            className="service-card group relative h-[500px] w-full overflow-hidden border border-white/5 cursor-pointer"
                        >
                            {/* Image with Scale Effect */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                            </div>

                            {/* Content Layer */}
                            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                                <span className="text-white/40 text-xs mb-2 block tracking-widest">0{index + 1}</span>
                                <h3 className="text-2xl text-white font-light tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    {item.title}
                                </h3>

                                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                    <div className="w-10 h-[1px] bg-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}