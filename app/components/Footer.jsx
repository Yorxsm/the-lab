"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#e2e8f0] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 lg:pr-12">
            <a href="/" className="inline-block mb-6">
              <img src='/logoSmall.png' alt="eXhibot" className="h-6 md:h-8 w-auto brightness-0" />
            </a>
            <p className="text-[#64748b] text-sm md:text-base mb-6 leading-relaxed">
              Africa's hardware innovation engine. We turn engineering talent into deployed solutions for enterprise and government.
            </p>
            <p className="text-[#94a3b8] text-xs font-mono">
              Based in Lagos, Nigeria.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#0a0a0a] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-[#64748b] hover:text-[#ff6b35] text-sm md:text-base">About</a></li>
              <li><a href="#ecosystem" className="text-[#64748b] hover:text-[#ff6b35] text-sm md:text-base">Operations</a></li>
              <li><a href="/faq" className="text-[#64748b] hover:text-[#ff6b35] text-sm md:text-base">FAQ</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#0a0a0a] mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#64748b] hover:text-[#ff6b35] text-sm md:text-base">Privacy</a></li>
              <li><a href="#" className="text-[#64748b] hover:text-[#ff6b35] text-sm md:text-base">Terms</a></li>
            </ul>
          </div>

          {/* Contact - Spans full width on mobile if needed, or just 2 cols */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#0a0a0a] mb-6">Contact</h4>
            <p className="text-[#64748b] text-sm md:text-base mb-2">General Inquiries</p>
            <a href="mailto:joel@exhibot.ng" className="text-[#0a0a0a] font-medium hover:text-[#ff6b35] transition-colors text-sm md:text-base block mb-6 break-words">
              joel@exhibot.ng
            </a>

            <div className="flex gap-4">
              {/* Social Icons could go here */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e2e8f0] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} eXhibot NG. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-[#64748b] text-xs font-mono uppercase tracking-widest">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;