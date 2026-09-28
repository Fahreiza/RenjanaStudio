'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquareHeart, Send, CheckCircle2, User, Users, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import ThreeDCardTilt from './ThreeDCardTilt';

interface ThreeDRsvpFormProps {
  initialGuestName?: string;
}

interface GuestWish {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  message: string;
  timeAgo: string;
}

export default function ThreeDRsvpForm({ initialGuestName = '' }: ThreeDRsvpFormProps) {
  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [wishes, setWishes] = useState<GuestWish[]>([
    {
      id: '1',
      name: 'Dimas Anggara & Keluarga',
      attendance: 'hadir',
      message: 'Barakallahu lakum wa baraka alaikum! Selamat menempuh hidup baru Fahreiza & Amanda. Semoga menjadi keluarga sakinah mawaddah warahmah.',
      timeAgo: '1 jam yang lalu',
    },
    {
      id: '2',
      name: 'Clarissa Putri',
      attendance: 'hadir',
      message: 'Aaaa terharu banget liat undangannya keren parah 3D! Selamat ya Amanda & Fahreiza, langgeng sampai maut memisahkan.',
      timeAgo: '3 jam yang lalu',
    },
    {
      id: '3',
      name: 'Rian Pratama',
      attendance: 'ragu',
      message: 'Insya Allah diusahakan hadir bro Fahreiza! Lancar-lancar sampai hari H ya.',
      timeAgo: '5 jam yang lalu',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newWish: GuestWish = {
        id: Date.now().toString(),
        name,
        attendance,
        message,
        timeAgo: 'Baru saja',
      };

      setWishes([newWish, ...wishes]);
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#B76E79', '#FAF7F2'],
        });
      } catch (e) {}

      setTimeout(() => {
        setIsSuccess(false);
        setMessage('');
      }, 3000);
    }, 800);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto space-y-12 select-none relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-[0.3em]">
          <MessageSquareHeart className="w-3 h-3 text-[#D4AF37]" />
          Konfirmasi Kehadiran &amp; Doa Restu
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#2D3748] font-bold tracking-tight">
          Buku Tamu &amp; RSVP
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto pt-1 leading-relaxed">
          Mohon konfirmasikan kehadiran Anda dan tinggalkan pesan doa restu bagi kedua mempelai.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RSVP FORM 3D CARD */}
        <div className="lg:col-span-6">
          <ThreeDCardTilt maxTilt={10} className="w-full">
            <div className="rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-[#D4AF37]/40 p-6 sm:p-8 shadow-[0_20px_45px_-15px_rgba(212,175,55,0.25)] space-y-6">
              <h3 className="font-serif-cormorant text-2xl font-bold text-[#2D3748] border-b border-zinc-100 pb-3">
                Formulir Reservasi Tamu
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Guest Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700">Nama Lengkap</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Masukkan nama Anda..."
                      className="w-full px-4 py-3 pl-10 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                    <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Attendance Radio Options */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700">Konfirmasi Kehadiran</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'hadir', label: 'Hadir' },
                      { value: 'ragu', label: 'Ragu-ragu' },
                      { value: 'tidak_hadir', label: 'Tidak Hadir' },
                    ].map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => setAttendance(option.value as any)}
                        className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all border ${
                          attendance === option.value
                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#B98929] text-[#241303] border-[#D4AF37] shadow-sm'
                            : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Count */}
                {attendance === 'hadir' && (
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700">Jumlah Tamu</label>
                    <div className="relative">
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full px-4 py-3 pl-10 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value={1}>1 Orang</option>
                        <option value={2}>2 Orang</option>
                      </select>
                      <Users className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>
                )}

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700">Ucapan &amp; Doa Restu</label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan ucapan selamat dan doa restu..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3CA65] to-[#B98929] text-[#2F1B05] font-bold text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 hover:brightness-105 active:scale-98 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#2F1B05]" />
                  <span>{isSubmitting ? 'Mengirim...' : isSuccess ? 'Terkirim! Terima Kasih' : 'Kirim RSVP'}</span>
                </button>
              </form>
            </div>
          </ThreeDCardTilt>
        </div>

        {/* WISHES FEED */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-serif-cormorant text-2xl font-bold text-[#2D3748] flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
              <span>Ucapan Masuk ({wishes.length})</span>
            </h3>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B76E79]">
              LIVE GUESTBOOK
            </span>
          </div>

          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#D4AF37]/30 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#2D3748]">{item.name}</span>
                  <span
                    className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      item.attendance === 'hadir'
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.attendance === 'ragu'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    {item.attendance === 'hadir' ? 'Hadir' : item.attendance === 'ragu' ? 'Ragu' : 'Tidak Hadir'}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed font-sans">{item.message}</p>

                <div className="text-[10px] text-zinc-400 font-mono pt-1 text-right">
                  {item.timeAgo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
