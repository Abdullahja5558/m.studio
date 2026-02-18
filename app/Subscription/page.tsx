"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, ArrowRight, ChevronLeft, 
  Crown, Fingerprint, Box, ShieldCheck, Award, Zap, Gem
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const PLANS = [
  {
    name: "Identity",
    price: "0",
    description: "Essential tools for independent architects to begin their digital legacy.",
    features: ["Single Project Export", "Curation Tools", "Standard Typography"],
    buttonText: "Get Started",
    action: "build",
    premium: false,
    icon: <Fingerprint size={22} strokeWidth={1.5} />
  },
  {
    name: "The Studio",
    price: "Custom",
    description: "Our signature high-performance experience for growing design firms.",
    features: ["Unlimited Collections", "White-Label Branding", "Priority Architecture Support", "Full Font Library"],
    buttonText: "Inquire for Access",
    action: "contact",
    premium: true,
    tag: "Most Preferred",
    icon: <Crown size={22} strokeWidth={1.5} />
  },
  {
    name: "Monolith",
    price: "35",
    description: "The ultimate elite toolset for world-class developers and studios.",
    features: ["Advanced API Access", "SEO Master Suite", "1-on-1 Design Review", "Lifetime License"],
    buttonText: "Purchase Elite",
    action: "contact",
    premium: false,
    icon: <Box size={22} strokeWidth={1.5} />
  }
];

export default function Subscription() {
  const router = useRouter();

  const handleSelection = (action: string) => {
    if (action === "build") {
      router.push('/builder');
    } else {
      router.push('/contact');
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-zinc-950 font-sans selection:bg-black selection:text-white pb-32">
      
      {/* Navigation */}
      <nav className="relative p-8 flex justify-between items-center max-w-[1400px] mx-auto z-10">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-950 transition-all group cursor-pointer"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to studio
        </button>
        
        <div className="font-black italic text-3xl tracking-tighter border-[4px] border-zinc-950 px-3 py-0.5 select-none bg-white">
          M.
        </div>
        
        <div className="hidden md:block text-[9px] font-black uppercase tracking-[0.5em] text-zinc-400">
          EST. 2026
        </div>
      </nav>

      <main className="max-w-[1300px] mx-auto px-8">
        <header className="text-center mb-24 mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] text-zinc-950"
          >
            Upgrade <br />
            <span className="text-zinc-300">Your Tier</span>
          </motion.h1>
        </header>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-32">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className={`
                flex-1 flex flex-col p-12 rounded-[40px] transition-all duration-500 border relative overflow-hidden
                ${plan.premium 
                  ? 'bg-zinc-950 border-zinc-800 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] z-10 lg:scale-[1.05] text-white' 
                  : 'bg-white border-zinc-200 hover:border-zinc-400 shadow-sm text-zinc-950'}
              `}>
                
                {/* Premium Glow & Tag Improvements */}
                {plan.premium && (
                  <>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#D4AF37] px-6 py-1.5 rounded-b-2xl">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black">Most Preferred</span>
                    </div>
                    <div className="absolute top-8 right-8">
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Zap size={22} className="text-[#D4AF37] fill-[#D4AF37]/20" />
                      </motion.div>
                    </div>
                  </>
                )}

                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${plan.premium ? 'bg-white text-black' : 'bg-zinc-100 text-zinc-950'}`}>
                    {plan.icon}
                  </div>
                  
                  <span className={`text-[10px] font-black uppercase tracking-[0.4em] block mb-2 ${plan.premium ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    {plan.name}
                  </span>
                  
                  <div className="flex items-baseline gap-1 h-20 items-center">
                    {plan.price !== "Custom" && (
                        <span className={`text-2xl font-black ${plan.premium ? 'text-zinc-600' : 'text-zinc-300'}`}>$</span>
                    )}
                    <span className={`font-black italic tracking-tighter leading-none ${plan.price === "Custom" ? 'text-5xl md:text-6xl uppercase' : 'text-7xl md:text-8xl'}`}>
                      {plan.price}
                    </span>
                  </div>
                </div>

                <p className={`text-sm font-medium mb-12 leading-relaxed ${plan.premium ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {plan.description}
                </p>

                <div className="space-y-6 mb-16 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4 group/item cursor-default">
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full ${plan.premium ? 'bg-zinc-800 text-white' : 'bg-zinc-50 text-zinc-950'}`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${plan.premium ? 'text-zinc-500 group-hover/item:text-white' : 'text-zinc-400 group-hover/item:text-zinc-950'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleSelection(plan.action)}
                  className={`
                    w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] 
                    flex items-center justify-center gap-4 transition-all cursor-pointer
                    ${plan.premium 
                      ? 'bg-white text-black hover:bg-[#D4AF37]' 
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'}
                  `}
                >
                  {plan.buttonText}
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Trusted Badges Section - Polished */}
        <div className="relative py-20 px-8 rounded-[50px] bg-white border border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-950 to-transparent opacity-20" />
          
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-300">Certified Elite Architecture</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 items-center max-w-5xl mx-auto">
            {/* Badge 1 */}
            <div className="flex flex-col items-center gap-5 group/badge cursor-crosshair">
              <div className="w-20 h-20 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover/badge:bg-zinc-950 group-hover/badge:rotate-[10deg] transition-all duration-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                <ShieldCheck size={28} className="text-zinc-400 group-hover/badge:text-[#D4AF37] transition-colors" />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-950">Vault Secured</p>
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400 mt-1">Bank-Level</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center gap-5 group/badge cursor-crosshair">
              <div className="w-20 h-20 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover/badge:bg-zinc-950 group-hover/badge:-rotate-[10deg] transition-all duration-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                <Award size={28} className="text-zinc-400 group-hover/badge:text-[#D4AF37] transition-colors" />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-950">A' Design</p>
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400 mt-1">Global Winner</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center gap-5 group/badge cursor-crosshair">
              <div className="w-20 h-20 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover/badge:bg-zinc-950 group-hover/badge:rotate-[10deg] transition-all duration-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                <Gem size={28} className="text-zinc-400 group-hover/badge:text-[#D4AF37] transition-colors" />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-950">Elite Tier</p>
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400 mt-1">Structural Excellence</p>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex flex-col items-center gap-5 group/badge cursor-crosshair">
              <div className="w-20 h-20 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover/badge:bg-zinc-950 group-hover/badge:-rotate-[10deg] transition-all duration-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                <div className="flex gap-1">
                  <Check size={14} strokeWidth={4} className="text-zinc-400 group-hover/badge:text-[#D4AF37]" />
                  <Check size={14} strokeWidth={4} className="text-zinc-400 group-hover/badge:text-[#D4AF37] opacity-40" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-950">Studio Pro</p>
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400 mt-1">Verified Partner</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 text-center pb-12">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-300">Architect Studio Global Collective • 2026</p>
        </footer>
      </main>
    </div>
  );
}