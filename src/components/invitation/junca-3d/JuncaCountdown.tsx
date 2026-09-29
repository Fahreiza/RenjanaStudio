'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Check } from 'lucide-react';

interface JuncaCountdownProps {
  targetDate?: string;
}

export default function JuncaCountdown({
  targetDate = '2026-11-21T08:00:00',
}: JuncaCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 78,
    hours: 10,
    minutes: 21,
    seconds: 50,
  });

  useEffect(() => {
    const calculateTime = () => {
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

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Calendar Export Generators
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent('The Wedding of Fahreiza & Amanda');
    const details = encodeURIComponent(
      'Pernikahan Fahreiza & Amanda. Mohon doa restu atas kehadiran Bapak/Ibu/Saudara/i.'
    );
    const location = encodeURIComponent('Grand Ballroom Renjana, Bandung');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261121T010000Z/20261121T060000Z&details=${details}&location=${location}`;
  };

  const getYahooOutlookUrl = () => {
    const title = encodeURIComponent('The Wedding of Fahreiza & Amanda');
    const location = encodeURIComponent('Grand Ballroom Renjana, Bandung');
    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=2026-11-21T08:00:00&enddt=2026-11-21T13:00:00&location=${location}`;
  };

  const downloadIcsFile = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Renjana Studio//Wedding Invitation//ID
BEGIN:VEVENT
UID:wedding-fahreiza-amanda-2026@renjana.com
DTSTAMP:20260929T000000Z
DTSTART:20261121T010000Z
DTEND:20261121T060000Z
SUMMARY:The Wedding of Fahreiza & Amanda
DESCRIPTION:Pernikahan Fahreiza & Amanda. Mohon doa restu.
LOCATION:Grand Ballroom Renjana, Bandung
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding-fahreiza-amanda.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 bg-[#080808] text-[#FBFBFB] select-none overflow-hidden">
      <div className="max-w-4xl mx-auto bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        {/* 4 TOP STORY SEGMENT PROGRESS LINES (MANDATORY PRD) */}
        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 h-0.5 rounded-full bg-[#ED3327]" />
          <div className="flex-1 h-0.5 rounded-full bg-[#ED3327]" />
          <div className="flex-1 h-0.5 rounded-full bg-white/40" />
          <div className="flex-1 h-0.5 rounded-full bg-white/20" />
        </div>

        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ED3327] font-semibold block">
            COUNTDOWN TO CELEBRATION
          </span>
          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            Menghitung Hari Menuju Hari Bahagia
          </h2>
        </div>

        {/* HORIZONTAL COMPACT COUNTDOWN WITH VERTICAL DIVIDERS */}
        <div className="flex items-center justify-center divide-x divide-white/10 bg-white/5 border border-white/10 rounded-2xl py-6 px-2 sm:px-6">
          {/* Days */}
          <div className="flex-1 text-center px-2 sm:px-4">
            <span className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight block">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#ED3327] font-bold mt-1 block">
              HARI
            </span>
          </div>

          {/* Hours */}
          <div className="flex-1 text-center px-2 sm:px-4">
            <span className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight block">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-1 block">
              JAM
            </span>
          </div>

          {/* Minutes */}
          <div className="flex-1 text-center px-2 sm:px-4">
            <span className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight block">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-1 block">
              MENIT
            </span>
          </div>

          {/* Seconds */}
          <div className="flex-1 text-center px-2 sm:px-4">
            <span className="font-sans font-black text-3xl sm:text-5xl text-[#ED3327] tracking-tight block">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#ED3327] font-bold mt-1 block">
              DETIK
            </span>
          </div>
        </div>

        {/* 3 CALENDAR EXPORT BUTTONS (MANDATORY PRD) */}
        <div className="pt-2 text-center space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
            SIMPAN TANGGAL KE KALENDER ANDA:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-[#ED3327] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5 text-[#ED3327] group-hover:text-white" />
              <span>Google Calendar</span>
            </a>

            <button
              onClick={downloadIcsFile}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-[#ED3327] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5 text-[#ED3327]" />
              <span>Apple iCal</span>
            </button>

            <a
              href={getYahooOutlookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-[#ED3327] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5 text-[#ED3327]" />
              <span>Outlook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
