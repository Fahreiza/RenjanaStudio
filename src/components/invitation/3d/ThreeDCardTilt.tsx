'use client';

import { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ThreeDCardTiltProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function ThreeDCardTilt({
  children,
  className = '',
  maxTilt = 15,
}: ThreeDCardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const updateTilt = (clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const rY = ((x - width / 2) / (width / 2)) * maxTilt;
    const rX = -((y - height / 2) / (height / 2)) * maxTilt;

    setRotX(rX);
    setRotY(rY);

    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.35 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateTilt(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleReset = () => {
    setRotX(0);
    setRotY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div style={{ perspective: 1000 }} className="perspective-1000 py-2">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleReset}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleReset}
        animate={{
          rotateX: rotX,
          rotateY: rotY,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`relative transition-shadow duration-300 ${className}`}
      >
        {children}

        {/* Dynamic 3D Glare Sheen Overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-30"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.7) 0%, rgba(212,175,55,0.3) 35%, rgba(255,255,255,0) 70%)`,
          }}
        />
      </motion.div>
    </div>
  );
}

