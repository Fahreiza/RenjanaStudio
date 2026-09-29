'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell } from 'lucide-react';

interface PopUpCountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function PopUpCountdown({ targetDate }: PopUpCountdownProps) {
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
    description: 'Pernikahan Fahreiza & Amanda (3D Pop-Up Book Edition). Doa restu Anda merupakan kehormatan bagi kami.',
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
      'PRODID:-//Renjana Studio//3D Pop-Up Invitation//ID',
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
    <section className="relative w-full py-8 px-4 text-[#451A03] z-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-md mx-auto rounded-3xl bg-white/90 border-2 border-[#D4AF37] p-6 sm:p-7 shadow-xl text-center"
      >
        {/* 1. Mandatory 4 top story segment progress lines */}
        <div className="flex items-center gap-1.5 w-full mb-6">
          <div className="flex-1 h-1 rounded-full bg-[#B76E79]" />
          <div className="flex-1 h-1 rounded-full bg-[#B76E79]" />
          <div className="flex-1 h-1 rounded-full bg-[#B76E79]" />
          <div className="flex-1 h-1 rounded-full bg-[#B76E79]/35 animate-pulse" />
        </div>

        {/* Header */}
        <div className="space-y-1 mb-2">
          <span className="text-[10px] uppercase tracking-[0.3em] font-serif font-bold text-[#8A9A86] block">
            MENGHITUNG HARI // SAVE THE DATE
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#451A03] tracking-wide">
            Menuju Hari Bahagia
          </h3>
        </div>

        {/* 2. Mandatory Horizontal countdown numbers with vertical dividers */}
        <div className="py-4 px-3 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/50 shadow-inner flex items-center justify-around my-5 text-center">
          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#451A03]">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-serif font-bold block">
              HARI
            </span>
          </div>

          <div className="h-8 w-px bg-[#78350F]/20" />

          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#451A03]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-serif font-bold block">
              JAM
            </span>
          </div>

          <div className="h-8 w-px bg-[#78350F]/20" />

          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#451A03]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-serif font-bold block">
              MENIT
            </span>
          </div>

          <div className="h-8 w-px bg-[#78350F]/20" />

          <div className="flex-1">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#451A03]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-serif font-bold block">
              DETIK
            </span>
          </div>
        </div>

        {/* 3. Mandatory 3 Calendar export buttons: [ Google ] [ Apple ] [ Outlook ] */}
        <div className="mt-5 space-y-2">
          <p className="text-[11px] text-[#5C3D2E] font-serif flex items-center justify-center gap-1.5">
            <Bell className="w-3.5 h-3.5 text-[#B76E79]" />
            Simpan tanggal ke kalender Anda:
          </p>
          <div className="grid grid-cols-3 gap-2 pt-1">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-gradient-to-b from-[#78350F] to-[#451A03] text-white hover:opacity-90 text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Google</span>
            </a>
            <button
              onClick={handleAppleCalendar}
              className="py-2.5 px-2 rounded-xl bg-gradient-to-b from-[#78350F] to-[#451A03] text-white hover:opacity-90 text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Apple</span>
            </button>
            <a
              href={outlookCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-gradient-to-b from-[#78350F] to-[#451A03] text-white hover:opacity-90 text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Outlook</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
