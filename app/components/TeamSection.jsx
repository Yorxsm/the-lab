"use client";

import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
    return (
        <section className="bg-section-dark">
            <div className="section-container">
                <div className="section-header">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-muted text-lg mb-4 uppercase tracking-widest"
                    >
                        Our Team
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-section-title font-heading"
                    >
                        Builders, Strategists, and{' '}
                        <span className="text-gradient">Storytellers</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
                >
                    <p className="text-body-large text-secondary mb-8">
                        eXhibot is powered by a multidisciplinary team spanning engineering,
                        operations, finance, partnerships, marketing, and creative direction—united
                        by a shared mission to grow African hardware innovation.
                    </p>

                    <div className="flex items-center gap-6 mb-8 p-6 glass-card-subtle rounded-xl">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-3xl flex-shrink-0">
                            👤
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white font-heading">
                                Joel Osagumwenro
                            </h3>
                            <p className="text-secondary">CEO & Head of Growth</p>
                        </div>
                    </div>

                    <p className="text-body-large text-secondary">
                        The team has already scaled eXhibot from a campus pilot to a nationally
                        recognized platform with government and university partnerships. Together,
                        we combine <span className="text-white">technical depth</span> with{' '}
                        <span className="text-white">commercial execution</span> and{' '}
                        <span className="text-white">cultural relevance</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
