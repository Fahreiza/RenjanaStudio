'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, Users, Send, Sparkles, HelpCircle, XCircle } from 'lucide-react';

interface SpotifyRsvpProps {
  initialGuestName?: string;
}

export default function SpotifyRsvp({ initialGuestName = '' }: SpotifyRsvpProps) {
  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState('1');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-10 px-4 md:px-12 max-w-5xl mx-auto text-white select-none">
      {/* Section Header */}
      <div className="space-y-1 mb-6">
        <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#1DB954] uppercase font-sans block">
          KONFIRMASI KEHADIRAN
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight flex items-center gap-2">
          <UserCheck className="w-6 h-6 text-[#1DB954]" />
          <span>Spotify Event RSVP</span>
        </h2>
      </div>

      {/* Main Spotify Style Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-[#181818] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954]/10 rounded-full blur-3xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* Guest Name Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
              Nama Tamu Undangan
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda..."
              required
              className="w-full bg-[#121212] border border-zinc-700 focus:border-[#1DB954] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
            />
          </div>

          {/* Attendance Selection Badges (Spotify Pill Buttons) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
              Konfirmasi Kehadiran
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Option Hadir */}
              <button
                type="button"
                onClick={() => setAttendance('hadir')}
                className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border text-xs font-bold transition-all ${
                  attendance === 'hadir'
                    ? 'bg-[#1DB954] border-[#1DB954] text-black shadow-lg scale-[1.02]'
                    : 'bg-[#121212] border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Hadir</span>
              </button>

              {/* Option Ragu-ragu */}
              <button
                type="button"
                onClick={() => setAttendance('ragu')}
                className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border text-xs font-bold transition-all ${
                  attendance === 'ragu'
                    ? 'bg-[#1DB954] border-[#1DB954] text-black shadow-lg scale-[1.02]'
                    : 'bg-[#121212] border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Ragu-ragu</span>
              </button>

              {/* Option Tidak Hadir */}
              <button
                type="button"
                onClick={() => setAttendance('tidak_hadir')}
                className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border text-xs font-bold transition-all ${
                  attendance === 'tidak_hadir'
                    ? 'bg-[#1DB954] border-[#1DB954] text-black shadow-lg scale-[1.02]'
                    : 'bg-[#121212] border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                <XCircle className="w-4 h-4" />
                <span>Tidak Hadir</span>
              </button>
            </div>
          </div>

          {/* Guest Count Selection */}
          {attendance === 'hadir' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-2"
            >
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#1DB954]" />
                <span>Jumlah Tamu yang Hadir</span>
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full bg-[#121212] border border-zinc-700 focus:border-[#1DB954] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang (Pasangan)</option>
                <option value="3">3 Orang</option>
                <option value="4">4 Orang (Keluarga)</option>
              </select>
            </motion.div>
          )}

          {/* Submit Button & Alert */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            {submitted ? (
              <span className="text-xs text-[#1DB954] font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Konfirmasi RSVP Anda berhasil disimpan!
              </span>
            ) : (
              <span className="text-xs text-zinc-500 font-mono">
                Data kehadiran langsung terhubung dengan panitia
              </span>
            )}

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#1DB954] hover:bg-[#1ed760] text-black font-extrabold text-xs px-8 py-3 rounded-full flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Konfirmasi RSVP</span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
