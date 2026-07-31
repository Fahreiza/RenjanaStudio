'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Grid,
  Film,
  UserCheck,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  X,
} from 'lucide-react';
import { EventDetail } from '@/types/invitation';

interface InstagramFeedProps {
  akad: EventDetail;
  resepsi: EventDetail;
}

export default function InstagramFeed({ akad, resepsi }: InstagramFeedProps) {
  const [activeTab, setActiveTab] = useState<'posts' | 'reels' | 'tagged'>('posts');
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);
  const [likesState, setLikesState] = useState<{ [key: number]: number }>({
    0: 12450,
    1: 9840,
    2: 15300,
  });
  const [hasLikedState, setHasLikedState] = useState<{ [key: number]: boolean }>({});

  const posts = [
    {
      photo: '/assets/images/hero-wedding.webp',
      caption: `Official Wedding Announcement ✨\n\nDengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan kami:\n\n👰 Amanda Fadila, S.Tr.Kom.\n🤵 Fahreiza Taura, S.Tr.Kom.\n\n🗓️ ${akad.date}\n📍 ${akad.venue}\n\nMohon doa restu dari Bapak/Ibu/Saudara/i sekalian. 🙏❤️`,
      tag: 'ANNOUNCEMENT',
      comments: [
        { user: 'bambang_kusuma', text: 'Barakallah anakku, semoga dilancarkan sampai hari H! ❤️' },
        { user: 'hendra_pratama', text: 'Selamat Fahreiza & Amanda! Aamiin yra 🤲' },
        { user: 'sahabat_kuliah', text: 'Congrats bro! Wajib dateng nih 🔥' },
      ],
    },
    {
      photo: '/assets/images/gallery-2.webp',
      caption: `Syukuran Resepsi Pernikahan 🎉\n\nMerupakan suatu kehormatan apabila Bapak/Ibu/Saudara/i berkenan hadir di acara Resepsi kami:\n\n📍 Venue: ${resepsi.venue}\n⏰ Waktu: ${resepsi.time}\n📅 Tanggal: ${resepsi.date}\n\n#FahreizaAmandaWedding #WeddingInvitation`,
      tag: 'RESEPSI',
      comments: [
        { user: 'diana_putri', text: 'Cantik banget Manda!! Ga sabar pengen dateng 😍' },
        { user: 'rizky_alamsyah', text: 'Selamat kawan! Semoga sakinah mawaddah warahmah.' },
      ],
    },
    {
      photo: '/assets/images/gallery-3.webp',
      caption: `Perjalanan Cinta (Love Story) 💕\n\n"Dari niat ta'aruf, komitmen bersama, lamaran, hingga momen suci akad nikah." Terima kasih untuk semua keluarga & sahabat yang selalu mendukung perjalanan kami.`,
      tag: 'LOVE STORY',
      comments: [
        { user: 'keluarga_besar', text: 'Sehat & bahagia selalu untuk kalian berdua 💖' },
        { user: 'rekan_kerja', text: 'Undangan keren banget! Selamat ya 👍' },
      ],
    },
  ];

  const handleToggleLike = (idx: number) => {
    setHasLikedState((prev) => {
      const current = prev[idx];
      const nextLiked = !current;
      setLikesState((l) => ({
        ...l,
        [idx]: nextLiked ? (l[idx] || 0) + 1 : (l[idx] || 1) - 1,
      }));
      return { ...prev, [idx]: nextLiked };
    });
  };

  const handleShareWhatsApp = (post: typeof posts[0]) => {
    const text = encodeURIComponent(
      `Post Pernikahan Fahreiza & Amanda: ${post.caption.slice(0, 100)}...\n\nLihat selengkapnya: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section className="bg-black text-white py-4 select-none max-w-4xl mx-auto px-4">
      {/* Instagram Navigation Tabs Bar */}
      <div className="flex items-center justify-around border-t border-zinc-800 text-xs font-bold text-zinc-400">
        <button
          onClick={() => setActiveTab('posts')}
          className={`flex items-center gap-2 py-3 border-t-2 transition-colors ${
            activeTab === 'posts'
              ? 'border-white text-white'
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Grid className="w-4 h-4" />
          <span className="uppercase tracking-widest font-mono">POSTS</span>
        </button>

        <button
          onClick={() => setActiveTab('reels')}
          className={`flex items-center gap-2 py-3 border-t-2 transition-colors ${
            activeTab === 'reels'
              ? 'border-white text-white'
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Film className="w-4 h-4" />
          <span className="uppercase tracking-widest font-mono">REELS</span>
        </button>

        <button
          onClick={() => setActiveTab('tagged')}
          className={`flex items-center gap-2 py-3 border-t-2 transition-colors ${
            activeTab === 'tagged'
              ? 'border-white text-white'
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span className="uppercase tracking-widest font-mono">TAGGED</span>
        </button>
      </div>

      {/* 3-Column Square Post Grid */}
      {activeTab === 'posts' && (
        <div className="grid grid-cols-3 gap-1 sm:gap-3 pt-2">
          {posts.map((post, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPostIndex(idx)}
              className="relative aspect-square bg-zinc-900 rounded-lg overflow-hidden group cursor-pointer border border-zinc-800/60 shadow-md"
            >
              <Image
                src={post.photo}
                alt={`Instagram Post #${idx + 1}`}
                fill
                sizes="(max-width: 640px) 33vw, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white font-bold text-sm">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 fill-current text-[#E4405F]" />
                  <span>{(likesState[idx] || 12000).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{post.comments.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'reels' && (
        <div className="text-center py-12 text-zinc-500 text-xs font-mono">
          <Film className="w-8 h-8 mx-auto text-[#E4405F] mb-2 animate-bounce" />
          <p>Lihat video highlight reels pada seksi Shorts di bawah.</p>
        </div>
      )}

      {activeTab === 'tagged' && (
        <div className="text-center py-12 text-zinc-500 text-xs font-mono">
          <UserCheck className="w-8 h-8 mx-auto text-[#3897F0] mb-2" />
          <p>Foto bersama para tamu undangan &amp; keluarga besar.</p>
        </div>
      )}

      {/* Interactive Instagram Post Modal Lightbox Viewer */}
      {selectedPostIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
          <button
            onClick={() => setSelectedPostIndex(null)}
            className="absolute top-4 right-4 z-50 p-3 bg-zinc-900/80 hover:bg-[#E4405F] text-white rounded-full transition-colors border border-zinc-700 shadow-2xl"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            {/* Post Photo */}
            <div className="relative w-full md:w-1/2 aspect-square bg-black shrink-0">
              <Image
                src={posts[selectedPostIndex].photo}
                alt="Post Photo"
                fill
                sizes="(max-width: 768px) 100vw, 336px"
                className="object-cover"
              />
            </div>

            {/* Post Details & Comment Stream */}
            <div className="flex-1 flex flex-col justify-between p-4 overflow-y-auto space-y-4">
              {/* Post Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E4405F]">
                    <Image
                      src="/assets/images/hero-wedding.webp"
                      alt="Avatar"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-bold text-white font-sans">
                        fahreiza_amanda.official
                      </p>
                      <div className="w-3.5 h-3.5 rounded-full bg-[#3897F0] text-white flex items-center justify-center shrink-0 p-0.5">
                        <svg className="w-2.5 h-2.5 stroke-white stroke-[3.5] fill-none" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono">Original Post</span>
                  </div>
                </div>
              </div>

              {/* Caption & Comments List */}
              <div className="space-y-3 flex-1 overflow-y-auto text-xs font-sans pr-1">
                <p className="text-zinc-200 leading-relaxed whitespace-pre-line">
                  {posts[selectedPostIndex].caption}
                </p>

                <div className="border-t border-zinc-800/80 pt-3 space-y-2">
                  <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase">
                    KOMENTAR UCAPAN &amp; DOA RESTU:
                  </span>
                  {posts[selectedPostIndex].comments.map((comment, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-black/40 p-2 rounded-lg border border-zinc-800">
                      <span className="font-bold text-white shrink-0">@{comment.user}:</span>
                      <span className="text-zinc-300">{comment.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post Action Buttons & Likes */}
              <div className="border-t border-zinc-800 pt-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={() => handleToggleLike(selectedPostIndex)}>
                      <Heart
                        className={`w-6 h-6 transition-all ${
                          hasLikedState[selectedPostIndex]
                            ? 'text-[#E4405F] fill-current scale-110'
                            : 'text-[#E4405F]'
                        }`}
                      />
                    </button>
                    <MessageCircle className="w-6 h-6 text-white cursor-pointer" />
                    <Send
                      onClick={() => handleShareWhatsApp(posts[selectedPostIndex])}
                      className="w-5 h-5 text-white hover:text-[#E4405F] cursor-pointer"
                    />
                  </div>
                  <Bookmark className="w-5 h-5 text-white" />
                </div>

                <p className="text-xs font-extrabold text-white font-sans">
                  {(likesState[selectedPostIndex] || 12450).toLocaleString('id-ID')} likes
                </p>
                <p className="text-[10px] font-mono text-zinc-500 uppercase">JUMLAH DUKUNGAN TERVERIFIKASI</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
