"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "eXhibot stands as a beacon for the future of sustainable innovations. It aligns with the Ministry's goals of a technology-driven future for Edo State and the nation at large.",
        author: "Engr. Jonathan Ukpebor",
        role: "Permanent Secretary, Min. of Science & Tech, Edo State",
        highlight: "beacon for the future"
    },
    {
        quote: "eXhibot exists at such a time where the right knowledge is available, with the right resources and human capital to propel the Nigerian tech and industrial scene.",
        author: "Dr. Edoghogho Olaye",
        role: "Director of AI & Robotics, University of Benin",
        highlight: "right knowledge"
    },
    {
        quote: "We would love for eXhibot to engage our students practically. The brilliance and vision displayed by this team is exactly what Nigerian innovation needs.",
        author: "Prof. Lawrence Ezemonye",
        role: "Vice Chancellor, Igbinedion University Okada",
        highlight: "engage students practically"
    }
];

const TestimonialSection = () => {
    return (
        <section className="py-16 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#ff6b35]/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#60a5fa]/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#ff6b35] mb-4 md:mb-6">
                        Voices From The Field
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight text-white">
                        Real People.<br />
                        <span className="text-[#ff6b35]">Real Impact.</span>
                    </h2>
                </motion.div>

                {/* Testimonial Cards - Staggered Layout */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className={`relative group ${i === 1 ? 'md:-mt-8' : ''}`}
                        >
                            {/* Card */}
                            <div className="h-full p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#ff6b35]/50 hover:bg-white/[0.07] transition-all duration-500">
                                {/* Quote Number */}
                                <span className="absolute -top-4 -left-2 font-display text-7xl md:text-8xl text-white/5 select-none pointer-events-none">
                                    0{i + 1}
                                </span>

                                {/* Quote */}
                                <p className="relative z-10 text-white/80 text-base md:text-lg leading-relaxed mb-6">
                                    "{t.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff6b35]/50 flex items-center justify-center text-white font-display text-base md:text-lg">
                                        {t.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-display text-white text-sm md:text-base">{t.author}</p>
                                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/50">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialSection;
