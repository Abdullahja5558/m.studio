"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const SERVICES = [
  {
    id: "01",
    title: "Visual Design",
    description: "Creating digital identities that resonate with modern aesthetics and functional clarity.",
  },
  {
    id: "02",
    title: "Web Experience",
    description: "High-performance websites built with Next.js, focusing on speed and fluid motion.",
  },
  {
    id: "03",
    title: "Interaction",
    description: "Micro-interactions and animations that make digital products feel alive and tactile.",
  }
];

export default function ExpertiseSection() {
  const containerRef = useRef(null);

  return (
    // Background remains #FAFAFA as requested
    <section ref={containerRef} className="relative bg-[#FAFAFA] py-24 md:py-32 overflow-hidden"
    id='expertise'>
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-zinc-400" />
            <span className="text-zinc-500 text-[10px] font-black tracking-[0.4em] uppercase">
              Our Expertise
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-zinc-900 max-w-4xl leading-[1.1]">
            We bridge the gap between <span className="text-zinc-400">imagination</span> and digital reality.
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col border-b border-zinc-200">
          {SERVICES.map((service, index) => (
            <ServiceRow 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>

      {/* Subtle Soft Glows for Light Mode */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-200/50 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}

function ServiceRow({ service, index }: { service: typeof SERVICES[0], index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative border-t border-zinc-200 py-10 md:py-20 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 cursor-pointer transition-all duration-500"
    >
      {/* Background Hover Effect - Soft Zinc wash */}
      <div className="absolute inset-0 bg-zinc-100/0 group-hover:bg-zinc-100/80 transition-all duration-500 -z-10" />

      {/* Index */}
      <div className="md:col-span-1">
        <span className="text-zinc-400 font-mono text-sm group-hover:text-zinc-900 transition-colors duration-300">
          {service.id}
        </span>
      </div>

      {/* Title - Slate 500 to Black */}
      <div className="md:col-span-6">
        <h3 className="text-3xl md:text-6xl font-semibold text-zinc-800 group-hover:text-black transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-6">
          {service.title}
        </h3>
      </div>

      {/* Description - Muted to Darker */}
      <div className="md:col-span-4 flex items-center">
        <p className="text-zinc-500 text-sm md:text-lg leading-relaxed group-hover:text-zinc-800 transition-colors duration-500 max-w-sm">
          {service.description}
        </p>
      </div>

      {/* Interactive Plus Icon */}
      <div className="md:col-span-1 flex justify-end items-center md:items-start pt-2">
        <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:rotate-90 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <Plus size={20} strokeWidth={1.5} />
        </div>
      </div>
    </motion.div>
  );
}