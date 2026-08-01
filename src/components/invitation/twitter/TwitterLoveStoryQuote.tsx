'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Repeat2, Share, CheckCircle2, Sparkles } from 'lucide-react';

interface StoryTimeline {
  year: string;
  title: string;
  description: string;
}

interface TwitterLoveStoryQuoteProps {
  timeline: StoryTimeline[];
}

export default function TwitterLoveStoryQuote({ timeline }: TwitterLoveStoryQuoteProps) {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
        <Sparkles className="w-5 h-5 text-[#1DA1F2]" />
        <h2 className="text-base font-bold text-white tracking-wide uppercase">
          Kutipan &amp; Thread Perjalanan Cinta
        </h2>
      </div>

      {/* Quran Quote Tweet */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#15202B] border border-zinc-800 rounded-2xl p-5 space-y-3 shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 border border-[#1DA1F2]/40 flex items-center justify-center text-[#1DA1F2] font-bold text-sm">
            📖
          </div>
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-1">
              QS. Ar-Rum Ayat 21
              <CheckCircle2 className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2]" />
            </h3>
            <p className="text-xs text-zinc-400">@holy_quran &bull; Holy Scriptures</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 space-y-3 text-center">
          <p className="text-sm font-serif italic text-zinc-200 leading-relaxed">
            &ldquo;Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
          </p>
          <p className="text-xs font-bold text-[#1DA1F2] uppercase tracking-wider">
            (QS. Ar-Rum: 21)
          </p>
        </div>

        {/* Interaction Footer */}
        <div className="flex items-center justify-between text-zinc-400 text-xs pt-1">
          <span className="flex items-center gap-1 hover:text-[#1DA1F2]">
            <MessageCircle className="w-4 h-4" /> 89 Replies
          </span>
          <span className="flex items-center gap-1 hover:text-green-500">
            <Repeat2 className="w-4 h-4" /> 1.2K Retweets
          </span>
          <span className="flex items-center gap-1 text-pink-500">
            <Heart className="w-4 h-4 fill-pink-500" /> 4.5K Likes
          </span>
          <Share className="w-4 h-4 hover:text-[#1DA1F2]" />
        </div>
      </motion.div>

      {/* Love Story Thread Timeline */}
      <div className="bg-[#15202B] border border-zinc-800 rounded-2xl p-5 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>🧵 Story Thread</span>
            <span className="text-xs text-[#1DA1F2] font-mono">({timeline.length} Tweets)</span>
          </h3>
          <span className="text-xs text-zinc-400">Show this thread</span>
        </div>

        <div className="relative space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8"
            >
              {/* Thread Line Connector */}
              {index < timeline.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-zinc-700/80" />
              )}

              {/* Thread Avatar Node */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center text-[10px] font-bold shadow-md">
                {index + 1}
              </div>

              {/* Tweet Box */}
              <div className="bg-black/40 border border-zinc-800 p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1DA1F2]">{item.year}</span>
                  <span className="text-[10px] text-zinc-500">Thread #{index + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="flex items-center gap-4 text-[10px] text-zinc-500 pt-2 border-t border-zinc-800/60">
                  <span>❤️ {150 + index * 80} Likes</span>
                  <span>🔄 {30 + index * 12} Retweets</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
