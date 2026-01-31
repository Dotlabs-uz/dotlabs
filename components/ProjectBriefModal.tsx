'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone, Send, CheckCircle2 } from 'lucide-react';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'service' | 'budget' | 'details' | 'contact' | 'success';

const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>('service');
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    details: '',
    email: '',
    name: '',
    phone: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep('service');
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    setStep('budget');
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget });
    setStep('details');
  };

  const handleDetailsSubmit = () => {
    if (formData.details.length > 20) {
      setStep('contact');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex flex-col md:items-center md:justify-center p-0 md:p-6 min-h-screen"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-50 dark:bg-[#050505] transition-colors duration-500" />
          
          {/* Content Container: full height on mobile, max 90vh on desktop, inner area scrolls */}
          <div className="relative w-full flex-1 md:flex-none md:h-[90vh] md:max-h-[90vh] max-w-7xl bg-white dark:bg-[#0a0a0a] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col border border-slate-900/5 dark:border-white/5 min-h-0">
            
            {/* Header */}
            <div className="flex-shrink-0 flex justify-between items-center p-8 border-b border-slate-900/5 dark:border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xs">D</div>
                <span className="font-display font-bold tracking-widest text-[10px] text-slate-400 dark:text-white/30 uppercase">Project Configurator</span>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full glass dark:bg-white/5 bg-slate-900/5 flex items-center justify-center hover:scale-110 transition-transform text-slate-900 dark:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
              {/* Left Side: Progress & Info */}
              <div className="hidden md:flex w-1/3 flex-shrink-0 p-12 bg-slate-50 dark:bg-[#080808] border-r border-slate-900/5 dark:border-white/5 flex-col justify-between overflow-y-auto">
                <div>
                  <h3 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-[0.3em] mb-12">Building Legacy</h3>
                  <div className="space-y-8">
                    {[
                      { id: 'service', label: 'Intent' },
                      { id: 'budget', label: 'Fuel' },
                      { id: 'details', label: 'Vision' },
                      { id: 'contact', label: 'Origin' }
                    ].map((s, i) => {
                      const isActive = step === s.id;
                      const isPast = ['service', 'budget', 'details', 'contact', 'success'].indexOf(step) > i;
                      return (
                        <div key={s.id} className="flex items-center space-x-4">
                          <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-blue-600 scale-150' : isPast ? 'bg-blue-600/30' : 'bg-slate-300 dark:bg-white/10'}`} />
                          <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-white/20'}`}>
                            {s.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-8 glass dark:bg-white/5 bg-white rounded-3xl border border-slate-900/5 dark:border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">Emergency Hatch</span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-white/40 leading-relaxed mb-4 uppercase tracking-tighter">
                    High-priority startup? Skip the brief and call our direct engineering line.
                  </p>
                  <a href="tel:+998000000000" className="text-sm font-bold text-blue-600 hover:underline">+998 (XX) XXX-XX-XX</a>
                </div>
              </div>

              {/* Right Side: Form Content — scrollable when content overflows */}
              <div className="flex-1 min-h-0 p-8 md:p-20 overflow-y-auto overflow-x-hidden relative">
                <AnimatePresence mode="wait">
                  {step === 'service' && (
                    <motion.div
                      key="service"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="max-w-xl"
                    >
                      <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tighter">What are we <br/><span className="text-blue-600">architecting?</span></h2>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: 'web', title: 'Full-Scale Web Ecosystem', desc: 'Complex SaaS, Dashboards, and Portals.' },
                          { id: 'mobile', title: 'Immersive Mobile App', desc: 'Native-feel iOS & Android solutions.' },
                          { id: 'crm', title: 'Custom CRM/ERP', desc: 'Internal tools for operational scale.' },
                          { id: 'urgent', title: 'Emergency Engineering', desc: 'Quick turnaround, high-priority launch.' }
                        ].map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleServiceSelect(item.title)}
                            className="group p-6 text-left glass dark:bg-white/5 bg-slate-50 rounded-2xl border border-slate-900/5 dark:border-white/10 hover:border-blue-500 transition-all flex justify-between items-center"
                          >
                            <div>
                              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</h4>
                              <p className="text-xs text-slate-500 dark:text-white/40">{item.desc}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-300 dark:text-white/10 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'budget' && (
                    <motion.div
                      key="budget"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="max-w-xl"
                    >
                      <button onClick={() => setStep('service')} className="text-xs font-bold text-blue-600 mb-8 flex items-center"><ArrowRight className="rotate-180 mr-2 w-4 h-4" /> Go Back</button>
                      <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tighter">Select your <br/><span className="text-blue-600">fuel range.</span></h2>
                      <p className="text-slate-500 dark:text-white/40 mb-10 text-lg leading-relaxed">We focus on high-impact projects. Selecting a range helps us allocate the right architects.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['$5k - $15k', '$15k - $50k', '$50k - $150k', '$150k+'].map((range) => (
                          <button
                            key={range}
                            onClick={() => handleBudgetSelect(range)}
                            className="p-8 text-center glass dark:bg-white/5 bg-slate-50 rounded-2xl border border-slate-900/5 dark:border-white/10 hover:bg-blue-600 hover:text-white transition-all font-display text-xl font-bold text-slate-900 dark:text-white"
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                      <p className="mt-8 text-[10px] text-slate-400 dark:text-white/20 uppercase tracking-widest text-center">Note: We prioritize long-term engineering partnerships.</p>
                    </motion.div>
                  )}

                  {step === 'details' && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="max-w-xl"
                    >
                      <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tighter">The <span className="text-blue-600">Deep Brief.</span></h2>
                      <p className="text-slate-500 dark:text-white/40 mb-8">What problem are we solving? Be as detailed as possible. Serious details lead to serious engineering.</p>
                      <textarea
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us about the project scope, technical requirements, and your timeline expectations..."
                        className="w-full h-48 p-6 bg-slate-50 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 transition-all resize-none mb-8"
                      />
                      <div className="flex justify-between items-center">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${formData.details.length < 20 ? 'text-red-500' : 'text-green-500'}`}>
                          {formData.details.length < 20 ? 'Need more context' : 'Excellent detail'}
                        </span>
                        <button
                          disabled={formData.details.length < 20}
                          onClick={handleDetailsSubmit}
                          className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl disabled:opacity-30 flex items-center space-x-3 hover:scale-105 transition-transform"
                        >
                          <span>Proceed</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 'contact' && (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="max-w-xl"
                    >
                      <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tighter">Who is the <span className="text-blue-600">Visionary?</span></h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="text-[10px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest block mb-2">Full Name</label>
                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest block mb-2">Business Email</label>
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest block mb-2">Phone Number</label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-6 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center space-x-4 hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black transition-all shadow-xl shadow-blue-600/20"
                        >
                          <Send className="w-5 h-5" />
                          <span className="text-lg">Deploy Request</span>
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {step === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="max-w-xl text-center flex flex-col items-center justify-center h-full"
                    >
                      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-green-500/30">
                        <CheckCircle2 className="text-white w-12 h-12" />
                      </div>
                      <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tighter">Brief <span className="text-blue-600">Received.</span></h2>
                      <p className="text-xl text-slate-500 dark:text-white/40 mb-12">
                        Our lead architect will review your brief within 24 hours. We only accept projects where we can provide 10x value.
                      </p>
                      <button
                        onClick={onClose}
                        className="px-12 py-4 border-2 border-slate-900 dark:border-white rounded-full font-bold text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                      >
                        Back to Studio
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectBriefModal;
