'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Send, Sparkles, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface CommentItem {
  id: string;
  name: string;
  relation: string;
  message: string;
  timeAgo: string;
  rating: number;
}

const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: '1',
    name: 'Budi & Family',
    relation: 'Sahabat Pengantin',
    message: 'Selamat Fahreiza dan Amanda! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Sangat bahagia melihat perjalanan cinta kalian!',
    timeAgo: '2 jam lalu',
    rating: 5,
  },
  {
    id: '2',
    name: 'Siti Rahma',
    relation: 'Rekan Kerja',
    message: 'Happy Wedding Amanda & Fahreiza! Lancar sampai hari H yaa 🎉✨',
    timeAgo: '5 jam lalu',
    rating: 5,
  },
  {
    id: '3',
    name: 'Dimas Setiawan',
    relation: 'Teman Kuliah',
    message: 'Selamat menempuh hidup baru sahabatku. Semoga langgeng hingga akhir hayat! 🥂',
    timeAgo: '1 hari lalu',
    rating: 5,
  },
  {
    id: '4',
    name: 'Annisa & Fajar',
    relation: 'Sahabat SMA',
    message: 'Congrats on your special day! Kirim doa terbaik buat kalian berdua ❤️',
    timeAgo: '2 hari lalu',
    rating: 5,
  },
];

export default function SpotifyReviews() {
  const [comments, setComments] = useState<CommentItem[]>(INITIAL_COMMENTS);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      name: name.trim(),
      relation: 'Tamu Undangan',
      message: message.trim(),
      timeAgo: 'Baru saja',
      rating: 5,
    };

    setComments([newComment, ...comments]);
    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-10 px-4 md:px-12 max-w-6xl mx-auto text-white space-y-6 select-none">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div className="space-y-1">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#1DB954] uppercase font-sans block">
            UCAPAN &amp; DOA RESTU
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-[#1DB954]" />
            <span>Spotify Fan Reviews &amp; Wishes</span>
          </h2>
        </div>

        <span className="text-xs text-zinc-400 font-mono">
          {comments.length} Ucapan Terkirim
        </span>
      </div>

      {/* 1. Horizontal Carousel Review Cards Track */}
      <div className="relative group w-full pt-2">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-24 bg-black/80 hover:bg-black/95 text-[#1DB954] flex items-center justify-center rounded-r-xl opacity-80 group-hover:opacity-100 transition-opacity border border-zinc-800 shadow-2xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="w-full flex items-center gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 pb-4 pt-2 px-2"
        >
          {comments.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#181818] hover:bg-[#282828] border border-zinc-800/90 rounded-2xl p-5 w-[300px] sm:w-[340px] md:w-[360px] shrink-0 space-y-3 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header: Avatar Initial, Name, Time, Star Rating */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1DB954]/20 text-[#1DB954] font-extrabold text-sm flex items-center justify-center border border-[#1DB954]/40 shrink-0">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white line-clamp-1">
                      {rev.name}
                    </h4>
                    <span className="text-[10px] text-zinc-400 font-sans block">
                      {rev.relation} &bull; {rev.timeAgo}
                    </span>
                  </div>
                </div>

                {/* 5 Green Spotify Stars */}
                <div className="flex items-center gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#1DB954] fill-current" />
                  ))}
                </div>
              </div>

              {/* Review Message Text */}
              <p className="text-xs text-zinc-300 leading-relaxed font-sans font-normal italic pl-1">
                "{rev.message}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-24 bg-black/80 hover:bg-black/95 text-[#1DB954] flex items-center justify-center rounded-l-xl opacity-80 group-hover:opacity-100 transition-opacity border border-zinc-800 shadow-2xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 2. Input Form Box (Placed BELOW Cards Slider) */}
      <div className="pt-2">
        <h4 className="text-sm font-bold text-zinc-300 mb-3 flex items-center gap-2 font-sans">
          <Heart className="w-4 h-4 text-[#1DB954]" />
          <span>Kirim Ucapan &amp; Doa Restu Anda</span>
        </h4>

        <form onSubmit={handleSubmit} className="space-y-4 bg-[#181818] p-5 md:p-6 rounded-2xl border border-zinc-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-[#121212] border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1DB954]"
            />
          </div>

          <textarea
            placeholder="Tuliskan ucapan & doa restu untuk kedua mempelai..."
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full bg-[#121212] border border-zinc-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#1DB954]"
          />

          <div className="flex items-center justify-between">
            {submitted ? (
              <span className="text-xs text-[#1DB954] font-bold flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Ucapan Anda berhasil terkirim!
              </span>
            ) : (
              <span className="text-xs text-zinc-500 font-mono">
                Pesan langsung tampil di slider ucapan di atas
              </span>
            )}

            <button
              type="submit"
              className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-extrabold text-xs px-6 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Ucapan</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
