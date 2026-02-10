"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export default function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Flow', href: '#flow' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center z-[100] pt-4 md:pt-6 px-4 pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          width: isScrolled ? "auto" : "95%",
          maxWidth: isScrolled ? "600px" : "1400px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          borderRadius: isScrolled ? "40px" : "0px",
          border: isScrolled ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(0, 0, 0, 0)",
          boxShadow: isScrolled ? "0 25px 50px -12px rgba(0, 0, 0, 0.1)" : "0 0px 0px rgba(0, 0, 0, 0)",
          paddingLeft: isScrolled ? "24px" : "0px",
          paddingRight: isScrolled ? "20px" : "0px",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
        className="flex items-center justify-between overflow-hidden relative pointer-events-auto h-16 md:h-20"
      >
        {/* 1. BRAND / LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span 
            className="font-black tracking-tighter text-black text-2xl md:text-3xl italic"
          >
            M.
          </motion.span>
          <AnimatePresence>
            {!isScrolled && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-black tracking-[0.4em] text-[10px] text-black uppercase hidden md:block"
              >
                Studio
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* 2. DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-black transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* 3. RIGHT SECTION (ABOUT + MOBILE MENU) */}
        <div className="flex items-center gap-2">
          <Link href="/about" className="hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2",
                isScrolled ? "bg-black text-white" : "bg-white text-black border border-zinc-200 shadow-sm"
              )}
            >
              About
              <ArrowUpRight size={14} />
            </motion.button>
          </Link>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 text-black"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-[32px] p-8 border border-zinc-100 shadow-2xl pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black italic uppercase tracking-tighter text-zinc-400 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-zinc-100" />
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black italic uppercase tracking-tighter text-black flex items-center justify-between"
              >
                About <ArrowUpRight size={24} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}