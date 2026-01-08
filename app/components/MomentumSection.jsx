"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "300+", label: "Engineers Onboarded" },
    { value: "6", label: "University Partners" },
    { value: "3", label: "Countries Active" },
    { value: "10+", label: "Working Prototypes" },
];

const images = [
    { src: "/images/hero-01.jpg", label: "Workshop" },
    { src: "/images/hero-02.jpg", label: "Competition" },
    { src: "/images/hero-03.jpg", label: "Demo Day" },
    { src: "/images/hero-04.jpg", label: "Building" },
];

const MomentumSection = () => {
    return (
        <section className="py-24 md:py-32 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b35] mb-4 block">
                        Traction
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-[#0a0a0a] mb-6">
                        Building <span className="text-[#ff6b35]">Momentum.</span>
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-4 md:p-6 bg-white border border-[#e2e8f0] rounded-2xl text-center hover:border-[#0a0a0a] transition-colors"
                        >
                            <div className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0a0a0a] mb-1 md:mb-2">
                                {stat.value}
                            </div>
                            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider md:tracking-widest text-[#64748b] leading-tight">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Image Grid - Clean & Unified */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative"
                >
                    {/* Outer Frame */}
                    <div className="p-4 md:p-6 bg-[#0a0a0a] rounded-3xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-[4/5] rounded-xl overflow-hidden"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.label}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                    {/* Label */}
                                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#ff6b35]">0{index + 1}</span>
                                        <p className="font-display text-white text-sm sm:text-lg truncate">{image.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                            <p className="text-white/50 text-sm">
                                <span className="text-white font-medium">Real events. Real engineers. Real products.</span>
                            </p>
                            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6b35]">
                                eXhibot 2025
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default MomentumSection;
