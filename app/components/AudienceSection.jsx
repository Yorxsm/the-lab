"use client";

import React from 'react';
import { motion } from 'framer-motion';

const audiences = [
    {
        icon: "🎓",
        title: "Students & Engineers",
        description: "Build real robots, gain exposure, and launch startups"
    },
    {
        icon: "🏛️",
        title: "Universities",
        description: "Offer world-class, hands-on STEM experiences"
    },
    {
        icon: "🎯",
        title: "Sponsors & Brands",
        description: "Reach engaged, future-facing audiences"
    },
    {
        icon: "🏢",
        title: "Governments & Institutions",
        description: "Retain talent and grow local innovation"
    },
    {
        icon: "💰",
        title: "Investors",
        description: "Access early-stage, high-potential hardware IP"
    }
];

const AudienceSection = () => {
    return (
        <section className="bg-section-darker">
            <div className="section-container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-section-title font-heading"
                    >
                        Who It's For
                    </motion.h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 text-center group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {audience.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 font-heading">
                                {audience.title}
                            </h3>
                            <p className="text-sm text-secondary">
                                {audience.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AudienceSection;
