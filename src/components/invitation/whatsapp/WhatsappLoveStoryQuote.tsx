'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Mic, CheckCheck, Play } from 'lucide-react';

interface StoryTimeline {
  year: string;
  title: string;
  description: string;
}

interface WhatsappLoveStoryQuoteProps {
  timeline: StoryTimeline[];
}

export default function WhatsappLoveStoryQuote({ timeline }: WhatsappLoveStoryQuoteProps) {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
        <MessageSquare className="w-5 h-5 text-[#25D366]" />
        <h2 className="text-base font-bold text-white tracking-wide uppercase">
          Kutipan &amp; WA Chat Love Story
        </h2>
      </div>

      {/* Quran Quote Chat Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#202C33] border border-zinc-800 rounded-3xl p-5 space-y-3 shadow-xl relative"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider flex items-center gap-1.5">
            <CheckCheck className="w-4 h-4 text-sky-400" />
            HOLY SCRIPTURE CHAT
          </span>
          <span className="text-[10px] text-zinc-400 font-mono">QS. Ar-Rum: 21</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#005C4B] text-white space-y-3 text-center border border-emerald-500/30">
          <p className="text-sm font-serif italic leading-relaxed">
            &ldquo;Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
          </p>
          <p className="text-xs font-bold text-[#25D366] uppercase tracking-wider">
            (QS. Ar-Rum: 21)
          </p>
        </div>
      </motion.div>

      {/* WA Voice Notes & Chat Timeline */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
          <Mic className="w-4 h-4 text-[#25D366]" />
          <span>Kisah Cinta (WA Chat &amp; Voice Notes)</span>
        </h3>

        <div className="space-y-4">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'}`}
            >
              <div
                className={`max-w-[90%] sm:max-w-[80%] rounded-2xl p-4 space-y-2 shadow-lg ${
                  idx % 2 === 0
                    ? 'bg-[#202C33] rounded-tl-none border border-zinc-800'
                    : 'bg-[#005C4B] rounded-tr-none text-white border border-emerald-500/30'
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-1">
                  <span className="font-extrabold text-xs text-[#25D366]">{item.year}</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Chat #{idx + 1}</span>
                </div>

                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs leading-relaxed text-zinc-200 font-sans">
                  {item.description}
                </p>

                {/* WA Voice Note Audio Bar Simulation */}
                <div className="pt-2 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold shrink-0">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-[#25D366] w-2/3" />
                    </div>
                    <span className="text-[9px] text-zinc-400 block text-right font-mono">
                      0:42 &bull; <CheckCheck className="w-3 h-3 inline text-sky-400" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
