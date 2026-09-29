'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, ArrowUpRight } from 'lucide-react';
import { EventDetail } from '@/types/invitation';

interface JuncaEventScheduleProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

/**
 * Event Schedule Component inspired by Junca Studio's "Why Work With Us" numbered list.
 * Large minimalist numbers, monospace metadata, and high-impact action triggers.
 */
export default function JuncaEventSchedule({ akad, resepsi }: JuncaEventScheduleProps) {
  const events = [
    {
      index: '01',
      kicker: 'ACARA 01 // SAKRAMEN PERNIKAHAN',
      title: akad.title || 'Akad Nikah',
      date: akad.date,
      time: akad.time,
      venue: akad.venue,
      address: akad.address,
      mapUrl: akad.googleMapsUrl,
      tag: 'SACRED CEREMONY',
    },
    {
      index: '02',
      kicker: 'ACARA 02 // PERAYAAN RESEPSI',
      title: resepsi.title || 'Resepsi Pernikahan',
      date: resepsi.date,
      time: resepsi.time,
      venue: resepsi.venue,
      address: resepsi.address,
      mapUrl: resepsi.googleMapsUrl,
      tag: 'GRAND RECEPTION',
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-[#080808] text-[#FBFBFB] select-none overflow-hidden">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ED3327] font-semibold block">
              02 // SCHEDULE &bull; ITINERARY
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
              Jadwal &amp; Lokasi Acara
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm tracking-wider uppercase leading-relaxed">
            Rangkaian prosesi sakral yang akan diselenggarakan dengan penuh kehangatan dan rasa syukur.
          </p>
        </div>

        {/* Numbered Event Cards */}
        <div className="space-y-6 sm:space-y-8">
          {events.map((event, idx) => (
            <motion.article
              key={event.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative bg-[#121212] border border-white/15 hover:border-[#ED3327]/60 rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Number Kicker */}
                <div className="lg:col-span-2">
                  <span className="font-sans font-black text-5xl sm:text-7xl text-neutral-700 group-hover:text-[#ED3327] transition-colors leading-none">
                    {event.index}
                  </span>
                </div>

                {/* Event Name & Tag */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] sm:text-xs text-[#ED3327] font-semibold tracking-widest uppercase">
                      {event.kicker}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                      {event.tag}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300 pt-1">
                    <span className="flex items-center gap-1.5 text-white">
                      <Calendar className="w-4 h-4 text-[#ED3327]" />
                      <span>{event.date}</span>
                    </span>
                    <span className="text-neutral-600">&bull;</span>
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <Clock className="w-4 h-4 text-[#ED3327]" />
                      <span>{event.time}</span>
                    </span>
                  </div>
                </div>

                {/* Venue Details */}
                <div className="lg:col-span-3 space-y-1 text-xs font-mono text-neutral-400">
                  <p className="font-sans font-bold text-base text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#ED3327] shrink-0" />
                    <span>{event.venue}</span>
                  </p>
                  <p className="pl-5 text-neutral-400 text-[11px] leading-relaxed">
                    {event.address}
                  </p>
                </div>

                {/* Google Maps Direction Button */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end pt-2 lg:pt-0">
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-[#ED3327] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 transform group-hover:scale-105"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Petunjuk Arah</span>
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
