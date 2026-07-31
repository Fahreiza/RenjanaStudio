'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { LoveStoryItem } from '@/types/invitation';

interface LoveStoryProps {
  stories: LoveStoryItem[];
}

export default function LoveStory({ stories }: LoveStoryProps) {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12 space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
          Kisah Cinta Kami
        </span>
        <h2 className="font-serif-cormorant text-4xl md:text-5xl text-[#2D3748] font-bold">
          Love Story
        </h2>
        <div className="w-16 h-[2px] bg-[#B76E79] mx-auto mt-3"></div>
      </div>

      <div className="relative border-l-2 border-[#8A9A86]/30 ml-4 md:ml-32 space-y-10 pl-6 md:pl-8">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Icon Node */}
            <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-8 h-8 rounded-full bg-[#FAF7F2] border-2 border-[#B76E79] flex items-center justify-center text-[#B76E79] shadow-sm group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-300">
              <Heart className="w-4 h-4 fill-current" />
            </div>

            {/* Year Tag */}
            <div className="md:absolute md:-left-36 md:top-1.5 md:w-24 md:text-right mb-1">
              <span className="inline-block font-serif-cormorant text-2xl font-bold text-[#B76E79] bg-[#F4E3E3]/60 md:bg-transparent px-3 py-0.5 md:p-0 rounded-lg">
                {story.year}
              </span>
            </div>

            {/* Story Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#8A9A86]/20 space-y-2">
              <h3 className="font-serif-cormorant text-2xl font-semibold text-[#2D3748]">
                {story.title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-sans-jakarta">
                {story.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
