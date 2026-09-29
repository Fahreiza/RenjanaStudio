'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, User, Users } from 'lucide-react';

interface JuncaRsvpFormProps {
  initialGuestName?: string;
}

interface GuestMessage {
  id: string;
  name: string;
  status: 'hadir' | 'tidak_hadir';
  pax: number;
  message: string;
  timestamp: string;
}

const INITIAL_MESSAGES: GuestMessage[] = [
  {
    id: 'msg-1',
    name: 'Dimas Prasetyo & Partner',
    status: 'hadir',
    pax: 2,
    message: 'Selamat berbahagia untuk Fahreiza & Amanda! Semoga selalu dilimpahkan keberkahan dan sakinah.',
    timestamp: '2 jam yang lalu',
  },
  {
    id: 'msg-2',
    name: 'Clarissa Maharani',
    status: 'hadir',
    pax: 1,
    message: 'Happy wedding both of you! Sangat tidak sabar untuk hadir merayakan hari bahagia ini.',
    timestamp: '5 jam yang lalu',
  },
  {
    id: 'msg-3',
    name: 'Bramantyo & Keluarga',
    status: 'tidak_hadir',
    pax: 0,
    message: 'Mohon maaf belum bisa hadir secara langsung, doa tulus kami selalu menyertai kedua mempelai.',
    timestamp: '1 hari yang lalu',
  },
];

/**
 * Editorial Architectural RSVP Form with Live Guest Messages Feed.
 */
export default function JuncaRsvpForm({
  initialGuestName = 'Tamu Undangan',
}: JuncaRsvpFormProps) {
  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir'>('hadir');
  const [pax, setPax] = useState<number>(2);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<GuestMessage[]>(INITIAL_MESSAGES);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMessage: GuestMessage = {
      id: `msg-${Date.now()}`,
      name: name.trim(),
      status: attendance,
      pax: attendance === 'hadir' ? pax : 0,
      message: message.trim(),
      timestamp: 'Baru saja',
    };

    setMessages([newMessage, ...messages]);
    setSubmitted(true);
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-[#080808] text-[#FBFBFB] select-none overflow-hidden">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ED3327] font-semibold block">
              05 // PROTOCOL &bull; RSVP &amp; WISHES
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
              Konfirmasi Kehadiran
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm tracking-wider uppercase leading-relaxed">
            Kehadiran dan doa restu Anda merupakan kehormatan terbesar bagi kami. Mohon konfirmasi kehadiran Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ════════ RSVP SUBMISSION FORM ════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs text-[#ED3327] font-bold tracking-widest uppercase">
                FORMULIR RSVP RESMI
              </span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase">
                EST. RESPONSE: INSTANT
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-300 block">
                  NAMA LENGKAP / TAMU:
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap Anda"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-sm focus:outline-hidden focus:border-[#ED3327] transition-colors"
                  />
                </div>
              </div>

              {/* Attendance Selection Pills */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-300 block">
                  KONFIRMASI KEHADIRAN:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('hadir')}
                    className={`py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold border transition-all text-center ${
                      attendance === 'hadir'
                        ? 'bg-[#ED3327] border-[#ED3327] text-white shadow-lg shadow-[#ED3327]/30'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    ✦ HADIR
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('tidak_hadir')}
                    className={`py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold border transition-all text-center ${
                      attendance === 'tidak_hadir'
                        ? 'bg-neutral-800 border-neutral-600 text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    ✕ BERHALANGAN
                  </button>
                </div>
              </div>

              {/* Number of Pax (If attending) */}
              {attendance === 'hadir' && (
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-300 block">
                    JUMLAH TAMU (PAX):
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <select
                      value={pax}
                      onChange={(e) => setPax(Number(e.target.value))}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-sm focus:outline-hidden focus:border-[#ED3327] transition-colors appearance-none cursor-pointer"
                    >
                      <option value={1} className="bg-[#121212] text-white">1 Orang</option>
                      <option value={2} className="bg-[#121212] text-white">2 Orang (Beserta Pasangan)</option>
                      <option value={3} className="bg-[#121212] text-white">3 Orang (Keluarga)</option>
                      <option value={4} className="bg-[#121212] text-white">4 Orang (Rombongan)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Wishes Message Textarea */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-300 block">
                  PESAN DOA &amp; UCAPAN:
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan selamat dan doa restu terbaik Anda..."
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-sm focus:outline-hidden focus:border-[#ED3327] transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#ED3327] hover:bg-[#d6261c] text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#ED3327]/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>KIRIM KONFIRMASI // SUBMIT RSVP</span>
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Konfirmasi dan ucapan Anda berhasil terkirim. Terima kasih!</span>
                </div>
              )}
            </form>
          </motion.div>

          {/* ════════ GUEST MESSAGES FEED ════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between max-h-[620px]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#ED3327]" />
                <span className="font-mono text-xs text-white font-bold tracking-widest uppercase">
                  BUKU TAMU &bull; ({messages.length}) UCAPAN
                </span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Scrollable messages container */}
            <div className="space-y-4 my-4 overflow-y-auto pr-2 max-h-[480px]">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-bold text-sm text-white">
                      {item.name}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                      {item.timestamp}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[9px]">
                    <span
                      className={`px-2 py-0.5 rounded-full ${
                        item.status === 'hadir'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                          : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                      }`}
                    >
                      {item.status === 'hadir' ? `✓ Hadir (${item.pax} Pax)` : '✕ Berhalangan'}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-neutral-300 leading-relaxed pt-1">
                    {item.message}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 font-mono text-[10px] text-neutral-500 uppercase tracking-widest text-center">
              PESAN DIPERBARUI SECARA REAL-TIME
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
