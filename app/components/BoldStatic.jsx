"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BoldStatic = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Marquee animation
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 20,
          repeat: -1,
        });
      }
    }, marqueeRef); // Scope to ref

    return () => ctx.revert(); // Cleanup!
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#fafafa] border-y border-[#e2e8f0] py-4 md:py-6 relative z-10">
      <div className="marquee-container">
        <div ref={marqueeRef} className="marquee-track flex whitespace-nowrap">
          {/* Content repeated for smooth loop */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-xl sm:text-2xl md:text-5xl font-display uppercase tracking-tight mx-4 md:mx-8 text-[#0a0a0a]">
                • NEW EVENT
              </span>
              <span className="text-xl sm:text-2xl md:text-5xl font-display uppercase tracking-tight mx-4 md:mx-8 text-[#ff6b35]">
                • FEB. 26
              </span>
              <span className="text-xl sm:text-2xl md:text-5xl font-display uppercase tracking-tight mx-4 md:mx-8 text-[#0a0a0a]">
                • BENIN CITY
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoldStatic;