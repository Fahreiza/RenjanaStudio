'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Pin, Send, MessageCircle } from 'lucide-react';

interface PinComment {
  id: string;
  name: string;
  attendance: 'Hadir' | 'Ragu-ragu' | 'Tidak Hadir';
  message: string;
  timestamp: string;
}

interface PinterestRsvpFormProps {
  initialGuestName?: string;
}

export default function PinterestRsvpForm({ initialGuestName = 'Tamu Undangan' }: PinterestRsvpFormProps) {
  const [guestName, setGuestName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'Hadir' | 'Ragu-ragu' | 'Tidak Hadir'>('Hadir');
  const [paxCount, setPaxCount] = useState(1);
  const [message, setMessage] = useState('');

  const [comments, setComments] = useState<PinComment[]>([
    {
      id: '1',
      name: 'Rina Wijaya',
      attendance: 'Hadir',
      message: 'Selamat ya Fahreiza & Amanda! Semoga acaranya berjalan lancar dan penuh berkah! ❤️📌',
      timestamp: '1 jam lalu',
    },
    {
      id: '2',
      name: 'Dedi Kurniawan',
      attendance: 'Hadir',
      message: 'Barakallahulakuma! Sampai ketemu di resepsi ya kawan! 🎉',
      timestamp: '3 jam lalu',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !message.trim()) return;

    const newComment: PinComment = {
      id: Date.now().toString(),
      name: guestName,
      attendance,
      message,
      timestamp: 'Baru saja',
    };

    setComments([newComment, ...comments]);
    setMessage('');
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-[#E9E9E9] pb-3">
        <div className="flex items-center gap-2">
          <Pin className="w-5 h-5 text-[#E60023] fill-current" />
          <h2 className="text-base font-extrabold text-[#111111] tracking-wide uppercase">
            RSVP &amp; Buku Tamu (Pin Comments)
          </h2>
        </div>
        <span className="text-xs text-[#5F5F5F] font-mono">Pin Board RSVP</span>
      </div>

      {/* RSVP Board Form */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-[#E9E9E9] rounded-[32px] p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#E60023] uppercase tracking-wider flex items-center gap-1">
            <Pin className="w-3.5 h-3.5 fill-current" />
            KONFIRMASI KEHADIRAN BOARD
          </span>
          <span className="text-[10px] text-[#5F5F5F] font-mono font-bold">Official Form</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* Guest Name */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#5F5F5F] block">Nama Tamu / Pinterest Creator</label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full bg-[#FAFAFA] border border-[#E9E9E9] rounded-2xl px-4 py-3 text-xs text-[#111111] placeholder-zinc-400 focus:outline-none focus:border-[#E60023]"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          {/* Attendance Buttons */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#5F5F5F] block">Konfirmasi Kehadiran</label>
            <div className="grid grid-cols-3 gap-2">
              {(['Hadir', 'Ragu-ragu', 'Tidak Hadir'] as const).map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setAttendance(opt)}
                  className={`py-3 px-3 rounded-2xl border text-xs font-extrabold transition-all cursor-pointer ${
                    attendance === opt
                      ? 'bg-[#E60023] text-white border-[#E60023] shadow-md shadow-[#E60023]/30'
                      : 'bg-[#FAFAFA] text-[#111111] border-[#E9E9E9] hover:border-zinc-300'
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
              <label className="text-xs font-bold text-[#5F5F5F] block">Jumlah Tamu</label>
              <select
                value={paxCount}
                onChange={(e) => setPaxCount(Number(e.target.value))}
                className="w-full bg-[#FAFAFA] border border-[#E9E9E9] rounded-2xl px-4 py-3 text-xs text-[#111111] focus:outline-none focus:border-[#E60023]"
              >
                <option value={1}>1 Orang</option>
                <option value={2}>2 Orang</option>
                <option value={3}>3 Orang</option>
              </select>
            </div>
          )}

          {/* Message Input */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#5F5F5F] block">Pesan Doa Restu (Pin Comment)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full bg-[#FAFAFA] border border-[#E9E9E9] rounded-2xl p-3 text-xs text-[#111111] placeholder-zinc-400 focus:outline-none focus:border-[#E60023] resize-none"
              placeholder="Tulis ucapan selamat untuk pengantin..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#E60023] hover:bg-[#B6001A] text-white font-extrabold text-xs rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#E60023]/25"
          >
            <Send className="w-4 h-4" />
            <span>Kirim Komentar Pin RSVP</span>
          </button>
        </form>
      </motion.div>

      {/* Guest Comments Feed */}
      <div className="space-y-3">
        <h3 className="text-xs font-extrabold text-[#5F5F5F] uppercase tracking-wider flex items-center gap-1.5">
          <MessageCircle className="w-4 h-4 text-[#E60023]" />
          <span>Komentar Tamu ({comments.length} Pin Comments)</span>
        </h3>

        <div className="space-y-3">
          {comments.map((cmt) => (
            <motion.div
              key={cmt.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-[#E9E9E9] rounded-2xl p-4 space-y-2 text-xs shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-[#111111] text-sm">{cmt.name}</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#E60023]/10 text-[#E60023] font-bold border border-[#E60023]/30">
                    {cmt.attendance}
                  </span>
                </div>
                <span className="text-[10px] text-[#5F5F5F]">{cmt.timestamp}</span>
              </div>
              <p className="text-[#111111] leading-relaxed font-sans">{cmt.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
