'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Heart, Sparkles, MessageSquare, UserCheck, HelpCircle, XCircle } from 'lucide-react';

interface MinimalistRsvpFormProps {
  initialGuestName?: string;
}

interface GuestMessage {
  id: string;
  name: string;
  attendance: 'Hadir' | 'Ragu' | 'Tidak Hadir';
  guestsCount: number;
  message: string;
  timestamp: string;
}

export default function MinimalistRsvpForm({ initialGuestName = '' }: MinimalistRsvpFormProps) {
  const [guestName, setGuestName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'Hadir' | 'Ragu' | 'Tidak Hadir'>('Hadir');
  const [guestsCount, setGuestsCount] = useState(1);
  const [message, setMessage] = useState('');

  const [messagesList, setMessagesList] = useState<GuestMessage[]>([
    {
      id: '1',
      name: 'Budi Santoso',
      attendance: 'Hadir',
      guestsCount: 2,
      message: 'Selamat untuk Fahreiza & Amanda! Semoga menjadi keluarga sakinah, mawaddah, warahmah. Aamiin 🌿✨',
      timestamp: '09:15 AM',
    },
    {
      id: '2',
      name: 'Siti Rahma',
      attendance: 'Hadir',
      guestsCount: 1,
      message: 'Barakallahu lakuma wa baraka alaikuma! Tidak sabar hadir menyaksikan akad nikah kalian.',
      timestamp: '10:30 AM',
    },
    {
      id: '3',
      name: 'Dini & Partner',
      attendance: 'Hadir',
      guestsCount: 2,
      message: 'Turut bahagia atas pernikahan kalian. Semoga selalu dilimpahkan keberkahan dan kebahagiaan!',
      timestamp: '11:45 AM',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !message.trim()) return;

    const newMsg: GuestMessage = {
      id: Date.now().toString(),
      name: guestName,
      attendance,
      guestsCount,
      message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessagesList([newMsg, ...messagesList]);
    setMessage('');
  };

  return (
    <section className="space-y-10 overflow-hidden w-full max-w-xl mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="text-center space-y-1.5">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7F9481] font-bold block">
          Buku Tamu &amp; Konfirmasi
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#C48B96] font-bold">
          RSVP &amp; Doa Restu
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70 mt-2" />
        <p className="text-xs text-zinc-500 max-w-xs mx-auto pt-1 font-serif italic">
          Kehadiran dan doa restu Anda merupakan karunia yang sangat berarti bagi kami.
        </p>
      </div>

      {/* LUXURIOUS FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/95 border-2 border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-md relative overflow-hidden"
      >
        {/* Top Gold Accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#7F9481] via-[#D4AF37] to-[#C48B96]" />

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Guest Name Field */}
          <div>
            <label className="text-[11px] text-[#7F9481] font-extrabold uppercase tracking-widest block mb-1.5">
              Nama Lengkap Tamu Undangan
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="w-full bg-[#F9F6F0] border border-[#7F9481]/30 rounded-2xl px-4 py-3.5 text-xs text-[#2D3748] placeholder-zinc-400 focus:outline-none focus:border-[#7F9481] focus:ring-1 focus:ring-[#7F9481]"
              required
            />
          </div>

          {/* Attendance Interactive Visual Pills */}
          <div>
            <label className="text-[11px] text-[#7F9481] font-extrabold uppercase tracking-widest block mb-2">
              Konfirmasi Kehadiran
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setAttendance('Hadir')}
                className={`py-3 px-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                  attendance === 'Hadir'
                    ? 'bg-[#7F9481] text-white border-[#7F9481] shadow-lg shadow-[#7F9481]/30'
                    : 'bg-[#F9F6F0] text-zinc-600 border-[#7F9481]/20 hover:border-[#7F9481]'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Hadir</span>
              </button>

              <button
                type="button"
                onClick={() => setAttendance('Ragu')}
                className={`py-3 px-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                  attendance === 'Ragu'
                    ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-lg shadow-[#D4AF37]/30'
                    : 'bg-[#F9F6F0] text-zinc-600 border-[#7F9481]/20 hover:border-[#D4AF37]'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Ragu</span>
              </button>

              <button
                type="button"
                onClick={() => setAttendance('Tidak Hadir')}
                className={`py-3 px-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                  attendance === 'Tidak Hadir'
                    ? 'bg-[#C48B96] text-white border-[#C48B96] shadow-lg shadow-[#C48B96]/30'
                    : 'bg-[#F9F6F0] text-zinc-600 border-[#7F9481]/20 hover:border-[#C48B96]'
                }`}
              >
                <XCircle className="w-3.5 h-3.5" />
                <span>Absen</span>
              </button>
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="text-[11px] text-[#7F9481] font-extrabold uppercase tracking-widest block mb-1.5">
              Jumlah Tamu yang Hadir
            </label>
            <select
              value={guestsCount}
              onChange={(e) => setGuestsCount(Number(e.target.value))}
              className="w-full bg-[#F9F6F0] border border-[#7F9481]/30 rounded-2xl px-4 py-3.5 text-xs text-[#2D3748] focus:outline-none focus:border-[#7F9481]"
            >
              <option value={1}>1 Orang (Sendiri)</option>
              <option value={2}>2 Orang (Dengan Pasangan)</option>
              <option value={3}>3 Orang (Keluarga)</option>
            </select>
          </div>

          {/* Wishes Message Field */}
          <div>
            <label className="text-[11px] text-[#7F9481] font-extrabold uppercase tracking-widest block mb-1.5">
              Pesan &amp; Ucapan Doa Restu
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan harapan & ucapan selamat Anda di sini..."
              rows={3}
              className="w-full bg-[#F9F6F0] border border-[#7F9481]/30 rounded-2xl p-4 text-xs text-[#2D3748] placeholder-zinc-400 focus:outline-none focus:border-[#7F9481] focus:ring-1 focus:ring-[#7F9481] resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-[#7F9481] hover:bg-[#6e8270] text-white font-bold text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#7F9481]/30 cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#D4AF37]" />
            <span>KIRIM UCAPAN &amp; RSVP</span>
          </motion.button>
        </form>
      </motion.div>

      {/* LUXURIOUS GUEST WISHES FEED */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-extrabold text-[#7F9481] uppercase tracking-widest flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>Kartu Ucapan &amp; Doa Restu ({messagesList.length})</span>
          </h3>
          <span className="text-[10px] text-zinc-400 font-mono">Live Feedback</span>
        </div>

        <div className="space-y-3.5">
          <AnimatePresence>
            {messagesList.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white/90 border border-[#D4AF37]/30 rounded-3xl p-5 space-y-2.5 text-xs shadow-xl backdrop-blur-md relative overflow-hidden"
              >
                {/* Top Card Header */}
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    {/* Initials Avatar Bubble */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7F9481] to-[#6e8270] text-white font-serif font-bold text-xs flex items-center justify-center border-2 border-white shadow-md ring-1 ring-[#D4AF37]">
                      {msg.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#2D3748]">{msg.name}</h4>
                      <p className="text-[10px] text-zinc-400 font-mono">{msg.timestamp}</p>
                    </div>
                  </div>

                  {/* Attendance Badge Pill */}
                  <span
                    className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                      msg.attendance === 'Hadir'
                        ? 'bg-[#7F9481]/15 text-[#7F9481] border-[#7F9481]/30'
                        : msg.attendance === 'Ragu'
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/30'
                        : 'bg-[#C48B96]/15 text-[#C48B96] border-[#C48B96]/30'
                    }`}
                  >
                    {msg.attendance} ({msg.guestsCount} Pax)
                  </span>
                </div>

                {/* Message Body */}
                <p className="text-zinc-600 leading-relaxed font-serif italic text-xs pt-1">
                  &ldquo;{msg.message}&rdquo;
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
