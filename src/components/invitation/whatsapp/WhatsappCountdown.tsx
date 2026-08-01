'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

interface WhatsappCountdownProps {
  targetDate: string;
}

export default function WhatsappCountdown({ targetDate }: WhatsappCountdownProps) {
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
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Undangan Resmi Wedapp');
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
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Undangan Resmi Wedapp');
    const location = encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta');
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${title}&body=${details}&location=${location}&startdt=2026-11-21T08:00:00Z&enddt=2026-11-21T13:00:00Z`;
    window.open(url, '_blank');
  };

  return (
    <section className="space-y-3 overflow-hidden w-full max-w-xl mx-auto">
      {/* Subtitle & Title Matched EXACTLY with Reference Screenshot */}
      <div className="space-y-0.5 text-left">
        <span className="text-[11px] font-extrabold text-[#00A884] uppercase tracking-wider block">
          PESAN DISEMATKAN
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Menanti Hari Bahagia
        </h2>
      </div>

      {/* Main Countdown Container (Dark Card bg-[#1F2C34]) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1F2C34] border border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl select-none"
      >
        {/* 4 Dark Number Pills Grid */}
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-[#111B21] border border-zinc-800 rounded-xl p-3 space-y-1">
            <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none block">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest block">
              HARI
            </span>
          </div>

          <div className="bg-[#111B21] border border-zinc-800 rounded-xl p-3 space-y-1">
            <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none block">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest block">
              JAM
            </span>
          </div>

          <div className="bg-[#111B21] border border-zinc-800 rounded-xl p-3 space-y-1">
            <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none block">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest block">
              MENIT
            </span>
          </div>

          <div className="bg-[#111B21] border border-zinc-800 rounded-xl p-3 space-y-1">
            <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none block">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest block">
              DETIK
            </span>
          </div>
        </div>

        {/* Subtitle Event Date */}
        <p className="text-center text-xs text-zinc-300 font-medium">
          Acara dimulai <strong className="text-white">Sabtu, 21 November 2026</strong>
        </p>

        {/* 3 Calendar Export Buttons */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <button
            onClick={handleGoogleCalendar}
            className="py-2.5 px-2 bg-[#202C33] hover:bg-[#00A884] hover:text-black border border-zinc-700 rounded-xl text-xs font-extrabold text-zinc-200 transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>🗓️ Google</span>
          </button>

          <button
            onClick={handleAppleCalendar}
            className="py-2.5 px-2 bg-[#202C33] hover:bg-[#00A884] hover:text-black border border-zinc-700 rounded-xl text-xs font-extrabold text-zinc-200 transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>🗓️ Apple</span>
          </button>

          <button
            onClick={handleOutlookCalendar}
            className="py-2.5 px-2 bg-[#202C33] hover:bg-[#00A884] hover:text-black border border-zinc-700 rounded-xl text-xs font-extrabold text-zinc-200 transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>🗓️ Outlook</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
