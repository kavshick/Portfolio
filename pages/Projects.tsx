
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, X, CheckCircle2, Timer, Search } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

// Fix: Use React.FC to correctly handle standard React props like 'key' and improve type safety.
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => (
  <motion.div
    layoutId={project.id}
    onClick={() => onSelect(project)}
    className="group cursor-pointer glass-panel rounded-3xl overflow-hidden border-white/5 hover:border-cyan-500/30 transition-all"
  >
    <div className="aspect-video relative overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute top-4 right-4 z-10">
        {project.status === 'Completed' ? (
          <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            <CheckCircle2 size={12} /> Completed
          </span>
        ) : (
          <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            <Timer size={12} /> Ongoing
          </span>
        )}
      </div>
    </div>
    <div className="p-6 sm:p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[9px] sm:text-[10px] font-mono text-cyan-400 uppercase border border-cyan-500/20 px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-6">{project.description}</p>
      <div className="flex items-center text-cyan-400 font-bold gap-2 text-xs sm:text-sm uppercase tracking-widest">
        Detailed View <Layers size={14} className="sm:w-4 sm:h-4" />
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');
  
  // Ref for the modal content container
  const modalContentRef = React.useRef<HTMLDivElement>(null);

  // Scroll to top of modal content whenever selectedProject changes
  React.useEffect(() => {
    if (selectedProject && modalContentRef.current) {
        modalContentRef.current.scrollTop = 0;
    }
  }, [selectedProject]);

  const categories = ['All', 'AI / Machine Learning', 'SaaS Platforms', 'Web Applications', 'Game Development'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  const completedProjects = filteredProjects.filter(p => p.status === 'Completed');
  const ongoingProjects = filteredProjects.filter(p => p.status === 'Ongoing');

  const isUrl = (str: string) => str.startsWith('http');

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Production <span className="text-cyan-500">Inventory</span></h1>
          <p className="text-slate-400">Validated technical projects spanning AI, Data Science, and SaaS Development.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-nowrap sm:flex-wrap items-center gap-3 mb-8 sm:mb-12 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex-shrink-0 flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full border border-white/10 mr-2 sm:mr-4">
            <Search size={14} className="text-slate-400 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm text-slate-300">Filter:</span>
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                filter === cat 
                  ? 'bg-cyan-500 text-slate-950' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Completed Projects Section */}
        {completedProjects.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/5"></div>
              <h2 className="text-xl font-bold flex items-center gap-2 uppercase tracking-[0.2em] text-emerald-400/80">
                <CheckCircle2 size={20} /> Completed Projects
              </h2>
              <div className="h-px flex-1 bg-white/5"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map(project => (
                <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
              ))}
            </div>
          </section>
        )}

        {/* Ongoing Projects Section */}
        {ongoingProjects.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/5"></div>
              <h2 className="text-xl font-bold flex items-center gap-2 uppercase tracking-[0.2em] text-amber-400/80">
                <Timer size={20} /> Ongoing / In Development
              </h2>
              <div className="h-px flex-1 bg-white/5"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map(project => (
                <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
              ))}
            </div>
          </section>
        )}

        {createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-[99999] flex items-center justify-center p-0 sm:p-8 pointer-events-none">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute inset-0 bg-slate-950/80 backdrop-blur-md pointer-events-auto"
                />
                <motion.div 
                  layoutId={selectedProject.id}
                  className="relative w-full h-full sm:w-[90vw] sm:max-w-4xl sm:h-[85vh] bg-slate-900 z-[70] rounded-none sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col pointer-events-auto"
                >
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2 z-20">
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 rounded-full bg-slate-950/50 backdrop-blur-md text-white hover:bg-white/10 border border-white/10"
                      >
                        <X size={20} className="sm:w-6 sm:h-6" />
                      </button>
                  </div>

                  <div className="h-48 sm:h-64 md:h-1/3 relative flex-shrink-0">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  </div>

                  <div ref={modalContentRef} className="flex-1 overflow-y-auto p-5 sm:p-8 lg:p-12 scroll-smooth">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 sm:mb-6">
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-[10px] sm:text-xs font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className={`self-start px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                        selectedProject.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}>
                        {selectedProject.status}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">{selectedProject.title}</h2>
                    
                    <div className="prose prose-invert max-w-none mb-6 sm:mb-10">
                      <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                        {selectedProject.details}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 sm:pt-6 border-t border-white/5">
                      {isUrl(selectedProject.repoLink) ? (
                        <a 
                          href={selectedProject.repoLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors text-sm sm:text-base"
                        >
                          <Github size={18} className="sm:w-5 sm:h-5" /> View Project Repository
                        </a>
                      ) : (
                        <div className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-white/5 text-slate-400 font-bold rounded-xl flex items-center justify-center gap-2 border border-white/10 text-sm sm:text-base opacity-75 cursor-not-allowed">
                          <Github size={18} className="sm:w-5 sm:h-5" /> Private Repository
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </div>
  );
};

export default Projects;
