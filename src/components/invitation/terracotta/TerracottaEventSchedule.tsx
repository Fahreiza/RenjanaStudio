'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface EventInfo {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl?: string;
}

interface TerracottaEventScheduleProps {
  akad: EventInfo;
  resepsi: EventInfo;
}

export default function TerracottaEventSchedule({
  akad,
  resepsi,
}: TerracottaEventScheduleProps) {
  return (
    <section className="py-16 mx-4 my-8 rounded-3xl relative overflow-hidden bg-[#F4EFEA]/90 backdrop-blur-md shadow-xl border border-[#C86B53]/30">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-12 h-12 mx-auto mb-4 relative flex items-center justify-center text-[#C86B53]"
          >
            {/* SVG Boho Sun/Flower Icon */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C86B53] font-medium block">
            Save The Date
          </span>
          <h2 
            className="text-5xl md:text-6xl text-[#5C3D2E] mb-2"
            style={{ fontFamily: 'var(--font-great-vibes)' }}
          >
            Rangkaian Acara
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* AKAD CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative p-6 sm:p-10 text-center flex flex-col items-center group"
          >
            {/* Arch Frame with shadow */}
            <div className="absolute inset-0 bg-[#F4EFEA] shadow-lg border border-[#C86B53]/40 rounded-t-[150px] overflow-hidden">
              {/* Inner Decorative Arch */}
              <div className="absolute inset-2 border border-[#C86B53]/20 rounded-t-[140px]" />
            </div>

            <div className="relative z-10 space-y-6">
              <h3 className="font-sans text-3xl md:text-4xl text-[#829379] uppercase tracking-widest drop-shadow-sm mb-6">{akad.title}</h3>
              
              <div className="space-y-2 pb-6 border-b border-[#C86B53]/30">
                <p className="font-serif text-[11px] uppercase tracking-[0.3em] font-bold text-[#C86B53]">
                  {akad.date}
                </p>
                <p className="font-sans text-[#5C3D2E] text-lg">
                  {akad.time}
                </p>
              </div>
              
              <div className="space-y-3 pt-2 pb-8">
                <p className="font-sans text-xl text-[#5C3D2E] tracking-wide">
                  {akad.venue}
                </p>
                <p className="text-[10px] text-[#C86B53] leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest">
                  {akad.address}
                </p>
              </div>

              {akad.mapUrl && (
                <a
                  href={akad.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C86B53] text-white rounded-full text-[10px] font-serif uppercase tracking-[0.2em] font-medium hover:bg-[#A6533D] transition-colors shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* RESEPSI CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative p-6 sm:p-10 text-center flex flex-col items-center group"
          >
            {/* Arch Frame with shadow */}
            <div className="absolute inset-0 bg-[#F4EFEA] shadow-lg border border-[#C86B53]/40 rounded-t-[150px] overflow-hidden">
              {/* Inner Decorative Arch */}
              <div className="absolute inset-2 border border-[#C86B53]/20 rounded-t-[140px]" />
            </div>

            <div className="relative z-10 space-y-6">
              <h3 className="font-sans text-3xl md:text-4xl text-[#829379] uppercase tracking-widest drop-shadow-sm mb-6">{resepsi.title}</h3>
              
              <div className="space-y-2 pb-6 border-b border-[#C86B53]/30">
                <p className="font-serif text-[11px] uppercase tracking-[0.3em] font-bold text-[#C86B53]">
                  {resepsi.date}
                </p>
                <p className="font-sans text-[#5C3D2E] text-lg">
                  {resepsi.time}
                </p>
              </div>
              
              <div className="space-y-3 pt-2 pb-8">
                <p className="font-sans text-xl text-[#5C3D2E] tracking-wide">
                  {resepsi.venue}
                </p>
                <p className="text-[10px] text-[#C86B53] leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest">
                  {resepsi.address}
                </p>
              </div>

              {resepsi.mapUrl && (
                <a
                  href={resepsi.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C86B53] text-white rounded-full text-[10px] font-serif uppercase tracking-[0.2em] font-medium hover:bg-[#A6533D] transition-colors shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
