"use client";

import { useEffect, useState, useRef } from "react";
import { StarFilled, UserOutlined } from "@ant-design/icons";
import gsap from "gsap";

// Solid Premium Palette
const GOLD = "#D4AF37";
const PURE_WHITE = "#FFFFFF";

export default function ReviewSection() {
    const [loader, setLoader] = useState(true);
    const [listData, setListData] = useState<any[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null); // Store the animation

    const getData = async () => {
        try {
            const data = await fetch('https://mubashircurtainrecieptbackend.vercel.app/feedback');
            const json = await data.json();
            // Double the data to create a seamless infinite loop
            setListData([...json.data, ...json.data]);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (!loader && listData.length > 0 && scrollRef.current) {
            const ctx = gsap.context(() => {
                const totalWidth = scrollRef.current!.scrollWidth / 2;

                // Create the animation and store it in tweenRef
                tweenRef.current = gsap.to(scrollRef.current, {
                    x: -totalWidth,
                    duration: 40,
                    ease: "none",
                    repeat: -1,
                });
            }, scrollRef);
            return () => ctx.revert();
        }
    }, [loader, listData]);

    // Animation Control Handlers
    const handleMouseEnter = () => {
        if (tweenRef.current) tweenRef.current.pause();
    };

    const handleMouseLeave = () => {
        if (tweenRef.current) tweenRef.current.play();
    };

    return (
        <section className="bg-[#050505] py-24 md:py-40 overflow-hidden border-t border-b border-[#D4AF37]/20">
            <div className="container mx-auto px-6 mb-16">
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.8em] font-bold block mb-4">
                    The Distinction
                </span>
                <h2 className="text-4xl md:text-7xl font-extralight tracking-tighter text-[#FFFFFF] uppercase">
                    Trusted by <span className="italic font-serif text-[#D4AF37]">Visionaries</span>
                </h2>
            </div>

            {/* Infinite Scroll Container */}
            <div
                className="relative flex whitespace-nowrap cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {loader ? (
                    <div className="flex gap-8 px-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-[400px] h-[300px] bg-[#0A0A0A] border border-[#D4AF37]/20 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div ref={scrollRef} className="flex gap-8 px-4">
                        {listData.map((x, i) => (
                            <div
                                key={i}
                                className="inline-block w-[350px] md:w-[450px] bg-[#0A0A0A] p-10 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-500 group"
                            >
                                {/* Header Section */}
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-14 h-14 rounded-full border border-[#D4AF37] flex items-center justify-center bg-black">
                                        <UserOutlined style={{ fontSize: 24, color: GOLD }} />
                                    </div>
                                    <div className="whitespace-normal">
                                        <h3 className="text-xl font-light text-[#FFFFFF] tracking-tight mb-1 uppercase">
                                            {x.customerName}
                                        </h3>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <StarFilled
                                                    key={s}
                                                    style={{
                                                        fontSize: 12,
                                                        color: s <= x.starRating ? GOLD : "#222"
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Comments Section */}
                                <div className="whitespace-normal">
                                    <p className="text-[#FFFFFF] text-lg font-light leading-relaxed italic font-serif">
                                        &quot;{x.comments}&quot;
                                    </p>
                                </div>

                                {/* Subtle Design Accent */}
                                <div className="mt-8 h-[1px] w-8 bg-[#D4AF37] group-hover:w-full transition-all duration-700" />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Background Decorative Element */}
            <div className="mt-20 flex justify-center opacity-20">
                <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>
        </section>
    );
}