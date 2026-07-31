'use client';

import { useState } from 'react';
import Image from 'next/image';
import { UserPlus, Check, MessageCircle, MapPin } from 'lucide-react';
import { GroomBrideInfo, EventDetail } from '@/types/invitation';

interface TikTokProfileHeaderProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  akad: EventDetail;
  guestName: string;
}

export default function TikTokProfileHeader({
  groom,
  bride,
  akad,
  guestName,
}: TikTokProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(125400);

  const handleToggleFollow = () => {
    if (isFollowing) {
      setFollowers((prev) => prev - 1);
      setIsFollowing(false);
    } else {
      setFollowers((prev) => prev + 1);
      setIsFollowing(true);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 select-none pt-2">
      {/* Compact TikTok Profile Header Card */}
      <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-xl space-y-4 relative overflow-hidden text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Avatar Profile with Neon Glitch Ring */}
          <div className="relative group shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 bg-gradient-to-tr from-[#FE2C55] via-[#00F2FE] to-[#25F4EE] shadow-[0_0_20px_rgba(0,242,254,0.4)] flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black bg-zinc-900">
                <Image
                  src="/assets/images/hero-wedding.webp"
                  alt="TikTok Creator Profile"
                  fill
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#FE2C55] text-white text-[8px] font-mono font-extrabold px-2 py-0.2 rounded-full border border-black uppercase tracking-wider">
              LIVE
            </span>
          </div>

          {/* User Profile Info & Stats */}
          <div className="flex-1 space-y-3">
            {/* Username & Verified Badge Row */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5">
                <h1 className="text-base sm:text-lg font-extrabold text-white font-sans tracking-tight">
                  @{groom.name.toLowerCase()}_{bride.name.toLowerCase()}.official
                </h1>
                {/* Verified Cyan Badge */}
                <div className="w-4 h-4 rounded-full bg-[#00F2FE] text-black flex items-center justify-center shrink-0 p-0.5 shadow-sm">
                  <svg className="w-2.5 h-2.5 stroke-black stroke-[3.5] fill-none" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleFollow}
                  className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all shadow flex items-center gap-1 ${
                    isFollowing
                      ? 'bg-zinc-800 text-zinc-300 border border-zinc-700 hover:bg-zinc-700'
                      : 'bg-gradient-to-r from-[#FE2C55] to-[#00F2FE] text-white hover:opacity-90'
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00F2FE]" />
                      <span>Following</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-3.5 h-3.5" />
                      <span>Follow</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => scrollToSection('dm-rsvp')}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-lg border border-zinc-700 shadow transition-all flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span>RSVP Live</span>
                </button>
              </div>
            </div>

            {/* TikTok Counter Stats Row */}
            <div className="flex items-center justify-center sm:justify-start gap-5 sm:gap-8 text-xs font-sans border-y sm:border-y-0 border-zinc-800 py-2 sm:py-0">
              <div>
                <span className="font-extrabold text-white">45</span>{' '}
                <span className="text-zinc-400 font-mono">Following</span>
              </div>
              <div>
                <span className="font-extrabold text-white">
                  {(followers / 1000).toFixed(1)}K
                </span>{' '}
                <span className="text-zinc-400 font-mono">Followers</span>
              </div>
              <div>
                <span className="font-extrabold text-white">1.2M</span>{' '}
                <span className="text-zinc-400 font-mono">Likes</span>
              </div>
            </div>

            {/* Bio Details */}
            <div className="space-y-0.5 text-xs font-sans text-zinc-200">
              <p className="font-bold text-white">
                {groom.fullName} &amp; {bride.fullName}
              </p>
              <p className="text-[#00F2FE] font-bold font-mono text-[11px]">
                #FahreizaAmandaWedding &bull; {akad.date}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#00F2FE] font-medium pt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <a
                  href={akad.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-mono text-xs"
                >
                  {akad.venue} (Google Maps)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
