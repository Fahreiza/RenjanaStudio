'use client';

import { Heart, Sparkles, Quote } from 'lucide-react';

export default function TikTokLoveStoryQuote() {
  const stories = [
    {
      year: '2023',
      title: 'Pertama Pertemuan ☕',
      desc: 'Berawal dari bangku kuliah dan lingkaran pertemanan yang sama, kami mulai mengenal kepribadian satu sama lain.',
    },
    {
      year: '2024',
      title: 'Komitmen Bersama 💍',
      desc: 'Dengan niat yang tulus dan ikhtiar bersama, kami memutuskan untuk melangkah ke jenjang yang lebih serius.',
    },
    {
      year: '2025',
      title: 'Lamaran Resmi 💐',
      desc: 'Momen berharga ketika kedua keluarga besar bertemu dan mengikat janji suci lamaran.',
    },
    {
      year: '2026',
      title: 'Menuju Hari H ✨',
      desc: 'Bersiap menyatukan janji suci pernikahan di hadapan Allah SWT dan seluruh sanak keluarga.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-6 select-none space-y-6">
      {/* Quranic Quote Box */}
      <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr from-[#FE2C55]/10 to-[#00F2FE]/10 rounded-full blur-2xl pointer-events-none" />

        <Quote className="w-8 h-8 mx-auto text-[#00F2FE] opacity-80" />

        <p className="text-sm sm:text-base text-zinc-200 leading-relaxed max-w-2xl mx-auto font-sans italic">
          &ldquo;Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
        </p>

        <p className="text-xs font-mono font-extrabold text-[#FE2C55]">
          — QS. Ar-Rum: 21
        </p>
      </div>

      {/* Love Story Timeline */}
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <p className="text-xs font-mono font-extrabold tracking-widest uppercase">
            <span className="text-[#FE2C55]">KISAH </span>
            <span className="text-[#00F2FE]">CINTA</span>
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
            Love Story Timeline
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-zinc-800 rounded-2xl p-5 shadow-xl space-y-2 relative overflow-hidden group hover:border-[#00F2FE] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#00F2FE] bg-[#00F2FE]/10 px-3 py-1 rounded-full border border-[#00F2FE]/30">
                  {story.year}
                </span>
                <Heart className="w-4 h-4 text-[#FE2C55] fill-current" />
              </div>

              <h4 className="text-base font-extrabold text-white font-sans">{story.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{story.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
