'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { CornerDecor, ShuangXi } from './ChineseDecor';

interface EventInfo {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl?: string;
}

interface ChineseEventScheduleProps {
  akad: EventInfo;
  resepsi: EventInfo;
}

export default function ChineseEventSchedule({
  akad,
  resepsi,
}: ChineseEventScheduleProps) {
  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-6">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto mb-4 relative flex items-center justify-center text-[#FDFBF7]"
          >
            <ShuangXi />
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7] font-medium block">
            Save The Date
          </span>
          <h2 className="text-3xl md:text-4xl text-[#D4AF37] mb-2 font-serif uppercase tracking-widest font-bold">
            Jadwal Acara
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
            {/* Oriental Frame with shadow */}
            <div className="absolute inset-0 bg-[#4A0A0E]/80 backdrop-blur-sm shadow-lg border-2 border-[#D4AF37]/30 overflow-hidden">
              {/* Inner Decorative Border */}
              <div className="absolute inset-2 border border-[#D4AF37]/30" />
              {/* Corner Accents */}
              <CornerDecor position="tl" className="absolute -top-3 -left-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="tr" className="absolute -top-3 -right-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="bl" className="absolute -bottom-3 -left-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="br" className="absolute -bottom-3 -right-3 w-8 h-8 text-[#D4AF37]" />
            </div>

            <div className="relative z-10 space-y-6">
              <h3 className="font-serif text-3xl md:text-4xl text-[#FDFBF7] uppercase tracking-widest drop-shadow-sm mb-6">{akad.title}</h3>
              
              <div className="space-y-2 pb-6 border-b border-[#D4AF37]/30">
                <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-bold text-[#FDFBF7]">
                  {akad.date}
                </p>
                <p className="font-serif text-[#FDFBF7] text-lg">
                  {akad.time}
                </p>
              </div>
              
              <div className="space-y-3 pt-2 pb-8">
                <p className="font-serif text-xl text-[#FDFBF7] tracking-wide">
                  {akad.venue}
                </p>
                <p className="text-[10px] text-[#FDFBF7] leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest">
                  {akad.address}
                </p>
              </div>

              {akad.mapUrl && (
                <a
                  href={akad.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#FDFBF7] rounded-sm text-[10px] font-sans uppercase tracking-[0.2em] font-bold hover:bg-[#C19B2E] transition-colors shadow-md border border-[#D4AF37]/30"
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
            {/* Oriental Frame with shadow */}
            <div className="absolute inset-0 bg-[#4A0A0E]/80 backdrop-blur-sm shadow-lg border-2 border-[#D4AF37]/30 overflow-hidden">
              {/* Inner Decorative Border */}
              <div className="absolute inset-2 border border-[#D4AF37]/30" />
              {/* Corner Accents */}
              <CornerDecor position="tl" className="absolute -top-3 -left-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="tr" className="absolute -top-3 -right-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="bl" className="absolute -bottom-3 -left-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="br" className="absolute -bottom-3 -right-3 w-8 h-8 text-[#D4AF37]" />
            </div>

            <div className="relative z-10 space-y-6">
              <h3 className="font-serif text-3xl md:text-4xl text-[#FDFBF7] uppercase tracking-widest drop-shadow-sm mb-6">{resepsi.title}</h3>
              
              <div className="space-y-2 pb-6 border-b border-[#D4AF37]/30">
                <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-bold text-[#FDFBF7]">
                  {resepsi.date}
                </p>
                <p className="font-serif text-[#FDFBF7] text-lg">
                  {resepsi.time}
                </p>
              </div>
              
              <div className="space-y-3 pt-2 pb-8">
                <p className="font-serif text-xl text-[#FDFBF7] tracking-wide">
                  {resepsi.venue}
                </p>
                <p className="text-[10px] text-[#FDFBF7] leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest">
                  {resepsi.address}
                </p>
              </div>

              {resepsi.mapUrl && (
                <a
                  href={resepsi.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#FDFBF7] rounded-sm text-[10px] font-sans uppercase tracking-[0.2em] font-bold hover:bg-[#C19B2E] transition-colors shadow-md border border-[#D4AF37]/30"
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
