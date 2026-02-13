
import React from 'react';
import { Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-2xl font-bold text-white mb-2">Kavshick <span className="text-cyan-500">K S</span></div>
          <p className="text-slate-400 max-w-xs">
            Pushing the boundaries of Artificial Intelligence, Game Design, and SaaS engineering.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/kavshick" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/kavshick-k-s-490165291" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://instagram.com/_onlybun_" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="mailto:kavshickks@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Kavshick K S. All rights reserved. Designed for the future.
      </div>
    </footer>
  );
};

export default Footer;
