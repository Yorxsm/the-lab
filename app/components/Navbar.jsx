"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#ecosystem", label: "Operations" },
    { href: "/faq", label: "FAQ" },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === '/';

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            if (typeof window !== 'undefined' && window.lenis) {
                window.lenis.stop();
            }
        } else {
            document.body.style.overflow = '';
            if (typeof window !== 'undefined' && window.lenis) {
                window.lenis.start();
            }
        }
        return () => {
            document.body.style.overflow = '';
            if (typeof window !== 'undefined' && window.lenis) {
                window.lenis.start();
            }
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Main Navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'py-3 bg-[#fafafa]/95 backdrop-blur-md shadow-sm' : 'py-5 md:py-6 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center group z-[100] relative"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <img
                                src='/logoSmall.png'
                                alt="eXhibot"
                                className={`h-8 md:h-10 w-auto transition-all duration-300 ${isScrolled || mobileMenuOpen ? '' : 'brightness-0 invert'}`}
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.filter(l => l.label !== 'Home').map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-[#64748b] hover:text-[#0a0a0a]' : 'text-white/70 hover:text-white'}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a href="mailto:admin@byhavi.tech" className="pill-tag pill-tag--active">
                                Contact
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`md:hidden p-2 z-[100] relative ${isScrolled || mobileMenuOpen ? 'text-[#0a0a0a]' : 'text-white'}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Menu"
                        >
                            <div className="flex flex-col gap-1.5 w-6">
                                <span className={`block w-full h-0.5 transition-all duration-300 bg-current ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block w-full h-0.5 transition-all duration-300 bg-current ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block w-full h-0.5 transition-all duration-300 bg-current ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - OUTSIDE nav to avoid stacking context issues */}
            <div className={`fixed inset-0 bg-[#fafafa] z-[90] transition-all duration-500 md:hidden flex flex-col items-center justify-center ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col items-center gap-8 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-display text-4xl text-[#0a0a0a]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="mailto:admin@byhavi.tech"
                        className="btn-primary mt-4"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
