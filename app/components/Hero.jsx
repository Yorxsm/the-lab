"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const taglineRef = useRef(null);
    const headlineRef = useRef(null);
    const descRef = useRef(null);
    const ctaRef = useRef(null);
    const panelRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Main content animation
            const tl = gsap.timeline({
                defaults: { ease: "power4.out" }
            });

            tl.fromTo(panelRef.current,
                { opacity: 0, scale: 0.95, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 1.2 }
            )
                .fromTo(taglineRef.current,
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.8 },
                    "-=0.8"
                )
                .fromTo(headlineRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1 }
                )
                .fromTo(descRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.8 },
                    "-=0.5"
                )
                .fromTo(ctaRef.current,
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    "-=0.3"
                );

            // Scroll indicator animation
            if (scrollRef.current) {
                gsap.to(scrollRef.current.querySelector('.scroll-dot'), {
                    y: 24,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut"
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div id="hero" className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col">
            {/* Navbar removed - moved to page.js layout */}

            {/* Sci-Fi Background Effects - No Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                {/* Horizontal Scan Line */}
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent animate-scan-horizontal" />

                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full animate-float-particle"
                            style={{
                                left: `${5 + Math.random() * 90}%`,
                                top: `${5 + Math.random() * 90}%`,
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: `${5 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>

                {/* Corner Accents - Hidden on Mobile */}
                <div className="hidden md:block absolute top-8 left-8 w-20 h-20 border-t border-l border-[#ff6b35]/20" />
                <div className="hidden md:block absolute top-8 right-8 w-20 h-20 border-t border-r border-white/10" />
                <div className="hidden md:block absolute bottom-8 left-8 w-20 h-20 border-b border-l border-white/10" />
                <div className="hidden md:block absolute bottom-8 right-8 w-20 h-20 border-b border-r border-[#ff6b35]/20" />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-20 pb-12">

                {/* Elevated Platform Panel */}
                <div
                    ref={panelRef}
                    className="max-w-4xl mx-auto p-6 md:p-12 lg:p-16 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl border border-white/10 relative"
                >
                    {/* Panel Corner Accents */}
                    <div className="absolute top-0 left-0 w-6 md:w-8 h-6 md:h-8 border-t-2 border-l-2 border-[#ff6b35]" />
                    <div className="absolute top-0 right-0 w-6 md:w-8 h-6 md:h-8 border-t-2 border-r-2 border-[#ff6b35]" />
                    <div className="absolute bottom-0 left-0 w-6 md:w-8 h-6 md:h-8 border-b-2 border-l-2 border-[#ff6b35]" />
                    <div className="absolute bottom-0 right-0 w-6 md:w-8 h-6 md:h-8 border-b-2 border-r-2 border-[#ff6b35]" />

                    {/* Tagline */}
                    <p
                        ref={taglineRef}
                        className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#ff6b35] mb-4 md:mb-6"
                    >
                        Africa's Hardware Innovation Studio
                    </p>

                    {/* Main headline */}
                    <h1
                        ref={headlineRef}
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-none tracking-tight mb-6 md:mb-8 text-white"
                    >
                        Building the Future.<br />
                        <span className="text-[#ff6b35]">Made in Africa.</span>
                    </h1>

                    {/* Description */}
                    <p
                        ref={descRef}
                        className="text-[#94a3b8] text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
                    >
                        We build real robotics and hardware solutions by turning Africa's best engineers into a competitive R&D engine.
                    </p>

                    {/* CTA Buttons */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#ecosystem" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-[#ff6b35] text-white font-display font-semibold rounded-md hover:bg-[#e55a2a] transition-colors text-sm md:text-base">
                            See Operations
                        </a>
                        <a href="mailto:admin@byhavi.tech?subject=Partnership%20Inquiry%20-%20eXhibot%20NG&body=Hello%20eXhibot%20Team%2C%0A%0AI%20am%20reaching%20out%20to%20explore%20a%20potential%20partnership%20opportunity.%0A%0AAbout%20Me%2FMy%20Organization%3A%0A-%20Name%3A%20%0A-%20Organization%3A%20%0A-%20Role%3A%20%0A%0APartnership%20Interest%3A%0A%E2%96%A1%20Sponsorship%0A%E2%96%A1%20University%20Partnership%0A%E2%96%A1%20Government%2FInstitutional%20Collaboration%0A%E2%96%A1%20Custom%20Robotics%20Project%0A%E2%96%A1%20Investment%20Opportunity%0A%E2%96%A1%20Other%0A%0AProject%20Details%2FMessage%3A%0A%0A%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-transparent text-white font-display font-semibold border-2 border-white/30 rounded-md hover:bg-white/10 hover:border-white/50 transition-all text-sm md:text-base">
                            Partner With Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <div ref={scrollRef} className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex flex-col items-center">
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/40 mb-2 md:mb-4">explore</span>
                    <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/20 rounded-full flex justify-center pt-2 relative overflow-hidden">
                        <div className="scroll-dot w-1 md:w-1.5 h-1 md:h-1.5 bg-[#ff6b35] rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
