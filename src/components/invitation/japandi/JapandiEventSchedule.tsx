'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';

interface EventDetails {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

interface JapandiEventScheduleProps {
  akad: EventDetails;
  resepsi: EventDetails;
}

export default function JapandiEventSchedule({ akad, resepsi }: JapandiEventScheduleProps) {
  return (
    <section className="relative w-full py-12 px-4 text-[#2D2F2E] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono block">
          RANGKAIAN ACARA // EVENTS
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-wide text-[#2D2F2E]">
          Waktu &amp; Tempat
        </h2>
        <div className="w-10 h-px bg-[#637061]/40 mx-auto my-2" />
        <p className="text-xs text-[#2D2F2E]/70 font-serif max-w-sm mx-auto italic">
          Kehadiran Anda adalah berkah dan kebahagiaan terindah bagi kami.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* ── 1. AKAD NIKAH CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 sm:p-7 shadow-sm space-y-4"
        >
          <div className="flex items-center justify-between border-b border-[#2D2F2E]/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#637061] font-bold">
              ACARA 01 &bull; AKAD NIKAH
            </span>
            <span className="text-[9px] font-serif uppercase px-2.5 py-0.5 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[#2D2F2E]">
              Janji Suci
            </span>
          </div>

          <h3 className="text-2xl font-serif font-medium text-[#2D2F2E] tracking-wide">
            {akad.title || 'Akad Nikah'}
          </h3>

          <div className="space-y-2.5 text-xs text-[#2D2F2E]/80 font-serif">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#637061] shrink-0" />
              <span>{akad.date}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#637061] shrink-0" />
              <span>{akad.time}</span>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#637061] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#2D2F2E]">{akad.venue}</p>
                <p className="text-[11px] text-[#2D2F2E]/65 leading-relaxed">{akad.address}</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={akad.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full bg-[#F4F0EA] hover:bg-[#637061] hover:text-white border border-[#2D2F2E]/15 text-xs font-mono font-medium uppercase tracking-wider text-[#2D2F2E] flex items-center justify-center gap-2 transition-all duration-300 shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Buka Google Maps</span>
            </a>
          </div>
        </motion.div>

        {/* ── 2. RESEPSI CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 sm:p-7 shadow-sm space-y-4"
        >
          <div className="flex items-center justify-between border-b border-[#2D2F2E]/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#637061] font-bold">
              ACARA 02 &bull; SYUKURAN RESEPSI
            </span>
            <span className="text-[9px] font-serif uppercase px-2.5 py-0.5 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[#2D2F2E]">
              Perayaan
            </span>
          </div>

          <h3 className="text-2xl font-serif font-medium text-[#2D2F2E] tracking-wide">
            {resepsi.title || 'Resepsi Pernikahan'}
          </h3>

          <div className="space-y-2.5 text-xs text-[#2D2F2E]/80 font-serif">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#637061] shrink-0" />
              <span>{resepsi.date}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#637061] shrink-0" />
              <span>{resepsi.time}</span>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#637061] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#2D2F2E]">{resepsi.venue}</p>
                <p className="text-[11px] text-[#2D2F2E]/65 leading-relaxed">{resepsi.address}</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={resepsi.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full bg-[#F4F0EA] hover:bg-[#637061] hover:text-white border border-[#2D2F2E]/15 text-xs font-mono font-medium uppercase tracking-wider text-[#2D2F2E] flex items-center justify-center gap-2 transition-all duration-300 shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Buka Google Maps</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
