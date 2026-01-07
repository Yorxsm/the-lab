"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Find Talent",
        description: "We run competitions and incubators to discover Africa's best engineering minds."
    },
    {
        number: "02",
        title: "Build Products",
        description: "Our teams take on real challenges from businesses—designing, building, and deploying solutions."
    },
    {
        number: "03",
        title: "Launch Startups",
        description: "The best projects become companies, with patents and equity that stay in African hands."
    }
];

const outputs = [
    "NFC Systems",
    "IoT Devices",
    "Robotics Prototypes",
    "Automation Solutions",
    "Patent-Ready IP"
];

const SolutionSection = () => {
    return (
        <section id="ecosystem" className="section bg-[#f8fafc]">
            <div className="section-container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-20"
                >
                    <span className="pill-tag mb-6 inline-block">Operations</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-[#0a0a0a]">
                        From Competitions<br />
                        to <span className="text-[#ff6b35]">Companies.</span>
                    </h2>
                </motion.div>

                {/* Steps - Numbered List */}
                <div className="space-y-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="grid md:grid-cols-12 gap-8 py-12 border-b border-[#e2e8f0] group"
                        >
                            <div className="md:col-span-2">
                                <span className="font-display text-6xl md:text-7xl text-[#e2e8f0] group-hover:text-[#ff6b35] transition-colors duration-500">
                                    {step.number}
                                </span>
                            </div>
                            <div className="md:col-span-4">
                                <h3 className="font-display text-2xl md:text-3xl text-[#0a0a0a] mb-2">
                                    {step.title}
                                </h3>
                            </div>
                            <div className="md:col-span-6">
                                <p className="text-[#64748b] text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Outputs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 flex flex-wrap gap-3"
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-[#64748b] mr-4 self-center">Outputs:</span>
                    {outputs.map((output, index) => (
                        <span key={index} className="pill-tag">
                            {output}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionSection;
