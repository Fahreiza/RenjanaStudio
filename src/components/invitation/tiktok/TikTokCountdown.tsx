'use client';

import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

interface TikTokCountdownProps {
  targetDateISO: string;
}

export default function TikTokCountdown({ targetDateISO }: TikTokCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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

  // Calendar Links Generators
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Pernikahan Fahreiza & Amanda'
  )}&dates=20261121T080000Z/20261121T150000Z&details=${encodeURIComponent(
    'Undangan Pernikahan Resmi Fahreiza Taura, S.Tr.Kom. & Amanda Fadila, S.Tr.Kom.'
  )}&location=${encodeURIComponent('Grand Ballroom Hotel Mulia Senayan Jakarta')}`;

  const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
    'Pernikahan Fahreiza & Amanda'
  )}&startdt=2026-11-21T08:00:00Z&enddt=2026-11-21T15:00:00Z&body=${encodeURIComponent(
    'Undangan Pernikahan Resmi Fahreiza Taura & Amanda Fadila'
  )}&location=${encodeURIComponent('Grand Ballroom Hotel Mulia Senayan Jakarta')}`;

  const appleIcalContent = `data:text/calendar;charset=utf8,${encodeURIComponent(
    `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Pernikahan Fahreiza & Amanda\nDESCRIPTION:Undangan Pernikahan Fahreiza Taura & Amanda Fadila\nLOCATION:Grand Ballroom Hotel Mulia Senayan Jakarta\nDTSTART:20261121T080000Z\nDTEND:20261121T150000Z\nEND:VEVENT\nEND:VCALENDAR`
  )}`;

  return (
    <div className="max-w-4xl mx-auto px-4 select-none space-y-2 pt-2">
      {/* Subtitle & Title above card (Matching reference screenshot) */}
      <div className="space-y-0.5">
        <p className="text-[11px] font-mono font-extrabold tracking-widest uppercase">
          <span className="text-[#FE2C55]">HITUNG </span>
          <span className="text-[#00F2FE]">MUNDUR</span>
        </p>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-sans">
          Menanti Hari Bahagia
        </h3>
      </div>

      {/* Compact Main Card Container (Matching reference screenshot) */}
      <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-xl space-y-4 relative overflow-hidden">
        {/* Top Story Segment Lines */}
        <div className="flex items-center gap-1.5">
          <div className="flex-1 h-0.5 bg-[#FE2C55] rounded-full" />
          <div className="flex-1 h-0.5 bg-[#00F2FE] rounded-full" />
          <div className="flex-1 h-0.5 bg-[#FE2C55] rounded-full" />
          <div className="flex-1 h-0.5 bg-[#00F2FE] rounded-full" />
        </div>

        {/* Content Grid: Left Numbers & Right Calendar Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
          {/* Left Side: Countdown Numbers */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 sm:gap-5 text-white font-sans">
              {/* Days */}
              <div className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="block text-[9px] sm:text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest pt-0.5">
                  HARI
                </span>
              </div>

              <div className="w-[1px] h-8 bg-zinc-800" />

              {/* Hours */}
              <div className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="block text-[9px] sm:text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest pt-0.5">
                  JAM
                </span>
              </div>

              <div className="w-[1px] h-8 bg-zinc-800" />

              {/* Minutes */}
              <div className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="block text-[9px] sm:text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest pt-0.5">
                  MENIT
                </span>
              </div>

              <div className="w-[1px] h-8 bg-zinc-800" />

              {/* Seconds */}
              <div className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-[#00F2FE]">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="block text-[9px] sm:text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest pt-0.5">
                  DETIK
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-sans">
              Hari bahagia <span className="text-white font-extrabold">Sabtu, 21 November 2026</span>
            </p>
          </div>

          {/* Right Side: 3 Calendar Pill Buttons (Google, Apple, Outlook) */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#222222] hover:bg-[#FE2C55] text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-zinc-700/80 transition-all shadow"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-zinc-300" />
              <span>Google</span>
            </a>

            <a
              href={appleIcalContent}
              download="Pernikahan-Fahreiza-Amanda.ics"
              className="flex items-center gap-1.5 bg-[#222222] hover:bg-[#FE2C55] text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-zinc-700/80 transition-all shadow"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-zinc-300" />
              <span>Apple</span>
            </a>

            <a
              href={outlookCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#222222] hover:bg-[#FE2C55] text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-zinc-700/80 transition-all shadow"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-zinc-300" />
              <span>Outlook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
