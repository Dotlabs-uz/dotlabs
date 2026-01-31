'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { ArrowUpRight, Zap, Globe } from 'lucide-react';
import { HERO } from '@/content';

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Fix: Explicitly type titleVariants as Variants and cast the ease array to a fixed tuple
  const titleVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      {/* 2026 Mesh Background */}
      <div className="absolute inset-0 -z-30 bg-slate-50 dark:bg-[#050505] transition-colors duration-700">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-40" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      </div>

      {/* The Digital Core - Animated Centerpiece */}
      <motion.div 
        style={{ y: y1, rotate, opacity, scale }}
        className="absolute w-[600px] h-[600px] -z-10 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full border border-blue-500/20 rounded-full flex items-center justify-center"
        >
          <div className="w-4/5 h-4/5 border border-blue-500/10 rounded-full" />
          <div className="absolute w-1/2 h-1/2 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10 rounded-full blur-3xl" />
        </motion.div>
      </motion.div>

      {/* Floating Metadata - Parallax Elements */}
      <motion.div style={{ y: y2 }} className="absolute top-1/4 right-[10%] hidden lg:block glass dark:bg-white/5 p-4 rounded-2xl border border-blue-500/20">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Status: Available for Q3</span>
        </div>
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute bottom-1/4 left-[10%] hidden lg:block glass dark:bg-white/5 p-4 rounded-2xl border border-purple-500/20">
        <div className="flex items-center space-x-3">
          <Globe className="w-4 h-4 text-blue-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">HQ: Tashkent, UZ • 14:02 PM</span>
        </div>
      </motion.div>

      <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass bg-white/50 dark:bg-white/5 border border-slate-900/5 dark:border-white/10 mb-12 shadow-sm"
        >
          <Zap className="w-4 h-4 text-blue-600" />
          <span className="text-[10px] font-black tracking-[0.3em] text-slate-900 dark:text-blue-100 uppercase">{HERO.badge.text}</span>
        </motion.div>

        {/* Kinetic Heading */}
        <div className="relative mb-10 overflow-hidden">
          <h1 className="text-7xl md:text-[9rem] font-display font-bold leading-[0.9] tracking-tighter text-slate-900 dark:text-white transition-colors duration-500">
            {HERO.title.map((word, i) => (
              <div key={i} className="overflow-hidden inline-block mx-2 md:mx-4">
                <motion.span
                  custom={i}
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {word === HERO.titleHighlight ? <span className="text-gradient italic">{HERO.titleHighlight}</span> : word}
                </motion.span>
              </div>
            ))}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-slate-500 dark:text-white/40 mb-16 leading-relaxed font-light"
        >
          {HERO.subtitle}
        </motion.p>

        {/* Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <Link href={HERO.cta.primaryHref}>
            <MagneticButton className="group relative px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full overflow-hidden transition-all duration-500 shadow-2xl shadow-blue-600/10">
              <span className="relative z-10 flex items-center">
                {HERO.cta.primary}
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </MagneticButton>
          </Link>
          <Link href={HERO.cta.secondaryHref} className="px-12 py-6 text-slate-900 dark:text-white font-bold border-b-2 border-slate-900/10 dark:border-white/10 hover:border-blue-600 transition-colors">
            {HERO.cta.secondary}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4">{HERO.scrollHint}</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-600 to-transparent" />
      </motion.div>

      {/* Decorative Grid Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 dark:from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
