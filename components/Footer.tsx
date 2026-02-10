"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link'; // Import Link for navigation
import { useRouter } from 'next/navigation'; // Import useRouter for programmatic navigation

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear();
  const router = useRouter(); // Initialize router

  return (
    <footer className="bg-white pt-32 pb-12 border-t border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* 1. BIG CALL TO ACTION */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-8"
          >
            Have a project in mind?
          </motion.span>
          
          {/* UPDATED: Changed from <a> to <Link> to navigate to /contact */}
          <Link href="/contact">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative inline-block cursor-pointer"
            >
              <h2 className="text-[clamp(2.5rem,12vw,10rem)] font-black tracking-[-0.05em] leading-none text-zinc-950 transition-all duration-700 group-hover:text-zinc-300">
                Let's Talk.
              </h2>
              {/* Animated Underline */}
              <div className="absolute bottom-0 left-0 w-0 h-[4px] md:h-[8px] bg-black transition-all duration-700 ease-in-out group-hover:w-full" />
            </motion.div>
          </Link>
        </div>

        {/* 2. FOOTER CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-zinc-100">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5">
            <span className="text-2xl font-black italic tracking-tighter mb-6 block">M.</span>
            <p className="text-zinc-500 max-w-xs leading-relaxed font-medium">
              Digital excellence through minimal architecture. Building the future of the web, one pixel at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Navigation</span>
            {['Work', 'Expertise', 'Process', 'About'].map((link) => (
              <a key={link} href="#" className="text-zinc-900 font-bold hover:text-zinc-400 transition-colors w-fit">{link}</a>
            ))}
          </div>

          {/* Socials */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Social</span>
            {[
              { name: 'Instagram', icon: Instagram, link: "https://www.instagram.com/mian.abdullah.9" },
              
              { name: 'GitHub', icon: Github, link: "https://github.com/Abdullahja5558" },
            ].map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-900 font-bold hover:text-zinc-400 transition-colors group">
                <social.icon size={14} />
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          {/* Location/Time */}
          <div className="md:col-span-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 block">Location</span>
            <p className="text-zinc-900 font-bold leading-tight">
              Based in FSD, Pakistan <br />
              <span className="text-zinc-400 font-medium">Available Worldwide</span>
            </p>
            <div className="mt-8 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 inline-flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-zinc-900">OPEN FOR NEW PROJECTS</span>
            </div>
          </div>

        </div>

        {/* 3. BOTTOM BAR */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            © {currentYear} Minimal Studio. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold text-zinc-400 hover:text-black uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold text-zinc-400 hover:text-black uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>

          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -5 }}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
              <ArrowUpRight size={14} className="-rotate-45" />
            </div>
          </motion.button>
        </div>

      </div>
    </footer>
  );
}