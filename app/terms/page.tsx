'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ProjectBriefModal from '@/components/ProjectBriefModal';
import { BRAND } from '@/content';

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-500 dark:text-white/50 mb-12">
            Last updated: 2026. By using our website and services, you agree to these terms.
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-white/70">
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">1. Acceptance</h2>
              <p>
                By accessing or using {BRAND.name}&apos;s website and services, you agree to be bound by these Terms of Service. 
                If you do not agree, please do not use our site or services.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">2. Services</h2>
              <p>
                We provide digital product design and development services. Scope, deliverables, timelines, and fees 
                are defined in separate agreements or statements of work. This website is for information and contact only.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">3. Use of the website</h2>
              <p>
                You may not use this site for any unlawful purpose, to distribute malware, or to attempt to gain 
                unauthorised access to our systems or data. Content on the site is for general information; we reserve 
                the right to change it without notice.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">4. Intellectual property</h2>
              <p>
                All content, branding, and materials on this site are owned by {BRAND.name} or its licensors. 
                Work we create for clients is governed by the relevant project agreement.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">5. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential 
                damages arising from your use of the site or our services. Our liability is limited as set out in any 
                separate contract with you.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">6. Contact</h2>
              <p>
                For questions about these terms, contact us using the details in the footer of this website.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
