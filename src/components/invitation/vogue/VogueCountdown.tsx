'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell } from 'lucide-react';

interface VogueCountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function VogueCountdown({ targetDate }: VogueCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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

  // Calendar Links
  const eventDetails = {
    title: 'The Wedding of Fahreiza & Amanda',
    description: 'Pernikahan Fahreiza & Amanda (Editorial Edition). Doa restu Anda merupakan kehormatan bagi kami.',
    location: 'Grand Ballroom Hotel Mulia, Senayan, Jakarta',
    startDate: '20261121T080000Z',
    endDate: '20261121T150000Z',
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventDetails.title
  )}&dates=${eventDetails.startDate}/${eventDetails.endDate}&details=${encodeURIComponent(
    eventDetails.description
  )}&location=${encodeURIComponent(eventDetails.location)}`;

  const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
    eventDetails.title
  )}&startdt=${eventDetails.startDate}&enddt=${eventDetails.endDate}&body=${encodeURIComponent(
    eventDetails.description
  )}&location=${encodeURIComponent(eventDetails.location)}`;

  const handleAppleCalendar = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Renjana Studio//Vogue Editorial Invitation//ID',
      'BEGIN:VEVENT',
      `DTSTART:${eventDetails.startDate}`,
      `DTEND:${eventDetails.endDate}`,
      `SUMMARY:${eventDetails.title}`,
      `DESCRIPTION:${eventDetails.description}`,
      `LOCATION:${eventDetails.location}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding-fahreiza-amanda.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full py-8 px-4 text-[#FAFAF8] z-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-md mx-auto rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-center"
      >
        {/* 1. Mandatory 4 top story segment progress lines */}
        <div className="flex items-center gap-1.5 w-full mb-6">
          <div className="flex-1 h-0.5 rounded-full bg-[#B39871]" />
          <div className="flex-1 h-0.5 rounded-full bg-[#B39871]" />
          <div className="flex-1 h-0.5 rounded-full bg-[#B39871]" />
          <div className="flex-1 h-0.5 rounded-full bg-[#B39871]/40 animate-pulse" />
        </div>

        {/* Header */}
        <div className="space-y-1 mb-2">
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#B39871] block">
            COUNTDOWN // SAVE THE DATE
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#FAFAF8] tracking-wide">
            Menuju Hari Bahagia
          </h3>
        </div>

        {/* 2. Mandatory Horizontal countdown numbers with vertical dividers */}
        <div className="py-4 px-3 rounded-2xl bg-[#0E0E0E] border border-white/10 shadow-inner flex items-center justify-around my-5 text-center">
          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#FAFAF8]">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#B39871] font-mono block">
              HARI
            </span>
          </div>

          <div className="h-8 w-px bg-white/10" />

          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#FAFAF8]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#B39871] font-mono block">
              JAM
            </span>
          </div>

          <div className="h-8 w-px bg-white/10" />

          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#FAFAF8]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#B39871] font-mono block">
              MENIT
            </span>
          </div>

          <div className="h-8 w-px bg-white/10" />

          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#FAFAF8]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#B39871] font-mono block">
              DETIK
            </span>
          </div>
        </div>

        {/* 3. Mandatory 3 Calendar export buttons: [ Google ] [ Apple ] [ Outlook ] */}
        <div className="mt-5 space-y-2">
          <p className="text-[11px] text-[#FAFAF8]/70 font-mono flex items-center justify-center gap-1.5">
            <Bell className="w-3.5 h-3.5 text-[#B39871]" />
            Simpan tanggal ke kalender Anda:
          </p>
          <div className="grid grid-cols-3 gap-2 pt-1">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-white/5 border border-white/10 text-[#FAFAF8] hover:bg-[#FAFAF8] hover:text-[#0E0E0E] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B39871]" />
              <span>Google</span>
            </a>
            <button
              onClick={handleAppleCalendar}
              className="py-2.5 px-2 rounded-xl bg-white/5 border border-white/10 text-[#FAFAF8] hover:bg-[#FAFAF8] hover:text-[#0E0E0E] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B39871]" />
              <span>Apple</span>
            </button>
            <a
              href={outlookCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-white/5 border border-white/10 text-[#FAFAF8] hover:bg-[#FAFAF8] hover:text-[#0E0E0E] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B39871]" />
              <span>Outlook</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
