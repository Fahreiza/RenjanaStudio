'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GununganWayangSvg, AksaraJawaBadge, JavaneseDivider } from './JavaMaroonOrnaments';

import JavaMaroon3DCard from './JavaMaroon3DCard';
import { GebyokCrownArch3D } from './JavaMaroonOrnaments';

export default function JavaMaroonGreeting() {
  return (
    <section className="relative w-full py-4 px-4 text-center text-[#FFF2A3] z-10">
      <div className="max-w-md mx-auto">
        <JavaMaroon3DCard maxTilt={10} className="p-6 sm:p-8 space-y-5 text-center">
          {/* Gebyok 3D Crown */}
          <div style={{ transform: 'translateZ(30px)' }} className="mb-1">
            <GebyokCrownArch3D className="w-full h-8 mx-auto" />
          </div>

          {/* Top Gold Gunungan Icon */}
          <div
            style={{ transform: 'translateZ(35px)' }}
            className="w-10 h-16 mx-auto filter drop-shadow-[0_0_12px_rgba(255,242,163,0.7)]"
          >
            <GununganWayangSvg className="w-full h-full text-[#FFF2A3]" />
          </div>

          {/* Bismillah SVG with Bright Gold Illumination */}
          <div
            style={{ transform: 'translateZ(40px)' }}
            className="relative w-56 sm:w-64 h-14 mx-auto filter drop-shadow-[0_0_15px_rgba(255,242,163,0.8)] brightness-0 invert sepia hue-rotate-[350deg] saturate-[300%]"
          >
            <Image
              src="/assets/images/bismillah-4-1-2-1.svg"
              alt="Bismillahirrohmanirrohim"
              fill
              className="object-contain"
            />
          </div>

          {/* Assalamu'alaikum in Crisp Royal Gold */}
          <div style={{ transform: 'translateZ(30px)' }} className="space-y-3 pt-1">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#FFF2A3] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Assalamu’alaikum Warahmatullahi Wabarakatuh
            </h2>
            <p className="text-xs sm:text-sm font-serif leading-relaxed text-[#FFE29F]/95 px-2">
              Maha Suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Kanthi
              nyenyuwun rida saha rahmatipun Gusti Kang Murbeng Dumadi, keparenga kula sakulawarga
              ngaturaken serat ulem pawiwahan dhauping putra-putri kula:
            </p>
          </div>

          <div style={{ transform: 'translateZ(20px)' }}>
            <JavaneseDivider className="my-2" />
          </div>
        </JavaMaroon3DCard>
      </div>
    </section>
  );
}
