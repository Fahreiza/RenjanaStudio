'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CornerDecor, ShuangXi } from './ChineseDecor';

interface LoveStoryItem {
  year: string;
  title: string;
  description: string;
}

interface ChineseLoveStoryQuoteProps {
  timeline: LoveStoryItem[];
}

export default function ChineseLoveStoryQuote({ timeline }: ChineseLoveStoryQuoteProps) {
  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-6">

      <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-32">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-xl mx-auto"
        >
          <div className="w-16 h-16 mx-auto relative mb-6">
            <ShuangXi className="text-[#FDFBF7]" />
          </div>
          
          <h3 className="text-2xl md:text-3xl text-[#FDFBF7] mb-8 font-serif uppercase tracking-widest font-bold border-b border-[#D4AF37]/30 pb-4">
            Ar-Rum: 21
          </h3>
          
          <p className="text-sm md:text-base text-[#FDFBF7] leading-relaxed font-serif italic relative px-6 py-6 border-l-2 border-r-2 border-[#D4AF37]/30">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
        </motion.div>

        {/* Love Story Timeline */}
        <div className="relative">
          <div className="text-center space-y-4 mb-16 relative">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7] font-medium block">
              Perjalanan Cinta
            </span>
            <h2 className="text-3xl md:text-4xl text-[#D4AF37] mb-2 font-serif uppercase tracking-widest font-bold">
              Kisah Kasih
            </h2>
          </div>

          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />

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
                    <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4A0A0E]/80 backdrop-blur-sm border-2 border-[#D4AF37]/30 rotate-45 z-10 shadow-[0_0_10px_rgba(166,142,104,0.3)]" />

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                      <div className="bg-[#4A0A0E]/80 backdrop-blur-sm p-6 rounded-xl border-2 border-[#D4AF37]/30 shadow-lg relative group hover:-translate-y-1 transition-transform duration-500">
                        {/* Decorative corner inside card */}
                        <div className={`absolute top-0 w-8 h-8 opacity-30 ${isEven ? 'right-0' : 'left-0'}`}>
                           <ShuangXi className="w-8 h-8 text-[#FDFBF7]" />
                        </div>
                        <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#FDFBF7] text-[9px] font-bold uppercase tracking-widest rounded-full mb-4 border border-[#D4AF37]/30">
                          {item.year}
                        </span>
                        <h4 className="text-xl md:text-2xl text-[#FDFBF7] mb-3 font-serif uppercase tracking-widest font-bold">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#FDFBF7] leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* End Heart - Diamond */}
            <div className="absolute left-[27px] md:left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#4A0A0E]/80 backdrop-blur-sm border border-[#D4AF37]/30 rotate-45 flex items-center justify-center z-10">
              <Heart className="w-4 h-4 text-[#FDFBF7] -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
