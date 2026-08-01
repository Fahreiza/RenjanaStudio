'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin } from 'lucide-react';

interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

interface LinkedinEventScheduleProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function LinkedinEventSchedule({ akad, resepsi }: LinkedinEventScheduleProps) {
  const [akadAttending, setAkadAttending] = useState(true);
  const [resepsiAttending, setResepsiAttending] = useState(true);

  return (
    <section className="space-y-4 font-sans linkedin-theme">
      {/* Header Matched EXACTLY with Reference Screenshot 5 */}
      <div className="space-y-0.5">
        <h2 className="text-lg font-semibold text-[#000000e6] tracking-tight">
          Akad &amp; Resepsi
        </h2>
        <p className="text-xs text-[#00000099] font-normal">Acara</p>
      </div>

      {/* SINGLE CARD CONTAINER FOR BOTH AKAD & RESEPSI */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 rounded-2xl p-4 sm:p-5 space-y-5 shadow-xs"
      >
        {/* 1. AKAD NIKAH SECTION */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            {/* Calendar Tile Badge (Top Blue Banner + Number Body) */}
            <div className="w-14 shrink-0 rounded-lg overflow-hidden border border-zinc-200 bg-white text-center shadow-xs">
              <div className="bg-[#0A66C2] text-white text-[10px] font-bold uppercase py-1 tracking-wider">
                NOV
              </div>
              <div className="py-2 font-bold text-xl text-[#000000e6]">
                21
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-1 flex-1 min-w-0">
              <span className="text-[11px] font-bold text-[#0A66C2] uppercase tracking-wider block">
                AKAD NIKAH
              </span>

              <h3 className="font-bold text-base text-[#000000e6] leading-tight">
                {akad.venue}
              </h3>

              <p className="text-xs text-[#00000099] font-normal">
                {akad.date} &bull; {akad.time}
              </p>

              <p className="text-xs text-[#00000099] leading-snug font-normal pt-1">
                {akad.address}
              </p>
            </div>
          </div>

          {/* Action Buttons: ✓ Hadir & 📍 Buka Peta */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <button
              onClick={() => setAkadAttending(!akadAttending)}
              className={`border border-[#0A66C2] font-semibold text-xs px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                akadAttending
                  ? 'bg-blue-50 text-[#0A66C2]'
                  : 'bg-white text-[#0A66C2] hover:bg-blue-50'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>Hadir</span>
            </button>

            <a
              href={akad.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 font-semibold text-xs px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Buka Peta</span>
            </a>
          </div>
        </div>

        {/* DIVIDER LINE BETWEEN AKAD & RESEPSI */}
        <div className="border-b border-zinc-100" />

        {/* 2. RESEPSI SECTION */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            {/* Calendar Tile Badge (Top Blue Banner + Number Body) */}
            <div className="w-14 shrink-0 rounded-lg overflow-hidden border border-zinc-200 bg-white text-center shadow-xs">
              <div className="bg-[#0A66C2] text-white text-[10px] font-bold uppercase py-1 tracking-wider">
                NOV
              </div>
              <div className="py-2 font-bold text-xl text-[#000000e6]">
                21
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-1 flex-1 min-w-0">
              <span className="text-[11px] font-bold text-[#0A66C2] uppercase tracking-wider block">
                RESEPSI
              </span>

              <h3 className="font-bold text-base text-[#000000e6] leading-tight">
                {resepsi.venue}
              </h3>

              <p className="text-xs text-[#00000099] font-normal">
                {resepsi.date} &bull; {resepsi.time}
              </p>

              <p className="text-xs text-[#00000099] leading-snug font-normal pt-1">
                {resepsi.address}
              </p>
            </div>
          </div>

          {/* Action Buttons: ✓ Hadir & 📍 Buka Peta */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <button
              onClick={() => setResepsiAttending(!resepsiAttending)}
              className={`border border-[#0A66C2] font-semibold text-xs px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                resepsiAttending
                  ? 'bg-blue-50 text-[#0A66C2]'
                  : 'bg-white text-[#0A66C2] hover:bg-blue-50'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>Hadir</span>
            </button>

            <a
              href={resepsi.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 font-semibold text-xs px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Buka Peta</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
