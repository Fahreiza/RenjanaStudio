'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, Users } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WishMessage {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  message: string;
  timestamp: string;
}

interface VogueRsvpFormProps {
  initialGuestName?: string;
}

export default function VogueRsvpForm({ initialGuestName = '' }: VogueRsvpFormProps) {
  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [pax, setPax] = useState('1');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [wishes, setWishes] = useState<WishMessage[]>([
    {
      id: '1',
      name: 'Alexander & Valerie',
      attendance: 'hadir',
      message: 'So happy for both of you! Wishing Fahreiza & Amanda a lifetime of profound love and grace.',
      timestamp: '2 jam yang lalu',
    },
    {
      id: '2',
      name: 'Clarissa Natalia',
      attendance: 'hadir',
      message: 'Congratulations Fahreiza & Amanda! Looking forward to celebrating this beautiful evening together.',
      timestamp: '4 jam yang lalu',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newWish: WishMessage = {
        id: Date.now().toString(),
        name: name.trim(),
        attendance,
        message: message.trim(),
        timestamp: 'Baru saja',
      };

      setWishes([newWish, ...wishes]);
      setIsSubmitting(false);
      setSubmitted(true);
      setMessage('');

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#FAFAF8', '#B39871', '#555555'],
        });
      } catch (err) {}
    }, 600);
  };

  return (
    <section className="relative w-full py-12 px-4 text-[#FAFAF8] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#B39871] font-mono block">
          THE GUESTLIST // RSVP
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#FAFAF8] uppercase">
          RSVP &amp; Wishes
        </h2>
        <div className="w-12 h-px bg-[#B39871] mx-auto my-2" />
        <p className="text-xs text-[#FAFAF8]/70 font-sans max-w-sm mx-auto italic">
          Mohon konfirmasikan kehadiran Anda demi kenyamanan jamuan acara.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-8">
        {/* RSVP FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-[#B39871]">
                <CheckCircle2 className="w-8 h-8 text-[#B39871]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#FAFAF8]">RSVP Confirmed</h3>
              <p className="text-xs text-[#FAFAF8]/70 font-sans leading-relaxed">
                Terima kasih atas konfirmasi dan ucapan hangat Anda.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs font-mono underline text-[#B39871] hover:text-[#FAFAF8]"
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-[#B39871] uppercase tracking-wider mb-1.5">
                  Guest Name (Nama Lengkap)
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Alexander Danuarta"
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border border-white/15 text-[#FAFAF8] placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#B39871]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#B39871] uppercase tracking-wider mb-1.5">
                  Attendance (Kehadiran)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAttendance('hadir')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-mono transition-all ${
                      attendance === 'hadir'
                        ? 'bg-[#FAFAF8] text-[#0E0E0E] font-bold shadow-md'
                        : 'bg-[#0E0E0E] text-[#FAFAF8]/70 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('tidak_hadir')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-mono transition-all ${
                      attendance === 'tidak_hadir'
                        ? 'bg-[#FAFAF8] text-[#0E0E0E] font-bold shadow-md'
                        : 'bg-[#0E0E0E] text-[#FAFAF8]/70 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    Absen
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('ragu')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-mono transition-all ${
                      attendance === 'ragu'
                        ? 'bg-[#FAFAF8] text-[#0E0E0E] font-bold shadow-md'
                        : 'bg-[#0E0E0E] text-[#FAFAF8]/70 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    Ragu-ragu
                  </button>
                </div>
              </div>

              {attendance === 'hadir' && (
                <div>
                  <label className="block text-[11px] font-mono text-[#B39871] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Number of Guests (Jumlah Tamu)</span>
                  </label>
                  <select
                    value={pax}
                    onChange={(e) => setPax(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border border-white/15 text-[#FAFAF8] text-sm font-mono focus:outline-none focus:border-[#B39871]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-mono text-[#B39871] uppercase tracking-wider mb-1.5">
                  Wishes &amp; Blessings (Doa &amp; Ucapan)
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan dan harapan terbaik untuk kedua mempelai..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border border-white/15 text-[#FAFAF8] placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#B39871]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#FAFAF8] hover:bg-[#B39871] text-[#0E0E0E] hover:text-[#FAFAF8] font-mono font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Submitting...' : 'Confirm RSVP'}</span>
              </button>
            </form>
          )}
        </motion.div>

        {/* FEED OF WISHES */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B39871] flex items-center gap-1.5 font-bold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>GUESTBOOK ({wishes.length})</span>
            </span>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#141414] border border-white/10 space-y-1.5 text-left"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-sm text-[#FAFAF8]">{item.name}</h4>
                  <span
                    className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      item.attendance === 'hadir'
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40'
                        : item.attendance === 'ragu'
                        ? 'bg-amber-950/60 text-amber-300 border-amber-500/40'
                        : 'bg-rose-950/60 text-rose-300 border-rose-500/40'
                    }`}
                  >
                    {item.attendance === 'hadir'
                      ? 'Attending'
                      : item.attendance === 'ragu'
                      ? 'Tentative'
                      : 'Declined'}
                  </span>
                </div>
                <p className="text-xs text-[#FAFAF8]/80 font-sans leading-relaxed">{item.message}</p>
                <p className="text-[10px] text-[#FAFAF8]/40 font-mono">{item.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
