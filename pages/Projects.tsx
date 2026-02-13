
import React, { useState } from 'react';
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
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] font-mono text-cyan-400 uppercase border border-cyan-500/20 px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-slate-400 text-sm line-clamp-2 mb-6">{project.description}</p>
      <div className="flex items-center text-cyan-400 font-bold gap-2 text-sm uppercase tracking-widest">
        Detailed View <Layers size={16} />
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

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
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mr-4">
            <Search size={16} className="text-slate-400" />
            <span className="text-sm text-slate-300">Filter:</span>
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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

        {/* Detailed View Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[60]"
              />
              <motion.div 
                layoutId={selectedProject.id}
                className="fixed inset-x-4 top-10 bottom-10 md:inset-x-20 lg:inset-x-40 xl:inset-x-80 bg-slate-900 z-[70] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-950/50 text-white hover:bg-white/10 z-10"
                >
                  <X size={24} />
                </button>
                <div className="h-1/3 relative">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                <div className="flex-1 overflow-y-auto p-8 lg:p-12">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-xs font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                      selectedProject.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{selectedProject.title}</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    {isUrl(selectedProject.repoLink) ? (
                      <a 
                        href={selectedProject.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors"
                      >
                        <Github size={20} /> Repository Link
                      </a>
                    ) : (
                      <div className="flex-1 px-8 py-4 bg-white/5 text-slate-400 font-bold rounded-xl flex items-center justify-center gap-2 border border-white/10">
                        <Github size={20} /> {selectedProject.repoLink}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
