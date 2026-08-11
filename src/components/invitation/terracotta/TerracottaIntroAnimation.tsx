'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TerracottaIntroAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F4EFEA] z-50 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
        <Image
          src="/assets/images/BAHAN-TEMA-1-1-2.webp"
          alt="Texture Latar"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center">
        {/* Animated Vintage Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-48 h-48 flex items-center justify-center mb-8"
        >
          {/* Ornate border - double diamond shape */}
          <div className="absolute inset-0 border-[2px] border-[#C86B53] rotate-45 rounded-xl opacity-80" />
          <div className="absolute inset-2 border border-[#C86B53] rotate-45 rounded-xl opacity-40" />

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full text-center flex flex-col items-center justify-center leading-none"
          >
            <span 
              className="text-5xl text-[#5C3D2E] mb-1" 
              style={{ fontFamily: 'var(--font-great-vibes)' }}
            >
              F
            </span>
            <span className="font-sans text-2xl text-[#9c825a] my-1">&amp;</span>
            <span 
              className="text-5xl text-[#5C3D2E] mt-1" 
              style={{ fontFamily: 'var(--font-great-vibes)' }}
            >
              A
            </span>
          </motion.div>
        </motion.div>

        {/* Text Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#C86B53] font-serif font-medium drop-shadow-sm">
            Membuka Undangan
          </p>
          <div className="w-16 h-[1px] bg-[#C86B53] mx-auto opacity-60" />
        </motion.div>
      </div>
    </div>
  );
}
