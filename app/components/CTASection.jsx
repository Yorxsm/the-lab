"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero-bg-grid.svg')] opacity-[0.03]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b35] mb-6 block">
                        Get Started
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 md:mb-10">
                        Ready to Build<br />
                        <span className="text-[#ff6b35]">Real Hardware?</span>
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12">
                        Whether you're an engineer looking for resources or a company needing solutions, eXhibot is your engine.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="mailto:admin@byhavi.tech" className="inline-flex items-center justify-center px-8 py-4 bg-[#ff6b35] text-white font-display font-semibold rounded-md hover:bg-[#e55a2a] transition-colors text-base md:text-lg">
                            Start a Project
                        </a>
                        <a href="https://discord.com/invite/uCYwT6keJK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-display font-semibold border-2 border-white/20 rounded-md hover:bg-white/10 hover:border-white/40 transition-all text-base md:text-lg">
                            Join Community
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
