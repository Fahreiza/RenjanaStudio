'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

interface ChineseCountdownProps {
  targetDate: string; // ISO date string
}

export default function ChineseCountdown({ targetDate }: ChineseCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
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
  }, [targetDate]);

  const handleExportCalendar = (type: 'google' | 'apple' | 'outlook') => {
    // In a real implementation, generate the appropriate calendar URL
    alert(`Export to ${type} calendar feature coming soon!`);
  };

  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-6">
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          {/* Countdown Boxes */}
          <div className="flex justify-center items-center gap-3 md:gap-5 mb-10">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#4A0A0E]/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-[#D4AF37]/30 flex items-center justify-center mb-3 overflow-hidden">
                  <div className="absolute inset-1 border border-[#D4AF37]/30 rounded-lg" />
                  <span className="font-serif text-3xl sm:text-4xl text-[#FDFBF7] font-medium drop-shadow-sm z-10">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-semibold text-[#FDFBF7]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-[10px] sm:text-xs text-[#FDFBF7] leading-relaxed max-w-sm mx-auto font-sans font-medium text-center">
              Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami:
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <button
                onClick={() => handleExportCalendar('google')}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#4A0A0E]/80 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full text-[9px] uppercase tracking-widest text-[#FDFBF7] hover:bg-[#4A0A0E]/80 backdrop-blur-sm transition-colors shadow-sm"
              >
                <Calendar className="w-3 h-3 text-[#FDFBF7]" />
                <span>Google</span>
              </button>
              <button
                onClick={() => handleExportCalendar('apple')}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#4A0A0E]/80 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full text-[9px] uppercase tracking-widest text-[#FDFBF7] hover:bg-[#4A0A0E]/80 backdrop-blur-sm transition-colors shadow-sm"
              >
                <Calendar className="w-3 h-3 text-[#FDFBF7]" />
                <span>Apple</span>
              </button>
              <button
                onClick={() => handleExportCalendar('outlook')}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#4A0A0E]/80 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full text-[9px] uppercase tracking-widest text-[#FDFBF7] hover:bg-[#4A0A0E]/80 backdrop-blur-sm transition-colors shadow-sm"
              >
                <Calendar className="w-3 h-3 text-[#FDFBF7]" />
                <span>Outlook</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
