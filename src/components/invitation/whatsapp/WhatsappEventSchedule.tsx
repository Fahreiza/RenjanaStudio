'use client';

import { Calendar, Clock, MapPin, Navigation, CheckCheck, Map } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

interface WhatsappEventScheduleProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function WhatsappEventSchedule({ akad, resepsi }: WhatsappEventScheduleProps) {
  return (
    <section className="space-y-5">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
        <div className="flex items-center gap-2">
          <Map className="w-5 h-5 text-[#25D366]" />
          <h2 className="text-sm font-extrabold text-white tracking-wide uppercase">
            Jadwal Acara / WA Shared Location Cards
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">2 Shared Locations</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Akad Nikah Shared Location Chat Bubble */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="bg-[#202C33] border border-zinc-800 rounded-3xl p-5 space-y-4 shadow-xl relative overflow-hidden transition-all"
        >
          <div className="flex items-center justify-between border-b border-zinc-700/60 pb-2">
            <span className="text-xs font-black text-[#25D366] uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 fill-current" />
              AKAD NIKAH LOCATION
            </span>
            <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1">
              08:05 <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
            </span>
          </div>

          <h3 className="font-black text-lg text-white">{akad.title}</h3>

          <div className="space-y-3 text-xs text-zinc-200 bg-[#111B21] p-4 rounded-2xl border border-zinc-800">
            <div className="flex items-center gap-2.5 font-extrabold text-white">
              <Calendar className="w-4 h-4 text-[#25D366]" />
              <span>{akad.date}</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-300 font-medium">
              <Clock className="w-4 h-4 text-[#25D366]" />
              <span>{akad.time}</span>
            </div>
            <div className="flex items-start gap-2.5 text-zinc-300">
              <MapPin className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white">{akad.venue}</p>
                <p className="text-[11px] text-zinc-400 leading-relaxed">{akad.address}</p>
              </div>
            </div>
          </div>

          <a
            href={akad.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#25D366] hover:bg-emerald-400 text-black text-xs font-black rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/30 cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>Petunjuk Lokasi Google Maps (Akad)</span>
          </a>
        </motion.div>

        {/* Resepsi Pernikahan Shared Location Chat Bubble */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="bg-[#005C4B] border border-emerald-600/40 rounded-3xl p-5 space-y-4 shadow-xl relative overflow-hidden transition-all"
        >
          <div className="flex items-center justify-between border-b border-emerald-500/40 pb-2">
            <span className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 fill-current" />
              RESEPSI LOCATION
            </span>
            <span className="text-[10px] text-zinc-200 font-mono flex items-center gap-1">
              08:06 <CheckCheck className="w-3.5 h-3.5 text-sky-300" />
            </span>
          </div>

          <h3 className="font-black text-lg text-white">{resepsi.title}</h3>

          <div className="space-y-3 text-xs text-white bg-black/40 p-4 rounded-2xl border border-emerald-500/30">
            <div className="flex items-center gap-2.5 font-extrabold text-white">
              <Calendar className="w-4 h-4 text-[#25D366]" />
              <span>{resepsi.date}</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-200 font-medium">
              <Clock className="w-4 h-4 text-[#25D366]" />
              <span>{resepsi.time}</span>
            </div>
            <div className="flex items-start gap-2.5 text-zinc-200">
              <MapPin className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white">{resepsi.venue}</p>
                <p className="text-[11px] text-zinc-300 leading-relaxed">{resepsi.address}</p>
              </div>
            </div>
          </div>

          <a
            href={resepsi.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#25D366] hover:bg-emerald-400 text-black text-xs font-black rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/30 cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>Petunjuk Lokasi Google Maps (Resepsi)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
