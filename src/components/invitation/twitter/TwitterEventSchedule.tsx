'use client';

import { Calendar, Clock, MapPin, Navigation, Pin, CheckCircle2, MessageCircle, Repeat2, Heart, Share } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

interface TwitterEventScheduleProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function TwitterEventSchedule({ akad, resepsi }: TwitterEventScheduleProps) {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Pin className="w-5 h-5 text-[#1DA1F2]" />
          <h2 className="text-base font-bold text-white tracking-wide uppercase">
            Jadwal Acara / Pinned Event Tweets
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">2 Pinned Tweets</span>
      </div>

      {/* Akad Nikah Pinned Tweet */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#15202B] border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-lg"
      >
        {/* Pinned Label */}
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
          <Pin className="w-3.5 h-3.5 text-[#1DA1F2]" />
          <span>Pinned Tweet &bull; Akad Nikah</span>
        </div>

        {/* Tweet Author Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 border border-[#1DA1F2]/40 flex items-center justify-center text-[#1DA1F2] font-bold text-sm">
              💍
            </div>
            <div>
              <h3 className="font-bold text-sm text-white flex items-center gap-1">
                {akad.title}
                <CheckCircle2 className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2]" />
              </h3>
              <p className="text-xs text-zinc-400">@wedding_event &bull; Pinned Schedule</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 bg-sky-500/10 text-[#1DA1F2] border border-[#1DA1F2]/30 rounded-full font-semibold">
            Akad
          </span>
        </div>

        {/* Tweet Text Content */}
        <div className="space-y-3 text-sm text-zinc-200 leading-relaxed font-sans bg-black/40 p-4 rounded-xl border border-zinc-800">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Calendar className="w-4 h-4 text-[#1DA1F2]" />
            <span>{akad.date}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <Clock className="w-4 h-4 text-[#1DA1F2]" />
            <span>{akad.time}</span>
          </div>
          <div className="flex items-start gap-2 text-zinc-300">
            <MapPin className="w-4 h-4 text-[#1DA1F2] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white">{akad.venue}</p>
              <p className="text-xs text-zinc-400">{akad.address}</p>
            </div>
          </div>
        </div>

        {/* Map Action Button */}
        <a
          href={akad.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-[#1DA1F2] hover:bg-sky-500 text-white text-xs font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-md shadow-[#1DA1F2]/20"
        >
          <Navigation className="w-4 h-4" />
          <span>Petunjuk Lokasi Google Maps (Akad)</span>
        </a>

        {/* Tweet Interaction Footer */}
        <div className="flex items-center justify-between text-zinc-400 pt-2 border-t border-zinc-800/80 text-xs">
          <span className="flex items-center gap-1 hover:text-[#1DA1F2] cursor-pointer">
            <MessageCircle className="w-4 h-4" /> 128 Replies
          </span>
          <span className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
            <Repeat2 className="w-4 h-4" /> 412 Retweets
          </span>
          <span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer">
            <Heart className="w-4 h-4 fill-pink-500/20 text-pink-500" /> 1.8K Likes
          </span>
          <Share className="w-4 h-4 cursor-pointer hover:text-[#1DA1F2]" />
        </div>
      </motion.div>

      {/* Resepsi Pernikahan Pinned Tweet */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#15202B] border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-lg"
      >
        {/* Pinned Label */}
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
          <Pin className="w-3.5 h-3.5 text-[#1DA1F2]" />
          <span>Pinned Tweet &bull; Resepsi Pernikahan</span>
        </div>

        {/* Tweet Author Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 border border-[#1DA1F2]/40 flex items-center justify-center text-[#1DA1F2] font-bold text-sm">
              🎉
            </div>
            <div>
              <h3 className="font-bold text-sm text-white flex items-center gap-1">
                {resepsi.title}
                <CheckCircle2 className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2]" />
              </h3>
              <p className="text-xs text-zinc-400">@wedding_event &bull; Main Celebration</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 bg-sky-500/10 text-[#1DA1F2] border border-[#1DA1F2]/30 rounded-full font-semibold">
            Resepsi
          </span>
        </div>

        {/* Tweet Text Content */}
        <div className="space-y-3 text-sm text-zinc-200 leading-relaxed font-sans bg-black/40 p-4 rounded-xl border border-zinc-800">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Calendar className="w-4 h-4 text-[#1DA1F2]" />
            <span>{resepsi.date}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <Clock className="w-4 h-4 text-[#1DA1F2]" />
            <span>{resepsi.time}</span>
          </div>
          <div className="flex items-start gap-2 text-zinc-300">
            <MapPin className="w-4 h-4 text-[#1DA1F2] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white">{resepsi.venue}</p>
              <p className="text-xs text-zinc-400">{resepsi.address}</p>
            </div>
          </div>
        </div>

        {/* Map Action Button */}
        <a
          href={resepsi.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-[#1DA1F2] hover:bg-sky-500 text-white text-xs font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-md shadow-[#1DA1F2]/20"
        >
          <Navigation className="w-4 h-4" />
          <span>Petunjuk Lokasi Google Maps (Resepsi)</span>
        </a>

        {/* Tweet Interaction Footer */}
        <div className="flex items-center justify-between text-zinc-400 pt-2 border-t border-zinc-800/80 text-xs">
          <span className="flex items-center gap-1 hover:text-[#1DA1F2] cursor-pointer">
            <MessageCircle className="w-4 h-4" /> 245 Replies
          </span>
          <span className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
            <Repeat2 className="w-4 h-4" /> 890 Retweets
          </span>
          <span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer">
            <Heart className="w-4 h-4 fill-pink-500/20 text-pink-500" /> 3.2K Likes
          </span>
          <Share className="w-4 h-4 cursor-pointer hover:text-[#1DA1F2]" />
        </div>
      </motion.div>
    </section>
  );
}
