'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell } from 'lucide-react';

interface JapandiCountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function JapandiCountdown({ targetDate }: JapandiCountdownProps) {
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
    description: 'Pernikahan Fahreiza & Amanda (Japandi Zen Edition). Doa restu Anda merupakan kehormatan bagi kami.',
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
      'PRODID:-//Renjana Studio//Japandi Zen Invitation//ID',
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
    <section className="relative w-full py-8 px-4 text-[#2D2F2E] z-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-md mx-auto rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 sm:p-7 shadow-sm text-center"
      >
        {/* 1. Mandatory 4 top story segment progress lines */}
        <div className="flex items-center gap-1.5 w-full mb-6">
          <div className="flex-1 h-0.5 rounded-full bg-[#637061]" />
          <div className="flex-1 h-0.5 rounded-full bg-[#637061]" />
          <div className="flex-1 h-0.5 rounded-full bg-[#637061]" />
          <div className="flex-1 h-0.5 rounded-full bg-[#637061]/35 animate-pulse" />
        </div>

        {/* Header */}
        <div className="space-y-1 mb-2">
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#637061] block">
            MENGHITUNG HARI // COUNTDOWN
          </span>
          <h3 className="text-2xl font-serif font-medium text-[#2D2F2E] tracking-wide">
            Menuju Hari Bahagia
          </h3>
        </div>

        {/* 2. Mandatory Horizontal countdown numbers with vertical dividers */}
        <div className="py-4 px-3 rounded-2xl bg-[#F4F0EA] border border-[#2D2F2E]/10 shadow-inner flex items-center justify-around my-5 text-center">
          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-semibold text-[#2D2F2E]">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#637061] font-mono block">
              HARI
            </span>
          </div>

          <div className="h-8 w-px bg-[#2D2F2E]/15" />

          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-semibold text-[#2D2F2E]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#637061] font-mono block">
              JAM
            </span>
          </div>

          <div className="h-8 w-px bg-[#2D2F2E]/15" />

          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-semibold text-[#2D2F2E]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#637061] font-mono block">
              MENIT
            </span>
          </div>

          <div className="h-8 w-px bg-[#2D2F2E]/15" />

          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-semibold text-[#2D2F2E]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#637061] font-mono block">
              DETIK
            </span>
          </div>
        </div>

        {/* 3. Mandatory 3 Calendar export buttons: [ Google ] [ Apple ] [ Outlook ] */}
        <div className="mt-5 space-y-2">
          <p className="text-[11px] text-[#2D2F2E]/70 font-serif flex items-center justify-center gap-1.5">
            <Bell className="w-3.5 h-3.5 text-[#637061]" />
            Simpan tanggal ke kalender Anda:
          </p>
          <div className="grid grid-cols-3 gap-2 pt-1">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-[#F4F0EA] border border-[#2D2F2E]/15 text-[#2D2F2E] hover:bg-[#637061] hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all shadow-xs hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#637061]" />
              <span>Google</span>
            </a>
            <button
              onClick={handleAppleCalendar}
              className="py-2.5 px-2 rounded-xl bg-[#F4F0EA] border border-[#2D2F2E]/15 text-[#2D2F2E] hover:bg-[#637061] hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all shadow-xs hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#637061]" />
              <span>Apple</span>
            </button>
            <a
              href={outlookCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-[#F4F0EA] border border-[#2D2F2E]/15 text-[#2D2F2E] hover:bg-[#637061] hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all shadow-xs hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#637061]" />
              <span>Outlook</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
