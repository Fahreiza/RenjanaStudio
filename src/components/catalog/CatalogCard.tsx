'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, Image as ImageIcon, Sparkles } from 'lucide-react';
import { CatalogItem } from '@/types/invitation';

interface CatalogCardProps {
  item: CatalogItem;
}

export default function CatalogCard({ item }: CatalogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-[#8A9A86]/20 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div>
        {/* Card Thumbnail */}
        <div className="relative w-full h-56 bg-zinc-100 overflow-hidden">
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            {item.isPopular && (
              <span className="flex items-center gap-1 bg-[#B76E79] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow">
                <Sparkles className="w-3 h-3" />
                {item.tag}
              </span>
            )}
            <span
              className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow ${
                item.hasPhoto
                  ? 'bg-[#8A9A86] text-white'
                  : 'bg-[#E07A5F] text-white'
              }`}
            >
              {item.hasPhoto ? 'Dengan Foto' : 'Tanpa Foto'}
            </span>
          </div>

          {/* Color Palette Preview */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full shadow">
            {item.colorScheme.map((color, idx) => (
              <span
                key={idx}
                className="w-3 h-3 rounded-full border border-black/10"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8A9A86]">
              Kategori: {item.category}
            </span>
          </div>

          <h3 className="font-serif-cormorant text-2xl font-bold text-[#2D3748] group-hover:text-[#B76E79] transition-colors">
            {item.title}
          </h3>

          <p className="text-xs text-zinc-600 leading-relaxed font-sans-jakarta line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Footer Price & Action */}
      <div className="p-6 pt-0 border-t border-zinc-100 mt-2 flex items-center justify-between gap-2">
        <div>
          {item.discountPrice && (
            <span className="block text-[11px] text-zinc-400 line-through">
              {item.price}
            </span>
          )}
          <span className="font-serif-cormorant text-xl font-bold text-[#B76E79]">
            {item.discountPrice || item.price}
          </span>
        </div>

        <Link
          href={item.demoUrl}
          className="flex items-center gap-1.5 bg-[#8A9A86] hover:bg-[#586955] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Lihat Demo</span>
        </Link>
      </div>
    </motion.div>
  );
}
