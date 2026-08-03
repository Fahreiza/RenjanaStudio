'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface StoryTimeline {
  year: string;
  title: string;
  description: string;
}

interface MinimalistLoveStoryQuoteProps {
  timeline: StoryTimeline[];
}

export default function MinimalistLoveStoryQuote({ timeline }: MinimalistLoveStoryQuoteProps) {
  return (
    <section className="space-y-10 overflow-hidden w-full max-w-xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center space-y-1.5">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7F9481] font-bold block">
          Ayat Suci &amp; Perjalanan Cinta
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#C48B96] font-bold">
          Kisah Kami
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70 mt-2" />
      </div>

      {/* Quranic Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/90 border border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-3 relative backdrop-blur-md overflow-hidden"
      >
        <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto" />
        <p className="font-serif text-base sm:text-lg text-[#2D3748] italic leading-relaxed">
          &ldquo;Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
        </p>
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#7F9481] block pt-2">
          (QS. Ar-Rum: 21)
        </span>
      </motion.div>

      {/* Love Story Timeline */}
      <div className="relative border-l-2 border-[#7F9481]/40 ml-4 sm:ml-6 space-y-8 pt-2">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-6 sm:pl-8 space-y-1.5"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[10px] top-1 w-5 h-5 rounded-full bg-[#F9F6F0] border-2 border-[#7F9481] flex items-center justify-center shadow-md">
              <div className="w-2 h-2 rounded-full bg-[#C48B96]" />
            </div>

            <span className="text-xs font-mono font-bold text-[#7F9481] bg-[#7F9481]/15 border border-[#7F9481]/30 px-3 py-0.5 rounded-full inline-block">
              {item.year}
            </span>
            <h4 className="font-serif text-xl text-[#2D3748] font-bold pt-1">{item.title}</h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
