'use client';

import { useState, useEffect } from 'react';
import { Bell, Check, Radio, Calendar as CalendarIcon, ExternalLink } from 'lucide-react';

interface YouTubeCountdownProps {
  targetDateISO: string;
}

export default function YouTubeCountdown({ targetDateISO }: YouTubeCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isReminderSet, setIsReminderSet] = useState(false);

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
    <div className="pt-2 select-none">
      <div className="relative bg-gradient-to-br from-[#1F1F1F] via-[#141414] to-black rounded-2xl p-5 sm:p-6 border border-zinc-800 shadow-2xl space-y-6 overflow-hidden">
        {/* Ambient Red Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF0000]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Live Premiere Stream Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-[#FF0000] text-white text-[11px] font-extrabold px-3 py-1 rounded-md shadow tracking-wider uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>LIVE PREMIERE COUNTDOWN</span>
            </div>
            <span className="text-xs font-bold text-zinc-400 font-mono">
              ACARA DIMULAI DALAM:
            </span>
          </div>

          <button
            onClick={() => setIsReminderSet(!isReminderSet)}
            className={`self-start sm:self-auto flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold transition-all border shadow ${
              isReminderSet
                ? 'bg-zinc-800 text-zinc-300 border-zinc-700'
                : 'bg-[#FF0000] hover:bg-red-700 text-white border-[#FF0000]'
            }`}
          >
            {isReminderSet ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#FF0000]" />
                <span>PENGINGAT DIAKTIFKAN 🔔</span>
              </>
            ) : (
              <>
                <Bell className="w-3.5 h-3.5" />
                <span>SET REMINDER (INGATKAN SAYA)</span>
              </>
            )}
          </button>
        </div>

        {/* Horizontal Menyamping Countdown Time Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-[#0F0F0F] p-4 sm:p-6 rounded-2xl border border-zinc-800 shadow-inner">
          {/* Days */}
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#FF0000] uppercase tracking-wider">
              HARI
            </span>
          </div>

          <span className="text-2xl sm:text-4xl text-zinc-600 font-mono font-light hidden sm:inline">:</span>

          {/* Hours */}
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#FF0000] uppercase tracking-wider">
              JAM
            </span>
          </div>

          <span className="text-2xl sm:text-4xl text-zinc-600 font-mono font-light hidden sm:inline">:</span>

          {/* Minutes */}
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#FF0000] uppercase tracking-wider">
              MENIT
            </span>
          </div>

          <span className="text-2xl sm:text-4xl text-zinc-600 font-mono font-light hidden sm:inline">:</span>

          {/* Seconds */}
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#FF0000] tracking-tight animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#FF0000] uppercase tracking-wider">
              DETIK
            </span>
          </div>
        </div>

        {/* Add to Calendar Section (Google, Apple iCal, Outlook Horizontal Bar) */}
        <div className="bg-[#0F0F0F] p-4 rounded-xl border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
            <CalendarIcon className="w-4 h-4 text-[#FF0000]" />
            <span>SIMPAN JADWAL KE KALENDER KALIAN:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Google Calendar */}
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#FF0000] text-white text-xs font-bold px-4 py-2 rounded-full border border-zinc-700 hover:border-[#FF0000] transition-all shadow"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
              </svg>
              <span>Google Calendar</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>

            {/* Apple iCal */}
            <a
              href={appleIcalContent}
              download="Pernikahan-Fahreiza-Amanda.ics"
              className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#FF0000] text-white text-xs font-bold px-4 py-2 rounded-full border border-zinc-700 hover:border-[#FF0000] transition-all shadow"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.86c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.81 1.44-.61.71-1.15 1.86-1 2.96 1.07.08 2.16-.56 2.82-1.36z" />
              </svg>
              <span>Apple Calendar</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>

            {/* Microsoft Outlook */}
            <a
              href={outlookCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#FF0000] text-white text-xs font-bold px-4 py-2 rounded-full border border-zinc-700 hover:border-[#FF0000] transition-all shadow"
            >
              <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                <path d="M1 17.75C1 19.55 2.45 21 4.25 21h15.5c1.8 0 3.25-1.45 3.25-3.25V6.25C23 4.45 21.55 3 19.75 3H4.25C2.45 3 1 4.45 1 6.25v11.5zm1.5-11.5c0-.97.78-1.75 1.75-1.75h15.5c.97 0 1.75.78 1.75 1.75v1.86l-9.5 5.7-9.5-5.7V6.25zm0 3.61l9.1 5.46c.24.14.56.14.8 0l9.1-5.46v7.89c0 .97-.78 1.75-1.75 1.75H4.25c-.97 0-1.75-.78-1.75-1.75V9.86z" />
              </svg>
              <span>Outlook</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Footer Stream Status */}
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-zinc-800 pt-3">
          <div className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-[#FF0000]" />
            <span>1,420 Penonton Menunggu Premiere</span>
          </div>
          <span className="text-zinc-500 hidden sm:inline">OFFICIAL WEDDING BROADCAST</span>
        </div>
      </div>
    </div>
  );
}
