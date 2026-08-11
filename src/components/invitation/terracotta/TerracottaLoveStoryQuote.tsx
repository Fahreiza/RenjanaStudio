'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Image from 'next/image';

interface LoveStoryItem {
  year: string;
  title: string;
  description: string;
}

interface TerracottaLoveStoryQuoteProps {
  timeline: LoveStoryItem[];
}

export default function TerracottaLoveStoryQuote({ timeline }: TerracottaLoveStoryQuoteProps) {
  return (
    <section className="py-16 mx-4 my-8 rounded-3xl relative overflow-hidden bg-[#F4EFEA]/90 backdrop-blur-md shadow-xl border border-[#C86B53]/30">

      <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-32">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-xl mx-auto"
        >
          <div className="w-12 h-12 mx-auto relative mb-8 flex items-center justify-center text-[#C86B53]">
            {/* SVG Boho Leaf Icon */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5c-3.11 0-6.22 1.5-8.3 4C6.38 11.83 5 15.11 5 18.5c2.4 0 4.88-.85 6.9-2.5 2.5-2.07 4.1-5.18 4.1-8.3V5z" />
            </svg>
          </div>
          
          <h3 
            className="text-4xl md:text-5xl text-[#5C3D2E] mb-6"
            style={{ fontFamily: 'var(--font-great-vibes)' }}
          >
            Ar-Rum: 21
          </h3>
          
          <p className="text-sm md:text-base text-[#C86B53] leading-relaxed font-sans italic relative px-6">
            <span className="text-4xl text-[#C86B53] absolute -top-4 left-0 opacity-40" style={{ fontFamily: 'var(--font-great-vibes)' }}>"</span>
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
            <span className="text-4xl text-[#C86B53] absolute -bottom-6 right-0 opacity-40" style={{ fontFamily: 'var(--font-great-vibes)' }}>"</span>
          </p>
        </motion.div>

        {/* Love Story Timeline */}
        <div className="relative">
          <div className="text-center space-y-4 mb-16 relative">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C86B53] font-medium block">
              Perjalanan Cinta
            </span>
            <h2 
              className="text-5xl md:text-6xl text-[#5C3D2E] mb-2"
              style={{ fontFamily: 'var(--font-great-vibes)' }}
            >
              Love Story
            </h2>
          </div>

          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C86B53] to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node - Diamond */}
                    <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F4EFEA] border-2 border-[#C86B53] rotate-45 z-10 shadow-[0_0_10px_rgba(166,142,104,0.3)]" />

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                      <div className="bg-[#F4EFEA] p-6 rounded-[40px] rounded-tl-sm border-2 border-[#C86B53]/20 shadow-lg relative group hover:-translate-y-1 transition-transform duration-500">
                        <span className="inline-block px-4 py-1.5 bg-[#C86B53]/10 text-[#829379] text-[9px] font-bold uppercase tracking-widest rounded-full mb-4 border border-[#C86B53]/20">
                          {item.year}
                        </span>
                        <h4 
                          className="text-3xl text-[#5C3D2E] mb-3"
                          style={{ fontFamily: 'var(--font-great-vibes)' }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#C86B53] leading-relaxed font-serif">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* End Heart - Diamond */}
            <div className="absolute left-[27px] md:left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#F4EFEA] border border-[#C86B53] rotate-45 flex items-center justify-center z-10">
              <Heart className="w-4 h-4 text-[#829379] -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
