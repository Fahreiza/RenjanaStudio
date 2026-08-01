'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Pin, Sparkles } from 'lucide-react';

interface PinterestCountdownProps {
  targetDate: string;
}

export default function PinterestCountdown({ targetDate }: PinterestCountdownProps) {
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
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Calendar Export Generators
  const handleGoogleCalendar = () => {
    const title = encodeURIComponent('Pernikahan Fahreiza & Amanda');
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Undangan Resmi Pinterest Board');
    const location = encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=20261121T080000Z/20261121T130000Z`;
    window.open(url, '_blank');
  };

  const handleAppleCalendar = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Pernikahan Fahreiza & Amanda
DESCRIPTION:Acara Pernikahan Fahreiza & Amanda
LOCATION:Grand Ballroom Hotel Mulia, Jakarta
DTSTART:20261121T080000Z
DTEND:20261121T130000Z
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'wedding-event.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOutlookCalendar = () => {
    const title = encodeURIComponent('Pernikahan Fahreiza & Amanda');
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Undangan Resmi Pinterest Board');
    const location = encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta');
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${title}&body=${details}&location=${location}&startdt=2026-11-21T08:00:00Z&enddt=2026-11-21T13:00:00Z`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-zinc-200/90 rounded-[32px] p-5 sm:p-7 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all select-none overflow-hidden w-full max-w-xl mx-auto"
    >
      {/* 4 Top Story Segment Progress Lines */}
      <div className="flex items-center gap-1.5">
        <div className="flex-1 h-1 rounded-full bg-[#E60023]" />
        <div className="flex-1 h-1 rounded-full bg-[#E60023]/80 animate-pulse" />
        <div className="flex-1 h-1 rounded-full bg-zinc-200" />
        <div className="flex-1 h-1 rounded-full bg-zinc-200" />
      </div>

      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#E60023]/10 flex items-center justify-center text-[#E60023]">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#111111]">
              Hitung Mundur Acara
            </h3>
            <p className="text-[10px] text-zinc-500 font-medium">Towards Our Blessed Day</p>
          </div>
        </div>

        <span className="text-[10px] font-extrabold text-[#E60023] bg-[#E60023]/10 border border-[#E60023]/30 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#E60023] animate-ping" />
          LIVE BOARD
        </span>
      </div>

      {/* Horizontal Numbers Display with Vertical Dividers */}
      <div className="bg-[#FAFAFA] border border-zinc-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between text-center shadow-inner">
        {/* Days */}
        <div className="flex-1 space-y-1">
          <span className="text-2xl sm:text-4xl font-black text-[#E60023] font-mono leading-none tracking-tight">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="block text-[10px] font-extrabold text-zinc-600 tracking-widest uppercase">
            HARI
          </span>
        </div>

        <div className="w-[1px] h-10 bg-zinc-300/80" />

        {/* Hours */}
        <div className="flex-1 space-y-1">
          <span className="text-2xl sm:text-4xl font-black text-[#E60023] font-mono leading-none tracking-tight">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="block text-[10px] font-extrabold text-zinc-600 tracking-widest uppercase">
            JAM
          </span>
        </div>

        <div className="w-[1px] h-10 bg-zinc-300/80" />

        {/* Minutes */}
        <div className="flex-1 space-y-1">
          <span className="text-2xl sm:text-4xl font-black text-[#E60023] font-mono leading-none tracking-tight">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="block text-[10px] font-extrabold text-zinc-600 tracking-widest uppercase">
            MENIT
          </span>
        </div>

        <div className="w-[1px] h-10 bg-zinc-300/80" />

        {/* Seconds */}
        <div className="flex-1 space-y-1">
          <span className="text-2xl sm:text-4xl font-black text-[#E60023] font-mono leading-none tracking-tight">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="block text-[10px] font-extrabold text-zinc-600 tracking-widest uppercase">
            DETIK
          </span>
        </div>
      </div>

      {/* 3 Calendar Export Buttons */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between text-xs">
          <p className="text-[#5F5F5F] font-bold flex items-center gap-1.5">
            <CalendarIcon className="w-4 h-4 text-[#E60023]" />
            <span>Simpan Tanggal ke Kalender:</span>
          </p>
          <span className="text-[10px] text-zinc-400 font-mono">21 Nov 2026</span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleCalendar}
            className="py-3 px-2 bg-[#FAFAFA] hover:bg-[#E60023] hover:text-white border border-zinc-200 rounded-2xl text-xs font-extrabold text-[#111111] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>🗓️ Google</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAppleCalendar}
            className="py-3 px-2 bg-[#FAFAFA] hover:bg-[#E60023] hover:text-white border border-zinc-200 rounded-2xl text-xs font-extrabold text-[#111111] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>🗓️ Apple</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOutlookCalendar}
            className="py-3 px-2 bg-[#FAFAFA] hover:bg-[#E60023] hover:text-white border border-zinc-200 rounded-2xl text-xs font-extrabold text-[#111111] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>🗓️ Outlook</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
