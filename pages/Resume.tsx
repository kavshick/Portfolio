
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, ShieldCheck } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Professional <span className="text-cyan-500">Credentials</span></h1>
          <p className="text-slate-400">View and download my latest curriculum vitae.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-3xl overflow-hidden border-white/10 shadow-2xl mb-12"
        >
          {/* Resume Viewer Placeholder */}
          <div className="bg-white/5 aspect-[1/1.4] relative flex flex-col items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/40 pointer-events-none" />
            <FileText size={80} className="text-cyan-500/20 mb-6" />
            <h3 className="text-2xl font-bold mb-2">Resume Preview</h3>
            <p className="text-slate-400 text-sm text-center max-w-xs mb-8">
              Document: Kavshick_KS_CV_2024.pdf<br/>
              Size: 1.2 MB | Pages: 2
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-xl flex items-center gap-2 hover:bg-cyan-400 transition-all">
                <Download size={20} /> Download PDF
              </button>
              <button className="px-6 py-3 glass-panel text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/5 transition-all">
                <ExternalLink size={20} /> View Fullscreen
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 glass-panel rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-2">Verified Experience</h4>
              <p className="text-slate-400 text-sm">All entries in this resume are verified through my LinkedIn profile and academic certifications.</p>
            </div>
          </div>
          <div className="p-8 glass-panel rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-2">ATS Optimized</h4>
              <p className="text-slate-400 text-sm">This version is specially formatted to be machine-readable for automated recruitment systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
