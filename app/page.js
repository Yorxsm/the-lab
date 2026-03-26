"use client"

import Lenis from '@studio-freight/lenis';
import { useRef, useEffect } from 'react'

// Components

import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SolutionSection from "./components/SolutionSection";
import ProductsSection from "./components/ProductsSection";
import ComparisonTable from "./components/ComparisonTable";
import TestimonialSection from "./components/TestimonialSection";
import PartnersSection from "./components/PartnersSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    return () => lenis.current.destroy();
  }, []);

  return (
    <main className="bg-[#fafafa] relative">
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <AboutSection />
        <SolutionSection />
        <ProductsSection />
        <ComparisonTable />
        <TestimonialSection />
        <PartnersSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
