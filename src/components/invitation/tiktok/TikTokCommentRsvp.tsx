'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

interface TikTokCommentRsvpProps {
  initialGuestName: string;
}

export default function TikTokCommentRsvp({ initialGuestName }: TikTokCommentRsvpProps) {
  const [guestName, setGuestName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'couple' | 'guest'; text: string; time: string }>>([
    {
      sender: 'couple',
      text: `Halo @${initialGuestName.toLowerCase().replace(/\s+/g, '_')}! 👋 Selamat datang di TikTok Live Wedding RSVP kami! Mohon isi konfirmasi kehadiran & doa restumu di bawah ya! ❤️`,
      time: '12:00 PM',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !message) return;

    const newMsg = {
      sender: 'guest' as const,
      text: `[LIVE RSVP: ${attendance.toUpperCase()} - ${guestCount} Orang]\n"${message}"`,
      time: 'Just now',
    };

    const replyMsg = {
      sender: 'couple' as const,
      text: `Terima kasih banyak @${guestName.toLowerCase().replace(/\s+/g, '_')}! Ucapan & konfirmasi RSVP-mu sudah kami terima! 🎉✨`,
      time: 'Just now',
    };

    setChatMessages((prev) => [...prev, newMsg, replyMsg]);
    setSubmitted(true);
  };

  return (
    <div id="dm-rsvp" className="max-w-4xl mx-auto px-4 py-6 select-none">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6">
        {/* TikTok Live Stream Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#00F2FE]">
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
                <div className="w-4 h-4 rounded-full bg-[#00F2FE] text-black flex items-center justify-center shrink-0 p-0.5">
                  <svg className="w-2.5 h-2.5 stroke-black stroke-[3.5] fill-none" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <p className="text-[11px] text-[#FE2C55] font-mono font-medium">TikTok Live Comments &bull; RSVP Stream</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-mono text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TIKTOK LIVE</span>
          </div>
        </div>

        {/* Live Comments History Stream */}
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
                    ? 'bg-gradient-to-r from-[#FE2C55] to-[#00F2FE] text-white rounded-br-none'
                    : 'bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-bl-none'
                }`}
              >
                <p className="whitespace-pre-line leading-snug font-medium">{msg.text}</p>
                <span className="text-[9px] font-mono text-white/60 block text-right">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live RSVP Form Input */}
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
                  className="w-full bg-zinc-800 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#00F2FE] transition-all"
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
                        ? 'bg-[#FE2C55] text-white border-[#FE2C55]'
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
                        ? 'bg-[#FE2C55] text-white border-[#FE2C55]'
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
                        ? 'bg-[#FE2C55] text-white border-[#FE2C55]'
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
              <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700/80 rounded-2xl px-3.5 py-1.5 focus-within:border-[#00F2FE] transition-all">
                <input
                  type="text"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ketik ucapan &amp; doa di live chat..."
                  className="w-full bg-transparent text-xs text-white focus:outline-none py-2"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#FE2C55] to-[#00F2FE] hover:opacity-90 text-white p-2 rounded-xl shadow transition-all shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-[#00F2FE]/10 border border-[#00F2FE]/30 p-4 rounded-2xl text-center space-y-1 text-xs">
            <p className="font-bold text-white flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00F2FE]" />
              <span>RSVP &amp; Ucapan Berhasil Terkirim di TikTok Live!</span>
            </p>
            <p className="text-zinc-400">Terima kasih atas doa &amp; dukungan hangat dari Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
