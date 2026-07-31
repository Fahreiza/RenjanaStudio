'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDateISO: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDateISO }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDateISO) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDateISO]);

  if (!isMounted) return null;

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#EEF2ED]/80 backdrop-blur-md rounded-3xl p-8 border border-[#8A9A86]/30 shadow-xl space-y-6"
      >
        <div className="flex items-center justify-center gap-2 text-[#586955]">
          <Clock className="w-5 h-5 text-[#B76E79]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold">
            Menghitung Hari
          </span>
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          <div className="bg-white/90 rounded-2xl p-3 md:p-4 shadow-sm border border-[#8A9A86]/20">
            <span className="block font-serif-cormorant text-3xl md:text-5xl font-bold text-[#B76E79]">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs uppercase font-sans-jakarta text-zinc-500 font-semibold tracking-wider">
              Hari
            </span>
          </div>

          <div className="bg-white/90 rounded-2xl p-3 md:p-4 shadow-sm border border-[#8A9A86]/20">
            <span className="block font-serif-cormorant text-3xl md:text-5xl font-bold text-[#B76E79]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs uppercase font-sans-jakarta text-zinc-500 font-semibold tracking-wider">
              Jam
            </span>
          </div>

          <div className="bg-white/90 rounded-2xl p-3 md:p-4 shadow-sm border border-[#8A9A86]/20">
            <span className="block font-serif-cormorant text-3xl md:text-5xl font-bold text-[#B76E79]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs uppercase font-sans-jakarta text-zinc-500 font-semibold tracking-wider">
              Menit
            </span>
          </div>

          <div className="bg-white/90 rounded-2xl p-3 md:p-4 shadow-sm border border-[#8A9A86]/20">
            <span className="block font-serif-cormorant text-3xl md:text-5xl font-bold text-[#B76E79]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs uppercase font-sans-jakarta text-zinc-500 font-semibold tracking-wider">
              Detik
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
