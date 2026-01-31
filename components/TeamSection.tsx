'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { TEAM_MEMBERS } from '@/content';
import { TeamMember } from '@/types';
import { ArrowUpRight, Github, Linkedin, Twitter, X, Quote } from 'lucide-react';

const MemberDetail = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-50/95 dark:bg-black/95 backdrop-blur-2xl overflow-y-auto no-scrollbar"
    >
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#3b82f61a_0%,transparent_50%)]" />
         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#a855f71a_0%,transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        {/* Header/Close */}
        <div className="absolute top-10 left-6 right-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">D</div>
             <span className="font-display font-bold tracking-widest text-xs text-slate-900 dark:text-white">MEMBER PROFILE</span>
          </div>
          <button 
            onClick={onClose}
            className="group w-14 h-14 glass dark:bg-white/5 bg-slate-900/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-500 border border-slate-900/10 dark:border-white/10"
          >
            <X className="group-hover:rotate-90 transition-transform duration-500 text-slate-900 dark:text-white group-hover:text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            // Fix: Narrow ease type to BezierDefinition
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden border border-slate-900/10 dark:border-white/10 shadow-2xl">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 dark:opacity-80" />
            </div>
            
            {/* Philosophy Bubble */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-10 glass dark:bg-black/40 bg-white/70 backdrop-blur-xl p-10 rounded-[3rem] max-w-xs hidden md:block border border-slate-900/10 dark:border-white/10 shadow-xl"
            >
              <Quote className="text-blue-500 w-8 h-8 mb-4 opacity-50" />
              <p className="text-lg font-medium italic leading-relaxed text-slate-800 dark:text-white/90">
                {member.philosophy}
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.5em] text-xs mb-4 block"
              >
                {member.role}
              </motion.span>
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-7xl md:text-[8rem] font-display font-bold leading-none tracking-tighter mb-8 text-slate-900 dark:text-white"
              >
                {member.name.split(' ')[0]} <br />
                <span className="text-gradient">{member.name.split(' ')[1]}</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <p className="text-xl text-slate-600 dark:text-white/60 leading-relaxed font-light">
                {member.bio}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {member.expertise.map((exp, i) => (
                  <span key={i} className="px-5 py-2 glass dark:bg-white/5 bg-slate-900/5 border border-slate-900/5 dark:border-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    {exp}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-10 border-t border-slate-900/10 dark:border-white/5 flex items-center space-x-8"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-white/30">Connect</span>
              <div className="flex space-x-6">
                {member.social.linkedin && <a href={member.social.linkedin} className="text-slate-600 dark:text-white/60 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>}
                {member.social.twitter && <a href={member.social.twitter} className="text-slate-600 dark:text-white/60 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>}
                {member.social.github && <a href={member.social.github} className="text-slate-600 dark:text-white/60 hover:text-blue-500 transition-colors"><Github size={20} /></a>}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamMemberCard = ({ member, index, onSelect }: { member: TeamMember; index: number; onSelect: (m: TeamMember) => void }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [100 * (index % 2 ? 1 : -1), -100 * (index % 2 ? 1 : -1)]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 ? 5 : -5, index % 2 ? -5 : 5]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={cardRef}
      style={{ y: springY, rotate }}
      onClick={() => onSelect(member)}
      className={`relative group mb-20 md:mb-0 cursor-pointer ${index % 2 === 0 ? 'mt-0' : 'md:mt-40'}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] bg-slate-200 dark:bg-neutral-900 border border-slate-900/5 dark:border-white/5 shadow-2xl transition-all duration-700 group-hover:shadow-blue-500/10 group-hover:border-blue-500/30">
        <div className="absolute inset-0 z-10 opacity-[0.15] pointer-events-none mix-blend-overlay dark:mix-blend-overlay" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
        
        <motion.img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 dark:opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
          <div className="overflow-hidden mb-2">
            <motion.p initial={{ y: "100%" }} whileInView={{ y: 0 }} className="text-blue-400 dark:text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              {member.role}
            </motion.p>
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-6 leading-none">
            {member.name.split(' ').map((word: string, i: number) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h3>
          
          <div className="flex items-center justify-between pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
             <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Read Profile</span>
             <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
             </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-6 top-1/2 -translate-y-1/2 vertical-text pointer-events-none hidden lg:block">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900/10 dark:text-white/10 group-hover:text-blue-500/40 transition-colors duration-500 whitespace-nowrap">
          {member.specialty}
        </span>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  const containerRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const xRight = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section id="team" ref={containerRef} className="py-60 px-4 bg-slate-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden opacity-[0.03] dark:opacity-[0.03]">
        <motion.h2 style={{ x: xLeft }} className="text-[30vw] font-display font-black leading-none whitespace-nowrap -mb-[10vw] text-slate-900 dark:text-white">
          ARCHITECTS ARCHITECTS
        </motion.h2>
        <motion.h2 style={{ x: xRight }} className="text-[30vw] font-display font-black leading-none whitespace-nowrap self-end text-slate-900 dark:text-white">
          INNOVATORS INNOVATORS
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between mb-40">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center space-x-4 mb-8">
              <div className="h-0.5 w-16 bg-blue-600" />
              <span className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.5em] text-xs">Human-Centric Core</span>
            </motion.div>
            <h2 className="text-6xl md:text-[9rem] font-display font-bold tracking-tighter leading-[0.8] mb-12 text-slate-900 dark:text-white">
              The <span className="text-gradient italic">DNA</span> <br />of Dotlabs.
            </h2>
          </div>
          <div className="md:pt-20">
             <p className="text-slate-500 dark:text-white/40 text-xl max-w-sm leading-relaxed font-light">
               Explore the visionaries who build the future. Click a profile to reveal their journey.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 px-4">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} onSelect={setSelectedMember} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && <MemberDetail member={selectedMember} onClose={() => setSelectedMember(null)} />}
      </AnimatePresence>

      <style>{`
        .vertical-text { writing-mode: vertical-rl; transform: rotate(180deg); }
        .text-gradient {
          background: linear-gradient(135deg, currentColor 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default TeamSection;
