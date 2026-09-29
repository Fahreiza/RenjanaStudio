'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { LoveStoryItem } from '@/types/invitation';

interface JuncaLoveStoryQuoteProps {
  stories?: LoveStoryItem[];
}

const DEFAULT_STORIES: LoveStoryItem[] = [
  {
    year: '2021',
    title: 'Pertemuan Pertama // The Spark',
    description:
      'Dipertemukan dalam sebuah seminar kreatif di Bandung. Percakapan singkat mengenai visi dan desain menjadi awal mula jalinan ketertarikan yang mendalam.',
    imageUrl: '/assets/images/gallery-1.webp',
  },
  {
    year: '2023',
    title: 'Komitmen Bersama // Deep Connection',
    description:
      'Setelah saling mengenal kepribadian, nilai-nilai hidup, dan impian masa depan, kami sepakat untuk melangkah ke jenjang yang lebih serius dengan restu kedua keluarga.',
    imageUrl: '/assets/images/gallery-2.webp',
  },
  {
    year: '2025',
    title: 'Hari Lamaran // The Vow',
    description:
      'Di hadapan kedua orang tua tercinta dan sanak keluarga, ikrar lamaran resmi diucapkan, menjadi tonggak sakral menuju ikatan pernikahan yang suci.',
    imageUrl: '/assets/images/gallery-3.webp',
  },
];

/**
 * Editorial Love Story & Sacred Quote Component
 * High-contrast monochrome typography with Vermilion Red accents and architectural timeline.
 */
export default function JuncaLoveStoryQuote({
  stories = DEFAULT_STORIES,
}: JuncaLoveStoryQuoteProps) {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-[#080808] text-[#FBFBFB] select-none overflow-hidden">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-12">
        {/* ── PART 1: SACRED QURANIC QUOTE (QS. AR-RUM: 21) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#121212] border border-white/15 rounded-3xl p-8 sm:p-14 text-center mb-24 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#ED3327]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Bismillah SVG */}
          <div className="relative w-48 h-12 mx-auto mb-6 filter invert opacity-80">
            <Image
              src="/assets/images/bismillah-4-1-2-1.svg"
              alt="Bismillah"
              fill
              className="object-contain"
            />
          </div>

          <p className="font-sans text-base sm:text-xl font-normal leading-relaxed text-neutral-200 max-w-3xl mx-auto italic mb-6">
            &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
          </p>

          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ED3327] font-bold">
            — QS. AR-RUM: 21 —
          </span>
        </motion.div>

        {/* ── PART 2: LOVE STORY TIMELINE ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ED3327] font-semibold block">
              03 // CHRONOLOGY &bull; MILESTONES
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
              Jejak Kisah Kasih
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm tracking-wider uppercase leading-relaxed">
            Perjalanan dua hati yang saling menemukan, bertumbuh dalam cinta, dan bermuara dalam ikrar suci.
          </p>
        </div>

        {/* Timeline Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group bg-[#121212] border border-white/15 hover:border-[#ED3327]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Year Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xl sm:text-2xl font-black text-[#ED3327]">
                    {item.year}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    MILESTONE 0{idx + 1}
                  </span>
                </div>

                {/* Story Image */}
                {item.imageUrl && (
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Title & Narrative */}
                <h3 className="font-sans font-bold text-xl text-white tracking-tight pt-2">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-neutral-500 font-mono text-[10px] uppercase tracking-widest">
                <span>VERIFIED ARCHIVE</span>
                <Sparkles className="w-3.5 h-3.5 text-[#ED3327]" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
