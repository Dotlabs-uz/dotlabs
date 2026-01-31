'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NAV_LINKS, BRAND } from '@/content';

interface NavbarProps {
  onStartProject?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme || 'dark';
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center py-6 px-4">
      <motion.div 
        className={`flex items-center justify-between w-full max-w-7xl px-6 py-4 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'glass bg-white/10 dark:bg-black/20' 
            : 'bg-transparent'
        } ${currentTheme === 'light' && scrolled ? 'bg-slate-200/50 border-slate-900/10' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // Fix: Narrow ease type to BezierDefinition
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
            {BRAND.logoLetter}
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-colors">{BRAND.name}</span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-white/70 hover:text-blue-600 dark:hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          
          <button 
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-full flex items-center justify-center glass dark:bg-white/5 bg-slate-900/5 text-slate-900 dark:text-white transition-all hover:scale-110"
            aria-label="Toggle Theme"
          >
            {mounted && (currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
          </button>

          <button
            onClick={() => onStartProject?.()}
            className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform active:scale-95 shadow-lg shadow-white/5"
          >
            Start Project
          </button>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-full flex items-center justify-center glass dark:bg-white/5 bg-slate-900/5 text-slate-900 dark:text-white transition-all"
          >
             {mounted && (currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
          </button>
          <button 
            className="p-2 text-slate-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass dark:bg-black/90 bg-white/95 rounded-3xl p-8 flex flex-col space-y-6 md:hidden z-40 border border-slate-900/5"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xl font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setIsOpen(false); onStartProject?.(); }}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20"
            >
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
