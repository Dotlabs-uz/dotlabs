'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/content';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 mb-24">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-8 text-slate-900 dark:text-white">
              Jet-Speed <br />
              <span className="text-blue-500">Delivery.</span>
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-end">
            <p className="text-xl text-slate-600 dark:text-white/50 leading-relaxed mb-8">
              We specialize in complex digital products. Our &quot;Jet&quot; methodology ensures 
              rapid deployment without compromising on architectural integrity or aesthetic precision.
            </p>
            <div className="flex gap-12">
              <div className="text-slate-900 dark:text-white">
                <p className="text-4xl font-bold mb-1">98%</p>
                <p className="text-xs text-slate-400 dark:text-white/30 uppercase tracking-widest">Efficiency</p>
              </div>
              <div className="text-slate-900 dark:text-white">
                <p className="text-4xl font-bold mb-1">150+</p>
                <p className="text-xs text-slate-400 dark:text-white/30 uppercase tracking-widest">Launches</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-slate-900/5 dark:bg-white/5">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-[#050505] p-10 min-h-[400px] flex flex-col justify-between hover:bg-slate-900 dark:hover:bg-white transition-all duration-700 rounded-3xl md:rounded-none"
            >
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-900/5 dark:bg-white/5 group-hover:bg-white/10 dark:group-hover:bg-black/5 flex items-center justify-center mb-10 transition-colors">
                  <span className="text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-black">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">{service.title}</h3>
                <p className="text-slate-500 dark:text-white/50 group-hover:text-white/60 dark:group-hover:text-black/60 transition-colors">
                  {service.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-slate-900/10 dark:border-white/10 group-hover:border-white/20 dark:group-hover:border-black/10 rounded-full text-slate-500 dark:text-white/40 group-hover:text-white dark:group-hover:text-black transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-900/5 dark:bg-white/5 -z-10" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-slate-900/5 dark:bg-white/5 -z-10" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-slate-900/5 dark:bg-white/5 -z-10" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-slate-900/5 dark:bg-white/5 -z-10" />
    </section>
  );
};

export default ServicesSection;
