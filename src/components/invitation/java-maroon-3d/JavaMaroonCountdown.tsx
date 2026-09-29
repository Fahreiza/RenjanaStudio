import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell } from 'lucide-react';
import {
  GununganWayangSvg,
  AksaraJawaBadge,
  GebyokCrownArch3D,
} from './JavaMaroonOrnaments';
import JavaMaroon3DCard from './JavaMaroon3DCard';

interface JavaMaroonCountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function JavaMaroonCountdown({ targetDate }: JavaMaroonCountdownProps) {
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
    description: 'Pernikahan Fahreiza & Amanda. Doa restu Anda merupakan kehormatan bagi kami.',
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
      'PRODID:-//Renjana Studio//Wedding Invitation//ID',
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
    <section className="relative w-full py-8 px-4 text-[#FFF2A3] z-10">
      <div className="max-w-md mx-auto">
        <JavaMaroon3DCard maxTilt={10} className="p-6 sm:p-7 text-center">
          {/* 3D Gebyok Crown */}
          <div style={{ transform: 'translateZ(30px)' }} className="mb-2">
            <GebyokCrownArch3D className="w-full h-8 mx-auto" />
          </div>

          {/* 1. Mandatory 4 top story segment progress lines */}
          <div style={{ transform: 'translateZ(20px)' }} className="flex items-center gap-1.5 w-full mb-5">
            <div className="flex-1 h-1 rounded-full bg-[#FFF2A3] shadow-[0_0_8px_rgba(255,242,163,0.8)]" />
            <div className="flex-1 h-1 rounded-full bg-[#E2B755] shadow-[0_0_6px_rgba(226,183,85,0.6)]" />
            <div className="flex-1 h-1 rounded-full bg-[#E2B755] shadow-[0_0_6px_rgba(226,183,85,0.6)]" />
            <div className="flex-1 h-1 rounded-full bg-[#E2B755]/40 animate-pulse" />
          </div>

          {/* Header */}
          <div style={{ transform: 'translateZ(35px)' }} className="flex flex-col items-center justify-center gap-2 mb-4">
            <AksaraJawaBadge textJawa="ꦔꦼꦠꦸꦁꦢꦶꦤ꧀ꦠꦼꦤ꧀" latin="Ngetung Dinten" />
            <h3 className="text-2xl font-serif font-bold text-[#FFF2A3] tracking-wide mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Menghitung Hari Menuju Bahagia
            </h3>
          </div>

          {/* 2. Mandatory Horizontal countdown numbers with 3D sunken bevel */}
          <div
            style={{ transform: 'translateZ(45px)' }}
            className="py-4 px-3 rounded-2xl bg-gradient-to-b from-[#170104] to-[#0D0102] border border-[#FFE29F]/50 shadow-[inset_0_4px_12px_rgba(0,0,0,0.9),0_6px_20px_rgba(0,0,0,0.6)] flex items-center justify-around my-5 text-center"
          >
            <div className="flex-1">
              <span className="block text-2xl sm:text-3xl font-serif font-black text-[#FFF2A3] drop-shadow-[0_0_10px_rgba(255,242,163,0.5)]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#E2B755] font-serif font-bold block mt-0.5">
                HARI
              </span>
              <span className="text-[9px] text-[#FFE29F]/70 font-serif italic">Dinten</span>
            </div>

            <div className="h-8 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />

            <div className="flex-1">
              <span className="block text-2xl sm:text-3xl font-serif font-black text-[#FFF2A3] drop-shadow-[0_0_10px_rgba(255,242,163,0.5)]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#E2B755] font-serif font-bold block mt-0.5">
                JAM
              </span>
              <span className="text-[9px] text-[#FFE29F]/70 font-serif italic">Tabuh</span>
            </div>

            <div className="h-8 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />

            <div className="flex-1">
              <span className="block text-2xl sm:text-3xl font-serif font-black text-[#FFF2A3] drop-shadow-[0_0_10px_rgba(255,242,163,0.5)]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#E2B755] font-serif font-bold block mt-0.5">
                MENIT
              </span>
              <span className="text-[9px] text-[#FFE29F]/70 font-serif italic">Menit</span>
            </div>

            <div className="h-8 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />

            <div className="flex-1">
              <span className="block text-2xl sm:text-3xl font-serif font-black text-[#FFF2A3] drop-shadow-[0_0_10px_rgba(255,242,163,0.5)]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#E2B755] font-serif font-bold block mt-0.5">
                DETIK
              </span>
              <span className="text-[9px] text-[#FFE29F]/70 font-serif italic">Detik</span>
            </div>
          </div>

          {/* 3. Mandatory 3 Calendar export buttons: [ Google ] [ Apple ] [ Outlook ] */}
          <div style={{ transform: 'translateZ(35px)' }} className="mt-5 space-y-2">
            <p className="text-xs text-[#FFE29F]/90 font-serif flex items-center justify-center gap-1.5">
              <Bell className="w-3.5 h-3.5 text-[#FFF2A3] animate-bounce" />
              <span>Simpan tanggal ke kalender Anda:</span>
            </p>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 rounded-xl bg-gradient-to-b from-[#2E050B] to-[#170104] border border-[#FFE29F]/40 text-[#FFF2A3] hover:from-[#D4AF37] hover:to-[#B38728] hover:text-[#1A0205] text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:scale-[1.04]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Google</span>
              </a>
              <button
                onClick={handleAppleCalendar}
                className="py-2.5 px-2 rounded-xl bg-gradient-to-b from-[#2E050B] to-[#170104] border border-[#FFE29F]/40 text-[#FFF2A3] hover:from-[#D4AF37] hover:to-[#B38728] hover:text-[#1A0205] text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:scale-[1.04]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Apple</span>
              </button>
              <a
                href={outlookCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 rounded-xl bg-gradient-to-b from-[#2E050B] to-[#170104] border border-[#FFE29F]/40 text-[#FFF2A3] hover:from-[#D4AF37] hover:to-[#B38728] hover:text-[#1A0205] text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:scale-[1.04]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Outlook</span>
              </a>
            </div>
          </div>
        </JavaMaroon3DCard>
      </div>
    </section>
  );
}
