'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface PersonInfo {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
}

interface LinkedinGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function LinkedinGroomBride({ groom, bride }: LinkedinGroomBrideProps) {
  const [brideConnected, setBrideConnected] = useState(false);
  const [groomConnected, setGroomConnected] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-4 shadow-xs font-sans linkedin-theme"
    >
      {/* Header Matched EXACTLY with Reference Screenshot */}
      <div className="space-y-0.5">
        <h2 className="text-lg font-bold text-[#000000e6] tracking-tight">
          Dua Hati, Satu Cerita
        </h2>
        <p className="text-xs text-[#00000099] font-normal">Terhubung langsung</p>
      </div>

      <div className="space-y-4 pt-1">
        {/* MEMPELAI WANITA ROW */}
        <div className="flex items-start gap-3.5 pb-4 border-b border-zinc-100">
          {/* Circular Photo */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-zinc-200 shrink-0 bg-zinc-900 shadow-xs">
            <Image
              src={bride.image}
              alt={bride.name}
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-0.5 flex-1">
            <h3 className="font-bold text-sm sm:text-base text-[#000000e6] flex items-center gap-1 leading-tight">
              {bride.fullName || bride.name}
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] fill-current shrink-0" />
              <span className="text-[#00000099] text-xs font-normal">&bull; 1st</span>
            </h3>
            <p className="text-xs font-normal text-[#000000e6]">Mempelai Wanita</p>
            <p className="text-xs text-[#00000099] font-normal">Masjid Istiqlal</p>

            <div className="pt-1 text-xs text-[#00000099] space-y-0.5 font-normal">
              <p>&ldquo;{bride.name}&rdquo;</p>
              <p>putri pertama dari</p>
              <p className="text-[#000000e6] font-normal">{bride.parents}</p>
            </div>

            {/* Hubungkan Outline Pill Button */}
            <div className="pt-2">
              <button
                onClick={() => setBrideConnected(!brideConnected)}
                className={`border border-[#0A66C2] font-semibold text-xs px-5 py-1 rounded-full transition-all cursor-pointer ${
                  brideConnected
                    ? 'bg-[#0A66C2] text-white'
                    : 'text-[#0A66C2] hover:bg-blue-50'
                }`}
              >
                {brideConnected ? '✓ Terhubung' : 'Hubungkan'}
              </button>
            </div>
          </div>
        </div>

        {/* MEMPELAI PRIA ROW */}
        <div className="flex items-start gap-3.5 pt-1">
          {/* Circular Photo */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-zinc-200 shrink-0 bg-zinc-900 shadow-xs">
            <Image
              src={groom.image}
              alt={groom.name}
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-0.5 flex-1">
            <h3 className="font-bold text-sm sm:text-base text-[#000000e6] flex items-center gap-1 leading-tight">
              {groom.fullName || groom.name}
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] fill-current shrink-0" />
              <span className="text-[#00000099] text-xs font-normal">&bull; 1st</span>
            </h3>
            <p className="text-xs font-normal text-[#000000e6]">Mempelai Pria</p>
            <p className="text-xs text-[#00000099] font-normal">Masjid Istiqlal</p>

            <div className="pt-1 text-xs text-[#00000099] space-y-0.5 font-normal">
              <p>&ldquo;{groom.name}&rdquo;</p>
              <p>putra pertama dari</p>
              <p className="text-[#000000e6] font-normal">{groom.parents}</p>
            </div>

            {/* Hubungkan Outline Pill Button */}
            <div className="pt-2">
              <button
                onClick={() => setGroomConnected(!groomConnected)}
                className={`border border-[#0A66C2] font-semibold text-xs px-5 py-1 rounded-full transition-all cursor-pointer ${
                  groomConnected
                    ? 'bg-[#0A66C2] text-white'
                    : 'text-[#0A66C2] hover:bg-blue-50'
                }`}
              >
                {groomConnected ? '✓ Terhubung' : 'Hubungkan'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
