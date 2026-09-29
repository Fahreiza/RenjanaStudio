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

interface JapandiLoveStoryQuoteProps {
  timeline: StoryItem[];
}

export default function JapandiLoveStoryQuote({ timeline }: JapandiLoveStoryQuoteProps) {
  return (
    <section className="relative w-full py-12 px-4 text-[#2D2F2E] z-10 font-sans">
      <div className="max-w-md mx-auto space-y-12">
        {/* ── QURANIC QUOTE (ZEN SPREAD) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 sm:p-8 shadow-sm text-center space-y-5"
        >
          <div className="relative w-44 h-12 mx-auto filter brightness-0 opacity-70">
            <Image
              src="/assets/images/bismillah-4-1-2-1.svg"
              alt="Bismillah"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-serif text-[#2D2F2E]/85 leading-relaxed italic">
              &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu
              dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
              di antaramu rasa kasih dan sayang.&rdquo;
            </p>
            <span className="inline-block text-[10px] font-mono text-[#637061] tracking-[0.25em] uppercase">
              — QS. AR-RUM: 21 —
            </span>
          </div>

          <div className="w-12 h-px bg-[#2D2F2E]/15 mx-auto" />

          <p className="text-[11px] text-[#2D2F2E]/60 font-serif italic">
            &ldquo;Ketenangan jiwa berlabuh saat dua hati saling merawat dalam ketulusan.&rdquo;
          </p>
        </motion.div>

        {/* ── LOVE STORY TIMELINE (ZEN MILESTONES) ── */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono block">
              KISAH KASIH // JOURNEY
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal tracking-wide text-[#2D2F2E]">
              Perjalanan Kami
            </h3>
            <p className="text-xs text-[#2D2F2E]/70 font-serif italic">
              Setiap langkah penuh makna menuju pelabuhan abadi.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-[#637061]/30 space-y-8 ml-3 sm:ml-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Organic indicator dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#F4F0EA] border-2 border-[#637061] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#637061]" />
                </div>

                <div className="rounded-2xl bg-white/80 border border-[#2D2F2E]/10 p-5 shadow-xs space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[#637061]">
                      FASE {item.year}
                    </span>
                    <span className="text-[10px] font-mono text-[#2D2F2E]/50">
                      {item.dateRange}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-medium text-[#2D2F2E] tracking-wide">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#2D2F2E]/80 font-serif leading-relaxed">
                    {item.description}
                  </p>

                  {item.imageUrl && (
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mt-3 border border-[#2D2F2E]/10">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
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
