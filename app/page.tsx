'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ProjectBriefModal from '@/components/ProjectBriefModal';
import { INTRO_BANNER, HOME_TESTIMONIALS, TESTIMONIALS_SECTION, CTA_SECTION } from '@/content';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const [briefOpen, setBriefOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-blue-500 selection:text-white bg-slate-50 dark:bg-[#050505] transition-colors duration-500">
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar onStartProject={() => setBriefOpen(true)} />
      <ProjectBriefModal isOpen={briefOpen} onClose={() => setBriefOpen(false)} />
      
      <main>
        <Hero />
        
        {/* Intro / Values Banner (About) */}
        <section id="about" className="py-24 bg-white dark:bg-zinc-900/50 text-black dark:text-white overflow-hidden relative transition-colors duration-500">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center pointer-events-none opacity-[0.05] dark:opacity-[0.03]">
            <span className="text-[20rem] font-black whitespace-nowrap animate-marquee">
              {INTRO_BANNER.marqueeText}
            </span>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight max-w-3xl">
              {INTRO_BANNER.headline.split(INTRO_BANNER.headlineHighlight)[0]}
              <span className="text-blue-600">{INTRO_BANNER.headlineHighlight}</span>
              {INTRO_BANNER.headline.split(INTRO_BANNER.headlineHighlight)[1]}
            </h2>
            <div className="flex-shrink-0">
              <Link href="/#about" className="block w-32 h-32 rounded-full border-2 border-black/10 dark:border-white/10 p-2 group cursor-pointer hover:border-blue-600 transition-colors">
                <div className="w-full h-full rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xs font-bold uppercase tracking-widest text-center leading-none group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {INTRO_BANNER.missionLabel}
                </div>
              </Link>
            </div>
          </div>
        </section>

        <ServicesSection />
        
        <PortfolioSection />

        <TeamSection />

        {/* Testimonials */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-16">{TESTIMONIALS_SECTION.label}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {HOME_TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass dark:bg-white/5 bg-slate-200/50 p-12 rounded-[3rem] relative transition-colors duration-500"
                >
                  <div className="text-6xl text-blue-500 font-serif absolute top-8 left-8 opacity-20">&quot;</div>
                  <p className="text-2xl font-medium mb-10 leading-relaxed italic text-slate-800 dark:text-white/90">
                    {t.quote}
                  </p>
                  <div className="flex items-center space-x-4">
                    <img src={t.image} className="w-12 h-12 rounded-full grayscale" alt={t.author} />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{t.author}</h4>
                      <p className="text-xs text-slate-500 dark:text-white/40 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto glass dark:bg-white/5 bg-slate-200/50 rounded-[4rem] p-12 md:p-24 text-center overflow-hidden transition-colors duration-500">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-10 leading-none text-slate-900 dark:text-white">
                {CTA_SECTION.headline.split(CTA_SECTION.headlineHighlight)[0].trim()}
                <br />
                <span className="text-gradient">{CTA_SECTION.headlineHighlight}</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-white/50 mb-12 max-w-xl mx-auto">
                {CTA_SECTION.subtitle}
              </p>
              <button
                type="button"
                onClick={() => setBriefOpen(true)}
                className="px-12 py-6 bg-blue-600 text-white text-xl font-bold rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black hover:scale-105 transition-all duration-500 shadow-2xl shadow-blue-600/20"
              >
                {CTA_SECTION.buttonLabel}
              </button>
            </motion.div>
            
            {/* Animated Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
