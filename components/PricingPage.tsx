'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Navigation, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const PricingPage = ({ onSelectFree }: { onSelectFree: () => void }) => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const plans = [
    {
      name: "Identity",
      price: "0",
      desc: "For independent architects starting their digital legacy.",
      features: ["Single Project Export", "Curation Tools", "Standard Typography"],
      button: "Claim Free Access",
      action: () => setShowPopup(true),
      popular: false
    },
    {
      name: "The Studio", 
      price: "Custom",    
      desc: "Our signature experience for growing design firms.",
      features: ["Unlimited Collections", "White-label Branding", "Priority Architecture Support", "Full Font Library"],
      button: "Inquire for Access",
      action: () => router.push('/contact'), 
      popular: true
    },
    {
      name: "Monolith",
      price: "35",
      desc: "The ultimate toolset for world-class developers.",
      features: ["Advanced API Access", "SEO Master Suite", "1-on-1 Design Review", "Lifetime License"],
      button: "Purchase Elite",
      action: () => router.push('/contact'), 
      popular: false
    }
  ];

  return (
    /* Added selection styles here */
    <section id='pricing' className="selection:bg-black selection:text-white">
      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="h-[1px] w-8 bg-black/10"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Investment Tiers</span>
              <span className="h-[1px] w-8 bg-black/10"></span>
            </motion.div>
            
            {/* Added spacing between "Built for" and "Perfection" */}
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
              <span className="block mb-4">Built for</span>
              <span className="bg-black text-white px-4 py-1 inline-block">Perfection.</span>
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative rounded-[40px] p-10 md:p-14 flex flex-col justify-between transition-all duration-500 ${
                  plan.popular 
                  ? 'bg-[#0A0A0A] text-white shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] md:-translate-y-6' 
                  : 'bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:border-zinc-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-zinc-700 to-zinc-900 text-white px-6 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl border border-zinc-600">
                    Most Preferred
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-10">
                    <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] ${plan.popular ? 'text-zinc-500' : 'text-zinc-300'}`}>
                      {plan.name}
                    </h3>
                    {plan.popular ? <Zap size={16} className="text-yellow-500" /> : <ShieldCheck size={16} className="text-zinc-200" />}
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      {plan.price !== "Custom" && <span className="text-3xl font-black italic">$</span>}
                      <span className="text-7xl font-black italic tracking-tighter leading-none">{plan.price}</span>
                    </div>
                    <p className={`mt-6 text-sm font-medium leading-relaxed ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className="space-y-5 mb-12">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-4">
                        <Check size={14} className={plan.popular ? 'text-white' : 'text-black'} strokeWidth={3} />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={plan.action}
                  className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 group cursor-pointer ${
                    plan.popular 
                    ? 'bg-white text-black hover:bg-zinc-200' 
                    : 'bg-black text-white hover:bg-zinc-800'
                  }`}
                >
                  {plan.button}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUCCESS POPUP */}
        <AnimatePresence>
          {showPopup && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                className="bg-white p-12 md:p-20 rounded-[60px] max-w-xl w-full text-center shadow-2xl"
              >
                <div className="w-20 h-20 bg-black rounded-[30px] flex items-center justify-center mx-auto mb-10 rotate-12">
                  <Navigation className="text-white fill-white -rotate-12" size={28} />
                </div>
                <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-6 leading-none">Access <br /> Granted.</h2>
                <p className="text-zinc-500 mb-10 text-sm font-medium uppercase tracking-widest">Selected: Identity (Free Tier)</p>
                
                <div className="space-y-4">
                  <button 
                    onClick={onSelectFree}
                    className="w-full bg-black text-white py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all cursor-pointer"
                  >
                    Launch Builder
                  </button>
                  <button onClick={() => setShowPopup(false)} className="text-[10px] font-black uppercase text-zinc-300 hover:text-black tracking-[0.3em] transition-all cursor-pointer">
                    Return to Plans
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PricingPage;