'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Check, Sparkles } from 'lucide-react';
import ThreeDCardTilt from './ThreeDCardTilt';

interface ThreeDCountdownProps {
  targetDateISO: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ThreeDCountdown({ targetDateISO }: ThreeDCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);
  const [savedCalendar, setSavedCalendar] = useState<string | null>(null);

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

  const handleGoogleCalendar = () => {
    setSavedCalendar('Google');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      'Pernikahan Fahreiza & Amanda'
    )}&dates=20261121T080000Z/20261121T150000Z&details=${encodeURIComponent(
      'Akad Nikah & Resepsi Pernikahan Fahreiza & Amanda'
    )}&location=${encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta')}`;
    window.open(url, '_blank');
  };

  const handleAppleCalendar = () => {
    setSavedCalendar('Apple');
    const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Pernikahan Fahreiza & Amanda\nDESCRIPTION:Akad Nikah & Resepsi Pernikahan Fahreiza & Amanda\nLOCATION:Grand Ballroom Hotel Mulia\\, Jakarta\nDTSTART:20261121T080000Z\nDTEND:20261121T150000Z\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Pernikahan-Fahreiza-Amanda.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOutlookCalendar = () => {
    setSavedCalendar('Outlook');
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(
      'Pernikahan Fahreiza & Amanda'
    )}&startdt=2026-11-21T08:00:00Z&enddt=2026-11-21T15:00:00Z&body=${encodeURIComponent(
      'Akad Nikah & Resepsi Pernikahan Fahreiza & Amanda'
    )}&location=${encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta')}`;
    window.open(url, '_blank');
  };

  if (!isMounted) return null;

  return (
    <section className="py-8 px-4 max-w-5xl mx-auto select-none relative z-10">
      <ThreeDCardTilt maxTilt={10} className="w-full">
        <div className="w-full rounded-3xl bg-gradient-to-r from-[#24171E] via-[#1A1217] to-[#120E13] border-2 border-[#D4AF37]/50 p-6 sm:p-8 md:p-10 shadow-[0_25px_50px_-12px_rgba(212,175,55,0.3)] text-white relative overflow-hidden">
          {/* Top Story Segment Indicator Lines - Mandatory PRD Requirement */}
          <div className="flex gap-2 w-full mb-6">
            <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FDE68A] shadow-sm" />
            <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FDE68A] shadow-sm" />
            <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FDE68A] shadow-sm" />
            <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FDE68A] shadow-sm" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left: Titles & Tag */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                HITUNG MUNDUR ACARA (3D COUNTDOWN)
              </span>
              <h3 className="font-serif-cormorant text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#FDE68A] to-amber-200">
                Menuju Hari Bahagia
              </h3>
              <p className="text-xs text-zinc-400 font-sans max-w-sm">
                Setiap detik adalah doa menuju ikatan suci yang abadi.
              </p>
            </div>

            {/* Center: Compact Horizontal Countdown with Vertical Dividers */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 backdrop-blur-md">
              {/* Days */}
              <div className="flex flex-col items-center pr-3 sm:pr-5 border-r border-[#D4AF37]/30">
                <span className="text-3xl sm:text-4xl font-mono font-black text-amber-200 tracking-wider">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">
                  HARI
                </span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center pr-3 sm:pr-5 border-r border-[#D4AF37]/30">
                <span className="text-3xl sm:text-4xl font-mono font-black text-amber-200 tracking-wider">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">
                  JAM
                </span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center pr-3 sm:pr-5 border-r border-[#D4AF37]/30">
                <span className="text-3xl sm:text-4xl font-mono font-black text-amber-200 tracking-wider">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">
                  MENIT
                </span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-mono font-black text-[#F3CA65] tracking-wider animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">
                  DETIK
                </span>
              </div>
            </div>

            {/* Right: 3 Calendar Export Buttons */}
            <div className="flex flex-wrap lg:flex-col gap-2.5 justify-center">
              <button
                onClick={handleGoogleCalendar}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B98929] text-[#241303] text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#241303]" />
                <span>{savedCalendar === 'Google' ? 'Tersimpan (Google)' : '🗓️ Google'}</span>
              </button>

              <button
                onClick={handleAppleCalendar}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{savedCalendar === 'Apple' ? 'Tersimpan (Apple)' : '🗓️ Apple'}</span>
              </button>

              <button
                onClick={handleOutlookCalendar}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{savedCalendar === 'Outlook' ? 'Tersimpan (Outlook)' : '🗓️ Outlook'}</span>
              </button>
            </div>
          </div>
        </div>
      </ThreeDCardTilt>
    </section>
  );
}
