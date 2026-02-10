"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: 'large' | 'small';
  link: string; // Added link property
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Aurelius Editorial",
    category: "Visual Identity",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
    size: 'large',
    link: 'https://aj-code.vercel.app' // First project link
  },
  {
    id: 2,
    title: "The Mono Archive",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80&w=1000",
    size: 'small',
    link: 'https://brittanychiang.com/' // Second project link
  },
  {
    id: 3,
    title: "Linear Concept",
    category: "Interaction",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000",
    size: 'small',
    link: 'https://www.olivier-guilleux.com/' // Third project (Amazing random portfolio)
  }
];

export default function ProjectSection() {
  return (
    <section className="bg-[#FAFAFA] py-32 px-6 lg:px-24" id='work'>
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] font-bold tracking-[0.4em] text-zinc-400 uppercase block mb-4"
            >
              (Selected Works)
            </motion.span>
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-950"
            >
              Crafted with <span className="italic font-serif font-light text-zinc-400">precision.</span>
            </motion.h2> 
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block pb-2"
          >
            <p className="text-zinc-500 max-w-[280px] text-sm leading-relaxed">
              Every project is a balance of functional architecture and emotional resonance.
            </p>
          </motion.div>
        </div>

        {/* Project Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: index * 0.1 }}
              className={cn(
                "group cursor-pointer relative",
                project.size === 'large' ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              {/* Wrap Image in Link for Navigation */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden rounded-sm bg-zinc-200 aspect-[16/10] md:aspect-auto md:h-[600px] relative">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  
                  {/* Floating "View" Badge on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight size={24} className="text-black" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Project Info */}
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-1">{project.title}</h3>
                  <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">{project.category}</p>
                </div>
                <span className="text-zinc-300 text-sm font-mono italic">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 flex justify-center">
          <motion.button
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 group"
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-950">View all archives</span>
            <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
              <ArrowUpRight size={18} />
            </div>
          </motion.button>
        </div>

      </div>
    </section>
  );
}

// Utility for classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}