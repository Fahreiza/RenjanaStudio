'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { LoveStoryItem } from '@/types/invitation';

interface EtherealLoveStoryQuoteProps {
  stories: LoveStoryItem[];
}

export default function EtherealLoveStoryQuote({ stories }: EtherealLoveStoryQuoteProps) {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto space-y-16 select-none relative z-10">
      {/* Editorial Quranic Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[36px] bg-[#FAF7F2] border border-[#C7A76C]/35 p-8 sm:p-12 text-center shadow-[0_20px_45px_-15px_rgba(184,173,160,0.4)] space-y-6 relative overflow-hidden"
      >
        <span className="text-xl">✿</span>

        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#A7B09A] font-bold block">
            SACRED WORDS OF LOVE
          </span>
          <h3 className="font-serif-cormorant text-2xl sm:text-3xl text-[#3F493D] italic font-normal leading-relaxed">
            &ldquo;Two souls, one beautiful journey. Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram di sampingnya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.&rdquo;
          </h3>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C7A76C] font-bold pt-2">
            — AR-RUM : 21 —
          </p>
        </div>
      </motion.div>

      {/* Love Story Timeline */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#A7B09A]/15 text-[#3F493D] border border-[#A7B09A]/30 text-[9px] uppercase font-bold tracking-[0.35em]">
            THE CHAPTERS
          </span>
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#3F493D] font-normal tracking-wide">
            Kisah Perjalanan Kami
          </h2>
          <div className="w-12 h-[1px] bg-[#C7A76C] mx-auto mt-2" />
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative">
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-[#C7A76C]/40 -translate-x-1/2" />

          {stories.map((story, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Story Card */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="rounded-t-3xl rounded-b-2xl bg-[#FAF7F2] border border-[#C7A76C]/30 p-6 sm:p-7 shadow-[0_15px_30px_-10px_rgba(184,173,160,0.35)] space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-[#C7A76C]/20 pb-3">
                      <span className="px-3 py-1 rounded-full bg-[#F6F0E6] text-[#3F493D] text-[9px] font-bold uppercase tracking-wider border border-[#C7A76C]/30">
                        CHAPTER 0{story.year}
                      </span>
                      <span className="text-xs font-semibold text-[#A7B09A]">
                        {story.dateRange}
                      </span>
                    </div>

                    <h4 className="font-serif-cormorant text-2xl font-normal text-[#3F493D]">
                      {story.title}
                    </h4>

                    <p className="text-xs text-[#3F493D]/70 leading-relaxed font-sans">
                      {story.description}
                    </p>

                    {story.imageUrl && (
                      <div className="relative w-full h-44 rounded-xl overflow-hidden mt-3 shadow-inner border border-[#C7A76C]/20">
                        <Image
                          src={story.imageUrl}
                          alt={story.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Milestone Node */}
                <div className="relative z-10 w-9 h-9 rounded-full bg-[#FAF7F2] border-2 border-[#C7A76C] p-0.5 shadow flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3F493D]" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
