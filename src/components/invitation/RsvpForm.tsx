'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, User, Heart } from 'lucide-react';
import { RsvpSubmission } from '@/types/invitation';

interface RsvpFormProps {
  initialGuestName?: string;
}

const INITIAL_WISHES: RsvpSubmission[] = [
  {
    id: '1',
    name: 'Budi Prasetyo & Keluarga',
    attendance: 'hadir',
    guestCount: 2,
    message: 'Selamat untuk Fahreiza dan Amanda! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin.',
    createdAt: 'Baru saja',
  },
  {
    id: '2',
    name: 'Siti Nurhaliza',
    attendance: 'hadir',
    guestCount: 1,
    message: 'Barakallahu lakuma wa baraka alaikuma wa jamaa bainakuma fii khair. Turut bahagia banget!',
    createdAt: '1 jam yang lalu',
  },
  {
    id: '3',
    name: 'Dodi & Rina',
    attendance: 'hadir',
    guestCount: 2,
    message: 'Happy wedding brother Fahreiza! Lancar terus sampai hari H ya.',
    createdAt: '3 jam yang lalu',
  },
];

export default function RsvpForm({ initialGuestName = '' }: RsvpFormProps) {
  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<RsvpSubmission[]>(INITIAL_WISHES);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newSubmission: RsvpSubmission = {
      id: Date.now().toString(),
      name: name.trim(),
      attendance,
      guestCount,
      message: message.trim(),
      createdAt: 'Baru saja',
    };

    setWishes([newSubmission, ...wishes]);
    setIsSubmitted(true);
    setMessage('');
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
          Konfirmasi & Ucapan
        </span>
        <h2 className="font-serif-cormorant text-4xl md:text-5xl text-[#2D3748] font-bold">
          RSVP & Buku Tamu
        </h2>
        <div className="w-16 h-[2px] bg-[#B76E79] mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* RSVP Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-[#8A9A86]/20 space-y-6"
        >
          <div className="flex items-center gap-3 text-[#B76E79]">
            <Heart className="w-5 h-5 fill-current" />
            <h3 className="font-serif-cormorant text-2xl font-semibold text-[#2D3748]">
              Konfirmasi Kehadiran
            </h3>
          </div>

          {isSubmitted ? (
            <div className="bg-[#EEF2ED] border border-[#8A9A86]/40 rounded-2xl p-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#8A9A86] mx-auto animate-bounce" />
              <h4 className="font-serif-cormorant text-2xl font-bold text-[#2D3748]">
                Terima Kasih!
              </h4>
              <p className="text-xs text-zinc-600">
                Konfirmasi kehadiran & ucapan Anda telah berhasil terkirim. Sampai jumpa di hari bahagia kami!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-semibold text-[#B76E79] underline hover:text-[#8A9A86] pt-2"
              >
                Kirim ucapan lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans-jakarta">
              <div>
                <label className="block text-xs font-semibold text-[#586955] mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full bg-[#FAF7F2] border border-[#8A9A86]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#586955] mb-1">
                  Konfirmasi Kehadiran *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAttendance('hadir')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      attendance === 'hadir'
                        ? 'bg-[#8A9A86] text-white border-[#8A9A86] shadow-sm'
                        : 'bg-[#FAF7F2] text-zinc-600 border-[#8A9A86]/30 hover:border-[#8A9A86]'
                    }`}
                  >
                    Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('ragu')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      attendance === 'ragu'
                        ? 'bg-[#E07A5F] text-white border-[#E07A5F] shadow-sm'
                        : 'bg-[#FAF7F2] text-zinc-600 border-[#8A9A86]/30 hover:border-[#E07A5F]'
                    }`}
                  >
                    Ragu-ragu
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('tidak_hadir')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      attendance === 'tidak_hadir'
                        ? 'bg-[#B76E79] text-white border-[#B76E79] shadow-sm'
                        : 'bg-[#FAF7F2] text-zinc-600 border-[#8A9A86]/30 hover:border-[#B76E79]'
                    }`}
                  >
                    Absen
                  </button>
                </div>
              </div>

              {attendance === 'hadir' && (
                <div>
                  <label className="block text-xs font-semibold text-[#586955] mb-1">
                    Jumlah Tamu Hadir
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full bg-[#FAF7F2] border border-[#8A9A86]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#586955] mb-1">
                  Ucapan & Doa Restu *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan dan doa Anda..."
                  className="w-full bg-[#FAF7F2] border border-[#8A9A86]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#B76E79] hover:bg-[#8A9A86] text-white text-sm font-semibold py-3.5 px-6 rounded-xl shadow-lg transition-colors duration-300"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Ucapan</span>
              </button>
            </form>
          )}
        </motion.div>

        {/* Wishes Wall List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-[#8A9A86]/20 space-y-6 max-h-[560px] flex flex-col"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#8A9A86]/20">
            <div className="flex items-center gap-2 text-[#586955]">
              <MessageSquare className="w-5 h-5 text-[#8A9A86]" />
              <h3 className="font-serif-cormorant text-2xl font-semibold text-[#2D3748]">
                Buku Ucapan ({wishes.length})
              </h3>
            </div>
          </div>

          <div className="space-y-4 overflow-y-auto pr-2 flex-1 scrollbar-thin">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#8A9A86]/15 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#2D3748] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#B76E79]" />
                    {item.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      item.attendance === 'hadir'
                        ? 'bg-[#EEF2ED] text-[#8A9A86]'
                        : item.attendance === 'ragu'
                        ? 'bg-[#FEF3C7] text-[#D97706]'
                        : 'bg-[#F4E3E3] text-[#B76E79]'
                    }`}
                  >
                    {item.attendance === 'hadir' ? 'Hadir' : item.attendance === 'ragu' ? 'Ragu' : 'Absen'}
                  </span>
                </div>
                <p className="text-zinc-600 leading-relaxed font-sans-jakarta italic">
                  &ldquo;{item.message}&rdquo;
                </p>
                <span className="block text-[10px] text-zinc-400 text-right">{item.createdAt}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
