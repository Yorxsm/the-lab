"use client"

import Lenis from '@studio-freight/lenis';
import { useRef, useEffect } from 'react'

// Components
import ConnectingLine from './components/ConnectingLine';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import BoldStatic from "./components/BoldStatic";
import AboutSection from "./components/AboutSection";
import SolutionSection from "./components/SolutionSection";
import ProductsSection from "./components/ProductsSection";
import MomentumSection from "./components/MomentumSection";
import ComparisonTable from "./components/ComparisonTable";
import VisionSection from "./components/VisionSection";
import TestimonialSection from "./components/TestimonialSection";
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
      <ConnectingLine />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <BoldStatic />
        <AboutSection />
        <SolutionSection />
        <ProductsSection />
        <MomentumSection />
        <ComparisonTable />
        <VisionSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
