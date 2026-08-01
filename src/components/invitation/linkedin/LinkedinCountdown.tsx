'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LinkedinCountdownProps {
  targetDate: string;
}

export default function LinkedinCountdown({ targetDate }: LinkedinCountdownProps) {
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
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Undangan Resmi LinkedIn Edition');
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
    const details = encodeURIComponent('Acara Pernikahan Fahreiza & Amanda - Undangan Resmi LinkedIn Edition');
    const location = encodeURIComponent('Grand Ballroom Hotel Mulia, Jakarta');
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${title}&body=${details}&location=${location}&startdt=2026-11-21T08:00:00Z&enddt=2026-11-21T13:00:00Z`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-3.5 shadow-xs select-none linkedin-theme"
    >
      {/* Header Matched EXACTLY with Reference Screenshot */}
      <div className="space-y-0.5">
        <h2 className="text-lg font-semibold text-[#000000e6] tracking-tight">
          Menanti Hari Bahagia
        </h2>
        <p className="text-xs text-[#00000099] font-normal">Acara mendatang</p>
      </div>

      {/* 4 Light Blue/Gray Number Pills Grid */}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-[#EDF3F8] border border-blue-100 rounded-xl p-3 space-y-1">
          <span className="text-xl sm:text-2xl font-bold text-[#0A66C2] leading-none block">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[9.5px] font-bold text-[#00000099] uppercase tracking-wider block">
            HARI
          </span>
        </div>

        <div className="bg-[#EDF3F8] border border-blue-100 rounded-xl p-3 space-y-1">
          <span className="text-xl sm:text-2xl font-bold text-[#0A66C2] leading-none block">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[9.5px] font-bold text-[#00000099] uppercase tracking-wider block">
            JAM
          </span>
        </div>

        <div className="bg-[#EDF3F8] border border-blue-100 rounded-xl p-3 space-y-1">
          <span className="text-xl sm:text-2xl font-bold text-[#0A66C2] leading-none block">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[9.5px] font-bold text-[#00000099] uppercase tracking-wider block">
            MENIT
          </span>
        </div>

        <div className="bg-[#EDF3F8] border border-blue-100 rounded-xl p-3 space-y-1">
          <span className="text-xl sm:text-2xl font-bold text-[#0A66C2] leading-none block">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[9.5px] font-bold text-[#00000099] uppercase tracking-wider block">
            DETIK
          </span>
        </div>
      </div>

      {/* Subtitle Date */}
      <p className="text-xs text-[#00000099] font-normal">
        Berlangsung <strong className="text-[#000000e6] font-bold">Sabtu, 21 November 2026</strong>
      </p>

      {/* 3 Outline Calendar Buttons */}
      <div className="grid grid-cols-3 gap-2 pt-1">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoogleCalendar}
          className="py-2 px-2 border border-[#0A66C2] hover:bg-blue-50 rounded-full text-xs font-semibold text-[#0A66C2] transition-all flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>🗓️ Google</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAppleCalendar}
          className="py-2 px-2 border border-[#0A66C2] hover:bg-blue-50 rounded-full text-xs font-semibold text-[#0A66C2] transition-all flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>🗓️ Apple</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOutlookCalendar}
          className="py-2 px-2 border border-[#0A66C2] hover:bg-blue-50 rounded-full text-xs font-semibold text-[#0A66C2] transition-all flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>🗓️ Outlook</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
