"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const PremiumHero = () => {
  const router = useRouter();

  const maskTransition = { duration: 1.4, ease: [0.19, 1, 0.22, 1] as const };

  const signalVariants: Variants = {
    initial: { scale: 1, opacity: 0 },
    hover: (i: number) => ({
      scale: 1.8,
      opacity: 0,
      transition: {
        repeat: Infinity,
        duration: 2,
        delay: i * 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  const handleNavigation = () => {
    router.push('/builder');
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#FAFAFA] overflow-hidden selection:bg-zinc-900 selection:text-white">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 pt-40 pb-20 relative z-10">
        <div className="max-w-[1300px] mx-auto">
          
          {/* Top Label */}
          <div className="overflow-hidden mb-6">
            <motion.p 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...maskTransition, delay: 0.2 }}
              className="text-[11px] tracking-[0.5em] uppercase font-bold text-zinc-400"
            >
              The New Standard of Minimal Design — 2026
            </motion.p>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-extrabold leading-[1.1] tracking-[-0.06em] text-zinc-950">
            <div className="overflow-hidden">
              <motion.span 
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ ...maskTransition, delay: 0.3 }}
              >
                Created your 
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                className="block text-zinc-400 font-medium "
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ ...maskTransition, delay: 0.4 }}
              >
                own dream <span className='bg-black text-white px-2 py-1 rounded'>portfolio</span>
              </motion.span>
            </div>
          </h1>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-5 lg:col-span-4">
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.9 }}
                className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed"
              >
                A visual playground for modern creatives. Strip away the noise and let your work breathe in a curated space.
              </motion.p>
            </div>

            <div className="md:col-span-7 lg:col-span-8 flex justify-end">
              <motion.div 
                initial="initial"
                whileHover="hover"
                className="relative flex items-center justify-center"
              >
                {/* --- PREMIUM SIGNAL LAYERS --- */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={signalVariants}
                    className="absolute h-44 w-44 rounded-full border border-gray-950 pointer-events-none"
                    style={{ opacity: 0.5 }}
                  />
                ))}

                {/* Main Button with Liquid Animation */}
                <button 
                  onClick={handleNavigation}
                  className="group relative h-44 w-44 rounded-full border border-zinc-200 bg-white overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 z-10 cursor-pointer"
                >
                  {/* --- LIQUID WAVE EFFECT --- */}
                  <div className="absolute top-[100%] left-[-10%] w-[200%] h-[200%] bg-black rounded-[40%] transition-all duration-700 ease-in-out group-hover:top-[-10%] group-hover:animate-[wave_70s_infinite_linear] pointer-events-none" />
                  
                  {/* CSS for Animation */}
                  <style jsx>{`
                    @keyframes wave {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                  `}</style>

                  {/* Icon and Text */}
                  <div className="relative z-10 flex flex-col items-center text-zinc-950 group-hover:text-white transition-colors duration-500">
                    <ArrowUpRight size={38} className="mb-2 transition-transform duration-500 group-hover:rotate-45" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Build Now</span>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Metadata */}
      <div className="absolute right-12 bottom-12 hidden lg:block overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col gap-4 items-end"
        >
          <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest leading-none rotate-90 origin-bottom-right mb-12">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-200 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumHero;