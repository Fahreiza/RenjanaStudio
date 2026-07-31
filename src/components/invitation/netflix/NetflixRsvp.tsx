'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, UserCheck, Users, HelpCircle, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NetflixRsvpProps {
  initialGuestName: string;
}

export default function NetflixRsvp({ initialGuestName }: NetflixRsvpProps) {
  const [guestName, setGuestName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'ragu' | 'absen'>('hadir');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E50914', '#FFFFFF', '#333333'],
      });
    } catch (e) {}
  };

  return (
    <section id="rsvp" className="py-4 md:py-6 px-4 md:px-12 max-w-4xl mx-auto space-y-6 text-white bg-[#141414]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#181818] border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl space-y-6 relative overflow-hidden"
      >
        {/* Top Netflix Red Line Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-[#E50914]" />

        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#E50914] font-bold">
            RSVP ONLINE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-white">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            Mohon konfirmasi kehadiran Anda untuk membantu kami menyambut Anda dengan terbaik.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-black/60 border border-[#E50914]/40 rounded-2xl p-8 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-[#E50914] mx-auto animate-bounce" />
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Konfirmasi Kehadiran Terkirim!</h3>
              <p className="text-xs text-zinc-300">
                Terima kasih <strong className="text-[#E50914]">{guestName}</strong> telah melakukan konfirmasi kehadiran.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs text-[#E50914] underline font-semibold pt-2"
            >
              Ubah konfirmasi kehadiran
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans">
            {/* Guest Name Input */}
            <div>
              <label className="block text-zinc-300 font-semibold mb-1.5">Nama Tamu Undangan *</label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Masukkan Nama Anda"
                className="w-full bg-[#141414] border border-zinc-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#E50914] transition-colors"
              />
            </div>

            {/* Attendance Selection Radio Cards */}
            <div>
              <label className="block text-zinc-300 font-semibold mb-1.5">Konfirmasi Kehadiran *</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setAttendance('hadir')}
                  className={`flex flex-col items-center gap-1.5 p-3.5 rounded-xl border transition-all ${
                    attendance === 'hadir'
                      ? 'bg-[#E50914] text-white border-[#E50914] font-bold shadow-lg'
                      : 'bg-[#141414] text-zinc-400 border-zinc-700 hover:border-zinc-500'
                  }`}
                >
                  <UserCheck className="w-5 h-5" />
                  <span>Hadir</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('ragu')}
                  className={`flex flex-col items-center gap-1.5 p-3.5 rounded-xl border transition-all ${
                    attendance === 'ragu'
                      ? 'bg-amber-600 text-white border-amber-600 font-bold shadow-lg'
                      : 'bg-[#141414] text-zinc-400 border-zinc-700 hover:border-zinc-500'
                  }`}
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>Ragu-ragu</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('absen')}
                  className={`flex flex-col items-center gap-1.5 p-3.5 rounded-xl border transition-all ${
                    attendance === 'absen'
                      ? 'bg-zinc-700 text-white border-zinc-700 font-bold shadow-lg'
                      : 'bg-[#141414] text-zinc-400 border-zinc-700 hover:border-zinc-500'
                  }`}
                >
                  <XCircle className="w-5 h-5" />
                  <span>Tidak Hadir</span>
                </button>
              </div>
            </div>

            {/* Guest Count */}
            {attendance === 'hadir' && (
              <div>
                <label className="block text-zinc-300 font-semibold mb-1.5">Jumlah Tamu *</label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-[#141414] border border-zinc-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#E50914]"
                >
                  <option value={1}>1 Orang (Saya Sendiri)</option>
                  <option value={2}>2 Orang (Dengan Pasangan)</option>
                  <option value={3}>3 Orang (Keluarga)</option>
                  <option value={4}>4 Orang (Keluarga Besar)</option>
                </select>
              </div>
            )}

            {/* Wishes Textarea */}
            <div>
              <label className="block text-zinc-300 font-semibold mb-1.5">Pesan &amp; Ucapan Restu</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                className="w-full bg-[#141414] border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E50914] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#E50914] hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-xl transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Konfirmasi Kehadiran</span>
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
