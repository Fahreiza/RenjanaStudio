'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface StoryItem {
  year: string;
  title: string;
  dateRange?: string;
  description: string;
  imageUrl?: string;
}

interface VogueLoveStoryQuoteProps {
  timeline: StoryItem[];
}

export default function VogueLoveStoryQuote({ timeline }: VogueLoveStoryQuoteProps) {
  return (
    <section className="relative w-full py-12 px-4 text-[#FAFAF8] z-10 font-sans">
      <div className="max-w-md mx-auto space-y-12">
        {/* ── QURANIC QUOTE (EDITORIAL SPREAD) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-center space-y-5"
        >
          <div className="relative w-44 h-12 mx-auto filter brightness-0 invert opacity-80">
            <Image
              src="/assets/images/bismillah-4-1-2-1.svg"
              alt="Bismillah"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-serif text-[#FAFAF8]/90 leading-relaxed italic">
              &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu
              dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
              di antaramu rasa kasih dan sayang.&rdquo;
            </p>
            <span className="inline-block text-[10px] font-mono text-[#B39871] tracking-[0.3em] uppercase">
              — QS. AR-RUM: 21 —
            </span>
          </div>

          <div className="w-16 h-px bg-white/10 mx-auto" />

          <p className="text-[11px] text-[#FAFAF8]/60 font-mono tracking-wider uppercase">
            A COVENANT OF LOVE &bull; ESTABLISHED 2026
          </p>
        </motion.div>

        {/* ── LOVE STORY TIMELINE (EDITORIAL CHAPTERS) ── */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#B39871] font-mono block">
              THE CHRONICLE // CHAPTERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-[#FAFAF8] uppercase">
              Our Journey
            </h3>
            <p className="text-xs text-[#FAFAF8]/70 font-sans italic">
              Catatan perjalanan kisah kasih kami dari awal hingga selamanya.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-white/20 space-y-8 ml-3 sm:ml-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Minimalist dot indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0E0E0E] border-2 border-[#B39871] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B39871]" />
                </div>

                <div className="rounded-2xl bg-[#141414] border border-white/10 p-5 shadow-lg space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#B39871]">
                      CHAPTER {index + 1} &bull; {item.year}
                    </span>
                    <span className="text-[10px] font-mono text-[#FAFAF8]/50">
                      {item.dateRange}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-[#FAFAF8] tracking-wide">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#FAFAF8]/80 font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {item.imageUrl && (
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mt-3 border border-white/10">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
