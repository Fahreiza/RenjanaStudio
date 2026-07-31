'use client';

import { EventDetail } from '@/types/invitation';
import { Calendar, Clock, MapPin, ExternalLink, Radio } from 'lucide-react';

interface TikTokEventScheduleProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function TikTokEventSchedule({ akad, resepsi }: TikTokEventScheduleProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-6 select-none space-y-6">
      {/* Header Section Title */}
      <div className="text-center space-y-1">
        <p className="text-xs font-mono font-extrabold tracking-widest uppercase">
          <span className="text-[#FE2C55]">RANGKAIAN </span>
          <span className="text-[#00F2FE]">ACARA</span>
        </p>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
          Jadwal Akad Nikah &amp; Resepsi
        </h3>
        <p className="text-xs text-zinc-400 max-w-md mx-auto">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
        </p>
      </div>

      {/* 2-Column Schedule Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Akad Nikah Card */}
        <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-5 relative overflow-hidden group hover:border-[#00F2FE] transition-colors">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <span className="bg-[#00F2FE] text-black text-[11px] font-extrabold px-3 py-1 rounded-full font-mono uppercase tracking-wider">
              AKAD NIKAH
            </span>
            <Radio className="w-4 h-4 text-[#00F2FE] animate-pulse" />
          </div>

          <div className="space-y-3 font-sans text-xs sm:text-sm text-zinc-200">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white">{akad.date}</p>
                <p className="text-[11px] text-zinc-400 font-mono">Hari &amp; Tanggal Utama</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white">{akad.time}</p>
                <p className="text-[11px] text-zinc-400 font-mono">Waktu Pelaksanaan</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white">{akad.venue}</p>
                <p className="text-xs text-zinc-400">{akad.address}</p>
              </div>
            </div>
          </div>

          {/* Google Maps Button */}
          <a
            href={akad.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#222222] hover:bg-[#00F2FE] hover:text-black text-white font-extrabold text-xs py-3 rounded-2xl border border-zinc-700 transition-all flex items-center justify-center gap-2 shadow"
          >
            <MapPin className="w-4 h-4" />
            <span>PETUNJUK LOKASI (GOOGLE MAPS)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Resepsi Card */}
        <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-5 relative overflow-hidden group hover:border-[#FE2C55] transition-colors">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <span className="bg-[#FE2C55] text-white text-[11px] font-extrabold px-3 py-1 rounded-full font-mono uppercase tracking-wider">
              RESEPSI PERNIKAHAN
            </span>
            <Radio className="w-4 h-4 text-[#FE2C55] animate-pulse" />
          </div>

          <div className="space-y-3 font-sans text-xs sm:text-sm text-zinc-200">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#FE2C55] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white">{resepsi.date}</p>
                <p className="text-[11px] text-zinc-400 font-mono">Hari &amp; Tanggal Pesta</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#FE2C55] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white">{resepsi.time}</p>
                <p className="text-[11px] text-zinc-400 font-mono">Waktu Pesta Resepsi</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#FE2C55] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white">{resepsi.venue}</p>
                <p className="text-xs text-zinc-400">{resepsi.address}</p>
              </div>
            </div>
          </div>

          {/* Google Maps Button */}
          <a
            href={resepsi.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#222222] hover:bg-[#FE2C55] hover:text-white text-white font-extrabold text-xs py-3 rounded-2xl border border-zinc-700 transition-all flex items-center justify-center gap-2 shadow"
          >
            <MapPin className="w-4 h-4" />
            <span>PETUNJUK LOKASI (GOOGLE MAPS)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
