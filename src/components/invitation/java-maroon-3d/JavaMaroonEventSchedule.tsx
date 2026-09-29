import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import {
  GununganWayangSvg,
  AksaraJawaBadge,
  RonceMelatiBorder,
  GebyokCrownArch3D,
} from './JavaMaroonOrnaments';
import JavaMaroon3DCard from './JavaMaroon3DCard';

interface EventItem {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

interface JavaMaroonEventScheduleProps {
  akad: EventItem;
  resepsi: EventItem;
}

export default function JavaMaroonEventSchedule({ akad, resepsi }: JavaMaroonEventScheduleProps) {
  return (
    <section className="relative w-full py-10 px-4 text-[#FFF2A3] z-10">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <AksaraJawaBadge textJawa="ꦫꦼꦫꦺꦴꦚ꧀ꦕꦺꦤꦶꦁꦲꦢꦶꦕꦫ" latin="Reroncening Adicara" />
        <h2 className="text-3xl sm:text-4xl font-serif text-[#FFE29F] tracking-wide">
          Wekdal &amp; Sasana Palenggahan
        </h2>
        <p className="text-xs text-[#E2B755]/80 max-w-sm mx-auto font-serif italic">
          Reroncening adicara ijab qabul saha pawiwahan ingkang insya Allah badhe kalampahan ing:
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-md mx-auto">
        {/* ── 3D AKAD NIKAH CARD ── */}
        <JavaMaroon3DCard maxTilt={13} className="p-6 sm:p-7">
          {/* Top Gebyok Crown 3D Arch */}
          <div style={{ transform: 'translateZ(35px)' }} className="w-full mb-3">
            <GebyokCrownArch3D className="w-full h-8" />
          </div>

          {/* Side Ronce Melati Corner */}
          <div
            style={{ transform: 'translateZ(25px)' }}
            className="absolute top-3 right-3 pointer-events-none opacity-70"
          >
            <RonceMelatiBorder className="w-4 h-32" />
          </div>

          {/* Card Top Pill with Aksara Jawa (Spacious to prevent overlap) */}
          <div
            style={{ transform: 'translateZ(30px)' }}
            className="flex items-start justify-between border-b border-[#D4AF37]/35 pb-3.5 mb-5 gap-3"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-base font-serif leading-relaxed text-[#FFE29F] tracking-widest select-none block pb-1">
                ꦲꦏꦢ꧀ꦤꦶꦏꦃ
              </span>
              <span className="text-xs font-serif font-bold tracking-[0.18em] text-[#FFF2A3] uppercase">
                Adicara I : Akad Nikah (Ijab Qabul)
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#1A0205] border border-[#D4AF37]/50 text-[10px] text-[#E2B755] font-serif font-semibold whitespace-nowrap mt-1 shadow-xs">
              Sabtu Pahing
            </span>
          </div>

          <div style={{ transform: 'translateZ(25px)' }} className="space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#1A0205] border border-[#D4AF37]/40 text-[#E2B755] shadow-inner">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#E2B755]/80 font-serif">
                  Dinten / Tanggal
                </p>
                <p className="text-base font-serif font-bold text-[#FFF2A3]">{akad.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#1A0205] border border-[#D4AF37]/40 text-[#E2B755] shadow-inner">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#E2B755]/80 font-serif">
                  Wanci / Jam
                </p>
                <p className="text-base font-serif font-bold text-[#FFF2A3]">{akad.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#1A0205] border border-[#D4AF37]/40 text-[#E2B755] shadow-inner">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#E2B755]/80 font-serif">
                  Sasana Palenggahan
                </p>
                <p className="text-base font-serif font-bold text-[#FFF2A3]">{akad.venue}</p>
                <p className="text-xs text-[#E2B755]/80 font-serif leading-relaxed mt-1">
                  {akad.address}
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Button */}
          <div style={{ transform: 'translateZ(40px)' }} className="mt-6 pt-4 border-t border-[#D4AF37]/35">
            <a
              href={akad.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFF2A3] to-[#B8860B] text-[#3B070D] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <MapPin className="w-4 h-4 text-[#3B070D]" />
              <span>Petunjuk Lokasi (Google Maps)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#3B070D]" />
            </a>
          </div>
        </JavaMaroon3DCard>

        {/* ── 3D RESEPSI CARD ── */}
        <JavaMaroon3DCard maxTilt={13} className="p-6 sm:p-7">
          {/* Top Gebyok Crown 3D Arch */}
          <div style={{ transform: 'translateZ(35px)' }} className="w-full mb-3">
            <GebyokCrownArch3D className="w-full h-8" />
          </div>

          {/* Side Ronce Melati Corner */}
          <div
            style={{ transform: 'translateZ(25px)' }}
            className="absolute top-3 left-3 pointer-events-none opacity-70"
          >
            <RonceMelatiBorder className="w-4 h-32" />
          </div>

          {/* Card Top Pill with Aksara Jawa (Spacious to prevent overlap) */}
          <div
            style={{ transform: 'translateZ(30px)' }}
            className="flex items-start justify-between border-b border-[#D4AF37]/35 pb-3.5 mb-5 gap-3"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-base font-serif leading-relaxed text-[#FFE29F] tracking-widest select-none block pb-1">
                ꦥꦲꦂꦒꦾꦤ꧀ꦥꦮꦶꦮꦲꦤ꧀
              </span>
              <span className="text-xs font-serif font-bold tracking-[0.18em] text-[#FFF2A3] uppercase">
                Adicara II : Pahargyan Resepsi
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#1A0205] border border-[#D4AF37]/50 text-[10px] text-[#E2B755] font-serif font-semibold whitespace-nowrap mt-1 shadow-xs">
              Sabtu Pahing
            </span>
          </div>

          <div style={{ transform: 'translateZ(25px)' }} className="space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#1A0205] border border-[#D4AF37]/40 text-[#E2B755] shadow-inner">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#E2B755]/80 font-serif">
                  Dinten / Tanggal
                </p>
                <p className="text-base font-serif font-bold text-[#FFF2A3]">{resepsi.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#1A0205] border border-[#D4AF37]/40 text-[#E2B755] shadow-inner">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#E2B755]/80 font-serif">
                  Wanci / Jam
                </p>
                <p className="text-base font-serif font-bold text-[#FFF2A3]">{resepsi.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#1A0205] border border-[#D4AF37]/40 text-[#E2B755] shadow-inner">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#E2B755]/80 font-serif">
                  Sasana Palenggahan
                </p>
                <p className="text-base font-serif font-bold text-[#FFF2A3]">{resepsi.venue}</p>
                <p className="text-xs text-[#E2B755]/80 font-serif leading-relaxed mt-1">
                  {resepsi.address}
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Button */}
          <div style={{ transform: 'translateZ(40px)' }} className="mt-6 pt-4 border-t border-[#D4AF37]/35">
            <a
              href={resepsi.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFF2A3] to-[#B8860B] text-[#3B070D] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <MapPin className="w-4 h-4 text-[#3B070D]" />
              <span>Petunjuk Lokasi (Google Maps)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#3B070D]" />
            </a>
          </div>
        </JavaMaroon3DCard>
      </div>
    </section>
  );
}
