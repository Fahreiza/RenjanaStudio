'use client';

import { motion } from 'framer-motion';
import { Pin, Sparkles, Heart } from 'lucide-react';

interface StoryTimeline {
  year: string;
  title: string;
  description: string;
}

interface PinterestLoveStoryQuoteProps {
  timeline: StoryTimeline[];
}

export default function PinterestLoveStoryQuote({ timeline }: PinterestLoveStoryQuoteProps) {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b border-[#E9E9E9] pb-3">
        <Pin className="w-5 h-5 text-[#E60023] fill-current" />
        <h2 className="text-base font-extrabold text-[#111111] tracking-wide uppercase">
          Kutipan Suci &amp; Idea Pin Love Story
        </h2>
      </div>

      {/* Quran Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-[#E9E9E9] rounded-[32px] p-6 space-y-3 shadow-md hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#E60023] uppercase tracking-wider flex items-center gap-1">
            <Pin className="w-3.5 h-3.5 fill-current" />
            HOLY SCRIPTURE PIN
          </span>
          <span className="text-[10px] text-[#5F5F5F] font-mono font-bold">QS. Ar-Rum: 21</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-[#E9E9E9] space-y-3 text-center">
          <p className="text-sm font-serif italic text-[#111111] leading-relaxed">
            &ldquo;Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
          </p>
          <p className="text-xs font-black text-[#E60023] uppercase tracking-wider">
            (QS. Ar-Rum: 21)
          </p>
        </div>
      </motion.div>

      {/* Idea Pins Story Grid */}
      <div className="space-y-4">
        <h3 className="text-xs font-extrabold text-[#5F5F5F] uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#E60023]" />
          <span>Timeline Perjalanan Cinta (Idea Pins)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-[#E9E9E9] rounded-[32px] p-5 space-y-3 shadow-md hover:shadow-xl transition-shadow relative flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#E60023]">{item.year}</span>
                  <span className="text-[10px] bg-[#E60023]/10 text-[#E60023] px-2.5 py-0.5 rounded-full font-bold">
                    Idea Pin #{idx + 1}
                  </span>
                </div>
                <h4 className="text-sm font-black text-[#111111]">{item.title}</h4>
                <p className="text-xs text-[#5F5F5F] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E9E9E9] flex items-center justify-between text-[10px] text-[#5F5F5F] font-bold">
                <span className="flex items-center gap-1 text-[#E60023]">
                  <Heart className="w-3 h-3 fill-current" /> {120 + idx * 45} Saves
                </span>
                <span>Pinterest Story</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
