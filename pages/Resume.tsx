
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, ShieldCheck, ZoomIn } from 'lucide-react';

const Resume: React.FC = () => {
  const RESUME_ID = '1NkhE44bWH6GfpZq-fWbrThBPu4MiuBQk';
  const PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/preview`;
  const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;
  const VIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/view?usp=sharing`;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <FileText size={14} />
            <span>Document Verified</span>
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Professional <span className="text-cyan-500">Credentials</span></h1>
          <p className="text-slate-400">Review my technical trajectory and download the official dossier.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-3xl overflow-hidden border-white/10 shadow-2xl mb-12 flex flex-col"
        >
          {/* Action Bar */}
          <div className="p-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 bg-slate-900/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <FileText size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Kavshick_Resume.pdf</div>
                <div className="text-[10px] text-slate-500 font-mono uppercase">V2024.05.LATEST</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href={VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                title="View Fullscreen"
              >
                <ExternalLink size={20} />
              </a>
              <a 
                href={DOWNLOAD_URL}
                className="px-6 py-2.5 bg-cyan-500 text-slate-950 font-bold rounded-xl flex items-center gap-2 hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20"
              >
                <Download size={18} /> Download Dossier
              </a>
            </div>
          </div>

          {/* Resume Viewer */}
          <div className="bg-slate-950/50 aspect-[1/1.414] relative overflow-hidden group">
            <iframe 
              src={PREVIEW_URL}
              className="w-full h-full border-none"
              allow="autoplay"
              title="Kavshick K S Resume Preview"
            />
            {/* Overlay Gradient for futuristic feel */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
            
            {/* Floating Zoom Action for Mobile/Quick View */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <a 
                href={VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-xl"
              >
                <ZoomIn size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 glass-panel rounded-2xl flex items-start gap-4 border-cyan-500/5 hover:border-cyan-500/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-2">Verified Experience</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                All data points including technical certifications, B.Tech progression at Velammal Engineering College, and project milestones are verified via industry-standard protocols.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 glass-panel rounded-2xl flex items-start gap-4 border-cyan-500/5 hover:border-cyan-500/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-2">Technical Alignment</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                This document highlights specialized expertise in AI & Data Science, SaaS architecture, and algorithmic simulations, optimized for deep-tech evaluation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
