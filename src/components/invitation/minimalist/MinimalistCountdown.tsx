'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MinimalistCountdownProps {
  targetDate: string;
}

export default function MinimalistCountdown({ targetDate }: MinimalistCountdownProps) {
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

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent('Pernikahan Fahreiza & Amanda');
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Minimalist Luxury Edition');
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
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Minimalist Luxury Edition');
    const location = encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta');
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${title}&body=${details}&location=${location}&startdt=2026-11-21T08:00:00Z&enddt=2026-11-21T13:00:00Z`;
    window.open(url, '_blank');
  };

  return (
    <section className="space-y-8 overflow-hidden w-full max-w-xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center space-y-1.5">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7F9481] font-bold block">
          Hitung Mundur Acara
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#C48B96] font-bold">
          Menanti Hari Bahagia
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70 mt-2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/90 border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-7 space-y-6 shadow-2xl select-none text-center backdrop-blur-md relative overflow-hidden"
      >
        {/* 4 Top Progress Lines */}
        <div className="flex gap-2 w-full">
          <div className="flex-1 h-0.5 rounded-full bg-[#7F9481]" />
          <div className="flex-1 h-0.5 rounded-full bg-[#7F9481]" />
          <div className="flex-1 h-0.5 rounded-full bg-[#7F9481]/60" />
          <div className="flex-1 h-0.5 rounded-full bg-zinc-200" />
        </div>

        {/* Horizontal Countdown Format with Gold Vertical Dividers */}
        <div className="bg-[#F9F6F0] border border-[#7F9481]/30 rounded-2xl p-4 flex items-center justify-around text-center shadow-inner">
          <div className="flex-1">
            <span className="text-2xl sm:text-3xl font-black text-[#2D3748] font-mono leading-none block">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-extrabold text-[#7F9481] uppercase tracking-widest block pt-1.5">
              HARI
            </span>
          </div>

          <div className="w-[1px] h-8 bg-[#D4AF37]/60" />

          <div className="flex-1">
            <span className="text-2xl sm:text-3xl font-black text-[#2D3748] font-mono leading-none block">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-extrabold text-[#7F9481] uppercase tracking-widest block pt-1.5">
              JAM
            </span>
          </div>

          <div className="w-[1px] h-8 bg-[#D4AF37]/60" />

          <div className="flex-1">
            <span className="text-2xl sm:text-3xl font-black text-[#2D3748] font-mono leading-none block">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-extrabold text-[#7F9481] uppercase tracking-widest block pt-1.5">
              MENIT
            </span>
          </div>

          <div className="w-[1px] h-8 bg-[#D4AF37]/60" />

          <div className="flex-1">
            <span className="text-2xl sm:text-3xl font-black text-[#C48B96] font-mono leading-none block animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-extrabold text-[#C48B96] uppercase tracking-widest block pt-1.5">
              DETIK
            </span>
          </div>
        </div>

        <p className="text-xs text-zinc-500 font-serif italic">
          Acara akan diselenggarakan pada <strong className="text-[#2D3748]">Sabtu, 21 November 2026</strong>
        </p>

        {/* 3 Calendar Export Buttons */}
        <div className="grid grid-cols-3 gap-2.5 pt-1">
          <button
            onClick={handleGoogleCalendar}
            className="py-3 px-2 bg-white hover:bg-[#7F9481] hover:text-white border border-[#7F9481]/40 rounded-xl text-xs font-bold text-[#2D3748] transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs"
          >
            <span>🗓️ Google</span>
          </button>

          <button
            onClick={handleAppleCalendar}
            className="py-3 px-2 bg-white hover:bg-[#7F9481] hover:text-white border border-[#7F9481]/40 rounded-xl text-xs font-bold text-[#2D3748] transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs"
          >
            <span>🗓️ Apple</span>
          </button>

          <button
            onClick={handleOutlookCalendar}
            className="py-3 px-2 bg-white hover:bg-[#7F9481] hover:text-white border border-[#7F9481]/40 rounded-xl text-xs font-bold text-[#2D3748] transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs"
          >
            <span>🗓️ Outlook</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
