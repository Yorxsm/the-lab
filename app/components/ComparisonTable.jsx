"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, BoltIcon, GlobeIcon, CoinIcon } from './icons';

const competitors = [
    { name: "BattleBots", type: "Entertainment first", desc: "No commercialization", product: false, ip: false },
    { name: "FIRST Robotics", type: "Education first", desc: "IP remains academic", product: true, ip: false },
    { name: "Accelerators", type: "Software-optimized", desc: "Hardware light", product: true, ip: false },
];

const exhibot = {
    name: "eXhibot NG",
    type: "Innovation + IP",
    product: true,
    ip: true
};

const advantages = [
    { icon: UsersIcon, title: "Untapped Talent", stat: "300+", desc: "Engineers onboarded" },
    { icon: BoltIcon, title: "Competitive Edge", stat: "3x", desc: "Faster iteration" },
    { icon: GlobeIcon, title: "Local Solutions", stat: "100%", desc: "Built for Africa" },
    { icon: CoinIcon, title: "Cost Advantage", stat: "60%", desc: "Lower R&D costs" },
];

const ComparisonTable = () => {
    return (
        <section className="py-16 md:py-32 bg-[#fafafa] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="pill-tag mb-4 md:mb-6 inline-block">The Difference</span>
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight text-[#0a0a0a] mb-4">
                        Others Give Trophies.<br />
                        <span className="text-[#ff6b35]">We Build Careers.</span>
                    </h2>
                    <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto px-4">
                        This is not entertainment. This is a <strong className="text-[#0a0a0a]">deep-tech services and IP company.</strong>
                    </p>
                </motion.div>

                {/* Comparison Visual */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Others */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 order-2 lg:order-1"
                    >
                        <h3 className="font-mono text-xs uppercase tracking-widest text-[#64748b] mb-4 md:mb-6 text-center lg:text-left">The Competition</h3>
                        {competitors.map((c, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-white border border-[#e2e8f0] rounded-xl opacity-80 md:opacity-60 gap-3">
                                <div>
                                    <p className="font-display text-[#64748b] text-sm md:text-base">{c.name}</p>
                                    <p className="text-[10px] md:text-xs text-[#94a3b8]">{c.type} · <span className="text-[#94a3b8]/80">{c.desc}</span></p>
                                </div>
                                <div className="flex gap-2 md:gap-4 text-xs md:text-sm">
                                    <span className={c.product ? 'text-[#64748b]' : 'text-[#e2e8f0]'}>
                                        {c.product ? '✓' : '✗'} Product
                                    </span>
                                    <span className={c.ip ? 'text-[#64748b]' : 'text-[#e2e8f0]'}>
                                        {c.ip ? '✓' : '✗'} IP
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* eXhibot */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <h3 className="font-mono text-xs uppercase tracking-widest text-[#ff6b35] mb-4 md:mb-6 text-center lg:text-left">Our Approach</h3>
                        <div className="p-6 md:p-8 bg-[#0a0a0a] rounded-2xl border-2 border-[#ff6b35] relative overflow-hidden shadow-xl">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/10 to-transparent" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 bg-[#ff6b35] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                                        The Difference
                                    </span>
                                </div>
                                <h4 className="font-display text-2xl md:text-3xl text-white mb-2">{exhibot.name}</h4>
                                <p className="text-[#ff6b35] font-mono text-xs md:text-sm mb-6">{exhibot.type}</p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                        <span className="text-xl md:text-2xl">✓</span>
                                        <p className="text-white font-medium mt-1 text-sm md:text-base">Product Delivery</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                        <span className="text-xl md:text-2xl">✓</span>
                                        <p className="text-white font-medium mt-1 text-sm md:text-base">IP & Patents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Advantages Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#64748b] text-center mb-6 md:mb-8">Our Unfair Advantages</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {advantages.map((adv, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                className="p-4 md:p-6 bg-white border border-[#e2e8f0] rounded-xl text-center hover:border-[#ff6b35]/30 hover:shadow-lg transition-all"
                            >
                                <span className="text-2xl md:text-3xl mb-2 md:mb-3 block text-[#ff6b35]"><adv.icon size="1.5em" /></span>
                                <p className="font-display text-2xl md:text-3xl text-[#0a0a0a] mb-1">{adv.stat}</p>
                                <p className="text-[10px] md:text-xs text-[#64748b]">{adv.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ComparisonTable;
