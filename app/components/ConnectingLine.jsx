"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ConnectingLine = () => {
    const { scrollYProgress } = useScroll();

    // Create a smoother spring layout for the drawing
    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <svg
                className="w-full h-full opacity-40"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Main Line - Winding path */}
                <motion.path
                    d="M 50 -10 C 50 10, 20 20, 20 40 C 20 60, 80 60, 80 80 C 80 95, 50 95, 50 110"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="0.4"
                    style={{ pathLength }}
                />

                {/* Secondary decorative faint line */}
                <motion.path
                    d="M 50 -10 C 50 10, 80 20, 80 40 C 80 60, 20 60, 20 80 C 20 95, 50 95, 50 110"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="0.1"
                    opacity="0.3"
                    style={{ pathLength }}
                />

                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                        <stop offset="15%" stopColor="#f97316" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
                        <stop offset="85%" stopColor="#2563eb" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default ConnectingLine;
