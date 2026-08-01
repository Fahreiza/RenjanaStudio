'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, Send, Vote, Heart, Repeat2 } from 'lucide-react';

interface GuestReply {
  id: string;
  name: string;
  attendance: 'Hadir' | 'Ragu-ragu' | 'Tidak Hadir';
  message: string;
  timestamp: string;
  likes: number;
}

interface TwitterRsvpFormProps {
  initialGuestName?: string;
}

export default function TwitterRsvpForm({ initialGuestName = 'Tamu Undangan' }: TwitterRsvpFormProps) {
  const [guestName, setGuestName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'Hadir' | 'Ragu-ragu' | 'Tidak Hadir'>('Hadir');
  const [paxCount, setPaxCount] = useState(1);
  const [message, setMessage] = useState('');

  const [replies, setReplies] = useState<GuestReply[]>([
    {
      id: '1',
      name: 'Budi Santoso',
      attendance: 'Hadir',
      message: 'Selamat untuk Fahreiza & Amanda! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. 🤲✨',
      timestamp: '2 jam lalu',
      likes: 12,
    },
    {
      id: '2',
      name: 'Siti Rahma',
      attendance: 'Hadir',
      message: 'MasyaAllah barakallah! Lancar-lancar ya nnti sampai hari H. See you soon! 🎉',
      timestamp: '5 jam lalu',
      likes: 8,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !message.trim()) return;

    const newReply: GuestReply = {
      id: Date.now().toString(),
      name: guestName,
      attendance,
      message,
      timestamp: 'Baru saja',
      likes: 1,
    };

    setReplies([newReply, ...replies]);
    setMessage('');
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Vote className="w-5 h-5 text-[#1DA1F2]" />
          <h2 className="text-base font-bold text-white tracking-wide uppercase">
            RSVP &amp; Buku Tamu (Poll &amp; Replies)
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">Live Tweet Poll</span>
      </div>

      {/* Tweet Poll / RSVP Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#15202B] border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 border border-[#1DA1F2]/40 flex items-center justify-center text-[#1DA1F2] font-bold text-sm">
            🗳️
          </div>
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-1">
              Konfirmasi Kehadiran Tamu (Poll)
              <CheckCircle2 className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2]" />
            </h3>
            <p className="text-xs text-zinc-400">@wedding_rsvp &bull; Official Poll</p>
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* Guest Name */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-zinc-400 block">Nama Tamu / Username</label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full bg-black/60 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#1DA1F2]"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          {/* Attendance Radio Options (Twitter Poll Style) */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-400 block">Apakah Anda akan hadir?</label>
            <div className="grid grid-cols-3 gap-2">
              {(['Hadir', 'Ragu-ragu', 'Tidak Hadir'] as const).map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setAttendance(opt)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    attendance === opt
                      ? 'bg-[#1DA1F2] text-white border-[#1DA1F2] shadow-md shadow-[#1DA1F2]/30'
                      : 'bg-black/40 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {opt === 'Hadir' ? '✅ Hadir' : opt === 'Ragu-ragu' ? '❓ Ragu' : '❌ Halangan'}
                </button>
              ))}
            </div>
          </div>

          {/* Pax Count Select */}
          {attendance === 'Hadir' && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-400 block">Jumlah Tamu yang Hadir</label>
              <select
                value={paxCount}
                onChange={(e) => setPaxCount(Number(e.target.value))}
                className="w-full bg-black/60 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#1DA1F2]"
              >
                <option value={1}>1 Orang</option>
                <option value={2}>2 Orang</option>
                <option value={3}>3 Orang</option>
              </select>
            </div>
          )}

          {/* Message Input (Tweet Composer Style) */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-zinc-400 block">Pesan Doa Restu (Tweet Reply)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full bg-black/60 border border-zinc-800 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#1DA1F2] resize-none"
              placeholder="Tuliskan ucapan dan doa restu untuk pengantin..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#1DA1F2]/20"
          >
            <Send className="w-4 h-4" />
            <span>Kirim Balasan (Tweet Reply RSVP)</span>
          </button>
        </form>
      </motion.div>

      {/* Guest Replies Thread Feed */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
          <MessageCircle className="w-4 h-4 text-[#1DA1F2]" />
          <span>Balasan Tamu ({replies.length} Replies)</span>
        </h3>

        <div className="space-y-3">
          {replies.map((reply) => (
            <motion.div
              key={reply.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#15202B] border border-zinc-800 rounded-xl p-4 space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">{reply.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-[#1DA1F2] font-semibold border border-[#1DA1F2]/30">
                    {reply.attendance}
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500">{reply.timestamp}</span>
              </div>
              <p className="text-zinc-200 leading-relaxed font-sans">{reply.message}</p>
              <div className="flex items-center gap-4 text-[10px] text-zinc-500 pt-2 border-t border-zinc-800/60">
                <span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-pink-500" /> {reply.likes} Likes
                </span>
                <span className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
                  <Repeat2 className="w-3.5 h-3.5" /> Retweet
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
