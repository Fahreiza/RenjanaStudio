'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

interface InstagramDmRsvpProps {
  initialGuestName: string;
}

export default function InstagramDmRsvp({ initialGuestName }: InstagramDmRsvpProps) {
  const [guestName, setGuestName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'couple' | 'guest'; text: string; time: string }>>([
    {
      sender: 'couple',
      text: `Halo ${initialGuestName}! 👋 Kami sangat berharap kehadiran & doa restumu di hari bahagia kami. Mohon isi ucapan & konfirmasi kehadiran di bawah ya! ❤️`,
      time: '12:00 PM',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !message) return;

    const newMsg = {
      sender: 'guest' as const,
      text: `[Konfirmasi RSVP: ${attendance.toUpperCase()} - ${guestCount} Orang]\n"${message}"`,
      time: 'Just now',
    };

    const replyMsg = {
      sender: 'couple' as const,
      text: `Terima kasih banyak ${guestName}! 🙏 Ucapan dan konfirmasi kehadiranmu sudah kami terima dengan penuh rasa gembira! Sampai jumpa di acara! ✨🎉`,
      time: 'Just now',
    };

    setChatMessages((prev) => [...prev, newMsg, replyMsg]);
    setSubmitted(true);
  };

  return (
    <div id="dm-rsvp" className="max-w-4xl mx-auto px-4 py-6 select-none">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6">
        {/* DM Chat Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#E4405F]">
              <Image
                src="/assets/images/hero-wedding.webp"
                alt="Couple Avatar"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-1">
                <h3 className="text-sm font-bold text-white font-sans">fahreiza_amanda.official</h3>
              </div>
              <p className="text-[11px] text-[#3897F0] font-mono font-medium">Active now &bull; Direct Message RSVP</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-mono text-[#E4405F] bg-[#E4405F]/10 border border-[#E4405F]/30 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTAGRAM DM</span>
          </div>
        </div>

        {/* DM Chat History Bubble Stream */}
        <div className="space-y-3 max-h-80 overflow-y-auto pr-1 py-2 font-sans text-xs">
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-end gap-2 ${
                msg.sender === 'guest' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'couple' && (
                <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-zinc-700 mb-1">
                  <Image
                    src="/assets/images/hero-wedding.webp"
                    alt="Avatar"
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </div>
              )}

              <div
                className={`max-w-[80%] p-3 rounded-2xl space-y-1 shadow ${
                  msg.sender === 'guest'
                    ? 'bg-gradient-to-r from-[#E4405F] to-[#833AB4] text-white rounded-br-none'
                    : 'bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-bl-none'
                }`}
              >
                <p className="whitespace-pre-line leading-snug font-medium">{msg.text}</p>
                <span className="text-[9px] font-mono text-white/60 block text-right">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* DM RSVP Form Input */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="border-t border-zinc-800 pt-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Guest Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase">Nama Anda</label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E4405F] transition-all"
                  placeholder="Nama Lengkap"
                />
              </div>

              {/* Attendance Pill Selector */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase">Konfirmasi Kehadiran</label>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setAttendance('hadir')}
                    className={`py-2 text-[11px] font-bold rounded-xl border transition-all ${
                      attendance === 'hadir'
                        ? 'bg-[#E4405F] text-white border-[#E4405F]'
                        : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-white'
                    }`}
                  >
                    Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('ragu')}
                    className={`py-2 text-[11px] font-bold rounded-xl border transition-all ${
                      attendance === 'ragu'
                        ? 'bg-[#E4405F] text-white border-[#E4405F]'
                        : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-white'
                    }`}
                  >
                    Ragu
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('tidak_hadir')}
                    className={`py-2 text-[11px] font-bold rounded-xl border transition-all ${
                      attendance === 'tidak_hadir'
                        ? 'bg-[#E4405F] text-white border-[#E4405F]'
                        : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-white'
                    }`}
                  >
                    Tidak
                  </button>
                </div>
              </div>
            </div>

            {/* Message Input Box & Submit Button */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase">Pesan Ucapan &amp; Doa Restu</label>
              <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700/80 rounded-2xl px-3.5 py-1.5 focus-within:border-[#E4405F] transition-all">
                <input
                  type="text"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ketik ucapan &amp; pesan manis di sini..."
                  className="w-full bg-transparent text-xs text-white focus:outline-none py-2"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#FCCC63] via-[#E4405F] to-[#833AB4] hover:opacity-90 text-white p-2 rounded-xl shadow transition-all shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-[#E4405F]/10 border border-[#E4405F]/30 p-4 rounded-2xl text-center space-y-1 text-xs">
            <p className="font-bold text-white flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E4405F]" />
              <span>RSVP &amp; Ucapan Berhasil Terkirim via Instagram DM!</span>
            </p>
            <p className="text-zinc-400">Terima kasih atas doa &amp; dukungan hangat dari Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
