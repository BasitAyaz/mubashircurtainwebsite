"use client";

import { useState } from "react";
import axios from "axios";
import { StarFilled, LoadingOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

// Solid Premium Palette
const GOLD = "#D4AF37";
const PURE_WHITE = "#FFFFFF";

export default function FeedbackForm() {
    const [model, setModel] = useState({
        customerName: "",
        comments: "",
        starRating: 5 // Defaulting to an elite 5-star experience
    });
    const [loader, setLoader] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const handleChange = (key: string, value: any) => {
        setModel((prev) => ({ ...prev, [key]: value }));
    };

    const sendFeedback = (e: React.FormEvent) => {
        e.preventDefault();
        if (!model.customerName || !model.comments) return;

        setLoader(true);
        setStatus("idle");

        axios.post("https://mubashircurtainrecieptbackend.vercel.app/feedback", model)
            .then((res: any) => {
                setStatus("success");
                // Clear form on success
                setModel({ customerName: "", comments: "", starRating: 5 });
            })
            .catch((err) => {
                console.error("Submission error:", err);
                setStatus("error");
            })
            .finally(() => {
                setLoader(false);
            });
    };

    return (
        <main className="bg-[#050505] min-h-screen py-24 px-6 lg:px-20 flex items-center justify-center border-t border-[#D4AF37]/20">
            <div className="w-full max-w-2xl bg-[#0A0A0A] border border-[#D4AF37]/30 p-10 md:p-16 relative overflow-hidden">

                {/* Header elements */}
                <div className="mb-12 text-center md:text-left">
                    <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.8em] font-bold block mb-4">
                        Share Your Experience
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extralight tracking-tighter text-[#FFFFFF] uppercase">
                        Client <span className="italic font-serif text-[#D4AF37]">Endorsement</span>
                    </h1>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                    <div className="mb-8 p-4 bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm tracking-wide">
                        <CheckCircleOutlined /> Gratitude expressed. Your review is now preserved in our archives.
                    </div>
                )}
                {status === "error" && (
                    <div className="mb-8 p-4 bg-rose-950/30 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-sm tracking-wide">
                        <CloseCircleOutlined /> Transmission failed. Please verify your connection and attempt again.
                    </div>
                )}

                <form onSubmit={sendFeedback} className="space-y-10">

                    {/* Customer Name Input */}
                    <div className="relative group">
                        <input
                            type="text"
                            required
                            value={model.customerName}
                            onChange={(e) => handleChange("customerName", e.target.value)}
                            placeholder="YOUR NAME / ENTERPRISE"
                            className="w-full bg-transparent border-b border-[#D4AF37]/30 py-4 text-sm font-light tracking-widest text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] placeholder-white/30 uppercase transition-colors duration-300"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#D4AF37] group-focus-within:w-full transition-all duration-500" />
                    </div>

                    {/* Interactive Star Selection */}
                    <div className="space-y-3">
                        <label className="text-white/50 text-[11px] uppercase tracking-[0.4em] block">
                            Rating Scale
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => handleChange("starRating", star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(null)}
                                    className="focus:outline-none transition-transform active:scale-90"
                                >
                                    <StarFilled
                                        style={{
                                            fontSize: 28,
                                            color: star <= (hoverRating ?? model.starRating) ? GOLD : "#222",
                                            transition: "color 0.2s ease"
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Comments Input */}
                    <div className="relative group">
                        <textarea
                            required
                            rows={4}
                            value={model.comments}
                            onChange={(e) => handleChange("comments", e.target.value)}
                            placeholder="YOUR REFLECTIONS ON OUR CRAFTSMANSHIP..."
                            className="w-full bg-transparent border border-[#D4AF37]/30 p-4 text-sm font-light tracking-wider text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] placeholder-white/30 transition-colors duration-300 resize-none"
                        />
                    </div>

                    {/* Elite Action Button */}
                    <button
                        type="submit"
                        disabled={loader}
                        className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-light text-xs uppercase tracking-[0.5em] py-5 transition-all duration-500 relative flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        {loader ? (
                            <LoadingOutlined style={{ fontSize: 16 }} spin />
                        ) : (
                            <>
                                TRANSMIT FEEDBACK
                                <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </>
                        )}
                    </button>
                </form>

                {/* Subtle Structural Line Accent */}
                <div className="absolute bottom-0 right-0 w-24 h-[1px] bg-[#D4AF37]" />
                <div className="absolute bottom-0 right-0 w-[1px] h-24 bg-[#D4AF37]" />
            </div>
        </main>
    );
}