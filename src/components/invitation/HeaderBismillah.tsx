'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeaderBismillah() {
  return (
    <section className="py-12 px-6 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Bismillah SVG Image */}
        <div className="relative w-56 md:w-64 h-16 mx-auto opacity-80 filter drop-shadow-sm">
          <Image
            src="/assets/images/bismillah-4-1-2-1.svg"
            alt="Bismillahirromahnirrohim"
            fill
            className="object-contain"
          />
        </div>

        {/* Salam & Introduction */}
        <div className="space-y-3 font-sans-jakarta text-[#586955]">
          <h2 className="font-serif-cormorant text-2xl md:text-3xl font-semibold text-[#2D3748]">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-zinc-600">
            Maha Suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami menyatukan dua hati dalam ikatan suci pernikahan:
          </p>
        </div>

        {/* Quran Verse Card */}
        <div className="bg-[#EEF2ED]/60 border border-[#8A9A86]/20 rounded-2xl p-6 italic text-xs md:text-sm text-zinc-700 leading-relaxed space-y-2 shadow-sm">
          <p>
            &ldquo;Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
          </p>
          <span className="block font-semibold not-italic text-[#B76E79] text-xs">
            — QS. Ar-Rum: 21
          </span>
        </div>
      </motion.div>
    </section>
  );
}
