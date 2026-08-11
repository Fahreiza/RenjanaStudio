'use client';

import { motion } from 'framer-motion';
import { ShuangXi } from './ChineseDecor';

export default function ChineseGreeting() {
  return (
    <section className="py-6 px-6 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="w-12 h-12 mx-auto relative mb-4">
          <ShuangXi className="text-[#FDFBF7]" />
        </div>

        {/* Salam & Introduction */}
        <div className="space-y-4 font-sans text-[#FDFBF7]">
          <h2 className="font-serif text-lg md:text-xl font-bold text-[#FDFBF7] uppercase tracking-widest border-b border-[#D4AF37]/30 pb-4">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </h2>
          <p className="text-xs md:text-sm leading-relaxed text-[#FDFBF7]/90 uppercase tracking-widest mt-4">
            Maha Suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami menyatukan dua hati dalam ikatan suci pernikahan:
          </p>
        </div>
      </motion.div>
    </section>
  );
}
