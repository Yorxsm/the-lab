"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import FaqSection from '../components/FaqSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function FaqPage() {
    return (
        <main className="bg-[#fafafa] min-h-screen flex flex-col">
            {/* Spacer for fixed navbar */}
            <div className="h-24 bg-[#0a0a0a]" />
            <Navbar />
            <div className="flex-grow">
                <FaqSection />
            </div>
            <CTASection />
            <Footer />
        </main>
    );
}
