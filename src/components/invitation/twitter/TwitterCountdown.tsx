'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Sparkles } from 'lucide-react';

interface TwitterCountdownProps {
  targetDate: string;
}

export default function TwitterCountdown({ targetDate }: TwitterCountdownProps) {
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
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Undangan Resmi');
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
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Undangan Resmi');
    const location = encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta');
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${title}&body=${details}&location=${location}&startdt=2026-11-21T08:00:00Z&enddt=2026-11-21T13:00:00Z`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#15202B] border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-xl select-none"
    >
      {/* 4 Top Story Segment Progress Lines */}
      <div className="flex items-center gap-1.5">
        <div className="flex-1 h-0.5 rounded-full bg-[#1DA1F2]" />
        <div className="flex-1 h-0.5 rounded-full bg-[#1DA1F2]/80 animate-pulse" />
        <div className="flex-1 h-0.5 rounded-full bg-zinc-700" />
        <div className="flex-1 h-0.5 rounded-full bg-zinc-700" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#1DA1F2]" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
            Hitung Mundur / Live Countdown
          </h3>
        </div>
        <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 border border-[#1DA1F2]/30 px-2 py-0.5 rounded-full">
          LIVE
        </span>
      </div>

      {/* Horizontal Numbers Display with Vertical Dividers */}
      <div className="bg-black/50 border border-zinc-800 rounded-xl p-4 flex items-center justify-between text-center">
        <div className="flex-1">
          <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="block text-[10px] font-bold text-[#1DA1F2] tracking-wider uppercase mt-1">
            HARI
          </span>
        </div>
        <div className="w-[1px] h-8 bg-zinc-800" />
        <div className="flex-1">
          <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="block text-[10px] font-bold text-[#1DA1F2] tracking-wider uppercase mt-1">
            JAM
          </span>
        </div>
        <div className="w-[1px] h-8 bg-zinc-800" />
        <div className="flex-1">
          <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="block text-[10px] font-bold text-[#1DA1F2] tracking-wider uppercase mt-1">
            MENIT
          </span>
        </div>
        <div className="w-[1px] h-8 bg-zinc-800" />
        <div className="flex-1">
          <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="block text-[10px] font-bold text-[#1DA1F2] tracking-wider uppercase mt-1">
            DETIK
          </span>
        </div>
      </div>

      {/* 3 Calendar Export Buttons */}
      <div className="space-y-2 pt-1">
        <p className="text-[11px] text-zinc-400 font-semibold flex items-center gap-1">
          <CalendarIcon className="w-3.5 h-3.5 text-[#1DA1F2]" />
          <span>Simpan Tanggal ke Kalender:</span>
        </p>

        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={handleGoogleCalendar}
            className="py-2 px-2 bg-zinc-900 hover:bg-[#1DA1F2] hover:text-white border border-zinc-700/80 rounded-xl text-xs font-bold text-zinc-200 transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>🗓️ Google</span>
          </button>
          <button
            onClick={handleAppleCalendar}
            className="py-2 px-2 bg-zinc-900 hover:bg-[#1DA1F2] hover:text-white border border-zinc-700/80 rounded-xl text-xs font-bold text-zinc-200 transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>🗓️ Apple</span>
          </button>
          <button
            onClick={handleOutlookCalendar}
            className="py-2 px-2 bg-zinc-900 hover:bg-[#1DA1F2] hover:text-white border border-zinc-700/80 rounded-xl text-xs font-bold text-zinc-200 transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>🗓️ Outlook</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
