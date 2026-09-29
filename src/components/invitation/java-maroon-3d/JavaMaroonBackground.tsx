'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MelatiFlowerSvg, BatikKawungPatternSvg } from './JavaMaroonOrnaments';

interface FloatingPetal {
  id: number;
  startX: number;
  delay: number;
  duration: number;
  size: number;
  rotateDirection: number;
  opacity: number;
}

interface FloatingGoldSparkle {
  id: number;
  startX: number;
  startY: number;
  delay: number;
  duration: number;
  size: number;
}

export default function JavaMaroonBackground() {
  // Generate random 3D drifting petals
  const petals: FloatingPetal[] = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      startX: (i * 8.3 + (i % 3) * 5) % 95,
      delay: (i * 0.7) % 7,
      duration: 12 + ((i * 3) % 8),
      size: 14 + ((i * 5) % 16),
      rotateDirection: i % 2 === 0 ? 360 : -360,
      opacity: 0.4 + ((i % 5) * 0.12),
    }));
  }, []);

  // Generate shimmering gold sparkles
  const sparkles: FloatingGoldSparkle[] = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      startX: (i * 5.5 + 4) % 96,
      startY: (i * 7.2 + 8) % 94,
      delay: (i * 0.4) % 5,
      duration: 3 + ((i * 1.5) % 4),
      size: 2 + (i % 4),
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep Royal Maroon Velvet Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B0409] via-[#3D080F] to-[#1A0205]" />

      {/* 2. Radial Ambient Gold Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />

      {/* 3. Authentic Royal Batik Kawung Keraton Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.14] pointer-events-none">
        <BatikKawungPatternSvg />
      </div>

      {/* 4. Subtle Vignette Border Shadow */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />

      {/* 5. 3D Floating Melati (Jasmine) Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: '-10%',
            x: `${petal.startX}%`,
            rotateZ: 0,
            rotateX: 0,
            rotateY: 0,
            opacity: 0,
          }}
          animate={{
            y: '115vh',
            x: [
              `${petal.startX}%`,
              `${petal.startX + (petal.id % 2 === 0 ? 8 : -8)}%`,
              `${petal.startX}%`,
            ],
            rotateZ: petal.rotateDirection,
            rotateX: [0, 180, 360],
            rotateY: [0, 90, 180],
            opacity: [0, petal.opacity, petal.opacity, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            width: petal.size,
            height: petal.size,
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))',
          }}
        >
          <MelatiFlowerSvg className="w-full h-full" />
        </motion.div>
      ))}

      {/* 6. Shimmering Gold Dust / Sparkle Embers */}
      {sparkles.map((spk) => (
        <motion.div
          key={spk.id}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.2, 1.2, 0.2],
            y: ['0px', '-20px', '-40px'],
          }}
          transition={{
            duration: spk.duration,
            repeat: Infinity,
            delay: spk.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${spk.startX}%`,
            top: `${spk.startY}%`,
            width: `${spk.size}px`,
            height: `${spk.size}px`,
            borderRadius: '9999px',
            backgroundColor: '#FFE29F',
            boxShadow: '0 0 8px 2px rgba(226,183,85,0.7)',
          }}
        />
      ))}
    </div>
  );
}
