"use client";

import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { label: "Projects Completed", value: "120+" },
  { label: "Happy Clients", value: "85" },
  { label: "Design Awards", value: "12" },
  { label: "Years Experience", value: "08" },
];

export default function ImpactSection() {
  return (
    <section className="bg-[#FAFAFA] py-24 overflow-hidden">
      
      {/* 1. INFINITE MARQUEE - Luxury "Moving" Text */}
      <div className="flex overflow-hidden whitespace-nowrap border-y border-zinc-200 py-10 mb-32 bg-white">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-20 items-center">
              <span className="text-7xl md:text-9xl font-black tracking-tighter text-zinc-950">
                VERSATILE DESIGN
              </span>
              <div className="w-4 h-4 rounded-full bg-zinc-300" />
              <span className="text-7xl md:text-9xl font-light italic font-serif text-zinc-300">
                FUTURE PROOF
              </span>
              <div className="w-4 h-4 rounded-full bg-zinc-300" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. PREMIUM STATS GRID */}
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left group cursor-default"
            >
              {/* Number with subtle hover scale */}
              <div className="relative mb-4">
                <span className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 group-hover:text-zinc-400 transition-colors duration-500">
                  {stat.value}
                </span>
                {/* Underline animation */}
                <motion.div 
                  className="h-[2px] w-0 bg-black group-hover:w-full transition-all duration-500 mt-2"
                />
              </div>
              
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. SUBTLE QUOTE - Contextual Finish */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-40 text-center px-6"
      >
        <p className="text-sm md:text-base font-medium text-zinc-400 tracking-wide italic max-w-xl mx-auto">
          "Design is not just what it looks like and feels like. <br className="hidden md:block"/>
          Design is how it works."
        </p>
      </motion.div>

    </section>
  );
}