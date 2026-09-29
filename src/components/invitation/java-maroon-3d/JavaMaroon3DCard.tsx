'use client';

import React, { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface JavaMaroon3DCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

/**
 * True 3D Interactive Perspective Card:
 * - Dynamic 3D Tilt merespons mouse cursor & touch swipe
 * - Multi-layer translateZ support (children with translateZ will float in real 3D depth)
 * - Realistic Golden Light Sheen / Glare specular reflection
 * - Deep 3D Bevel, Emboss, and Multi-layered drop shadows (Bukan flat!)
 */
export default function JavaMaroon3DCard({
  children,
  className = '',
  maxTilt = 12,
}: JavaMaroon3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
    const rX = -((y - rect.height / 2) / (rect.height / 2)) * maxTilt;

    setRotX(rX);
    setRotY(rY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.28,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.touches.length === 0) return;
    const rect = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const rY = ((x - rect.width / 2) / (rect.width / 2)) * (maxTilt * 0.8);
    const rX = -((y - rect.height / 2) / (rect.height / 2)) * (maxTilt * 0.8);

    setRotX(rX);
    setRotY(rY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleLeave = () => {
    setRotX(0);
    setRotY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full my-4">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleLeave}
        animate={{
          rotateX: rotX,
          rotateY: rotY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`relative rounded-3xl bg-gradient-to-b from-[#38070D] via-[#240407] to-[#160204] border-2 border-[#D4AF37]/70 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.95),_0_0_35px_rgba(212,175,55,0.25),_inset_0_2px_4px_rgba(255,242,163,0.4),_inset_0_-3px_8px_rgba(0,0,0,0.85)] ${className}`}
      >
        {/* 3D Gold Corner Nails / Paku Emas Jepara */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="absolute top-3 left-3 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFF5BA] via-[#D4AF37] to-[#6E4402] shadow-md border border-[#FFF5BA]/60"
        />
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="absolute top-3 right-3 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFF5BA] via-[#D4AF37] to-[#6E4402] shadow-md border border-[#FFF5BA]/60"
        />
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFF5BA] via-[#D4AF37] to-[#6E4402] shadow-md border border-[#FFF5BA]/60"
        />
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFF5BA] via-[#D4AF37] to-[#6E4402] shadow-md border border-[#FFF5BA]/60"
        />

        {/* Inner Card Children with 3D Depth */}
        <div className="relative z-10 w-full" style={{ transformStyle: 'preserve-3d' }}>
          {children}
        </div>

        {/* Dynamic 3D Gold Sheen Glare */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-30 overflow-hidden"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,242,163,0.5) 0%, rgba(212,175,55,0.18) 35%, transparent 70%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
