'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function NetflixQuotes() {
  return (
    <section className="py-4 md:py-6 w-full px-4 sm:px-8 md:px-12 lg:px-16 text-white space-y-4 select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl text-center space-y-6 relative overflow-hidden"
      >
        <div className="relative w-48 h-12 mx-auto opacity-85 filter drop-shadow">
          <Image
            src="/assets/images/bismillah-4-1-2-1.svg"
            alt="Bismillah"
            fill
            className="object-contain invert"
          />
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <Quote className="w-8 h-8 text-[#E50914] mx-auto rotate-180 opacity-70" />
          <p className="text-sm md:text-base text-zinc-300 italic leading-relaxed font-sans font-light">
            &ldquo;Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
          </p>
          <span className="block font-bold text-xs uppercase text-[#E50914] tracking-widest">
            — QS. AR-RUM: 21
          </span>
        </div>
      </motion.div>
    </section>
  );
}
