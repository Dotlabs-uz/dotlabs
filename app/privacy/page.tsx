'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ProjectBriefModal from '@/components/ProjectBriefModal';
import { BRAND } from '@/content';

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-slate-500 dark:text-white/50 mb-12">
            Last updated: 2026. This policy describes how {BRAND.name} collects, uses, and protects your information.
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-white/70">
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">1. Information we collect</h2>
              <p>
                We may collect information you provide directly (e.g. when filling out a project brief, contacting us, or subscribing to updates), 
                including name, email, phone number, and project details. We also collect usage data when you visit our site (e.g. device, browser, pages visited) 
                to improve our services.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">2. How we use it</h2>
              <p>
                We use your information to respond to inquiries, deliver services, send relevant updates, and improve our website and processes. 
                We do not sell your personal data to third parties.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">3. Data retention & security</h2>
              <p>
                We retain your data only as long as necessary for the purposes above or as required by law. 
                We take reasonable technical and organisational measures to protect your data against unauthorised access or loss.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">4. Your rights</h2>
              <p>
                You may request access, correction, or deletion of your personal data, or object to certain processing. 
                Contact us using the details on our website to exercise these rights.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">5. Contact</h2>
              <p>
                For privacy-related questions, contact us at the address or email provided in the footer of this website.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
