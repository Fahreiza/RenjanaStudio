'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const BirdIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Simple bird silhouette */}
    <path d="M 10 50 Q 25 35 50 45 Q 75 35 90 50 Q 75 42 50 55 Q 25 42 10 50 Z" />
  </svg>
);

interface MinimalistHeroProps {
  groomName: string;
  brideName: string;
  weddingDate: string;
}

export default function MinimalistHero({
  groomName,
  brideName,
  weddingDate,
}: MinimalistHeroProps) {
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
            <BirdIcon className={`${bird.size} text-[#4A4036]/40`} />
          </motion.div>
        ))}
      </div>

      {/* 2. Typography Content (Positioned in the upper middle area) */}
      <div className="relative z-20 flex flex-col items-center text-center mt-[-10vh] max-w-[80%]">
        
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl text-[#4A4036] mb-4 sm:mb-6"
          style={{ fontFamily: 'var(--font-great-vibes)' }}
        >
          The Wedding of
        </h2>

        <h1 className="text-3xl sm:text-5xl md:text-6xl text-[#857053] font-serif uppercase tracking-[0.2em] mb-2 sm:mb-4 drop-shadow-sm">
          {groomName.split(' ')[0]}
        </h1>
        
        <span 
          className="text-2xl sm:text-3xl md:text-4xl text-[#4A4036] mb-2 sm:mb-4"
          style={{ fontFamily: 'var(--font-great-vibes)' }}
        >
          &amp;
        </span>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-[#857053] font-serif uppercase tracking-[0.2em] mb-8 sm:mb-12 drop-shadow-sm">
          {brideName.split(' ')[0]}
        </h1>

        <div className="space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm md:text-base font-serif tracking-[0.3em] text-[#4A4036] uppercase font-semibold">
            Resepsi
          </p>
          <p className="text-xs sm:text-sm md:text-base font-serif tracking-[0.2em] text-[#4A4036] font-bold">
            {weddingDate}
          </p>
        </div>
      </div>
    </section>
  );
}
