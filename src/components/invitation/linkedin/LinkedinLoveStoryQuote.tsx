'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { LoveStoryItem } from '@/types/invitation';

interface LinkedinLoveStoryQuoteProps {
  timeline: LoveStoryItem[];
}

export default function LinkedinLoveStoryQuote({ timeline }: LinkedinLoveStoryQuoteProps) {
  return (
    <section className="space-y-4 font-sans linkedin-theme">
      {/* Rekomendasi Card Matched EXACTLY with Reference Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-3 shadow-xs"
      >
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold text-[#000000e6] tracking-tight">
            Rekomendasi
          </h2>
          <p className="text-xs text-[#00000099] font-normal">Diterima</p>
        </div>

        <div className="pt-1 space-y-2">
          <div className="flex items-center gap-1.5 flex-wrap text-xs font-bold text-[#000000e6]">
            <span>Fahreiza &amp; Amanda</span>
            <span className="text-[11px] text-[#00000099] font-normal">
              invoure.com/in/fahreiza-amanda
            </span>
          </div>

          <p className="text-xs text-[#000000e6] leading-relaxed font-normal">
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.&rdquo;
          </p>

          <p className="text-[11px] font-bold text-[#0A66C2] uppercase tracking-wider pt-1">
            AR-RUM 21
          </p>
        </div>
      </motion.div>

      {/* Kisah Cinta Kami / Experience Timeline (Matched 100% with Reference Screenshot 4) */}
      <div className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-5 shadow-xs">
        <div className="space-y-0.5">
          <h3 className="text-lg font-bold text-[#000000e6] tracking-tight">
            Kisah Cinta Kami
          </h3>
          <p className="text-xs text-[#00000099] font-normal">Pengalaman</p>
        </div>

        <div className="relative space-y-6 pt-1">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-start gap-3.5 group"
            >
              {/* Vertical Connecting Line */}
              {idx < timeline.length - 1 && (
                <div className="absolute left-[17px] top-10 bottom-0 w-[2px] bg-zinc-200 -mb-6" />
              )}

              {/* Numbered Square Badge on Left */}
              <div className="w-9 h-9 rounded bg-[#0A66C2] text-white font-bold text-base flex items-center justify-center shrink-0 shadow-xs z-10">
                {item.year || idx + 1}
              </div>

              {/* Story Content & Attached Photo */}
              <div className="space-y-1 flex-1 min-w-0">
                <h4 className="text-sm sm:text-base font-bold text-[#000000e6] leading-tight">
                  {item.title}
                </h4>

                <p className="text-xs text-[#00000099] font-normal">
                  Fahreiza &amp; Amanda &bull; Purnawaktu
                </p>

                {item.dateRange && (
                  <p className="text-xs text-[#00000099] font-normal">
                    {item.dateRange}
                  </p>
                )}

                <p className="text-xs text-[#000000e6] leading-relaxed font-normal pt-1.5">
                  {item.description}
                </p>

                {/* Attached Photo Image */}
                {item.imageUrl && (
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-200 mt-3 shadow-xs">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
