'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check, Disc } from 'lucide-react';

interface SpotifyCountdownProps {
  targetDateISO: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function SpotifyCountdown({ targetDateISO }: SpotifyCountdownProps) {
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
    setSavedCalendar('Google Calendar');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      'Pernikahan Fahreiza & Amanda'
    )}&dates=20261121T080000Z/20261121T150000Z&details=${encodeURIComponent(
      'Akad Nikah & Resepsi Pernikahan Fahreiza & Amanda'
    )}&location=${encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta')}`;
    window.open(url, '_blank');
  };

  const handleAppleCalendar = () => {
    setSavedCalendar('Apple Calendar');
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
    setSavedCalendar('Outlook Calendar');
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(
      'Pernikahan Fahreiza & Amanda'
    )}&startdt=2026-11-21T08:00:00Z&enddt=2026-11-21T15:00:00Z&body=${encodeURIComponent(
      'Akad Nikah & Resepsi Pernikahan Fahreiza & Amanda'
    )}&location=${encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta')}`;
    window.open(url, '_blank');
  };

  if (!isMounted) return null;

  return (
    <section className="py-4 md:py-6 w-full px-4 sm:px-8 md:px-12 max-w-6xl mx-auto text-white select-none space-y-4">
      {/* Section Header */}
      <div>
        <span className="text-xs uppercase tracking-widest text-[#1DB954] font-bold block mb-1">
          TAYANG PERDANA DALAM (RELEASE COUNTDOWN)
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-white tracking-tight flex items-center gap-2">
          <Disc className="w-8 h-8 text-[#1DB954] animate-spin duration-3000" />
          <span>Menanti Hari Bahagia</span>
        </h2>
      </div>

      {/* Main Widescreen Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-gradient-to-r from-[#092012] via-[#181818] to-[#121212] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6"
      >
        {/* Left Side: Countdown Digits with Dividers & Date */}
        <div className="space-y-3">
          <div className="flex items-center gap-4 sm:gap-6 font-mono">
            {/* Days */}
            <div className="flex flex-col items-center pr-4 sm:pr-6 border-r border-zinc-700/60">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-wider">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-widest mt-1">
                HARI
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center pr-4 sm:pr-6 border-r border-zinc-700/60">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-wider">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-widest mt-1">
                JAM
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center pr-4 sm:pr-6 border-r border-zinc-700/60">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-wider">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-widest mt-1">
                MENIT
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-wider">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-widest mt-1">
                DETIK
              </span>
            </div>
          </div>

          <p className="text-xs text-zinc-300 font-sans">
            Tayang perdana <strong className="text-white font-bold">Sabtu, 21 November 2026</strong>
          </p>
        </div>

        {/* Right Side: 3 Calendar Export Buttons */}
        <div className="flex flex-col items-start lg:items-end space-y-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleGoogleCalendar}
              className="flex items-center gap-2 bg-zinc-900/90 hover:bg-[#1DB954] text-white hover:text-black border border-zinc-700 hover:border-[#1DB954] text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Google</span>
            </button>

            <button
              onClick={handleAppleCalendar}
              className="flex items-center gap-2 bg-zinc-900/90 hover:bg-[#1DB954] text-white hover:text-black border border-zinc-700 hover:border-[#1DB954] text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Apple</span>
            </button>

            <button
              onClick={handleOutlookCalendar}
              className="flex items-center gap-2 bg-zinc-900/90 hover:bg-[#1DB954] text-white hover:text-black border border-zinc-700 hover:border-[#1DB954] text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Outlook</span>
            </button>
          </div>

          {savedCalendar && (
            <p className="text-xs text-[#1DB954] font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Ditambahkan ke {savedCalendar}!</span>
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
