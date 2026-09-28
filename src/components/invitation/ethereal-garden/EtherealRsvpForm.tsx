'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Users, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EtherealRsvpFormProps {
  initialGuestName?: string;
}

interface GuestWish {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  message: string;
  timeAgo: string;
}

export default function EtherealRsvpForm({ initialGuestName = '' }: EtherealRsvpFormProps) {
  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [wishes, setWishes] = useState<GuestWish[]>([
    {
      id: '1',
      name: 'Rian & Sarah',
      attendance: 'hadir',
      message: 'Selamat berbahagia Aditya & Alya! Konsep undangannya sangat tenang, anggun, dan berkelas. Semoga menjadi keluarga sakinah mawaddah warahmah.',
      timeAgo: '2 jam yang lalu',
    },
    {
      id: '2',
      name: 'Nadira Kusuma',
      attendance: 'hadir',
      message: 'So happy for both of you! Can’t wait to celebrate your special day at the conservatory.',
      timeAgo: '4 jam yang lalu',
    },
    {
      id: '3',
      name: 'Bagus Pratama',
      attendance: 'ragu',
      message: 'Selamat bro Adit! Masih menunggu jadwal dinas, insya Allah diusahakan hadir.',
      timeAgo: '6 jam yang lalu',
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
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#C7A76C', '#A7B09A', '#3F493D', '#FAF7F2'],
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
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#A7B09A]/15 text-[#3F493D] border border-[#A7B09A]/30 text-[9px] uppercase font-bold tracking-[0.35em]">
          RSVP &amp; GUESTBOOK
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#3F493D] font-normal tracking-wide">
          Buku Tamu &amp; Kehadiran
        </h2>
        <div className="w-12 h-[1px] bg-[#C7A76C] mx-auto mt-2" />
        <p className="text-xs text-[#3F493D]/70 max-w-md mx-auto pt-1 leading-relaxed font-serif">
          Mohon konfirmasikan kehadiran Anda untuk membantu kami mempersiapkan jamuan terbaik.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RSVP FORM */}
        <div className="lg:col-span-6">
          <div className="rounded-[32px] bg-[#FAF7F2] border border-[#C7A76C]/35 p-6 sm:p-8 shadow-[0_20px_45px_-15px_rgba(184,173,160,0.4)] space-y-5">
            <h3 className="font-serif-cormorant text-2xl font-normal text-[#3F493D] border-b border-[#C7A76C]/20 pb-3">
              Konfirmasi Kehadiran
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#3F493D]">Nama Lengkap</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama Anda..."
                    className="w-full px-4 py-2.5 pl-10 rounded-xl bg-[#F6F0E6] border border-[#C7A76C]/30 text-xs text-[#3F493D] focus:outline-none focus:border-[#C7A76C]"
                  />
                  <User className="w-4 h-4 text-[#A7B09A] absolute left-3.5 top-3" />
                </div>
              </div>

              {/* Attendance Radio */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#3F493D]">Kehadiran</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'hadir', label: 'Hadir' },
                    { value: 'ragu', label: 'Ragu' },
                    { value: 'tidak_hadir', label: 'Tidak Hadir' },
                  ].map((option) => (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() => setAttendance(option.value as any)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${
                        attendance === option.value
                          ? 'bg-[#3F493D] text-[#FAF7F2] border-[#3F493D]'
                          : 'bg-[#F6F0E6] text-[#3F493D]/70 border-[#C7A76C]/30 hover:border-[#C7A76C]'
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
                  <label className="text-xs font-semibold text-[#3F493D]">Jumlah Tamu</label>
                  <div className="relative">
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full px-4 py-2.5 pl-10 rounded-xl bg-[#F6F0E6] border border-[#C7A76C]/30 text-xs text-[#3F493D] focus:outline-none focus:border-[#C7A76C]"
                    >
                      <option value={1}>1 Orang</option>
                      <option value={2}>2 Orang</option>
                    </select>
                    <Users className="w-4 h-4 text-[#A7B09A] absolute left-3.5 top-3" />
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#3F493D]">Ucapan &amp; Doa Restu</label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan doa restu untuk kedua mempelai..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F0E6] border border-[#C7A76C]/30 text-xs text-[#3F493D] focus:outline-none focus:border-[#C7A76C] resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-[#3F493D] text-[#FAF7F2] hover:bg-[#323B30] font-sans font-bold text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#C7A76C]/40"
              >
                <Send className="w-3.5 h-3.5 text-[#C7A76C]" />
                <span>{isSubmitting ? 'Mengirim...' : isSuccess ? 'Terkirim! Terima Kasih' : 'Kirim Konfirmasi'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* WISHES FEED */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-serif-cormorant text-2xl font-normal text-[#3F493D] flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#C7A76C]" />
              <span>Doa Restu ({wishes.length})</span>
            </h3>
            <span className="text-[9px] uppercase tracking-wider font-semibold text-[#A7B09A]">
              WARM BLESSINGS
            </span>
          </div>

          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C7A76C]/25 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif-cormorant font-bold text-sm text-[#3F493D]">{item.name}</span>
                  <span
                    className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      item.attendance === 'hadir'
                        ? 'bg-[#A7B09A]/20 text-[#3F493D]'
                        : item.attendance === 'ragu'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    {item.attendance === 'hadir' ? 'Hadir' : item.attendance === 'ragu' ? 'Ragu' : 'Tidak Hadir'}
                  </span>
                </div>

                <p className="text-xs text-[#3F493D]/70 leading-relaxed font-sans">{item.message}</p>

                <div className="text-[9px] text-[#A7B09A] font-mono pt-1 text-right">
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
