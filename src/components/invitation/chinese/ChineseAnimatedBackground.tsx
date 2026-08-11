'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChineseAnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
      
      {/* Red Background */}
      <div className="absolute inset-0 z-0 bg-[#8A151B]">
        {/* Soft radial vignette to make the center slightly brighter */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_100%)] pointer-events-none z-10" />
      </div>

      {/* Floating Golden Clouds (Seamless Flow) */}
      <div className="absolute inset-0 z-10 opacity-30 mix-blend-screen pointer-events-none">
        <motion.div
          className="absolute inset-y-0 flex items-center h-full w-[200vw]"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        >
          <div className="relative w-[100vw] h-full">
            <Image
              src="/assets/images/chinese_clouds_seamless.png"
              alt="Golden Clouds"
              fill
              className="object-cover sm:object-contain"
              priority
            />
          </div>
          <div className="relative w-[100vw] h-full">
            <Image
              src="/assets/images/chinese_clouds_seamless.png"
              alt="Golden Clouds 2"
              fill
              className="object-cover sm:object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Soft vignette overlay to frame the bright content */}
      <div className="absolute inset-0 border-[12px] border-[#8A151B]/5 pointer-events-none z-30" />
    </div>
  );
}
