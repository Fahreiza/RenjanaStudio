'use client';

import { useState } from 'react';
import {
  MessageSquare,
  Pin,
  ThumbsUp,
  Send,
  UserCheck,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';

interface CommentItem {
  id: string;
  name: string;
  attendance: 'Hadir' | 'Ragu-ragu' | 'Tidak Hadir';
  message: string;
  timeAgo: string;
  likes: number;
  isPinned?: boolean;
}

interface YouTubeCommentsRsvpProps {
  initialGuestName: string;
}

export default function YouTubeCommentsRsvp({ initialGuestName }: YouTubeCommentsRsvpProps) {
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'pin-1',
      name: 'Fahreiza & Amanda Official',
      attendance: 'Hadir',
      message:
        'Terima kasih banyak atas segala ucapan dan doa restu dari Bapak/Ibu/Saudara/i sekalian. Kehadiran Anda adalah kebahagiaan terbesar bagi kami! ❤️✨',
      timeAgo: '1 hari yang lalu',
      likes: 1245,
      isPinned: true,
    },
    {
      id: 'c-1',
      name: 'Budi & Keluarga',
      attendance: 'Hadir',
      message:
        'Selamat Fahreiza dan Amanda! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Kami sekeluarga siap hadir merayakan hari bahagia kalian!',
      timeAgo: '2 jam yang lalu',
      likes: 42,
    },
    {
      id: 'c-2',
      name: 'Siti Rahma',
      attendance: 'Hadir',
      message:
        'Happy Wedding Amanda & Fahreiza! Cantik dan ganteng banget di foto prewednya. Lancar sampai hari H yaa 🎉✨',
      timeAgo: '4 jam yang lalu',
      likes: 18,
    },
    {
      id: 'c-3',
      name: 'Dimas Setiawan',
      attendance: 'Ragu-ragu',
      message:
        'Selamat menempuh hidup baru sahabatku Fahreiza. Semoga langgeng hingga akhir hayat! Nanti diusahakan banget bisa hadir bro.',
      timeAgo: '6 jam yang lalu',
      likes: 9,
    },
  ]);

  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'Hadir' | 'Ragu-ragu' | 'Tidak Hadir'>('Hadir');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newComment: CommentItem = {
        id: Date.now().toString(),
        name: name || 'Tamu Undangan',
        attendance,
        message,
        timeAgo: 'Baru saja',
        likes: 1,
      };

      setComments([comments[0], newComment, ...comments.slice(1)]);
      setMessage('');
      setIsSubmitting(false);
    }, 600);
  };

  const handleLike = (id: string) => {
    setComments(
      comments.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <div id="sec-comments" className="space-y-6 select-none pt-4">
      {/* Header Info Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-extrabold text-white font-sans tracking-tight">
            2,450 Komentar &amp; Doa Restu
          </h3>
          <button className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white font-bold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Urutkan</span>
          </button>
        </div>
      </div>

      {/* Input Live Chat Comment & RSVP Form */}
      <form onSubmit={handleSubmit} className="bg-[#212121] p-4 sm:p-6 rounded-2xl border border-zinc-800 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-extrabold text-[#FF0000] uppercase tracking-wider">
          <MessageSquare className="w-4 h-4" />
          <span>TULIS UCAPAN &amp; KONFIRMASI KEHADIRAN (LIVE CHAT)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-zinc-400 uppercase">Nama Anda:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#121212] border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#FF0000]"
              placeholder="Masukkan nama lengkap..."
            />
          </div>

          {/* Attendance Radio Pills Selector */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-zinc-400 uppercase">Status Kehadiran:</label>
            <div className="flex items-center gap-2 pt-0.5">
              {(['Hadir', 'Ragu-ragu', 'Tidak Hadir'] as const).map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setAttendance(status)}
                  className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-extrabold transition-all border ${
                    attendance === status
                      ? 'bg-[#FF0000] text-white border-[#FF0000] shadow'
                      : 'bg-[#121212] text-zinc-400 border-zinc-800 hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Message Input Text Area */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-zinc-400 uppercase">Pesan &amp; Doa Restu:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
            className="w-full bg-[#121212] border border-zinc-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#FF0000] resize-none"
            placeholder="Tuliskan harapan dan doa terbaik Anda untuk kedua mempelai..."
          />
        </div>

        {/* Action Button */}
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#FF0000] hover:bg-red-700 text-white font-extrabold text-xs px-6 py-2.5 rounded-full shadow-lg transition-all flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSubmitting ? 'Mengirim...' : 'KIRIM KOMENTAR'}</span>
          </button>
        </div>
      </form>

      {/* Comments List Stream */}
      <div className="space-y-4 pt-2">
        {comments.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-2xl border transition-all ${
              item.isPinned
                ? 'bg-gradient-to-r from-red-950/40 to-[#181818] border-red-900/60 shadow-lg'
                : 'bg-[#181818] border-zinc-800'
            }`}
          >
            {/* Pinned Tag */}
            {item.isPinned && (
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#FF0000] mb-2 font-mono">
                <Pin className="w-3.5 h-3.5 fill-current" />
                <span>DISEMATKAN OLEH FAHREIZA &amp; AMANDA OFFICIAL</span>
              </div>
            )}

            <div className="flex items-start gap-3">
              {/* User Avatar */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                  item.isPinned ? 'bg-[#FF0000] text-white' : 'bg-zinc-800 text-zinc-300'
                }`}
              >
                {item.name.charAt(0).toUpperCase()}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-white">{item.name}</span>
                  <span className="text-[10px] text-zinc-500 font-mono">{item.timeAgo}</span>
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full font-mono ${
                      item.attendance === 'Hadir'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : item.attendance === 'Ragu-ragu'
                        ? 'bg-amber-950 text-amber-400 border border-amber-800'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {item.attendance}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans">{item.message}</p>

                {/* Like & Reply Action Row */}
                <div className="flex items-center gap-4 pt-1 text-xs text-zinc-400">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-[#FF0000]" />
                    <span className="font-mono text-[11px] font-bold">{item.likes}</span>
                  </button>
                  <span className="text-[11px] cursor-pointer hover:text-white font-bold">Balas</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
