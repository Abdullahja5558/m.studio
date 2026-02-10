'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, ArrowRight, CheckCircle2, 
  Instagram, Github, MessageCircle, ArrowLeft
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation'; // Added this

const ContactSection = () => {
  const router = useRouter(); // Initialize the router
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_g7bny7o', 
      'template_z26wq5d', 
      form.current!,
      '-cPCd98Zumb6HWLnx'
    )
    .then(() => {
      setStatus('success');
      form.current?.reset();
      setTimeout(() => setStatus('idle'), 5000);
    }, (error) => {
      console.error("EmailJS Error:", error.text);
      setStatus('error');
    });
  };

  // Premium WhatsApp Message
  const waMessage = encodeURIComponent("Hello Abdullah! I'm interested in discussing a premium project with you. Let's connect.");

  const socials = [
    { 
      icon: <Instagram size={28} />, 
      link: "https://www.instagram.com/mian.abdullah.9",
      label: "Instagram" 
    },
    { 
      icon: <Github size={28} />, 
      link: "https://github.com/Abdullahja5558",
      label: "Github" 
    },
    { 
      icon: <MessageCircle size={28} />, 
      link: `https://wa.me/923346932540?text=${waMessage}`, 
      label: "WhatsApp" 
    },
    { 
      icon: <Mail size={28} />, 
      link: "mailto:ajdeveloperr@gmail.com",
      label: "Email" 
    },
  ];

  return (
    <section className="min-h-screen bg-[#FAFAFA] py-20 px-4 md:px-6 flex flex-col items-center justify-center font-sans relative overflow-hidden text-[#1A1A1A]">
      
      {/* Fixed Back Button - Now uses router.push('/') */}
      <motion.button 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        type="button"
        onClick={() => router.push('/')} // Direct navigation to Home
        className="absolute top-8 left-6 md:top-10 md:left-12 flex items-center gap-2 group text-[#1A1A1A] z-[100] cursor-pointer hover:opacity-70 transition-all"
      >
        <ArrowLeft size={18} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Studio</span>
      </motion.button>

      <div className="max-w-4xl w-full text-center space-y-16 md:space-y-20">
        
        {/* Header Section */}
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center items-center gap-2 mb-2">
            <span className="w-6 md:w-8 h-[1px] bg-[#1A1A1A]/20"></span>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">Direct Connection</span>
            <span className="w-6 md:w-8 h-[1px] bg-[#1A1A1A]/20"></span>
          </motion.div>
          <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] text-[#1A1A1A]">
            Let's <br /> Build.
          </h2>
          <p className="text-[#52525B] font-bold text-base md:text-xl max-w-lg mx-auto leading-relaxed px-4">
            Inquiry transmitted to ajdeveloperr@gmail.com
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 md:gap-16">
          {socials.map((social) => (
            <a 
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] transition-all duration-300 hover:scale-125 hover:opacity-60 flex flex-col items-center gap-3"
            >
              {social.icon}
              <span className="text-[9px] font-black uppercase tracking-widest hidden md:block">{social.label}</span>
            </a>
          ))}
        </div>

        {/* Form Container */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-20 rounded-[40px] md:rounded-[60px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] relative border border-zinc-50 mx-2"
        >
          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-8 rounded-[40px] md:rounded-[60px]"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F4F4F5] rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={40} className="text-[#1A1A1A]" strokeWidth={2} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-[#1A1A1A]">Request Received</h3>
                <p className="mt-4 text-[#71717A] font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em]">Response within 24 Hours</p>
                <button 
                  type="button"
                  onClick={() => setStatus('idle')} 
                  className="mt-12 px-10 py-4 bg-[#1A1A1A] text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:invert transition-all"
                >
                  New Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={form} onSubmit={sendEmail} className="space-y-8 md:space-y-12 text-left">
            <input type="hidden" name="title" value="Premium Inquiry" />
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] opacity-40 italic">Identity</label>
                <input required name="name" type="text" placeholder="Full Name" className="w-full bg-[#FAFAFA] border-none rounded-2xl p-5 md:p-6 text-sm font-bold text-[#1A1A1A] focus:ring-1 focus:ring-black transition-all outline-none shadow-sm" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] opacity-40 italic">Return Mail</label>
                <input required name="email" type="email" placeholder="email@studio.com" className="w-full bg-[#FAFAFA] border-none rounded-2xl p-5 md:p-6 text-sm font-bold text-[#1A1A1A] focus:ring-1 focus:ring-black transition-all outline-none shadow-sm" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] opacity-40 italic">Vision</label>
              <textarea required name="message" rows={5} placeholder="What project are we discussing?" className="w-full bg-[#FAFAFA] border-none rounded-2xl p-5 md:p-6 text-sm font-bold text-[#1A1A1A] focus:ring-1 focus:ring-black transition-all outline-none resize-none shadow-sm" />
            </div>

            <button 
              disabled={status === 'sending'}
              type="submit" 
              className="w-full bg-[#1A1A1A] text-white py-6 md:py-8 rounded-[25px] md:rounded-[30px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-[11px] flex items-center justify-center gap-4 hover:bg-black transition-all active:scale-95 disabled:opacity-50"
            >
              {status === 'sending' ? 'Transmitting...' : 'Send Message'} 
              <ArrowRight size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;