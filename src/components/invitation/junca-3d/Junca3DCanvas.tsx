'use client';

import React, { useEffect, useRef } from 'react';

interface Junca3DCanvasProps {
  className?: string;
}

/**
 * Procedural Real-time 3D Kinetic Monolith / Infinity Sculpture
 * Inspired by Junca Studio's real-time 3D hero canvas (#robot-app).
 * Renders an avant-garde 3D wireframe & shaded chrome sculpture
 * that smoothly orbits in real-time, responding to scroll & mouse.
 */
export default function Junca3DCanvas({ className = '' }: Junca3DCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 600);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio || 600;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio || 600;
    };

    window.addEventListener('resize', handleResize);

    // 3D Point & Face generation for an Avant-Garde Dual Torus Knot (Infinite Love Rings)
    const points: { x: number; y: number; z: number; r: number }[] = [];
    const numPoints = 140;

    for (let i = 0; i < numPoints; i++) {
      const u = (i / numPoints) * Math.PI * 2 * 3;
      // Parametric trefoil / dual torus knot formula
      const r = 110 + 35 * Math.cos(2 * u);
      const x = r * Math.cos(3 * u);
      const y = r * Math.sin(3 * u);
      const z = 60 * Math.sin(2 * u);
      points.push({ x, y, z, r: 4 });
    }

    let rotX = 0.4;
    let rotY = 0;
    let rotZ = 0.15;
    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Smooth idle rotation + scroll-driven rotation
      rotY += 0.45 * dt;
      rotX = 0.35 + Math.sin(time * 0.0008) * 0.15 + (scrollY * 0.0008);
      rotZ = Math.cos(time * 0.0005) * 0.2;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 480;

      // Project and sort points by depth
      const projected = points.map((p, idx) => {
        // Rotate around X
        let y1 = p.y * Math.cos(rotX) - p.z * Math.sin(rotX);
        let z1 = p.y * Math.sin(rotX) + p.z * Math.cos(rotX);

        // Rotate around Y
        let x2 = p.x * Math.cos(rotY) + z1 * Math.sin(rotY);
        let z2 = -p.x * Math.sin(rotY) + z1 * Math.cos(rotY);

        // Rotate around Z
        let x3 = x2 * Math.cos(rotZ) - y1 * Math.sin(rotZ);
        let y3 = x2 * Math.sin(rotZ) + y1 * Math.cos(rotZ);

        const cameraZ = 380;
        const scale = fov / (cameraZ + z2);
        const px = cx + x3 * scale;
        const py = cy + y3 * scale;

        return {
          px,
          py,
          scale,
          z: z2,
          idx,
        };
      });

      // Draw continuous connecting kinetic lines (Sculptural Chrome Ribbon)
      ctx.lineWidth = 2 * window.devicePixelRatio;
      for (let i = 0; i < projected.length; i++) {
        const next = projected[(i + 1) % projected.length];
        const prev = projected[i];

        // Depth-based opacity & Junca signature vermilion/platinum color gradient
        const depthNorm = Math.max(0, Math.min(1, (prev.z + 120) / 240));
        
        ctx.beginPath();
        ctx.moveTo(prev.px, prev.py);
        ctx.lineTo(next.px, next.py);

        // Chrome/vermilion glowing shading
        if (i % 8 === 0) {
          ctx.strokeStyle = `rgba(237, 51, 39, ${0.4 + depthNorm * 0.55})`; // Junca Red
        } else {
          ctx.strokeStyle = `rgba(240, 239, 227, ${0.15 + depthNorm * 0.65})`; // Junca Cream/White
        }
        ctx.stroke();

        // Node vertices with specular glare
        if (i % 4 === 0) {
          ctx.beginPath();
          const radius = (2.2 + depthNorm * 2.8) * (window.devicePixelRatio / 1.5);
          ctx.arc(prev.px, prev.py, radius, 0, Math.PI * 2);
          ctx.fillStyle = i % 12 === 0 ? '#ED3327' : '#FFFFFF';
          ctx.shadowColor = i % 12 === 0 ? '#ED3327' : '#FFFFFF';
          ctx.shadowBlur = 8 * depthNorm;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Orbital outer ring (Architectural Halo)
      ctx.beginPath();
      ctx.ellipse(cx, cy, 180 * (width / 600), 75 * (height / 600), rotX * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(237, 51, 39, 0.2)';
      ctx.lineWidth = 1 * window.devicePixelRatio;
      ctx.setLineDash([4, 12]);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`relative w-full h-[340px] sm:h-[440px] flex items-center justify-center pointer-events-none select-none ${className}`}>
      {/* Specular Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#ED3327]/10 blur-3xl pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-white/5 blur-2xl pointer-events-none" />

      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
