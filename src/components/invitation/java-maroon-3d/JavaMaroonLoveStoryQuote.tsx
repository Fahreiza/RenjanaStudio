'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { GununganWayangSvg, JavaneseDivider, AksaraJawaBadge } from './JavaMaroonOrnaments';

import JavaMaroon3DCard from './JavaMaroon3DCard';
import { GebyokCrownArch3D } from './JavaMaroonOrnaments';

interface StoryItem {
  year: string;
  title: string;
  dateRange?: string;
  description: string;
  imageUrl?: string;
}

interface JavaMaroonLoveStoryQuoteProps {
  timeline: StoryItem[];
}

export default function JavaMaroonLoveStoryQuote({ timeline }: JavaMaroonLoveStoryQuoteProps) {
  return (
    <section className="relative w-full py-10 px-4 text-[#FFF2A3] z-10">
      <div className="max-w-md mx-auto space-y-10">
        {/* ── QURANIC QUOTE & JAVANESE PITUTUR LUHUR (3D CARD) ── */}
        <JavaMaroon3DCard maxTilt={10} className="p-6 sm:p-8 text-center space-y-4">
          {/* Gebyok 3D Crown */}
          <div style={{ transform: 'translateZ(30px)' }} className="mb-1">
            <GebyokCrownArch3D className="w-full h-8 mx-auto" />
          </div>

          {/* Top Bismillah SVG */}
          <div
            style={{ transform: 'translateZ(35px)' }}
            className="relative w-44 h-12 mx-auto filter drop-shadow-[0_2px_8px_rgba(255,242,163,0.3)] opacity-95"
          >
            <Image
              src="/assets/images/bismillah-4-1-2-1.svg"
              alt="Bismillah"
              fill
              className="object-contain"
            />
          </div>

          <p
            style={{ transform: 'translateZ(25px)' }}
            className="text-xs sm:text-sm font-serif text-[#FFE29F]/95 leading-relaxed italic"
          >
            &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu
            dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
            di antaramu rasa kasih dan sayang.&rdquo;
          </p>

          <span
            style={{ transform: 'translateZ(30px)' }}
            className="inline-block text-xs font-serif font-bold text-[#FFF2A3] tracking-widest uppercase drop-shadow"
          >
            — QS. Ar-Rum: 21 —
          </span>

          <JavaneseDivider className="my-2" />

          {/* Javanese Philosophical Pitutur Luhur */}
          <div style={{ transform: 'translateZ(35px)' }} className="pt-2 space-y-2 text-center">
            <AksaraJawaBadge textJawa="ꦩꦼꦩꦪꦸꦲꦪꦸꦤꦶꦁꦧꦮꦤ" latin="Memayu Hayuning Bawana" />
            <p className="text-sm font-serif font-bold text-[#FFF2A3] italic tracking-wide mt-2 drop-shadow">
              &ldquo;Witing tresna jalaran saka kulina, madhep manteb bebrayan ageng, guyub rukun saklawase.&rdquo;
            </p>
            <p className="text-[11px] text-[#FFE29F]/85 font-serif leading-relaxed max-w-sm mx-auto">
              Mbangun bale wisma kanthi linambaran sih katresnan, tetulung marang sapadha, sarta tansah eling marang Gusti Ingkang Maha Kawasa.
            </p>
          </div>
        </JavaMaroon3DCard>

        {/* ── LOVE STORY TIMELINE ── */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <AksaraJawaBadge textJawa="ꦭꦭꦏꦺꦴꦤ꧀ꦏꦠꦿꦺꦱ꧀ꦤꦤ꧀" latin="Lalakon Katresnan" />
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FFE29F] tracking-wide">
              Lalakon Katresnan (Kisah Kasih)
            </h3>
            <p className="text-xs text-[#E2B755]/80 font-serif italic">
              Lelampahan pitepangan tumeka ing dinten dhauping temanten
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#D4AF37]/40 space-y-8 ml-3 sm:ml-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot with Gunungan Icon */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 rounded-full bg-[#1A0205] border-2 border-[#D4AF37] flex items-center justify-center shadow-md text-[#E2B755]">
                  <Heart className="w-3.5 h-3.5 fill-current text-[#E2B755]" />
                </div>

                <div className="rounded-2xl bg-gradient-to-b from-[#2E050B] via-[#210307] to-[#150103] border-2 border-[#D4AF37]/50 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,242,163,0.3)] space-y-2 group-hover:border-[#FFF2A3]/70 transition-all">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <span className="text-[10px] uppercase tracking-wider font-serif px-2.5 py-0.5 rounded-full bg-[#1A0205] border border-[#FFE29F]/50 text-[#FFF2A3] shadow-sm">
                      Fase {item.year}
                    </span>
                    <span className="text-[11px] text-[#FFE29F]/80 font-serif italic">
                      {item.dateRange}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-[#FFF2A3] tracking-wide drop-shadow">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#FFE29F]/90 font-serif leading-relaxed">
                    {item.description}
                  </p>

                  {item.imageUrl && (
                    <div className="relative w-full h-36 rounded-xl overflow-hidden mt-3 border-2 border-[#D4AF37]/50 shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
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
