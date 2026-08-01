'use client';

import { Calendar, Clock, MapPin, Navigation, Pin, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

interface PinterestEventScheduleProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function PinterestEventSchedule({ akad, resepsi }: PinterestEventScheduleProps) {
  return (
    <section className="space-y-5 overflow-hidden w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
        <div className="flex items-center gap-2">
          <Pin className="w-5 h-5 text-[#E60023] fill-current" />
          <h2 className="text-base font-extrabold text-[#111111] tracking-wide uppercase">
            Jadwal Acara / Pinned Event Cards
          </h2>
        </div>
        <span className="text-xs text-zinc-500 font-mono font-bold">2 Saved Pins</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Akad Nikah Pin */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="bg-white border border-zinc-200 rounded-[32px] p-5 sm:p-6 space-y-4 shadow-[0_8px_25px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-[#E60023] uppercase tracking-wider flex items-center gap-1">
              <Pin className="w-3.5 h-3.5 fill-current" />
              AKAD NIKAH PIN
            </span>
            <button className="px-3.5 py-1 bg-[#E60023] text-white font-extrabold text-[10px] rounded-full shadow-md flex items-center gap-1">
              <Bookmark className="w-3 h-3 fill-current" />
              Save Pin
            </button>
          </div>

          <h3 className="font-black text-xl text-[#111111]">{akad.title}</h3>

          <div className="space-y-3 text-xs text-[#111111] bg-[#FAFAFA] p-4 rounded-2xl border border-zinc-200/80">
            <div className="flex items-center gap-2.5 font-extrabold text-[#111111]">
              <Calendar className="w-4 h-4 text-[#E60023]" />
              <span>{akad.date}</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-600 font-medium">
              <Clock className="w-4 h-4 text-[#E60023]" />
              <span>{akad.time}</span>
            </div>
            <div className="flex items-start gap-2.5 text-zinc-600">
              <MapPin className="w-4 h-4 text-[#E60023] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-[#111111]">{akad.venue}</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{akad.address}</p>
              </div>
            </div>
          </div>

          <a
            href={akad.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#E60023] hover:bg-[#B6001A] text-white text-xs font-extrabold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#E60023]/25"
          >
            <Navigation className="w-4 h-4" />
            <span>Petunjuk Lokasi Google Maps (Akad)</span>
          </a>
        </motion.div>

        {/* Resepsi Pernikahan Pin */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="bg-white border border-zinc-200 rounded-[32px] p-5 sm:p-6 space-y-4 shadow-[0_8px_25px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-[#E60023] uppercase tracking-wider flex items-center gap-1">
              <Pin className="w-3.5 h-3.5 fill-current" />
              RESEPSI PIN
            </span>
            <button className="px-3.5 py-1 bg-[#E60023] text-white font-extrabold text-[10px] rounded-full shadow-md flex items-center gap-1">
              <Bookmark className="w-3 h-3 fill-current" />
              Save Pin
            </button>
          </div>

          <h3 className="font-black text-xl text-[#111111]">{resepsi.title}</h3>

          <div className="space-y-3 text-xs text-[#111111] bg-[#FAFAFA] p-4 rounded-2xl border border-zinc-200/80">
            <div className="flex items-center gap-2.5 font-extrabold text-[#111111]">
              <Calendar className="w-4 h-4 text-[#E60023]" />
              <span>{resepsi.date}</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-600 font-medium">
              <Clock className="w-4 h-4 text-[#E60023]" />
              <span>{resepsi.time}</span>
            </div>
            <div className="flex items-start gap-2.5 text-zinc-600">
              <MapPin className="w-4 h-4 text-[#E60023] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-[#111111]">{resepsi.venue}</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{resepsi.address}</p>
              </div>
            </div>
          </div>

          <a
            href={resepsi.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#E60023] hover:bg-[#B6001A] text-white text-xs font-extrabold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#E60023]/25"
          >
            <Navigation className="w-4 h-4" />
            <span>Petunjuk Lokasi Google Maps (Resepsi)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
