'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import { EventDetail } from '@/types/invitation';

interface EtherealEventScheduleProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function EtherealEventSchedule({ akad, resepsi }: EtherealEventScheduleProps) {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto space-y-12 select-none relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#A7B09A]/15 text-[#3F493D] border border-[#A7B09A]/30 text-[9px] uppercase font-bold tracking-[0.35em]">
          WEDDING ITINERARY
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#3F493D] font-normal tracking-wide">
          Waktu &amp; Lokasi Acara
        </h2>
        <div className="w-12 h-[1px] bg-[#C7A76C] mx-auto mt-2" />
        <p className="text-xs text-[#3F493D]/70 max-w-md mx-auto pt-1 leading-relaxed font-serif">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </p>
      </div>

      {/* 3D Arch Schedule Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-4xl mx-auto">
        {/* AKAD CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-t-full rounded-b-[36px] bg-[#FAF7F2] border border-[#C7A76C]/35 shadow-[0_20px_45px_-15px_rgba(184,173,160,0.45)] p-8 sm:p-10 flex flex-col justify-between items-center text-center relative overflow-hidden"
        >
          {/* Subtle Arch Inset Line */}
          <div className="absolute inset-2 rounded-t-full rounded-b-[30px] border border-[#C7A76C]/20 pointer-events-none" />

          <div className="space-y-6 w-full pt-6">
            <span className="text-sm">✿</span>
            <div>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C7A76C] font-bold block">
                THE SACRED UNION
              </span>
              <h3 className="font-serif-cormorant text-3xl font-normal text-[#3F493D] mt-1">
                {akad.title}
              </h3>
            </div>

            <div className="space-y-3 py-2 text-xs sm:text-sm text-[#3F493D]/80">
              <div className="flex items-center justify-center gap-2 font-medium">
                <Calendar className="w-4 h-4 text-[#C7A76C]" />
                <span>{akad.date}</span>
              </div>
              <div className="flex items-center justify-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-[#C7A76C]" />
                <span>{akad.time}</span>
              </div>
              <div className="pt-3 border-t border-[#C7A76C]/20 space-y-1">
                <p className="font-serif-cormorant text-lg font-bold text-[#3F493D]">
                  {akad.venue}
                </p>
                <p className="text-xs text-[#3F493D]/65 leading-relaxed max-w-xs mx-auto">
                  {akad.address}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full pt-6 z-10">
            <a
              href={akad.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-2xl bg-[#3F493D] text-[#FAF7F2] hover:bg-[#323B30] font-sans font-bold text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-all border border-[#C7A76C]/30"
            >
              <Navigation className="w-4 h-4 text-[#C7A76C]" />
              <span>Petunjuk Arah (Google Maps)</span>
            </a>
          </div>
        </motion.div>

        {/* RESEPSI CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="h-full rounded-t-full rounded-b-[36px] bg-[#FAF7F2] border border-[#C7A76C]/35 shadow-[0_20px_45px_-15px_rgba(184,173,160,0.45)] p-8 sm:p-10 flex flex-col justify-between items-center text-center relative overflow-hidden"
        >
          {/* Subtle Arch Inset Line */}
          <div className="absolute inset-2 rounded-t-full rounded-b-[30px] border border-[#C7A76C]/20 pointer-events-none" />

          <div className="space-y-6 w-full pt-6">
            <span className="text-sm">🌿</span>
            <div>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C7A76C] font-bold block">
                THE CELEBRATION
              </span>
              <h3 className="font-serif-cormorant text-3xl font-normal text-[#3F493D] mt-1">
                {resepsi.title}
              </h3>
            </div>

            <div className="space-y-3 py-2 text-xs sm:text-sm text-[#3F493D]/80">
              <div className="flex items-center justify-center gap-2 font-medium">
                <Calendar className="w-4 h-4 text-[#C7A76C]" />
                <span>{resepsi.date}</span>
              </div>
              <div className="flex items-center justify-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-[#C7A76C]" />
                <span>{resepsi.time}</span>
              </div>
              <div className="pt-3 border-t border-[#C7A76C]/20 space-y-1">
                <p className="font-serif-cormorant text-lg font-bold text-[#3F493D]">
                  {resepsi.venue}
                </p>
                <p className="text-xs text-[#3F493D]/65 leading-relaxed max-w-xs mx-auto">
                  {resepsi.address}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full pt-6 z-10">
            <a
              href={resepsi.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-2xl bg-[#3F493D] text-[#FAF7F2] hover:bg-[#323B30] font-sans font-bold text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-all border border-[#C7A76C]/30"
            >
              <Navigation className="w-4 h-4 text-[#C7A76C]" />
              <span>Petunjuk Arah (Google Maps)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
