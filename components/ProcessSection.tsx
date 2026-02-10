"use client";

import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    no: "01",
    title: "Discovery & Strategy",
    text: "Hum aapke brand ke core values ko samajhte hain aur ek solid roadmap taiyar karte hain jo market mein stand-out kare."
  },
  {
    no: "02",
    title: "Minimal Design System",
    text: "Clean typography aur balanced spacing ke sath ek aisa design language jo long-lasting aur premium ho."
  },
  {
    no: "03",
    title: "Seamless Development",
    text: "Modern tech stack (Next.js & Framer Motion) ka use karke hum animations ko code mein convert karte hain."
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-[#FAFAFA] py-32 border-t border-zinc-100"
    id='flow'>
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-40">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-black" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                  How we work
                </span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-zinc-950 leading-[0.9]">
                Our <br />
                <span className="text-zinc-300 italic font-serif font-light">Workflow.</span>
              </h2>
              
              <p className="mt-8 text-zinc-500 max-w-xs leading-relaxed font-medium">
                this is how we approach every project with a blend of creativity, strategy, and technical excellence to deliver digital experiences that resonate and perform.
              </p>
            </div>
          </div>

          {/* RIGHT: Steps List */}
          <div className="lg:w-2/3 space-y-20 md:space-y-32">
            {STEPS.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Step Number with Luxury Glass effect */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-xs font-mono font-bold group-hover:bg-black group-hover:text-white transition-all duration-500">
                    {step.no}
                  </div>
                  <div className="h-[1px] flex-grow bg-zinc-100 group-hover:bg-zinc-300 transition-all duration-700" />
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-2xl group-hover:text-zinc-600 transition-colors duration-500">
                  {step.text}
                </p>

                {/* Decorative Reveal line */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute -bottom-10 left-0 h-[1px] bg-gradient-to-r from-zinc-200 to-transparent"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}