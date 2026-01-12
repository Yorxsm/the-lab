"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does eXhibot do?",
    answer: "We're Africa's robotics innovation studio. We connect talented engineers and creators with real-world challenges—delivering practical robotics, IoT, and automation solutions for enterprise and government clients. Events are the pipeline; products are the business."
  },
  {
    question: "Who are your clients?",
    answer: "Our primary customers are enterprises and government agencies in Nigeria, Kenya, and Ghana seeking custom hardware solutions—utilities, manufacturers, logistics, agriculture, health sectors, and smart city initiatives."
  },
  {
    question: "How does your business model work?",
    answer: "We operate a 'talent-as-a-service' model with per-project revenue. Companies & governments pay per solution through custom R&D contracts. We also generate IP licensing royalties and equity in successful products. Future: exhibot.ng as a marketplace for challenges + solutions."
  },
  {
    question: "What solutions do you deliver?",
    answer: "NFC bracelet systems (access, identity, payments), smart infrastructure prototypes, automation and monitoring devices, custom robotics MVPs, and patent-ready IP. All built specifically for African contexts."
  },
  {
    question: "How is eXhibot different from other accelerators?",
    answer: "Unlike software-focused accelerators or student-only robotics contests, we're engineered for practical deployment. BattleBots = entertainment only. FIRST Robotics = education only. eXhibot = Entertainment + Innovation + IP. We pitch products, not papers."
  },
  {
    question: "How can I partner with eXhibot?",
    answer: "We welcome partnerships from enterprises needing solutions, governments with digital transformation goals, universities contributing talent, and investors backing Africa's hardware revolution. Reach out at joel@exhibot.ng."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b35] mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-[#0a0a0a] mb-4">
            Questions? <span className="text-[#ff6b35]">Answered.</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto">
            Everything you need to know about eXhibot and how to get involved.
          </p>
        </motion.div>

        {/* Accordions */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${openIndex === index
                ? 'bg-white border-[#0a0a0a] shadow-lg'
                : 'bg-white border-[#e2e8f0] hover:border-[#0a0a0a]/30'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="font-display text-[#0a0a0a] text-lg pr-4">
                  {faq.question}
                </span>
                <span className={`text-2xl text-[#ff6b35] transition-all duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-45' : ''
                  }`}>
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-[#64748b] text-base leading-relaxed border-t border-[#e2e8f0] pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[#64748b] text-sm mb-4">Still have questions?</p>
          <a
            href="mailto:joel@exhibot.ng"
            className="inline-flex items-center gap-2 text-[#ff6b35] hover:text-[#e55a2a] transition-colors font-medium"
          >
            Contact us at joel@exhibot.ng <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;