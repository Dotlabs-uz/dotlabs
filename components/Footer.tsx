'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import {
  BRAND,
  FOOTER_CTA,
  FOOTER_NAV,
  FOOTER_SOCIAL,
  FOOTER_LOCATION,
  FOOTER_LEGAL,
} from '@/content';

const SOCIAL_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  Instagram,
  Linkedin,
  Twitter,
};

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-10 px-4 bg-slate-50 dark:bg-black border-t border-slate-900/5 dark:border-white/5 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-10 w-fit">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-white shadow-xl shadow-blue-500/20">
                {BRAND.logoLetter}
              </div>
              <span className="font-display font-bold text-3xl tracking-tight text-slate-900 dark:text-white transition-colors">{BRAND.name}</span>
            </Link>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight text-slate-900 dark:text-white">
              {FOOTER_CTA.headline.split(FOOTER_CTA.headlineHighlight)[0].split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}{i === 0 ? <br /> : null}</React.Fragment>
              ))}
              <span className="text-gradient">{FOOTER_CTA.headlineHighlight}</span>
            </h2>
            <Link href={FOOTER_CTA.buttonHref} className="flex items-center space-x-4 group w-fit">
              <span className="text-2xl font-semibold border-b-2 border-slate-900/20 dark:border-white/20 group-hover:border-blue-500 transition-colors text-slate-900 dark:text-white">{FOOTER_CTA.buttonLabel}</span>
              <div className="w-12 h-12 rounded-full glass dark:bg-white/5 bg-slate-900/5 border border-slate-900/10 dark:border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all text-slate-900 dark:text-white">
                <ArrowUpRight />
              </div>
            </Link>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest mb-8">{FOOTER_NAV.title}</h4>
            <ul className="space-y-4">
              {FOOTER_NAV.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-lg text-slate-600 dark:text-white/60 hover:text-blue-600 dark:hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest mb-8">{FOOTER_SOCIAL.title}</h4>
            <div className="flex space-x-6">
              {FOOTER_SOCIAL.links.map((link) => {
                const Icon = SOCIAL_ICONS[link.icon];
                return (
                  <a key={link.name} href={link.href} className="w-12 h-12 glass dark:bg-white/5 bg-slate-900/5 border border-slate-900/10 dark:border-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-900 dark:text-white" target="_blank" rel="noopener noreferrer">
                    {Icon ? <Icon size={20} /> : null}
                  </a>
                );
              })}
            </div>
            <div className="mt-12">
              <h4 className="text-xs font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest mb-4">{FOOTER_LOCATION.title}</h4>
              <p className="text-slate-600 dark:text-white/60">{FOOTER_LOCATION.line1}<br />{FOOTER_LOCATION.line2}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-slate-900/5 dark:border-white/5 text-slate-400 dark:text-white/30 text-xs font-medium tracking-widest uppercase">
          <p>{FOOTER_LEGAL.copyright}</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {FOOTER_LEGAL.links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-slate-900 dark:hover:text-white">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
