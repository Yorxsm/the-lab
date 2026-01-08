"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    {
        name: "University of Benin Center for Ai",
        logo: "/images/partners/uniben-logo.png",
        url: "https://uniben.edu"
    },
    {
        name: "SUI",
        logo: "/images/partners/sui-logo.png",
        url: "https://sui.io"
    }
];

const PartnersSection = () => {
    return (
        <section className="py-16 md:py-24 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b35] mb-4 block">
                        Partners & Sponsors
                    </span>
                    <h2 className="font-display text-2xl md:text-4xl leading-tight text-[#0a0a0a]">
                        Backed by <span className="text-[#ff6b35]">Visionaries.</span>
                    </h2>
                </motion.div>

                {/* Partner Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
                >
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                            <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#64748b] group-hover:text-[#0a0a0a] transition-colors">
                                {partner.name}
                            </span>
                        </a>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default PartnersSection;
