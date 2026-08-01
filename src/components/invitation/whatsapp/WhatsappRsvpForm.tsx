'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCheck, MessageSquare, Sparkles } from 'lucide-react';

interface WhatsappRsvpFormProps {
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

export default function WhatsappRsvpForm({ initialGuestName = '' }: WhatsappRsvpFormProps) {
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
      message: 'Selamat untuk Fahreiza & Amanda! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin 💍✨',
      timestamp: '09:15',
    },
    {
      id: '2',
      name: 'Siti Rahma',
      attendance: 'Hadir',
      guestsCount: 1,
      message: 'Barakallahu lakuma wa baraka alaikuma wa jamaa bainakuma fii khair! Tidak sabar hadir di ballroom.',
      timestamp: '09:42',
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
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#25D366]" />
          <h2 className="text-base font-bold text-white tracking-wide uppercase">
            Konfirmasi RSVP &amp; WA Group Chat Messages
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">{messagesList.length} Messages</span>
      </div>

      {/* RSVP DM Chat Input Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#111B21] border border-zinc-800 rounded-3xl p-5 space-y-4 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            SEND WA RSVP CHAT
          </span>
          <span className="text-[10px] text-emerald-400 font-mono">Realtime Chat Form</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-zinc-300 font-bold block mb-1">Nama Lengkap Anda</label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Masukkan nama Anda..."
              className="w-full bg-[#202C33] border border-zinc-800 rounded-2xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#25D366]"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-zinc-300 font-bold block mb-1">Konfirmasi Kehadiran</label>
              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value as 'Hadir' | 'Ragu' | 'Tidak Hadir')}
                className="w-full bg-[#202C33] border border-zinc-800 rounded-2xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#25D366]"
              >
                <option value="Hadir">Hadir (Attending)</option>
                <option value="Ragu">Masih Ragu (Maybe)</option>
                <option value="Tidak Hadir">Tidak Hadir (Regret)</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-zinc-300 font-bold block mb-1">Jumlah Tamu</label>
              <select
                value={guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="w-full bg-[#202C33] border border-zinc-800 rounded-2xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#25D366]"
              >
                <option value={1}>1 Orang</option>
                <option value={2}>2 Orang</option>
                <option value={3}>3 Orang</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-zinc-300 font-bold block mb-1">Pesan &amp; Ucapan Doa Restu</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik ucapan & doa restu di sini..."
              rows={3}
              className="w-full bg-[#202C33] border border-zinc-800 rounded-2xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#25D366] resize-none"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3.5 bg-[#25D366] hover:bg-emerald-400 text-black font-extrabold text-xs rounded-full flex items-center justify-center gap-2 transition-all shadow-md shadow-[#25D366]/30 cursor-pointer"
          >
            <Send className="w-4 h-4 fill-current" />
            <span>KIRIM PESAN RSVP WHATSAPP</span>
          </motion.button>
        </form>
      </motion.div>

      {/* Guest Chat Messages Feed */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
          Pesan Masuk dari Tamu Undangan
        </h3>

        <div className="space-y-3">
          <AnimatePresence>
            {messagesList.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-[#202C33] border border-zinc-800 rounded-2xl p-4 space-y-2 text-xs shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-white">{msg.name}</span>
                    <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 px-2 py-0.5 rounded font-mono">
                      {msg.attendance} ({msg.guestsCount} Pax)
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1">
                    {msg.timestamp} <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                  </span>
                </div>

                <p className="text-zinc-200 leading-relaxed font-sans">{msg.message}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
