'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Users,
  Layers,
  CheckCircle2,
  Zap,
  Target,
  Shield,
} from 'lucide-react';
import type { ProjectDetail } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ProjectBriefModal from '@/components/ProjectBriefModal';

export default function ProjectPageClient({ project }: { project: ProjectDetail }) {
  const [briefOpen, setBriefOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const techList = project.technologies ?? project.tags;
  const benefits = project.clientBenefits ?? [];
  const videos = project.storytellingVideos ?? [];

  return (
    <div className="relative selection:bg-blue-500 selection:text-white bg-slate-50 dark:bg-[#050505] transition-colors duration-500 min-h-screen">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar onStartProject={() => setBriefOpen(true)} />
      <ProjectBriefModal isOpen={briefOpen} onClose={() => setBriefOpen(false)} />

      <main>
        {/* Hero — full-bleed image + overlay text */}
        <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-slate-950/30 dark:bg-slate-950/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors w-fit"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Work
              </Link>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
                {project.category} · {project.year ?? '2026'}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-[0.95]">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light">
                {project.longDescription || project.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Metrics strip */}
        <section className="relative py-16 md:py-24 border-y border-slate-900/10 dark:border-white/5 bg-white dark:bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            >
              {project.duration && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
                      {project.duration}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/40 mt-1">
                      Duration
                    </p>
                  </div>
                </div>
              )}
              {project.teamSize != null && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
                      {project.teamSize}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/40 mt-1">
                      Team
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
                    {techList.length}+
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/40 mt-1">
                    Technologies
                  </p>
                </div>
              </div>
              {project.deliverables && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
                      {project.deliverables.length}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/40 mt-1">
                      Deliverables
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Client benefits — what we did for the client */}
        {benefits.length > 0 && (
          <section className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500">
                  Value delivered
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tighter">
                  What we built <br />
                  <span className="text-gradient">for the client.</span>
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-10 rounded-[2rem] glass dark:bg-white/5 bg-slate-100/50 border border-slate-900/5 dark:border-white/10 hover:border-blue-500/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      {i === 0 && <Zap className="w-6 h-6 text-blue-600" />}
                      {i === 1 && <Target className="w-6 h-6 text-blue-600" />}
                      {i === 2 && <Shield className="w-6 h-6 text-blue-600" />}
                      {i > 2 && <CheckCircle2 className="w-6 h-6 text-blue-600" />}
                      {b.metric && (
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">
                          {b.metric}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
                      {b.title}
                    </h3>
                    <p className="text-slate-600 dark:text-white/50 leading-relaxed">
                      {b.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="py-24 md:py-32 px-6 bg-white dark:bg-[#080808] border-y border-slate-900/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500">
                Stack
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tighter">
                Technologies <span className="text-blue-600">we used.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {techList.map((t, i) => (
                <span
                  key={t}
                  className="px-6 py-3 rounded-full glass dark:bg-white/5 bg-slate-100 border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-sm"
                >
                  {t}
                </span>
              ))}
            </motion.div>
            {project.deliverables && project.deliverables.length > 0 && (
              <>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mt-16 mb-6">
                  Deliverables
                </h3>
                <ul className="flex flex-wrap gap-4">
                  {project.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-slate-600 dark:text-white/60"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>

        {/* Storytelling — process videos */}
        {videos.length > 0 && (
          <section className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500">
                  Behind the scenes
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tighter">
                  The <span className="text-gradient">process.</span>
                </h2>
                <p className="text-slate-500 dark:text-white/40 mt-4 max-w-xl text-lg">
                  How we worked on this project — from discovery to delivery.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group rounded-[2rem] overflow-hidden bg-slate-900 dark:bg-black border border-slate-900/10 dark:border-white/10"
                  >
                    <div className="relative aspect-video bg-slate-800">
                      <video
                        src={v.url}
                        poster={v.thumbnail}
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />
                      <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-bold uppercase tracking-widest">
                        {v.duration}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                        {v.title}
                      </h3>
                      {v.caption && (
                        <p className="text-slate-500 dark:text-white/40 text-sm">
                          {v.caption}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] md:rounded-[4rem] p-12 md:p-24 text-center glass dark:bg-white/5 bg-slate-200/50 border border-slate-900/5 dark:border-white/10 overflow-hidden relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
              <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tighter">
                Ready to build <span className="text-gradient">your</span> legacy?
              </h2>
              <p className="text-slate-500 dark:text-white/50 text-lg max-w-xl mx-auto mb-10">
                Tell us about your project. We only take on work where we can deliver 10x value.
              </p>
              <button
                type="button"
                onClick={() => setBriefOpen(true)}
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black transition-all shadow-xl shadow-blue-600/20"
              >
                Start a project
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
