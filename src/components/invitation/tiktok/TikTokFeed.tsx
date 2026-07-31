'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  MessageCircle,
  Share2,
  Music2,
  X,
  Send,
  Bookmark,
} from 'lucide-react';
import { GroomBrideInfo, EventDetail } from '@/types/invitation';

interface TikTokFeedProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  akad: EventDetail;
  guestName: string;
}

export default function TikTokFeed({ groom, bride, akad, guestName }: TikTokFeedProps) {
  const [likes, setLikes] = useState(18400);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleLike = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setFloatingHearts((prev) => [...prev, { id: Date.now(), x, y }]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== Date.now()));
    }, 1000);

    if (isLiked) {
      setLikes((l) => l - 1);
      setIsLiked(false);
    } else {
      setLikes((l) => l + 1);
      setIsLiked(true);
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Undangan Pernikahan TikTok FYP Fahreiza & Amanda: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section className="relative w-full max-w-md min-h-[92vh] sm:min-h-[95vh] h-[95vh] mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-800 text-white font-sans select-none flex flex-col justify-end">
      {/* Background Fullscreen Video / Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-wedding.webp"
          alt="TikTok Wedding Video"
          fill
          sizes="(max-width: 640px) 100vw, 448px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
      </div>

      {/* Top TikTok Header Bar */}
      <div className="absolute top-4 inset-x-0 z-20 flex items-center justify-between px-6 text-xs font-bold text-zinc-300">
        <span className="opacity-60">Following</span>
        <span className="text-white text-sm border-b-2 border-[#00F2FE] pb-0.5 font-extrabold tracking-wide">
          For You (FYP)
        </span>
        <span className="text-[#FE2C55] font-extrabold font-mono flex items-center gap-1 bg-[#FE2C55]/20 px-2 py-0.5 rounded-full border border-[#FE2C55]/40 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[#FE2C55]" />
          LIVE
        </span>
      </div>

      {/* Right Floating Action Sidebar */}
      <div className="absolute right-3 bottom-20 z-20 flex flex-col items-center gap-5 text-white">
        {/* Profile Avatar with Plus Follow Button */}
        <div className="relative group cursor-pointer" onClick={() => setIsFollowing(!isFollowing)}>
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src={groom.photoUrl}
              alt="TikTok Creator"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          {!isFollowing && (
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#FE2C55] flex items-center justify-center text-white text-xs font-bold shadow">
              +
            </div>
          )}
        </div>

        {/* Heart Like Button */}
        <button onClick={handleLike} className="flex flex-col items-center gap-1 group relative">
          <div className={`p-2.5 rounded-full bg-black/40 backdrop-blur ${isLiked ? 'text-[#FE2C55]' : 'text-white'}`}>
            <Heart className={`w-7 h-7 ${isLiked ? 'fill-current scale-110' : ''} transition-transform`} />
          </div>
          <span className="text-xs font-bold font-mono">{(likes / 1000).toFixed(1)}k</span>

          {/* Floating Hearts Animation */}
          {floatingHearts.map((h) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -80, scale: 1.5 }}
              transition={{ duration: 0.8 }}
              className="absolute -top-4 text-[#FE2C55] pointer-events-none"
            >
              <Heart className="w-6 h-6 fill-current" />
            </motion.div>
          ))}
        </button>

        {/* Comments Button */}
        <button onClick={() => setShowComments(true)} className="flex flex-col items-center gap-1">
          <div className="p-2.5 rounded-full bg-black/40 backdrop-blur text-white hover:text-[#00F2FE] transition-colors">
            <MessageCircle className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold font-mono">2.1k</span>
        </button>

        {/* Share WA Button */}
        <button onClick={handleShareWhatsApp} className="flex flex-col items-center gap-1">
          <div className="p-2.5 rounded-full bg-black/40 backdrop-blur text-white hover:text-[#00F2FE] transition-colors">
            <Share2 className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold font-mono">Share</span>
        </button>

        {/* Bookmark Button */}
        <button className="flex flex-col items-center gap-1">
          <div className="p-2.5 rounded-full bg-black/40 backdrop-blur text-white hover:text-[#00F2FE] transition-colors">
            <Bookmark className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold font-mono">Save</span>
        </button>

        {/* Spinning Vinyl Music Disc */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-zinc-700 animate-spin bg-zinc-900 shadow-xl" style={{ animationDuration: '6s' }}>
          <Image
            src="/assets/images/sm-WANITA.webp"
            alt="Music Disc"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Post Info Overlay */}
      <div className="relative z-10 p-5 space-y-2 max-w-[80%]">
        <div className="flex items-center gap-1.5">
          <h2 className="font-bold text-sm text-white">
            @{groom.name.toLowerCase()}_{bride.name.toLowerCase()}
          </h2>
          {/* Verified Blue Badge with White Checkmark */}
          <div className="w-4 h-4 rounded-full bg-[#00F2FE] text-black flex items-center justify-center shrink-0 p-0.5 shadow-sm">
            <svg className="w-2.5 h-2.5 stroke-black stroke-[3.5] fill-none" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        <p className="text-xs text-zinc-200 leading-snug">
          The Wedding of {groom.name} &amp; {bride.name}! 🎉 Special Invitation for <strong className="text-[#00F2FE]">{guestName}</strong> #FahreizaAmandaWedding2026 #WeddingTok #FYP
        </p>

        <div className="flex items-center gap-2 text-xs text-zinc-300 font-semibold pt-1">
          <Music2 className="w-3.5 h-3.5 animate-pulse text-[#00F2FE]" />
          <span className="truncate">Original Sound - Married Together (Romantic Piano)</span>
        </div>
      </div>

      {/* TikTok Comments Drawer Modal for RSVP */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 h-[68%] z-40 bg-[#121212] rounded-t-3xl border-t border-zinc-800 p-4 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Ucapan &amp; RSVP Tamu (2,108 comments)
              </span>
              <button onClick={() => setShowComments(false)} className="text-zinc-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto my-3 space-y-3 pr-1 text-xs font-sans">
              <div className="bg-zinc-900 p-3 rounded-xl space-y-1 border border-zinc-800">
                <span className="font-bold text-[#00F2FE]">@budi_kusuma</span>
                <p className="text-zinc-300">Selamat ya Fahreiza &amp; Amanda! Didoakan lancar terus sampai hari H! ❤️</p>
              </div>
              <div className="bg-zinc-900 p-3 rounded-xl space-y-1 border border-zinc-800">
                <span className="font-bold text-[#FE2C55]">@siti_nurhaliza</span>
                <p className="text-zinc-300">Aamiin Allahumma Aamiin. Turut bahagia banget liat kalian! 🔥🎉</p>
              </div>
              <div className="bg-zinc-900 p-3 rounded-xl space-y-1 border border-zinc-800">
                <span className="font-bold text-white">@{guestName.toLowerCase().replace(/\s+/g, '_')}</span>
                <p className="text-zinc-300">InsyaAllah saya hadir membawa kebahagiaan untuk kalian berdua!</p>
              </div>
            </div>

            {/* Comment Input */}
            <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
              <input
                type="text"
                placeholder="Tulis ucapan RSVP kamu..."
                className="flex-1 bg-zinc-900 text-xs px-4 py-2.5 rounded-full border border-zinc-700 text-white focus:outline-none focus:border-[#00F2FE]"
              />
              <button className="bg-gradient-to-r from-[#FE2C55] to-[#00F2FE] text-white p-2.5 rounded-full shadow">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
