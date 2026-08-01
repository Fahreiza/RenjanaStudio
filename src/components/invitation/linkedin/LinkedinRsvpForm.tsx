'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ThumbsUp, MessageSquare, UserCheck, Users, CornerDownRight } from 'lucide-react';

interface LinkedinRsvpFormProps {
  initialGuestName?: string;
}

interface CommentItem {
  id: string;
  name: string;
  headline: string;
  attendance: 'Hadir' | 'Ragu' | 'Tidak Hadir';
  guestsCount: number;
  message: string;
  likes: number;
  timestamp: string;
  isLiked?: boolean;
}

export default function LinkedinRsvpForm({ initialGuestName = '' }: LinkedinRsvpFormProps) {
  const [guestName, setGuestName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'Hadir' | 'Ragu' | 'Tidak Hadir'>('Hadir');
  const [guestsCount, setGuestsCount] = useState(1);
  const [message, setMessage] = useState('');

  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: '1',
      name: 'Ir. Hendra Kusuma, M.T.',
      headline: 'Senior Consultant &bull; Sahabat Keluarga',
      attendance: 'Hadir',
      guestsCount: 2,
      message: 'Selamat untuk Fahreiza & Amanda! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah serta selalu dilimpahi kebahagiaan.',
      likes: 4,
      timestamp: '2 jam lalu',
    },
    {
      id: '2',
      name: 'Dr. Sarah Amalia',
      headline: 'Medical Specialist &bull; Rekan Pengantin',
      attendance: 'Hadir',
      guestsCount: 1,
      message: 'Barakallahu lakuma wa baraka alaikuma! Selamat menempuh hidup baru sahabatku, bahagia selamanya.',
      likes: 2,
      timestamp: '5 jam lalu',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !message.trim()) return;

    const newItem: CommentItem = {
      id: Date.now().toString(),
      name: guestName,
      headline: 'Tamu Undangan &bull; Rekan Profesional',
      attendance,
      guestsCount,
      message,
      likes: 1,
      timestamp: 'Baru saja',
    };

    setComments([newItem, ...comments]);
    setMessage('');
  };

  const handleToggleLikeComment = (id: string) => {
    setComments(
      comments.map((item) => {
        if (item.id === id) {
          const isLiked = !item.isLiked;
          return {
            ...item,
            isLiked,
            likes: isLiked ? item.likes + 1 : item.likes - 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <section className="space-y-4 font-sans linkedin-theme">
      {/* Header Matched EXACTLY with Reference Screenshot */}
      <div className="space-y-0.5">
        <h2 className="text-lg font-semibold text-[#000000e6] tracking-tight">
          Komentar &amp; RSVP
        </h2>
        <p className="text-xs text-[#00000099] font-normal">Konfirmasi Kehadiran &amp; Ucapan Restu</p>
      </div>

      {/* LINKEDIN COMMENT INPUT BOX CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-4 shadow-xs"
      >
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Avatar + Input Header */}
          <div className="flex items-start gap-3">
            {/* Enlarged Avatar Icon Box */}
            <div className="w-11 h-11 rounded-full bg-zinc-100 border border-zinc-200 text-2xl flex items-center justify-center shrink-0 shadow-xs mt-0.5 select-none">
              🧕🏻
            </div>

            <div className="flex-1 space-y-2.5">
              {/* Guest Name Input */}
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Masukkan nama lengkap &amp; gelar Anda..."
                className="w-full bg-[#F8F9FA] border border-zinc-200 rounded-lg px-3.5 py-2.5 text-xs text-[#000000e6] placeholder-zinc-400 focus:outline-none focus:border-[#0A66C2] font-normal"
                required
              />

              {/* Attendance Status Selector Pills */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#00000099] block">Status Kehadiran:</label>
                <div className="flex items-center gap-1.5 flex-wrap text-xs">
                  <button
                    type="button"
                    onClick={() => setAttendance('Hadir')}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                      attendance === 'Hadir'
                        ? 'bg-[#0A66C2] text-white border-[#0A66C2]'
                        : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'
                    }`}
                  >
                    ✓ Hadir
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('Ragu')}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                      attendance === 'Ragu'
                        ? 'bg-[#0A66C2] text-white border-[#0A66C2]'
                        : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'
                    }`}
                  >
                    🤔 Ragu-ragu
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('Tidak Hadir')}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                      attendance === 'Tidak Hadir'
                        ? 'bg-zinc-800 text-white border-zinc-800'
                        : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'
                    }`}
                  >
                    ✕ Tidak Hadir
                  </button>
                </div>
              </div>

              {/* Guest Count Selector Pills */}
              <div className="space-y-1 pt-0.5">
                <label className="text-[11px] font-semibold text-[#00000099] block">Jumlah Tamu:</label>
                <div className="flex items-center gap-1.5 text-xs">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestsCount(num)}
                      className={`px-3 py-1 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                        guestsCount === num
                          ? 'bg-[#EDF3F8] text-[#0A66C2] border-[#0A66C2]'
                          : 'border-zinc-300 text-zinc-600 hover:bg-zinc-100'
                      }`}
                    >
                      {num} Orang
                    </button>
                  ))}
                </div>
              </div>

              {/* Comment Message Textarea */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tambahkan ucapan &amp; doa restu Anda..."
                rows={3}
                className="w-full bg-[#F8F9FA] border border-zinc-200 rounded-lg p-3 text-xs text-[#000000e6] placeholder-zinc-400 focus:outline-none focus:border-[#0A66C2] resize-none font-normal"
                required
              />

              {/* Submit Blue Pill Button */}
              <div className="flex justify-end pt-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs px-5 py-2 rounded-full shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Ucapan</span>
                </motion.button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>

      {/* LINKEDIN COMMENT FEED STREAM CARD CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-4 shadow-xs"
      >
        <div className="space-y-0.5 border-b border-zinc-100 pb-3">
          <h3 className="text-sm font-bold text-[#000000e6]">
            Semua Komentar &amp; Ucapan Restu ({comments.length})
          </h3>
          <p className="text-xs text-[#00000099] font-normal">Daftar ucapan dari kawan &amp; kerabat</p>
        </div>

        <div className="space-y-4 pt-1">
          <AnimatePresence>
            {comments.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-start gap-2.5 pb-3 border-b border-zinc-100 last:border-0 last:pb-0"
              >
                {/* User Avatar */}
                <div className="w-9 h-9 rounded-full bg-zinc-800 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  {item.name.charAt(0)}
                </div>

                {/* Comment Card Bubble Matched EXACTLY with LinkedIn Comments */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="bg-[#F2F4F7] rounded-2xl p-3 space-y-1">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <h4 className="font-bold text-xs text-[#000000e6] flex items-center gap-1 leading-tight">
                        {item.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] fill-current shrink-0" />
                        <span className="text-[#00000099] font-normal text-[11px]">&bull; 1st</span>
                      </h4>

                      <span className="text-[10px] bg-blue-50 text-[#0A66C2] border border-blue-200 px-2 py-0.5 rounded-full font-semibold">
                        {item.attendance} ({item.guestsCount} Pax)
                      </span>
                    </div>

                    <p className="text-[11px] text-[#00000099] font-normal leading-tight">
                      {item.headline}
                    </p>

                    <p className="text-xs text-[#000000e6] leading-relaxed font-normal pt-1">
                      {item.message}
                    </p>
                  </div>

                  {/* Comment Action Sub-Bar (Suka, Balas, Timestamp) */}
                  <div className="flex items-center gap-3 text-[11px] text-[#00000099] font-semibold px-2">
                    <button
                      onClick={() => handleToggleLikeComment(item.id)}
                      className={`hover:underline cursor-pointer ${item.isLiked ? 'text-[#0A66C2]' : ''}`}
                    >
                      Suka {item.likes > 0 && `(${item.likes})`}
                    </button>
                    <span>&bull;</span>
                    <button className="hover:underline cursor-pointer">Balas</button>
                    <span>&bull;</span>
                    <span className="font-normal text-[10px]">{item.timestamp}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
