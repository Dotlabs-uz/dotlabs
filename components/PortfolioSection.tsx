'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, WORK_SECTION } from '@/content';
import { Category } from '@/types';
import { ArrowUpRight } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const categories: Category[] = ['All', 'Web', 'Mobile', 'CRM', 'UI/UX'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-32 px-4 bg-slate-100/50 dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">{WORK_SECTION.title}</h2>
            <p className="text-slate-500 dark:text-white/50 text-lg">{WORK_SECTION.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'glass dark:bg-white/5 bg-slate-900/5 text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white border border-slate-900/5 dark:border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const href = project.slug ? `/projects/${project.slug}` : '#';
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-none"
                >
                  <Link href={href} className="block">
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-200 dark:bg-neutral-900 shadow-xl shadow-slate-900/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                        <div>
                          <div className="flex gap-2 mb-3">
                            {project.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white">{tag}</span>
                            ))}
                          </div>
                          <h4 className="text-2xl font-bold mb-2 text-white">{project.title}</h4>
                          <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>
                        </div>
                      </div>
                      <div className="absolute top-6 right-6 w-12 h-12 glass dark:bg-white/10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-lg border border-white/20">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500">{project.category}</span>
                      <div className="h-[1px] flex-1 bg-slate-900/10 dark:bg-white/10 mx-4" />
                      <span className="text-sm text-slate-400 dark:text-white/30">2026</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
