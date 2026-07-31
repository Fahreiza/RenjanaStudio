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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX - width / 2) / (width / 2)) * maxTilt;
    const rX = -((mouseY - height / 2) / (height / 2)) * maxTilt;

    setRotX(rX);
    setRotY(rY);

    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="perspective-1000 py-2">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotX,
          rotateY: rotY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`relative transition-shadow duration-300 ${className}`}
      >
        {children}

        {/* Dynamic 3D Glare Sheen Overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
