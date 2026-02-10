'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Crown, Zap, ShieldCheck, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Added for routing

const AboutSection = () => {
  const router = useRouter(); // Initialize router

  const stats = [
    { label: "Design Vision", value: "Pure", icon: <Crown size={16} /> },
    { label: "Global Projects", value: "25+", icon: <Globe size={16} /> },
    { label: "Fast Delivery", value: "A-Class", icon: <Zap size={16} /> },
    { label: "Client Trust", value: "100%", icon: <ShieldCheck size={16} /> },
  ];

  return (
    <section className="min-h-screen bg-[#FAFAFA] py-20 px-6 flex flex-col items-center relative overflow-hidden text-[#1A1A1A] font-sans">
      
      {/* Back Button - Now uses router.push('/') */}
      <motion.button 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onClick={() => router.push('/')}
        className="absolute top-10 left-6 md:left-12 flex items-center gap-2 group text-[#1A1A1A] z-50 cursor-pointer"
      >
        <ArrowLeft size={20} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Studio</span>
      </motion.button>

      <div className="max-w-6xl w-full">
        
        {/* Main Hero About */}
        <div className="text-center space-y-8 mb-32 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-2"
          >
            <span className="w-12 h-[1px] bg-zinc-200"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-400 italic">The Manifesto</span>
            <span className="w-12 h-[1px] bg-zinc-200"></span>
          </motion.div>
          
          <h2 className="text-7xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8] text-[#1A1A1A]">
            M.Studio <br /> <span className="text-zinc-200">Story.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-4xl font-black italic tracking-tighter uppercase">
              Beyond the <br /> Pixel Perfect.
            </h3>
            <div className="space-y-6 text-zinc-600 font-bold text-lg leading-relaxed">
              <p>
                Founded by <span className="bg-black text-white px-3 py-1 rounded-sm inline-block transform -rotate-1">AJ Developer</span>, M.Studio is a digital sanctuary where architecture meets high-end development. We don't just "build" sites; we craft environments.
              </p>
              <p>
                Our philosophy is simple: **Reduce until it's perfect.** We eliminate the clutter so your vision can breathe. This is the new standard of digital elegance.
              </p>
            </div>
            
            <div className="flex gap-4">
               <div className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest">Est. 2026</div>
               <div className="px-6 py-2 border border-zinc-200 rounded-full text-[10px] font-black uppercase tracking-widest italic">Pakistan Based</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 md:p-16 rounded-[60px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-zinc-50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <ArrowUpRight size={40} className="text-zinc-100" />
            </div>
            <div className="space-y-10 relative z-10">
              <div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-2xl">
                <Crown size={30} className="text-white" />
              </div>
              <h4 className="text-3xl font-black italic uppercase tracking-tighter leading-none">The <br /> Architecture <br /> of Code.</h4>
              <p className="text-sm text-zinc-400 font-black uppercase tracking-widest leading-loose">
                Every project is a monolith of design and performance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Counter Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-zinc-100 py-20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="flex justify-center text-[#1A1A1A]">{stat.icon}</div>
              <div className="text-5xl font-black italic tracking-tighter uppercase">{stat.value}</div>
              <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="py-20 text-center">
            <p className="text-[10px] font-black uppercase tracking-[1em] text-zinc-300">
              M.Studio Architecture © 2026
            </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;