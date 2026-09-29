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

interface JapandiRsvpFormProps {
  initialGuestName?: string;
}

export default function JapandiRsvpForm({ initialGuestName = '' }: JapandiRsvpFormProps) {
  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [pax, setPax] = useState('1');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [wishes, setWishes] = useState<WishMessage[]>([
    {
      id: '1',
      name: 'Arya & Kinanti',
      attendance: 'hadir',
      message: 'Selamat menempuh hidup baru Fahreiza & Amanda. Semoga senantiasa dinaungi kedamaian dan sakinah selamanya.',
      timestamp: '2 jam yang lalu',
    },
    {
      id: '2',
      name: 'Bintang Pratama',
      attendance: 'hadir',
      message: 'Barakallahu lakuma! Senang sekali melihat kalian berdua. Lancar sampai hari H ya!',
      timestamp: '3 jam yang lalu',
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
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#637061', '#C07D67', '#E7E1D8'],
        });
      } catch (err) {}
    }, 600);
  };

  return (
    <section className="relative w-full py-12 px-4 text-[#2D2F2E] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono block">
          KONFIRMASI // RSVP
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-wide text-[#2D2F2E]">
          Kehadiran &amp; Doa Restu
        </h2>
        <div className="w-10 h-px bg-[#637061]/40 mx-auto my-2" />
        <p className="text-xs text-[#2D2F2E]/70 font-serif max-w-sm mx-auto italic">
          Untaian doa restu Anda menjadi penyejuk langkah baru kami.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-8">
        {/* RSVP FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 sm:p-7 shadow-sm"
        >
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#F4F0EA] border border-[#637061]/30 flex items-center justify-center text-[#637061]">
                <CheckCircle2 className="w-8 h-8 text-[#637061]" />
              </div>
              <h3 className="text-xl font-serif font-medium text-[#2D2F2E]">Terima Kasih</h3>
              <p className="text-xs text-[#2D2F2E]/70 font-serif leading-relaxed">
                Konfirmasi dan doa restu Anda telah kami terima dengan penuh rasa syukur.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs font-serif underline text-[#637061] hover:text-[#2D2F2E]"
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-[#637061] uppercase tracking-wider mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Raden Arya Daniswara"
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[#2D2F2E] placeholder-[#2D2F2E]/40 text-sm font-serif focus:outline-none focus:border-[#637061]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#637061] uppercase tracking-wider mb-1.5">
                  Kepastian Kehadiran
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAttendance('hadir')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-serif transition-all ${
                      attendance === 'hadir'
                        ? 'bg-[#2D2F2E] text-white font-medium shadow-xs'
                        : 'bg-[#F4F0EA] text-[#2D2F2E]/70 border border-[#2D2F2E]/10 hover:border-[#2D2F2E]/30'
                    }`}
                  >
                    Akan Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('tidak_hadir')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-serif transition-all ${
                      attendance === 'tidak_hadir'
                        ? 'bg-[#2D2F2E] text-white font-medium shadow-xs'
                        : 'bg-[#F4F0EA] text-[#2D2F2E]/70 border border-[#2D2F2E]/10 hover:border-[#2D2F2E]/30'
                    }`}
                  >
                    Berhalangan
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('ragu')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-serif transition-all ${
                      attendance === 'ragu'
                        ? 'bg-[#2D2F2E] text-white font-medium shadow-xs'
                        : 'bg-[#F4F0EA] text-[#2D2F2E]/70 border border-[#2D2F2E]/10 hover:border-[#2D2F2E]/30'
                    }`}
                  >
                    Masih Ragu
                  </button>
                </div>
              </div>

              {attendance === 'hadir' && (
                <div>
                  <label className="block text-[11px] font-mono text-[#637061] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Jumlah Kehadiran</span>
                  </label>
                  <select
                    value={pax}
                    onChange={(e) => setPax(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[#2D2F2E] text-sm font-serif focus:outline-none focus:border-[#637061]"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-mono text-[#637061] uppercase tracking-wider mb-1.5">
                  Doa &amp; Ucapan
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan doa restu untuk kedua mempelai..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[#2D2F2E] placeholder-[#2D2F2E]/40 text-sm font-serif focus:outline-none focus:border-[#637061]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full bg-[#2D2F2E] hover:bg-[#637061] text-[#F4F0EA] font-mono font-medium text-xs uppercase tracking-widest shadow-xs transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Mengirimkan...' : 'Kirim Konfirmasi'}</span>
              </button>
            </form>
          )}
        </motion.div>

        {/* FEED OF WISHES */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#2D2F2E]/10 pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#637061] flex items-center gap-1.5 font-bold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>BUKU TAMU ({wishes.length})</span>
            </span>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white/80 border border-[#2D2F2E]/10 space-y-1.5 text-left"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-medium text-sm text-[#2D2F2E]">{item.name}</h4>
                  <span
                    className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      item.attendance === 'hadir'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                        : item.attendance === 'ragu'
                        ? 'bg-amber-50 text-amber-700 border-amber-300'
                        : 'bg-rose-50 text-rose-700 border-rose-300'
                    }`}
                  >
                    {item.attendance === 'hadir'
                      ? 'Hadir'
                      : item.attendance === 'ragu'
                      ? 'Ragu'
                      : 'Absen'}
                  </span>
                </div>
                <p className="text-xs text-[#2D2F2E]/80 font-serif leading-relaxed">{item.message}</p>
                <p className="text-[10px] text-[#2D2F2E]/40 font-mono">{item.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
