'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Calendar, MapPin, Clock } from 'lucide-react';
import { EventDetail, LoveStoryItem } from '@/types/invitation';

interface NetflixEpisodesProps {
  loveStories: LoveStoryItem[];
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function NetflixEpisodes({ loveStories, akad, resepsi }: NetflixEpisodesProps) {
  const episodes = [
    {
      epNumber: 1,
      title: 'Episode 1: First Meet',
      duration: '2021',
      description: loveStories[0]?.description || 'Takdir mempertemukan kami saat kegiatan bersama.',
      thumbnail: '/assets/images/hero-wedding.webp',
    },
    {
      epNumber: 2,
      title: 'Episode 2: The Proposal',
      duration: '2023 - 2025',
      description: loveStories[2]?.description || 'Mengikat janji suci lamaran di hadapan keluarga besar.',
      thumbnail: '/assets/images/gallery-1.webp',
    },
    {
      epNumber: 3,
      title: `Episode 3: ${akad.title}`,
      duration: `${akad.time}`,
      description: `Waktu: ${akad.date} | Tempat: ${akad.venue}, ${akad.address}`,
      thumbnail: '/assets/images/gallery-2.webp',
      mapsUrl: akad.googleMapsUrl,
    },
    {
      epNumber: 4,
      title: `Episode 4: ${resepsi.title}`,
      duration: `${resepsi.time}`,
      description: `Waktu: ${resepsi.date} | Tempat: ${resepsi.venue}, ${resepsi.address}`,
      thumbnail: '/assets/images/gallery-3.webp',
      mapsUrl: resepsi.googleMapsUrl,
    },
  ];

  return (
    <section id="episodes" className="py-4 md:py-6 px-4 md:px-12 max-w-6xl mx-auto space-y-8 text-white bg-[#141414]">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold font-sans">
          Episodes <span className="text-xs font-normal text-zinc-400 font-mono">Season 1</span>
        </h2>
        <span className="text-xs text-[#E50914] font-semibold uppercase tracking-wider">
          Wedding Series 2026
        </span>
      </div>

      <div className="space-y-6">
        {episodes.map((ep, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-[#E50914]/50 transition-all duration-300 group"
          >
            {/* Episode Thumbnail */}
            <div className="relative w-full md:w-56 h-36 rounded-lg overflow-hidden shrink-0 bg-zinc-800">
              <Image
                src={ep.thumbnail}
                alt={ep.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                {ep.duration}
              </span>
            </div>

            {/* Episode Content Info */}
            <div className="flex-1 space-y-2 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold font-sans group-hover:text-[#E50914] transition-colors">
                  {ep.title}
                </h3>
                <span className="text-xs text-zinc-500 font-mono">Ep. {ep.epNumber}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                {ep.description}
              </p>

              {ep.mapsUrl && (
                <div className="pt-2">
                  <a
                    href={ep.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#E50914] hover:underline"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Petunjuk Lokasi Google Maps</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
