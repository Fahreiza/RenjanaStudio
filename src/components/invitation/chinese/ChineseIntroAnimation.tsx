'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShuangXi, CornerDecor } from './ChineseDecor';

export default function ChineseIntroAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#8A151B] z-50 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none">
        <Image
          src="/assets/images/chinese_clouds_seamless.png"
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
          className="relative w-48 h-48 flex items-center justify-center mb-8 border border-[#D4AF37]/30"
        >
          {/* Corner Accents */}
          <CornerDecor position="tl" className="absolute -top-4 -left-4 w-8 h-8 text-[#D4AF37]" />
          <CornerDecor position="tr" className="absolute -top-4 -right-4 w-8 h-8 text-[#D4AF37]" />
          <CornerDecor position="bl" className="absolute -bottom-4 -left-4 w-8 h-8 text-[#D4AF37]" />
          <CornerDecor position="br" className="absolute -bottom-4 -right-4 w-8 h-8 text-[#D4AF37]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full text-center flex flex-col items-center justify-center leading-none"
          >
            <ShuangXi className="w-24 h-24 text-[#D4AF37]" />
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
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#FDFBF7] font-sans font-medium drop-shadow-sm">
            Membuka Undangan
          </p>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-60" />
        </motion.div>
      </div>
    </div>
  );
}
