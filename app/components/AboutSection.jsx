"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-32 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    >
                        {/* Cool Card Design */}
                        <div className="relative">
                            {/* Background Layer - Hidden on small mobile */}
                            <div className="hidden sm:block absolute inset-0 bg-[#0a0a0a] rounded-3xl transform rotate-1 opacity-5" />
                            <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-[#ff6b35]/10 to-transparent rounded-3xl transform -rotate-1" />

                            {/* Main Card */}
                            <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 border border-[#e2e8f0] shadow-sm md:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden sm:overflow-visible">
                                {/* Accent Line */}
                                <div className="absolute top-0 left-6 right-6 md:left-8 md:right-8 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff6b35]/30 rounded-full" />

                                {/* Tag */}
                                <span className="inline-flex items-center px-4 py-2 bg-[#0a0a0a] text-white text-[10px] md:text-xs font-mono uppercase tracking-widest rounded-full mb-6 md:mb-8">
                                    Our Mission
                                </span>

                                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#0a0a0a] mb-6 md:mb-8 break-words">
                                    Connecting Talent<br />
                                    to <span className="text-[#ff6b35]">Opportunity.</span>
                                </h2>

                                <div className="space-y-6 text-[#64748b] text-sm sm:text-base md:text-lg leading-relaxed">
                                    <div className="flex gap-4">
                                        <span className="w-1 bg-[#e2e8f0] rounded-full flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-display text-[#0a0a0a] mb-2 text-sm md:text-base">The Reality</p>
                                            <p>Africa is full of brilliant minds, but they often lack the right tools and labs to build real hardware. Meanwhile, local companies spend huge amounts importing solutions.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <span className="w-1 bg-[#ff6b35] rounded-full flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-display text-[#0a0a0a] mb-2 text-sm md:text-base">The Solution</p>
                                            <p>eXhibot fills that gap. We take the best engineers and give them the resources to build robots, smart devices, and automation systems that solve real problems.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Quote */}
                                <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                                    <p className="text-[#0a0a0a] font-medium text-sm sm:text-base md:text-lg">
                                        Builders build. Buyers get local solutions. <span className="text-[#ff6b35]">Africa grows.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Image with Minimal Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                        className="relative flex justify-center mt-8 lg:mt-0 px-2 sm:px-0"
                    >
                        {/* Minimal Frame with specific max-width to ensure it fits */}
                        <div className="relative w-full max-w-[300px] sm:max-w-sm ml-2 md:ml-0">
                            {/* Frame Background - Scale down slightly on mobile to prevent clipping with negative margins */}
                            <div className="absolute -inset-2 md:-inset-4 border-2 border-[#0a0a0a] rounded-xl md:rounded-2xl" />

                            {/* Corner Dots - Positioned manually */}
                            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#ff6b35] rounded-full z-10" />
                            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#0a0a0a] rounded-full z-10" />
                            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#0a0a0a] rounded-full z-10" />
                            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#ff6b35] rounded-full z-10" />

                            {/* Image Container */}
                            <div className="relative bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-lg md:rounded-xl p-6 md:p-12">
                                <img
                                    src="/images/about_3d_robotics.png"
                                    alt="Robotics Innovation"
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                />

                                {/* Floating Label */}
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#0a0a0a] text-white text-[10px] md:text-xs font-mono uppercase tracking-widest rounded-full whitespace-nowrap shadow-lg">
                                    Research, Development & Innovation
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
