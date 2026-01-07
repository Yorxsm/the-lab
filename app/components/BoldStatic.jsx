"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BoldStatic = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#fafafa] border-y border-[#e2e8f0] py-4 md:py-6 relative z-10">
      <div className="marquee-container">
        <div ref={marqueeRef} className="marquee-track flex whitespace-nowrap">
          {/* Content repeated for smooth loop */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-3xl md:text-5xl font-display uppercase tracking-tight mx-4 md:mx-8 text-[#0a0a0a]">
                NEW EVENTS
              </span>
              <span className="text-3xl md:text-5xl font-display uppercase tracking-tight mx-4 md:mx-8 text-[#ff6b35]">
                •
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoldStatic;