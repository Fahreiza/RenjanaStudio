'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface FloatingPetal {
  x: number;
  y: number;
  z: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  xSpeed: number;
  ySpeed: number;
  opacity: number;
}

export default function EtherealBotanicalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Subtle, gentle floating translucent petals (luxury through spacing)
    const petalCount = 18;
    const petals: FloatingPetal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 0.6 + 0.4,
        size: Math.random() * 8 + 8,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        xSpeed: Math.random() * 0.4 - 0.2,
        ySpeed: Math.random() * 0.6 + 0.3,
        opacity: Math.random() * 0.35 + 0.25,
      });
    }

    const drawPetal = (p: FloatingPetal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(p.z, p.z);

      ctx.fillStyle = '#FAF7F2';
      ctx.globalAlpha = p.opacity * p.z;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size);
      ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0);
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.forEach((p) => {
        p.x += p.xSpeed;
        p.y += p.ySpeed;
        p.rotation += p.rotSpeed;

        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = canvas.width + 20;
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. High-Resolution Editorial Studio Backdrop with Dappled Botanical Shadows */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/ethereal/studio_bg.jpg"
          alt="Editorial Studio Background"
          fill
          className="object-cover object-center opacity-85"
          priority
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F0E6]/30 via-transparent to-[#F6F0E6]/40" />
      </div>

      {/* 2. Soft Dappled Sunlight Animation Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.45)_0%,_transparent_60%)]" />

      {/* 3. Floating Ranunculus Petals Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 opacity-70"
      />
    </div>
  );
}
