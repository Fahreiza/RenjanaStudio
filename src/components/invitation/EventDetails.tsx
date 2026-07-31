'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';
import { EventDetail } from '@/types/invitation';

interface EventDetailsProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function EventDetails({ akad, resepsi }: EventDetailsProps) {
  const handleAddToCalendar = (event: EventDetail) => {
    // Generate Google Calendar Link
    const title = encodeURIComponent(`Pernikahan Fahreiza & Amanda - ${event.title}`);
    const details = encodeURIComponent(`Hadir di acara ${event.title} Fahreiza & Amanda.`);
    const location = encodeURIComponent(`${event.venue}, ${event.address}`);
    // Date: 2026-11-21
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=20261121T080000Z/20261121T150000Z`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
          Rangkaian Acara
        </span>
        <h2 className="font-serif-cormorant text-4xl md:text-5xl text-[#2D3748] font-bold">
          Waktu & Lokasi Acara
        </h2>
        <div className="w-16 h-[2px] bg-[#B76E79] mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Akad Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#8A9A86]/20 flex flex-col justify-between space-y-6 text-center group hover:border-[#B76E79]/40 transition-colors"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF2ED] text-[#8A9A86] flex items-center justify-center mx-auto group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-300">
              <Calendar className="w-6 h-6" />
            </div>

            <h3 className="font-serif-cormorant text-3xl font-bold text-[#B76E79]">
              {akad.title}
            </h3>

            <div className="space-y-2 text-sm text-zinc-600 font-sans-jakarta">
              <p className="font-semibold text-[#2D3748] text-base">{akad.date}</p>
              <p className="flex items-center justify-center gap-1.5 text-zinc-500">
                <Clock className="w-4 h-4 text-[#8A9A86]" />
                {akad.time}
              </p>
            </div>

            <div className="pt-2 space-y-1">
              <p className="font-bold text-sm text-[#586955]">{akad.venue}</p>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                {akad.address}
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={akad.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#8A9A86] hover:bg-[#586955] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Petunjuk Lokasi</span>
            </a>
            <button
              onClick={() => handleAddToCalendar(akad)}
              className="flex items-center justify-center gap-2 bg-[#FAF7F2] border border-[#8A9A86]/40 hover:bg-[#EEF2ED] text-[#586955] text-xs font-semibold py-3 px-4 rounded-xl transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Ingatkan Saya</span>
            </button>
          </div>
        </motion.div>

        {/* Resepsi Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#8A9A86]/20 flex flex-col justify-between space-y-6 text-center group hover:border-[#B76E79]/40 transition-colors"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4E3E3] text-[#B76E79] flex items-center justify-center mx-auto group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-300">
              <Calendar className="w-6 h-6" />
            </div>

            <h3 className="font-serif-cormorant text-3xl font-bold text-[#B76E79]">
              {resepsi.title}
            </h3>

            <div className="space-y-2 text-sm text-zinc-600 font-sans-jakarta">
              <p className="font-semibold text-[#2D3748] text-base">{resepsi.date}</p>
              <p className="flex items-center justify-center gap-1.5 text-zinc-500">
                <Clock className="w-4 h-4 text-[#8A9A86]" />
                {resepsi.time}
              </p>
            </div>

            <div className="pt-2 space-y-1">
              <p className="font-bold text-sm text-[#586955]">{resepsi.venue}</p>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                {resepsi.address}
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={resepsi.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#B76E79] hover:bg-[#8A9A86] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Petunjuk Lokasi</span>
            </a>
            <button
              onClick={() => handleAddToCalendar(resepsi)}
              className="flex items-center justify-center gap-2 bg-[#FAF7F2] border border-[#B76E79]/40 hover:bg-[#F4E3E3] text-[#B76E79] text-xs font-semibold py-3 px-4 rounded-xl transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Ingatkan Saya</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
