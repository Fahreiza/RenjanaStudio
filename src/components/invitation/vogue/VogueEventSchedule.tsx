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

interface VogueEventScheduleProps {
  akad: EventDetails;
  resepsi: EventDetails;
}

export default function VogueEventSchedule({ akad, resepsi }: VogueEventScheduleProps) {
  return (
    <section className="relative w-full py-12 px-4 text-[#FAFAF8] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#B39871] font-mono block">
          THE ITINERARY // SCHEDULE
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#FAFAF8] uppercase">
          Wedding Events
        </h2>
        <div className="w-12 h-px bg-[#B39871] mx-auto my-2" />
        <p className="text-xs text-[#FAFAF8]/70 font-sans max-w-sm mx-auto italic">
          Rangkaian prosesi janji suci dan perayaan syukur kami.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* ── 1. AKAD NIKAH CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-4"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B39871] font-bold">
              PROGRAM 01 &bull; HOLY MATRIMONY
            </span>
            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#FAFAF8]">
              AKAD NIKAH
            </span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#FAFAF8] tracking-wide">
            {akad.title || 'Akad Nikah'}
          </h3>

          <div className="space-y-2.5 text-xs text-[#FAFAF8]/80 font-mono">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#B39871] shrink-0" />
              <span>{akad.date}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#B39871] shrink-0" />
              <span>{akad.time}</span>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#B39871] shrink-0 mt-0.5" />
              <div className="font-sans">
                <p className="font-bold text-[#FAFAF8]">{akad.venue}</p>
                <p className="text-[11px] text-[#FAFAF8]/60 leading-relaxed">{akad.address}</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={akad.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#FAFAF8] hover:text-[#0E0E0E] border border-white/15 text-xs font-mono font-bold uppercase tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Petunjuk Lokasi (Google Maps)</span>
            </a>
          </div>
        </motion.div>

        {/* ── 2. RESEPSI CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-4"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B39871] font-bold">
              PROGRAM 02 &bull; THE RECEPTION
            </span>
            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#FAFAF8]">
              RESEPSI
            </span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#FAFAF8] tracking-wide">
            {resepsi.title || 'Resepsi Pernikahan'}
          </h3>

          <div className="space-y-2.5 text-xs text-[#FAFAF8]/80 font-mono">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#B39871] shrink-0" />
              <span>{resepsi.date}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#B39871] shrink-0" />
              <span>{resepsi.time}</span>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#B39871] shrink-0 mt-0.5" />
              <div className="font-sans">
                <p className="font-bold text-[#FAFAF8]">{resepsi.venue}</p>
                <p className="text-[11px] text-[#FAFAF8]/60 leading-relaxed">{resepsi.address}</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={resepsi.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#FAFAF8] hover:text-[#0E0E0E] border border-white/15 text-xs font-mono font-bold uppercase tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Petunjuk Lokasi (Google Maps)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
