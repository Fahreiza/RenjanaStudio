'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CornerDecor, ShuangXi } from './ChineseDecor';

const BirdIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Simple bird silhouette */}
    <path d="M 10 50 Q 25 35 50 45 Q 75 35 90 50 Q 75 42 50 55 Q 25 42 10 50 Z" />
  </svg>
);

interface ChineseHeroProps {
  groomName: string;
  brideName: string;
  weddingDate: string;
}

export default function ChineseHero({
  groomName,
  brideName,
  weddingDate,
}: ChineseHeroProps) {
  const birds = [
    { id: 1, top: '25%', size: 'w-4 h-4', duration: 15, delay: 0 },
    { id: 2, top: '15%', size: 'w-3 h-3', duration: 20, delay: 5 },
    { id: 3, top: '35%', size: 'w-5 h-5', duration: 12, delay: 2 },
    { id: 4, top: '20%', size: 'w-2 h-2', duration: 25, delay: 10 },
    { id: 5, top: '30%', size: 'w-3 h-3', duration: 18, delay: 7 },
    { id: 6, top: '10%', size: 'w-4 h-4', duration: 22, delay: 12 },
    { id: 7, top: '40%', size: 'w-2 h-2', duration: 28, delay: 4 },
    { id: 8, top: '28%', size: 'w-5 h-5', duration: 14, delay: 15 },
  ];

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-transparent flex flex-col items-center justify-center">

      {/* Animated Flying Birds */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {birds.map((bird) => (
          <motion.div
            key={bird.id}
            className="absolute left-[-10%]"
            style={{ top: bird.top }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ 
              x: ['0vw', '110vw'], 
              y: [0, -30, 20, -10],
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{ 
              duration: bird.duration, 
              repeat: Infinity, 
              delay: bird.delay,
              ease: "linear"
            }}
          >
            <BirdIcon className={`${bird.size} text-[#FDFBF7]/20`} />
          </motion.div>
        ))}
      </div>

      {/* Corner Decorations */}
      <div className="absolute inset-6 sm:inset-8 pointer-events-none z-10 border border-[#D4AF37]/30">
        <CornerDecor position="tl" className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" />
        <CornerDecor position="tr" className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" />
        <CornerDecor position="bl" className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" />
        <CornerDecor position="br" className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" />
      </div>

      {/* Typography Content */}
      <div className="relative z-20 flex flex-col items-center text-center mt-[-5vh] max-w-[90%] px-4">
        
        <ShuangXi className="w-20 h-20 sm:w-28 sm:h-28 text-[#FDFBF7] opacity-90 mb-8" />
        
        <h2 className="text-xs sm:text-sm text-[#FDFBF7] font-sans font-bold uppercase tracking-[0.4em] mb-12 border-b border-[#D4AF37]/30 pb-4">
          The Wedding Celebration
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 w-full">
          {/* Groom Horizontal */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl text-[#FDFBF7] font-serif uppercase tracking-widest">
            {groomName.split(' ')[0]}
          </h1>
          
          <div className="flex items-center gap-4">
             <div className="h-[1px] w-8 sm:w-16 bg-[#8A151B]/30 hidden md:block" />
             <span className="text-[#D4AF37] font-serif text-3xl italic">&amp;</span>
             <div className="h-[1px] w-8 sm:w-16 bg-[#8A151B]/30 hidden md:block" />
          </div>
          
          {/* Bride Horizontal */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl text-[#FDFBF7] font-serif uppercase tracking-widest">
            {brideName.split(' ')[0]}
          </h1>
        </div>

        <div className="space-y-2 sm:space-y-3 bg-[#4A0A0E]/80 backdrop-blur-sm px-10 py-6 border border-[#D4AF37]/30 rounded-sm">
          <p className="text-[10px] sm:text-xs md:text-sm font-sans tracking-[0.3em] text-[#FDFBF7]/70 uppercase font-bold">
            Resepsi
          </p>
          <p className="text-sm sm:text-base md:text-lg font-serif tracking-[0.2em] text-[#FDFBF7] font-bold">
            {weddingDate}
          </p>
        </div>
      </div>
    </section>
  );
}
