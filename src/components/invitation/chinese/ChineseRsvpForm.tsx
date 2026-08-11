'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, HelpCircle, XCircle } from 'lucide-react';
import Image from 'next/image';

interface ChineseRsvpFormProps {
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

export default function ChineseRsvpForm({ initialGuestName = '' }: ChineseRsvpFormProps) {
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
    <section className="relative overflow-hidden bg-transparent px-4 py-6">
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto opacity-70 mb-4 relative"
          >
            <span className="text-[#FDFBF7] font-bold text-4xl leading-none flex items-center justify-center">囍</span>
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7] font-medium block">
            Buku Tamu
          </span>
            <h2 className="text-3xl md:text-4xl text-[#D4AF37] mb-2 font-serif uppercase tracking-widest font-bold">
              Konfirmasi Kehadiran
            </h2>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-[#4A0A0E]/80 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-lg border-2 border-[#D4AF37]/30 mb-16 relative overflow-hidden"
        >
          {/* Subtle Arch Background inside form */}
          <div className="absolute inset-x-2 top-2 bottom-2 border border-[#D4AF37]/30 rounded-lg pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[9px] text-[#FDFBF7] uppercase tracking-widest font-semibold">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className="w-full bg-[#8A151B]/50 border border-[#D4AF37]/30 rounded-lg px-5 py-4 text-sm text-[#FDFBF7] placeholder-[#a69785] focus:outline-none focus:border-[#D4AF37]/30 focus:ring-1 focus:ring-[#D4AF37] transition-all shadow-inner"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] text-[#FDFBF7] uppercase tracking-widest font-semibold">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setAttendance('Hadir')}
                  className={`py-3 sm:py-4 px-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center justify-center gap-2 border ${
                    attendance === 'Hadir'
                      ? 'bg-[#D4AF37] text-white border-[#D4AF37]/30 shadow-md'
                      : 'bg-transparent text-[#FDFBF7] border-[#D4AF37]/30 hover:border-[#D4AF37]/30'
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 ${attendance === 'Hadir' ? 'text-white' : 'text-[#FDFBF7]'}`} strokeWidth={1.5} />
                  <span>Hadir</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('Ragu')}
                  className={`py-3 sm:py-4 px-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center justify-center gap-2 border ${
                    attendance === 'Ragu'
                      ? 'bg-[#D4AF37] text-white border-[#D4AF37]/30 shadow-md'
                      : 'bg-transparent text-[#FDFBF7] border-[#D4AF37]/30 hover:border-[#D4AF37]/30'
                  }`}
                >
                  <HelpCircle className={`w-4 h-4 ${attendance === 'Ragu' ? 'text-white' : 'text-[#FDFBF7]'}`} strokeWidth={1.5} />
                  <span>Ragu</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('Tidak Hadir')}
                  className={`py-3 sm:py-4 px-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center justify-center gap-2 border ${
                    attendance === 'Tidak Hadir'
                      ? 'bg-[#D4AF37] text-white border-[#D4AF37]/30 shadow-md'
                      : 'bg-transparent text-[#FDFBF7] border-[#D4AF37]/30 hover:border-[#D4AF37]/30'
                  }`}
                >
                  <XCircle className={`w-4 h-4 ${attendance === 'Tidak Hadir' ? 'text-white' : 'text-[#FDFBF7]'}`} strokeWidth={1.5} />
                  <span>Absen</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] text-[#FDFBF7] uppercase tracking-widest font-semibold">
                Jumlah Tamu
              </label>
              <select
                value={guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="w-full bg-[#8A151B]/50 border border-[#D4AF37]/30 rounded-lg px-5 py-4 text-sm text-[#FDFBF7] focus:outline-none focus:border-[#D4AF37]/30 focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none shadow-inner"
              >
                <option value={1}>1 Orang (Sendiri)</option>
                <option value={2}>2 Orang (Dengan Pasangan)</option>
                <option value={3}>3+ Orang (Keluarga)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] text-[#FDFBF7] uppercase tracking-widest font-semibold">
                Pesan &amp; Ucapan
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan doa restu untuk kedua mempelai..."
                rows={4}
                className="w-full bg-[#8A151B]/50 border border-[#D4AF37]/30 rounded-lg px-5 py-4 text-sm text-[#FDFBF7] placeholder-[#a69785] focus:outline-none focus:border-[#D4AF37]/30 focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none shadow-inner"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-[#D4AF37] hover:bg-[#6c5b43] text-white text-[10px] uppercase tracking-[0.25em] font-bold rounded-lg flex items-center justify-center gap-3 transition-colors relative overflow-hidden group shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim Pesan</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Guest Book Feed */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4">
            <h3 className="text-[10px] font-bold text-[#FDFBF7] uppercase tracking-[0.3em] flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>Kartu Ucapan ({messagesList.length})</span>
            </h3>
          </div>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <AnimatePresence>
              {messagesList.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#4A0A0E]/80 backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/30 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#4A0A0E]/80 backdrop-blur-sm border border-[#D4AF37]/30 text-[#FDFBF7] font-serif font-light text-xl flex items-center justify-center">
                        {msg.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-[#FDFBF7] leading-none mb-1 font-bold">{msg.name}</h4>
                        <p className="text-[9px] text-[#a69785] font-sans tracking-widest uppercase">{msg.timestamp}</p>
                      </div>
                    </div>
                    
                    <span
                      className={`text-[8px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                        msg.attendance === 'Hadir'
                          ? 'bg-[#D4AF37]/10 text-[#FDFBF7] border-[#D4AF37]/30'
                          : 'bg-[#8A151B]/50 text-[#a69785] border-[#D4AF37]/30'
                      }`}
                    >
                      {msg.attendance} ({msg.guestsCount})
                    </span>
                  </div>

                  <p className="text-[#FDFBF7] leading-relaxed font-serif italic text-sm">
                    "{msg.message}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
