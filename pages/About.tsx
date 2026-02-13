
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Cpu, BrainCircuit, ExternalLink } from 'lucide-react';
import { SKILLS, TIMELINE } from '../constants';

const About: React.FC = () => {
  const skillCategories = [
    'AI / Machine Learning',
    'Programming & Backend',
    'Data & Analytics',
    'Frontend & Web',
    'SaaS & Product Development',
    'Game & Simulation Development'
  ] as const;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">The Engineer <span className="text-cyan-500">Behind the Code</span></h1>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            I am a multifaceted technical architect based in the intersection of Artificial Intelligence and SaaS development. With a background in Data Science, I specialize in building systems that don't just process data, but understand it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
                <BrainCircuit className="text-cyan-400" />
                Journey So Far
              </h2>
              <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
                {TIMELINE.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="pl-10 relative"
                  >
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center">
                      {item.type === 'work' ? <Briefcase size={12} className="text-cyan-400" /> : <GraduationCap size={12} className="text-cyan-400" />}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest">{item.year}</div>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold uppercase tracking-tighter">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="text-slate-300 mb-2">{item.company}</div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-widest"
                      >
                        {item.linkText || 'Verify Link'} <ExternalLink size={12} />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
                <Code2 className="text-cyan-400" />
                Technical Proficiency
              </h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((cat) => (
                  <div key={cat} className="glass-panel p-6 rounded-2xl">
                    <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">{cat}</h4>
                    <div className="space-y-4">
                      {SKILLS.filter(s => s.category === cat).map(skill => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-300">{skill.name}</span>
                            <span className="text-cyan-500">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Profile Image Card */}
            <div className="glass-panel p-4 rounded-3xl border-cyan-500/10 mb-8 overflow-hidden group">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://lh3.googleusercontent.com/d/1h9-l4OYDvfDdhwA0yLKhud4maUCXT7KZ" 
                  alt="Kavshick K S" 
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-cyan-500/10">
              <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex justify-between text-sm">
                  <span className="text-slate-400">Current Focus</span>
                  <span className="text-white font-medium">Predictive AI</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-slate-400">Location</span>
                  <span className="text-white font-medium">Chennai, India</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-slate-400">Languages</span>
                  <span className="text-white font-medium">Python, TS, JS</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-slate-400">Interests</span>
                  <span className="text-white font-medium">SaaS, Game Design</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/20">
              <Cpu className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Architecting Value</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I believe that code is only as good as the problem it solves. My philosophy is to build robust, scalable foundations that empower users through intuitive intelligent integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
