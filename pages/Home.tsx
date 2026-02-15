
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Sparkles, CheckCircle2, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles size={14} />
              <span>Available for Technical Partnerships</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Kavshick <span className="text-cyan-500">K S</span>
            </h1>
            <p className="text-2xl text-cyan-400 font-bold mb-4">
              AI Engineer • SaaS Builder • Game Developer
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              Specialized in <span className="text-white font-semibold">Artificial Intelligence & Data Science</span>. Architecting autonomous systems and intelligent digital environments.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/projects" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20">
                View Project Inventory <ArrowRight size={20} />
              </Link>
              <Link to="/ai-lab" className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/5 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
                Access AI Lab <Bot size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="w-64 h-64 lg:w-96 lg:h-96 mx-auto relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 lg:w-72 lg:h-72 rounded-3xl overflow-hidden glass-panel border-white/10 shadow-2xl transition-transform duration-500">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1h9-l4OYDvfDdhwA0yLKhud4maUCXT7KZ" 
                    alt="Kavshick K S"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Verified Projects</h2>
            <p className="text-slate-400">Hand-picked selection of my technical builds.</p>
          </div>
          <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 text-sm uppercase tracking-widest font-bold">
            Full Inventory <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group glass-panel rounded-2xl overflow-hidden border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3">
                   {project.status === 'Completed' ? (
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-[8px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      Completed
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-[8px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      Ongoing
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-slate-400 text-[10px] font-mono uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
