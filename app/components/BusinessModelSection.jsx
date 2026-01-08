"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TicketIcon, HandshakeIcon, WrenchIcon } from './icons';

const revenueStreams = [
    { icon: TicketIcon, title: "Event tickets" },
    { icon: HandshakeIcon, title: "Sponsorships" },
    { icon: WrenchIcon, title: "Robotics kits & training programs" },
];

const BusinessModelSection = () => {
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
                        How We Grow
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-section-title font-heading"
                    >
                        A Sustainable, Scalable{' '}
                        <span className="text-gradient">Business Model</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-body-large text-secondary text-center mb-12"
                    >
                        eXhibot is pre-revenue, but every revenue stream is designed for strong margins:
                    </motion.p>

                    {/* Revenue Streams */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {revenueStreams.map((stream, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="glass-card p-6 text-center"
                            >
                                <div className="text-4xl mb-4 text-[#ff6b35]"><stream.icon size="2em" /></div>
                                <h3 className="text-lg font-semibold text-white">{stream.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Key Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="glass-card-subtle p-8 text-center"
                    >
                        <p className="text-body-large text-secondary mb-6">
                            Each event funds the next. We scale by{' '}
                            <span className="text-white">licensing the eXhibot format</span>{' '}
                            to universities and governments—first across Nigeria, then across Africa.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <span className="px-4 py-2 glass-card text-sm text-white rounded-full">
                                Lean
                            </span>
                            <span className="px-4 py-2 glass-card text-sm text-white rounded-full">
                                Repeatable
                            </span>
                            <span className="px-4 py-2 glass-card text-sm text-gradient font-semibold rounded-full">
                                Built for growth
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BusinessModelSection;
