'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ProjectBriefModal from '@/components/ProjectBriefModal';
import { BRAND } from '@/content';

export default function CareersPage() {
  const [briefOpen, setBriefOpen] = useState(false);

  return (
    <div className="relative selection:bg-blue-500 selection:text-white bg-slate-50 dark:bg-[#050505] transition-colors duration-500 min-h-screen">
      <CustomCursor />
      <Navbar onStartProject={() => setBriefOpen(true)} />
      <ProjectBriefModal isOpen={briefOpen} onClose={() => setBriefOpen(false)} />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline mb-12">
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Careers at {BRAND.name}
          </h1>
          <p className="text-xl text-slate-500 dark:text-white/50 mb-12">
            We’re always looking for talented designers and engineers who care about craft and impact.
          </p>
          <div className="glass dark:bg-white/5 bg-slate-100/50 rounded-3xl p-10 border border-slate-900/5 dark:border-white/10 mb-12">
            <p className="text-slate-600 dark:text-white/70 mb-8">
              Open roles will be listed here. If you don’t see a fit but want to work with us, use the project brief to tell us about yourself and what you’re looking for.
            </p>
            <button
              type="button"
              onClick={() => setBriefOpen(true)}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black transition-all"
            >
              Get in touch
            </button>
          </div>
          <Link href="/" className="text-slate-500 dark:text-white/50 hover:text-blue-600 dark:hover:text-blue-500 font-medium">
            ← Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
