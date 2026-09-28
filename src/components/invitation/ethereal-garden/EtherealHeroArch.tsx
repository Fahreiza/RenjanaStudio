'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface EtherealHeroArchProps {
  groomName: string;
  brideName: string;
  eventDate: string;
}

export default function EtherealHeroArch({
  groomName,
  brideName,
  eventDate,
}: EtherealHeroArchProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center py-12 px-4 text-center overflow-hidden select-none">
      {/* THE DOUBLE-LAYER ARCH FOCAL CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md my-4"
      >
        {/* Layer 1: Back Base Panel (Fine-art cotton paper with deckle edge feel & soft shadow #B8ADA0) */}
        <div className="relative w-full rounded-t-full rounded-b-[40px] bg-[#FAF7F2] p-5 sm:p-7 shadow-[0_30px_70px_-20px_rgba(184,173,160,0.6),_0_0_0_1px_rgba(255,255,255,0.9)_inset] border border-[#C7A76C]/30 flex flex-col items-center">
          
          {/* Top Natural Floral & Eucalyptus Arch Overlap */}
          <div className="relative w-full h-36 -mt-3 mb-1 overflow-hidden pointer-events-none">
            <Image
              src="/assets/images/ethereal/floral_arch.jpg"
              alt="Ethereal Floral Arch"
              fill
              className="object-cover object-center filter drop-shadow-[0_8px_16px_rgba(184,173,160,0.35)]"
              priority
            />
          </div>

          {/* Layer 2: Front Arch Frame (Champagne Gold Frame #C7A76C with Die-Cut Window Depth) */}
          <div className="relative w-full rounded-t-full rounded-b-[30px] border-2 border-[#C7A76C]/65 shadow-[0_10px_25px_rgba(184,173,160,0.2)_inset] p-6 sm:p-8 flex flex-col items-center justify-between min-h-[460px] bg-[#F6F0E6]/60 backdrop-blur-2xs">
            
            {/* Top Subtitle */}
            <div className="pt-2 space-y-2">
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#A7B09A] font-bold block">
                THE WEDDING OF
              </span>
            </div>

            {/* Center Focal Point: Couple Names (Deep Olive #3F493D + Champagne Gold Ampersand) */}
            <div className="my-auto py-4 space-y-2">
              <h2 className="font-serif-cormorant text-5xl sm:text-6xl font-normal text-[#3F493D] tracking-wider leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] uppercase">
                {groomName}
              </h2>
              <div className="flex items-center justify-center gap-3 py-1">
                <div className="w-10 h-[1px] bg-[#C7A76C]/50" />
                <span className="font-serif italic text-3xl sm:text-4xl text-[#C7A76C]">
                  &amp;
                </span>
                <div className="w-10 h-[1px] bg-[#C7A76C]/50" />
              </div>
              <h2 className="font-serif-cormorant text-5xl sm:text-6xl font-normal text-[#3F493D] tracking-wider leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] uppercase">
                {brideName}
              </h2>
            </div>

            {/* Bottom: Date & Botanical Venue */}
            <div className="w-full space-y-2.5 pt-4 border-t border-[#C7A76C]/25">
              <p className="font-serif-cormorant text-base sm:text-lg tracking-[0.3em] text-[#3F493D] font-medium uppercase">
                12 · 12 · 2026
              </p>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#A7B09A] font-sans font-semibold">
                THE BOTANICAL CONSERVATORY • JAKARTA
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Editorial Studio Quote */}
      <p className="text-xs text-[#3F493D]/65 font-serif italic max-w-sm z-10 pt-2">
        &ldquo;Two souls, one beautiful journey under the grace of God.&rdquo;
      </p>
    </section>
  );
}
