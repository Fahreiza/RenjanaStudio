'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GununganWayangSvg, AksaraJawaBadge } from './JavaMaroonOrnaments';

import JavaMaroon3DCard from './JavaMaroon3DCard';
import { GebyokCrownArch3D } from './JavaMaroonOrnaments';

interface WishMessage {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  message: string;
  timestamp: string;
}

interface JavaMaroonRsvpFormProps {
  initialGuestName?: string;
}

export default function JavaMaroonRsvpForm({ initialGuestName = '' }: JavaMaroonRsvpFormProps) {
  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [pax, setPax] = useState('1');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [wishes, setWishes] = useState<WishMessage[]>([
    {
      id: '1',
      name: 'Bagus Wicaksono & Keluarga',
      attendance: 'hadir',
      message: 'Nderek mangayubagya Mas Fahreiza & Mbak Amanda. Mugi tansah pinaringan berkah lan lancar adicarane dumugi pungkasan.',
      timestamp: '1 jam yang lalu',
    },
    {
      id: '2',
      name: 'Raras Sekar Kinanti',
      attendance: 'hadir',
      message: 'Selamat menempuh hidup baru Amanda & Fahreiza! Semoga menjadi keluarga yang sakinah mawaddah warahmah, rukun tentrem saklawase.',
      timestamp: '3 jam yang lalu',
    },
    {
      id: '3',
      name: 'Dimas Surya Pratama',
      attendance: 'ragu',
      message: 'Selamat ya bro Fahreiza! Insya Allah diusahakan hadir tepat waktu. Lancar sampai hari H!',
      timestamp: '5 jam yang lalu',
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
          particleCount: 70,
          spread: 80,
          origin: { y: 0.7 },
          colors: ['#FFE29F', '#D4AF37', '#805607'],
        });
      } catch (err) {}
    }, 600);
  };

  return (
    <section className="relative w-full py-10 px-4 text-[#FFF2A3] z-10">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <AksaraJawaBadge textJawa="ꦏꦺꦴꦤ꧀ꦥ꦳ꦶꦂꦩꦱꦶꦫꦮꦸꦃ" latin="Konfirmasi Rawuh (RSVP)" />
        <h2 className="text-3xl sm:text-4xl font-serif text-[#FFE29F] tracking-wide">
          Serat Konfirmasi &amp; Donga
        </h2>
        <p className="text-xs text-[#FFE29F]/80 max-w-sm mx-auto font-serif italic">
          Panyuwun rawuh panjenengan sedaya dadosaken bombonging manah kulawarga temanten.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-8">
        {/* RSVP FORM 3D CARD */}
        <JavaMaroon3DCard maxTilt={10} className="p-6 sm:p-7">
          {/* Gebyok Crown */}
          <div style={{ transform: 'translateZ(30px)' }} className="mb-2">
            <GebyokCrownArch3D className="w-full h-8 mx-auto" />
          </div>

          {submitted ? (
            <div style={{ transform: 'translateZ(40px)' }} className="text-center py-6 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#1A0205] border-2 border-[#D4AF37] flex items-center justify-center text-[#FFE29F] shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-[#FFF2A3]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#FFF2A3]">Matur Nuwun!</h3>
              <p className="text-xs text-[#FFE29F]/90 font-serif leading-relaxed">
                Konfirmasi dan doa restu Anda telah kami terima dengan penuh sukacita.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs font-serif underline text-[#FFF2A3] hover:text-white"
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-serif text-[#E2B755] uppercase tracking-wider mb-1">
                  Asma Lengkap (Nama)
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Raden Bagus Wicaksono"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A0205] border border-[#D4AF37]/40 text-[#FFF2A3] placeholder-[#FFE29F]/30 text-sm font-serif focus:outline-none focus:border-[#FFE29F]"
                />
              </div>

              <div>
                <label className="block text-xs font-serif text-[#E2B755] uppercase tracking-wider mb-1">
                  Kepastian Rawuh (Kehadiran)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAttendance('hadir')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-serif font-semibold border transition-all ${
                      attendance === 'hadir'
                        ? 'bg-[#D4AF37] text-[#2A050A] border-[#FFF2A3] shadow-md font-bold'
                        : 'bg-[#1A0205] text-[#FFE29F] border-[#D4AF37]/40 hover:bg-[#2A050A]'
                    }`}
                  >
                    Kula Rawuh (Hadir)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('tidak_hadir')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-serif font-semibold border transition-all ${
                      attendance === 'tidak_hadir'
                        ? 'bg-[#D4AF37] text-[#2A050A] border-[#FFF2A3] shadow-md font-bold'
                        : 'bg-[#1A0205] text-[#FFE29F] border-[#D4AF37]/40 hover:bg-[#2A050A]'
                    }`}
                  >
                    Mboten Rawuh
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('ragu')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-serif font-semibold border transition-all ${
                      attendance === 'ragu'
                        ? 'bg-[#D4AF37] text-[#2A050A] border-[#FFF2A3] shadow-md font-bold'
                        : 'bg-[#1A0205] text-[#FFE29F] border-[#D4AF37]/40 hover:bg-[#2A050A]'
                    }`}
                  >
                    Taksih Ragu
                  </button>
                </div>
              </div>

              {attendance === 'hadir' && (
                <div>
                  <label className="block text-xs font-serif text-[#E2B755] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Cacahing Tamu (Jumlah Tamu)</span>
                  </label>
                  <select
                    value={pax}
                    onChange={(e) => setPax(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A0205] border border-[#D4AF37]/40 text-[#FFF2A3] text-sm font-serif focus:outline-none focus:border-[#FFE29F]"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-serif text-[#E2B755] uppercase tracking-wider mb-1">
                  Donga Pangestu (Ucapan &amp; Doa)
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan doa restu dan harapan terbaik untuk kedua mempelai..."
                  className="w-full px-4 py-3 rounded-xl bg-[#1A0205] border border-[#D4AF37]/40 text-[#FFF2A3] placeholder-[#FFE29F]/30 text-sm font-serif focus:outline-none focus:border-[#FFE29F]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFF2A3] to-[#B8860B] text-[#3B070D] font-serif font-bold text-xs uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Ngintunaken...' : 'Kirim Konfirmasi'}</span>
              </button>
            </form>
          )}
        </JavaMaroon3DCard>

        {/* FEED OF WISHES */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
            <span className="text-xs font-serif uppercase tracking-wider text-[#E2B755] flex items-center gap-1.5 font-bold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Donga Pangestu ({wishes.length})</span>
            </span>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#1F0306]/90 border border-[#D4AF37]/30 space-y-1.5 text-left"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-sm text-[#FFF2A3]">{item.name}</h4>
                  <span
                    className={`text-[9px] font-serif uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      item.attendance === 'hadir'
                        ? 'bg-[#152814] text-[#86EFAC] border-[#22C55E]/40'
                        : item.attendance === 'ragu'
                        ? 'bg-[#2E200C] text-[#FDE047] border-[#EAB308]/40'
                        : 'bg-[#2E0B0F] text-[#FCA5A5] border-[#EF4444]/40'
                    }`}
                  >
                    {item.attendance === 'hadir'
                      ? 'Hadir'
                      : item.attendance === 'ragu'
                      ? 'Ragu-ragu'
                      : 'Berhalangan'}
                  </span>
                </div>
                <p className="text-xs text-[#E2B755]/90 font-serif leading-relaxed">{item.message}</p>
                <p className="text-[10px] text-[#FFE29F]/50 font-serif">{item.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
