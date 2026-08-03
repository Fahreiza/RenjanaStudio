'use client';

import { Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

interface MinimalistEventScheduleProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function MinimalistEventSchedule({ akad, resepsi }: MinimalistEventScheduleProps) {
  return (
    <section className="space-y-10 overflow-hidden w-full max-w-xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center space-y-1.5">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7F9481] font-bold block">
          Rangkaian Acara
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#C48B96] font-bold">
          Waktu &amp; Lokasi
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70 mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AKAD NIKAH CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 border border-[#D4AF37]/40 rounded-3xl p-6 space-y-4 shadow-2xl text-center relative backdrop-blur-md overflow-hidden"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7F9481] bg-[#7F9481]/15 border border-[#7F9481]/30 px-3.5 py-1 rounded-full inline-block">
            {akad.title}
          </span>

          <div className="space-y-2 text-xs text-zinc-600">
            <div className="flex items-center justify-center gap-2 font-serif text-base text-[#2D3748] font-bold">
              <Calendar className="w-4 h-4 text-[#7F9481]" />
              <span>{akad.date}</span>
            </div>
            <div className="flex items-center justify-center gap-2 font-medium text-zinc-500">
              <Clock className="w-4 h-4 text-[#7F9481]" />
              <span>{akad.time}</span>
            </div>
            <div className="space-y-1 pt-3 border-t border-zinc-100">
              <p className="font-bold text-sm text-[#2D3748] font-serif">{akad.venue}</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed max-w-xs mx-auto">{akad.address}</p>
            </div>
          </div>

          <a
            href={akad.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#7F9481] hover:bg-[#6e8270] text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 transition-all shadow-md shadow-[#7F9481]/20 cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#D4AF37]" />
            <span>Petunjuk Lokasi Google Maps</span>
          </a>
        </motion.div>

        {/* RESEPSI CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-white/90 border border-[#D4AF37]/40 rounded-3xl p-6 space-y-4 shadow-2xl text-center relative backdrop-blur-md overflow-hidden"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#C48B96] bg-[#C48B96]/15 border border-[#C48B96]/30 px-3.5 py-1 rounded-full inline-block">
            {resepsi.title}
          </span>

          <div className="space-y-2 text-xs text-zinc-600">
            <div className="flex items-center justify-center gap-2 font-serif text-base text-[#2D3748] font-bold">
              <Calendar className="w-4 h-4 text-[#C48B96]" />
              <span>{resepsi.date}</span>
            </div>
            <div className="flex items-center justify-center gap-2 font-medium text-zinc-500">
              <Clock className="w-4 h-4 text-[#C48B96]" />
              <span>{resepsi.time}</span>
            </div>
            <div className="space-y-1 pt-3 border-t border-zinc-100">
              <p className="font-bold text-sm text-[#2D3748] font-serif">{resepsi.venue}</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed max-w-xs mx-auto">{resepsi.address}</p>
            </div>
          </div>

          <a
            href={resepsi.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#C48B96] hover:bg-[#b37a85] text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 transition-all shadow-md shadow-[#C48B96]/20 cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#D4AF37]" />
            <span>Petunjuk Lokasi Google Maps</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
