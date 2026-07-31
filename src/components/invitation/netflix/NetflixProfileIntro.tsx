'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NetflixProfileIntroProps {
  guestName: string;
  onOpen: () => void;
}

export default function NetflixProfileIntro({
  guestName,
  onOpen,
}: NetflixProfileIntroProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedId(id);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E50914', '#FFFFFF', '#B81D24'],
      });
    } catch {
      // fallback if canvas-confetti fails
    }

    setTimeout(() => {
      onOpen();
    }, 400);
  };

  const profiles = [
    {
      id: 'bride_groom',
      name: 'Fahreiza & Amanda',
      avatarUrl: '/assets/images/hero-wedding.webp',
      badge: 'MEMPELAI',
      bgGradient: 'from-red-900 to-red-700',
    },
    {
      id: 'guest',
      name: guestName,
      avatarUrl: '/assets/images/sm-WANITA.webp',
      badge: 'SPESIAL TAMU',
      isGuest: true,
      bgGradient: 'from-blue-700 to-indigo-900',
    },
    {
      id: 'vip',
      name: 'Keluarga & VIP',
      avatarUrl: '/assets/images/sm-PRIA.webp',
      badge: 'VIP PASS',
      bgGradient: 'from-emerald-800 to-teal-900',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#141414] text-white flex flex-col items-center justify-center p-6 select-none font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-10 md:space-y-12 max-w-4xl w-full"
      >
        {/* Title matching authentic Netflix "Who's Watching?" */}
        <h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight font-sans text-center">
          Who&apos;s Watching?
        </h1>

        {/* Profile Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => handleSelect(profile.id)}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Profile Square Card */}
              <div
                className={`relative w-28 h-28 md:w-36 md:h-36 rounded-md overflow-hidden bg-zinc-800 border-2 ${
                  profile.isGuest
                    ? 'border-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.5)]'
                    : 'border-transparent group-hover:border-white'
                } group-hover:scale-105 transition-all duration-300 shadow-xl`}
              >
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />

                {/* Badge Overlay */}
                <div className="absolute top-2 right-2 bg-[#E50914] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded shadow">
                  {profile.badge}
                </div>
              </div>

              {/* Profile Label Name */}
              <span className="mt-3 text-xs md:text-sm text-zinc-400 group-hover:text-white font-medium transition-colors text-center max-w-[140px] truncate">
                {profile.name}
              </span>
            </div>
          ))}

          {/* Add Profile Card */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-md bg-zinc-900 border-2 border-dashed border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-zinc-400 group-hover:text-zinc-200 transition-all duration-300">
              <Plus className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <span className="mt-3 text-xs md:text-sm text-zinc-500 group-hover:text-zinc-300 font-medium transition-colors text-center">
              Add Profile
            </span>
          </div>
        </div>

        {/* Manage Profiles Button */}
        <div className="pt-4">
          <button
            onClick={() => handleSelect('guest')}
            className="border border-zinc-600 hover:border-white text-zinc-400 hover:text-white text-xs md:text-sm uppercase tracking-widest font-mono px-6 py-2 transition-all duration-300"
          >
            MANAGE PROFILES
          </button>
        </div>
      </motion.div>
    </div>
  );
}
