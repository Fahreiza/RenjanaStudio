'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles, BookHeart } from 'lucide-react';
import { LoveStoryItem } from '@/types/invitation';
import ThreeDCardTilt from './ThreeDCardTilt';

interface ThreeDLoveStoryQuoteProps {
  stories: LoveStoryItem[];
}

export default function ThreeDLoveStoryQuote({ stories }: ThreeDLoveStoryQuoteProps) {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto space-y-16 select-none relative z-10">
      {/* 3D Quranic Quote Card */}
      <ThreeDCardTilt maxTilt={10} className="w-full">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-[#D4AF37]/40 p-8 sm:p-12 text-center shadow-[0_20px_45px_-15px_rgba(212,175,55,0.2)] space-y-6 relative overflow-hidden">
          <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#FAF7F2] to-[#F4E3E3] border border-[#D4AF37]/50 flex items-center justify-center shadow-md">
            <BookHeart className="w-7 h-7 text-[#B76E79]" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
              KUTIPAN AYAT SUCI
            </span>
            <h3 className="font-serif-cormorant text-2xl sm:text-3xl text-[#2D3748] italic font-semibold leading-relaxed">
              &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
            </h3>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#B76E79] font-bold pt-2">
              — QS. Ar-Rum: 21 —
            </p>
          </div>
        </div>
      </ThreeDCardTilt>

      {/* Love Story Timeline */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-[0.3em]">
            <Heart className="w-3 h-3 text-[#B76E79]" />
            Perjalanan Dua Hati
          </span>
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#2D3748] font-bold tracking-tight">
            Kisah Cinta Kami
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* 3D Timeline Steps */}
        <div className="space-y-8 relative">
          {/* Vertical 3D Center Line on larger screens */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#B76E79] to-[#D4AF37] -translate-x-1/2" />

          {stories.map((story, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Story Content Card */}
                <div className="w-full md:w-1/2">
                  <ThreeDCardTilt maxTilt={12}>
                    <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-[#D4AF37]/40 p-6 sm:p-7 shadow-[0_15px_30px_-10px_rgba(212,175,55,0.2)] space-y-3">
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B98929] text-[#241303] text-[10px] font-black uppercase tracking-wider">
                          BABAK 0{story.year}
                        </span>
                        <span className="text-xs font-semibold text-[#B76E79]">
                          {story.dateRange}
                        </span>
                      </div>

                      <h4 className="font-serif-cormorant text-2xl font-bold text-[#2D3748]">
                        {story.title}
                      </h4>

                      <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                        {story.description}
                      </p>

                      {story.imageUrl && (
                        <div className="relative w-full h-44 rounded-2xl overflow-hidden mt-3 shadow-inner">
                          <Image
                            src={story.imageUrl}
                            alt={story.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </ThreeDCardTilt>
                </div>

                {/* Center Node / Milestone Pin */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B76E79] p-0.5 shadow-lg flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>

                {/* Spacer on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
