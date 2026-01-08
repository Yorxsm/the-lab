"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FactoryIcon, RobotIcon } from './icons';

const ProductsSection = () => {
    return (
        <section className="py-16 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `
                    linear-gradient(90deg, white 1px, transparent 1px),
                    linear-gradient(white 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
            }} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header - Dramatic */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 md:mb-20"
                >
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-8">
                        <span className="font-display text-7xl sm:text-8xl md:text-[180px] leading-none text-white/5 select-none self-start">
                            01
                        </span>
                        <div className="pt-2 md:pt-8">
                            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#ff6b35] mb-2 md:mb-4 block">
                                What We Deliver
                            </span>
                            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-none">
                                Products That<br />
                                <span className="text-[#ff6b35]">Ship.</span>
                            </h2>
                        </div>
                    </div>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-12 gap-4 md:gap-6">

                    {/* Main Product - Spans 8 cols, 2 rows */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-span-12 lg:col-span-8 row-span-2 group"
                    >
                        <div className="relative h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden border border-white/10">
                            {/* Video Background */}
                            <div className="absolute inset-0">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/_nYZW9wfKhs?autoplay=1&mute=1&loop=1&playlist=_nYZW9wfKhs&controls=0&showinfo=0&playsinline=1&rel=0&modestbranding=1"
                                    title="eXhibot.app Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    playsInline
                                    className="w-full h-full object-cover scale-150 md:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
                                {/* Top */}
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 md:w-3 md:h-3 bg-[#10b981] rounded-full animate-pulse" />
                                        <span className="text-white/60 font-mono text-[10px] md:text-xs uppercase tracking-widest">Live System</span>
                                    </div>
                                    <a
                                        href="https://exhibot.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0a0a0a] transition-all group-hover:scale-110"
                                    >
                                        ↗
                                    </a>
                                </div>

                                {/* Bottom */}
                                <div>
                                    <h3 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-3">
                                        eXhibot.app
                                    </h3>
                                    <p className="text-white/60 text-sm md:text-lg max-w-lg mb-4 md:mb-6 leading-relaxed">
                                        Exhibot is a creator platform that combines digital profiles, NFC sharing, and direct fan communication.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['NFC Systems', 'Identity', 'Payments', 'Events'].map((tag, i) => (
                                            <span key={i} className="px-2 py-1 md:px-3 md:py-1 bg-white/10 backdrop-blur-sm text-white/80 text-[10px] md:text-xs rounded-full border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Products - Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-12 md:col-span-6 lg:col-span-4 group"
                    >
                        <div className="h-full min-h-[220px] md:min-h-[280px] p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex flex-col justify-between hover:border-[#ff6b35]/50 transition-all">
                            <div>
                                <span className="text-4xl md:text-5xl mb-4 block text-[#ff6b35]"><FactoryIcon size="1.5em" /></span>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff6b35]">In Development</span>
                            </div>
                            <div>
                                <h4 className="font-display text-xl md:text-2xl text-white mb-2">Smart Infrastructure</h4>
                                <p className="text-white/50 text-xs md:text-sm">IoT monitoring for utilities, manufacturing, and logistics.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-12 md:col-span-6 lg:col-span-4 group"
                    >
                        <div className="h-full min-h-[220px] md:min-h-[280px] p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#ff6b35]/10 to-transparent border border-[#ff6b35]/20 flex flex-col justify-between hover:border-[#ff6b35]/50 transition-all">
                            <div>
                                <span className="text-4xl md:text-5xl mb-4 block text-[#ff6b35]"><RobotIcon size="1.5em" /></span>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff6b35]">On Request</span>
                            </div>
                            <div>
                                <h4 className="font-display text-xl md:text-2xl text-white mb-2">Custom Robotics</h4>
                                <p className="text-white/50 text-xs md:text-sm">Rapid prototyping for your specific industry challenges.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Stat Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 md:mt-12 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8">
                        <p className="text-white/60 text-sm max-w-md text-center md:text-left">
                            <span className="text-white font-medium">Events are the pipeline.</span> Products are the business. We help engineers build and own what they create.
                        </p>
                        <div className="flex gap-8 md:gap-12 w-full md:w-auto justify-center md:justify-end">
                            <div className="text-center">
                                <p className="font-display text-2xl md:text-4xl text-[#ff6b35]">10+</p>
                                <p className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-widest">Prototypes</p>
                            </div>
                            <div className="text-center">
                                <p className="font-display text-2xl md:text-4xl text-white">1</p>
                                <p className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-widest">Live Platform</p>
                            </div>
                            <div className="text-center">
                                <p className="font-display text-2xl md:text-4xl text-white">∞</p>
                                <p className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-widest">Potential</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ProductsSection;
