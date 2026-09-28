'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';
import { EventDetail } from '@/types/invitation';
import ThreeDCardTilt from './ThreeDCardTilt';

interface ThreeDEventScheduleProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function ThreeDEventSchedule({ akad, resepsi }: ThreeDEventScheduleProps) {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto space-y-12 select-none relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-[0.3em]">
          <Calendar className="w-3 h-3 text-[#D4AF37]" />
          Waktu &amp; Lokasi Acara
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#2D3748] font-bold tracking-tight">
          Rangkaian Acara Pernikahan
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto pt-1 leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </p>
      </div>

      {/* 3D Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* AKAD CARD */}
        <ThreeDCardTilt maxTilt={14} className="h-full">
          <div className="h-full rounded-3xl bg-white/85 backdrop-blur-xl border-2 border-[#D4AF37]/40 shadow-[0_20px_45px_-15px_rgba(212,175,55,0.25)] p-7 sm:p-9 flex flex-col justify-between items-center text-center relative overflow-hidden group">
            {/* Top 3D Ribbon */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#F3CA65] to-[#B98929]" />

            <div className="space-y-6 w-full pt-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-[#F4E3E3] border border-[#D4AF37]/50 flex items-center justify-center shadow-md">
                <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B76E79] font-bold">
                  PROSESI SUCI
                </span>
                <h3 className="font-serif-cormorant text-3xl font-bold text-[#2D3748] mt-1">
                  {akad.title}
                </h3>
              </div>

              <div className="space-y-3 py-2 text-xs sm:text-sm text-zinc-700">
                <div className="flex items-center justify-center gap-2 font-medium">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{akad.date}</span>
                </div>
                <div className="flex items-center justify-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{akad.time}</span>
                </div>
                <div className="pt-2 border-t border-zinc-100 space-y-1">
                  <p className="font-serif-cormorant text-lg font-bold text-[#2D3748]">
                    {akad.venue}
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed max-w-xs mx-auto">
                    {akad.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Button with 3D Depth */}
            <div className="w-full pt-6">
              <a
                href={akad.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3CA65] to-[#B98929] text-[#2F1B05] font-bold text-xs uppercase tracking-widest shadow-[0_8px_20px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#2F1B05]" />
                <span>Petunjuk Arah (Google Maps)</span>
              </a>
            </div>
          </div>
        </ThreeDCardTilt>

        {/* RESEPSI CARD */}
        <ThreeDCardTilt maxTilt={14} className="h-full">
          <div className="h-full rounded-3xl bg-white/85 backdrop-blur-xl border-2 border-[#D4AF37]/40 shadow-[0_20px_45px_-15px_rgba(212,175,55,0.25)] p-7 sm:p-9 flex flex-col justify-between items-center text-center relative overflow-hidden group">
            {/* Top 3D Ribbon */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#B76E79] via-[#E2A0A9] to-[#B76E79]" />

            <div className="space-y-6 w-full pt-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-[#F4E3E3] border border-[#B76E79]/50 flex items-center justify-center shadow-md">
                <Sparkles className="w-8 h-8 text-[#B76E79]" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B76E79] font-bold">
                  PERAYAAN RESEPSI
                </span>
                <h3 className="font-serif-cormorant text-3xl font-bold text-[#2D3748] mt-1">
                  {resepsi.title}
                </h3>
              </div>

              <div className="space-y-3 py-2 text-xs sm:text-sm text-zinc-700">
                <div className="flex items-center justify-center gap-2 font-medium">
                  <Calendar className="w-4 h-4 text-[#B76E79]" />
                  <span>{resepsi.date}</span>
                </div>
                <div className="flex items-center justify-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-[#B76E79]" />
                  <span>{resepsi.time}</span>
                </div>
                <div className="pt-2 border-t border-zinc-100 space-y-1">
                  <p className="font-serif-cormorant text-lg font-bold text-[#2D3748]">
                    {resepsi.venue}
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed max-w-xs mx-auto">
                    {resepsi.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Button with 3D Depth */}
            <div className="w-full pt-6">
              <a
                href={resepsi.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-[#B76E79] via-[#D48995] to-[#995560] text-white font-bold text-xs uppercase tracking-widest shadow-[0_8px_20px_rgba(183,110,121,0.35)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Petunjuk Arah (Google Maps)</span>
              </a>
            </div>
          </div>
        </ThreeDCardTilt>
      </div>
    </section>
  );
}
