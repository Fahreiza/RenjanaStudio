'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';

interface EtherealCountdownProps {
  targetDateISO: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EtherealCountdown({ targetDateISO }: EtherealCountdownProps) {
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
      'The Wedding of Aditya & Alya'
    )}&dates=20261212T080000Z/20261212T150000Z&details=${encodeURIComponent(
      'Akad Nikah & Resepsi Pernikahan Aditya & Alya'
    )}&location=${encodeURIComponent('The Glass House Conservatory, Jakarta')}`;
    window.open(url, '_blank');
  };

  const handleAppleCalendar = () => {
    setSavedCalendar('Apple');
    const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:The Wedding of Aditya & Alya\nDESCRIPTION:Akad Nikah & Resepsi Pernikahan Aditya & Alya\nLOCATION:The Glass House Conservatory\\, Jakarta\nDTSTART:20261212T080000Z\nDTEND:20261212T150000Z\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Pernikahan-Aditya-Alya.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOutlookCalendar = () => {
    setSavedCalendar('Outlook');
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(
      'The Wedding of Aditya & Alya'
    )}&startdt=2026-12-12T08:00:00Z&enddt=2026-12-12T15:00:00Z&body=${encodeURIComponent(
      'Akad Nikah & Resepsi Pernikahan Aditya & Alya'
    )}&location=${encodeURIComponent('The Glass House Conservatory, Jakarta')}`;
    window.open(url, '_blank');
  };

  if (!isMounted) return null;

  return (
    <section className="py-8 px-4 max-w-5xl mx-auto select-none relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full rounded-[32px] bg-[#FAF7F2] border border-[#C7A76C]/40 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(184,173,160,0.45)] text-[#3F493D] relative overflow-hidden"
      >
        {/* Top 4 Story Segment Indicator Lines - Mandatory PRD Requirement */}
        <div className="flex gap-2 w-full mb-6">
          <div className="flex-1 h-1 rounded-full bg-[#C7A76C]/60" />
          <div className="flex-1 h-1 rounded-full bg-[#C7A76C]/60" />
          <div className="flex-1 h-1 rounded-full bg-[#C7A76C]/60" />
          <div className="flex-1 h-1 rounded-full bg-[#C7A76C]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Side: Header & Tag */}
          <div className="space-y-1.5">
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#A7B09A] font-bold block">
              COUNTDOWN TO THE BIG DAY
            </span>
            <h3 className="font-serif-cormorant text-3xl sm:text-4xl font-normal text-[#3F493D]">
              Menghitung Hari Bahagia
            </h3>
            <p className="text-xs text-[#3F493D]/65 font-serif italic max-w-sm">
              Setiap detik menuju penyatuan dua jiwa dalam berkah suci.
            </p>
          </div>

          {/* Center: Compact Horizontal Countdown with Vertical Dividers */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 bg-[#F6F0E6] border border-[#C7A76C]/30 rounded-2xl py-4 px-6 shadow-inner">
            {/* Days */}
            <div className="flex flex-col items-center pr-3 sm:pr-5 border-r border-[#C7A76C]/30">
              <span className="text-3xl sm:text-4xl font-serif-cormorant font-bold text-[#3F493D] tracking-wider">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[8px] uppercase tracking-widest text-[#A7B09A] font-bold mt-1">
                HARI
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center pr-3 sm:pr-5 border-r border-[#C7A76C]/30">
              <span className="text-3xl sm:text-4xl font-serif-cormorant font-bold text-[#3F493D] tracking-wider">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[8px] uppercase tracking-widest text-[#A7B09A] font-bold mt-1">
                JAM
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center pr-3 sm:pr-5 border-r border-[#C7A76C]/30">
              <span className="text-3xl sm:text-4xl font-serif-cormorant font-bold text-[#3F493D] tracking-wider">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[8px] uppercase tracking-widest text-[#A7B09A] font-bold mt-1">
                MENIT
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-serif-cormorant font-bold text-[#C7A76C] tracking-wider animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[8px] uppercase tracking-widest text-[#A7B09A] font-bold mt-1">
                DETIK
              </span>
            </div>
          </div>

          {/* Right: 3 Calendar Export Buttons */}
          <div className="flex flex-wrap lg:flex-col gap-2 justify-center">
            <button
              onClick={handleGoogleCalendar}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#3F493D] text-[#FAF7F2] hover:bg-[#323B30] text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer border border-[#C7A76C]/40"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C7A76C]" />
              <span>{savedCalendar === 'Google' ? 'Tersimpan (Google)' : '🗓️ Google'}</span>
            </button>

            <button
              onClick={handleAppleCalendar}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F6F0E6] hover:bg-[#EDE3D3] border border-[#C7A76C]/40 text-[#3F493D] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C7A76C]" />
              <span>{savedCalendar === 'Apple' ? 'Tersimpan (Apple)' : '🗓️ Apple'}</span>
            </button>

            <button
              onClick={handleOutlookCalendar}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F6F0E6] hover:bg-[#EDE3D3] border border-[#C7A76C]/40 text-[#3F493D] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C7A76C]" />
              <span>{savedCalendar === 'Outlook' ? 'Tersimpan (Outlook)' : '🗓️ Outlook'}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
