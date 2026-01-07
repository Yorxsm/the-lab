"use client";

import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
    {
        year: "2025",
        title: "Genesis",
        description: "First pilot event. Proof of concept with university partners.",
        status: "completed"
    },
    {
        year: "2026",
        title: "Scale",
        description: "6 university partners. First B2B/B2G contracts in Nigeria.",
        status: "current"
    },
    {
        year: "2027",
        title: "Expand",
        description: "Expand to Kenya & Ghana. Pan-African talent network.",
        status: "upcoming"
    },
    {
        year: "2030",
        title: "Lead",
        description: "Thousands of patents. Africa as the world's robotics lab.",
        status: "upcoming"
    }
];

const VisionSection = () => {
    return (
        <section className="section bg-[#f8fafc]">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-20"
                >
                    <span className="pill-tag mb-6 inline-block">Roadmap</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-[#0a0a0a]">
                        Africa as the World's<br />
                        <span className="text-[#ff6b35]">Hardware Lab.</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="grid md:grid-cols-4 gap-8">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-6 rounded-xl border ${milestone.status === 'current'
                                    ? 'bg-[#ff6b35]/5 border-[#ff6b35]'
                                    : milestone.status === 'completed'
                                        ? 'bg-white border-[#e2e8f0]'
                                        : 'bg-[#f8fafc] border-[#e2e8f0] opacity-60'
                                }`}
                        >
                            <div className={`font-display text-4xl md:text-5xl mb-4 ${milestone.status === 'current'
                                    ? 'text-[#ff6b35]'
                                    : milestone.status === 'completed'
                                        ? 'text-[#0a0a0a]'
                                        : 'text-[#e2e8f0]'
                                }`}>
                                {milestone.year}
                            </div>
                            <h3 className="font-display text-xl text-[#0a0a0a] mb-2">
                                {milestone.title}
                            </h3>
                            <p className="text-[#64748b] text-sm leading-relaxed">
                                {milestone.description}
                            </p>
                            {milestone.status === 'current' && (
                                <div className="mt-4">
                                    <span className="pill-tag pill-tag--active text-xs">Current Phase</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Vision Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 max-w-2xl"
                >
                    <p className="text-2xl text-[#0a0a0a] leading-relaxed">
                        Robotics entertainment was born in the U.S.
                        <span className="text-[#ff6b35] font-medium"> Robotics entrepreneurship will be built in Africa.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionSection;
