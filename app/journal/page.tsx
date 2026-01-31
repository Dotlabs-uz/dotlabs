'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ProjectBriefModal from '@/components/ProjectBriefModal';

export default function JournalPage() {
  const [briefOpen, setBriefOpen] = useState(false);

  return (
    <div className="relative selection:bg-blue-500 selection:text-white bg-slate-50 dark:bg-[#050505] transition-colors duration-500 min-h-screen">
      <CustomCursor />
      <Navbar onStartProject={() => setBriefOpen(true)} />
      <ProjectBriefModal isOpen={briefOpen} onClose={() => setBriefOpen(false)} />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Link href="/" className="inline-flex text-sm font-bold text-blue-600 dark:text-blue-500 hover:underline mb-12">
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Journal
          </h1>
          <p className="text-xl text-slate-500 dark:text-white/50 mb-16 max-w-xl mx-auto">
            Insights, case studies, and updates from the studio. Coming soon.
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
