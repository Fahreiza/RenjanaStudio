'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, MapPin, Clock } from 'lucide-react';
import { EventDetail, LoveStoryItem } from '@/types/invitation';

interface SpotifyTracklistProps {
  akad: EventDetail;
  resepsi: EventDetail;
  stories: LoveStoryItem[];
}

export default function SpotifyTracklist({ akad, resepsi, stories }: SpotifyTracklistProps) {
  const tracks = [
    {
      num: 1,
      title: stories[0]?.title || "Niat dan Ta'aruf",
      coverPhoto: '/assets/images/gallery-1.webp',
      desc: stories[0]?.description || "Kisah kami dimulai dari kesamaan niat. Tanpa proses yang berbelit, kami memilih jalan Ta'aruf untuk saling mengenal dalam koridor yang menjaga.",
      date: `Selasa, 20 Mei ${stories[0]?.year || '2025'}`,
      duration: '3:04',
    },
    {
      num: 2,
      title: stories[1]?.title || 'Lamaran',
      coverPhoto: '/assets/images/gallery-2.webp',
      desc: stories[1]?.description || 'Dengan Seserahan sebagai simbol kesiapan, kami mengikat janji di hadapan orang tua. Dua keluarga resmi mulai berjalan beriringan.',
      date: `Rabu, 10 September ${stories[1]?.year || '2025'}`,
      duration: '4:21',
    },
    {
      num: 3,
      title: stories[2]?.title || 'Sungkeman',
      coverPhoto: '/assets/images/gallery-3.webp',
      desc: stories[2]?.description || 'Sebelum babak baru dimulai, kami bersimpuh di kaki ayah dan ibu. Memohon maaf, mengucap syukur, dan meminta rida mereka untuk melepas kami membina rumah tangga.',
      date: `Selasa, 23 Desember ${stories[2]?.year || '2025'}`,
      duration: '5:38',
    },
    {
      num: 4,
      title: `Akad Nikah: ${akad.venue}`,
      coverPhoto: '/assets/images/hero-wedding.webp',
      desc: `Di hadapan Penghulu, Ijab Qabul diucapkan dengan satu tarikan napas yang tegas. Kata Sah bergema, dan dua takdir resmi menjadi satu. Alamat: ${akad.address}`,
      date: akad.date,
      duration: '3:55',
      mapsUrl: akad.googleMapsUrl,
      isHighlight: true,
    },
    {
      num: 5,
      title: `Resepsi Pernikahan: ${resepsi.venue}`,
      coverPhoto: '/assets/images/sm-WANITA.webp',
      desc: `Momen perayaan kebahagiaan bersama keluarga dan sahabat terkasih. Alamat: ${resepsi.address}`,
      date: resepsi.date,
      duration: '4:15',
      mapsUrl: resepsi.googleMapsUrl,
      isHighlight: true,
    },
  ];

  return (
    <section className="py-10 px-4 md:px-12 max-w-6xl mx-auto text-white bg-[#121212] select-none">
      {/* Header Section (Matches User Reference Image) */}
      <div className="space-y-1 mb-8">
        <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#1DB954] uppercase font-sans block">
          DAFTAR LAGU
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
          Kisah Cinta Kami
        </h2>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 border-b border-zinc-800/80 pb-3 text-xs font-bold text-zinc-400 uppercase tracking-widest px-3">
        <span className="col-span-1 text-center font-mono">#</span>
        <span className="col-span-8 md:col-span-9">JUDUL</span>
        <span className="col-span-3 md:col-span-2 text-right flex items-center justify-end gap-1">
          <Clock className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Track Items List */}
      <div className="divide-y divide-zinc-800/40 font-sans">
        {tracks.map((track, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className={`grid grid-cols-12 gap-4 items-center p-3.5 rounded-lg hover:bg-zinc-800/60 transition-colors group cursor-pointer ${
              track.isHighlight ? 'bg-zinc-900/40 border-l-4 border-[#1DB954]' : ''
            }`}
          >
            {/* Track Number & Hover Play Icon */}
            <div className="col-span-1 text-center text-zinc-400 font-mono text-sm font-semibold">
              <span className="group-hover:hidden">{track.num}</span>
              <Play className="w-4 h-4 text-[#1DB954] fill-current mx-auto hidden group-hover:block" />
            </div>

            {/* Thumbnail Photo + Title + Desc + Date */}
            <div className="col-span-8 md:col-span-9 flex items-start gap-4">
              {/* Track Cover Thumbnail */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden shrink-0 bg-zinc-800 shadow-md">
                <Image
                  src={track.coverPhoto}
                  alt={track.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & Content */}
              <div className="space-y-0.5 flex-1 pr-2">
                <h4 className="text-sm md:text-base font-bold text-white group-hover:text-[#1DB954] transition-colors flex items-center gap-2">
                  {track.title}
                  {track.isHighlight && (
                    <span className="bg-[#1DB954]/20 text-[#1DB954] text-[10px] font-bold px-2 py-0.5 rounded">
                      FEATURED EVENT
                    </span>
                  )}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 font-sans">
                  {track.desc}
                </p>
                <p className="text-[11px] text-zinc-500 font-sans pt-0.5">
                  {track.date}
                </p>
              </div>
            </div>

            {/* Duration / Maps Link */}
            <div className="col-span-3 md:col-span-2 text-right text-xs font-mono text-zinc-400">
              {track.mapsUrl ? (
                <a
                  href={track.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1DB954]/10 hover:bg-[#1DB954] text-[#1DB954] hover:text-black px-3 py-1 rounded-full font-bold transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Peta</span>
                </a>
              ) : (
                <span className="text-zinc-400">{track.duration}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
