
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Instagram, Mail, MessageSquare, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Start a <span className="text-cyan-500">Conversation</span></h1>
          <p className="text-slate-400">Interested in collaborating or just want to say hi? I'm always open to new ideas.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-8 rounded-3xl"
          >
            {isSent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Transmission Successful</h3>
                <p className="text-slate-400 mb-8">Your message has been received. I will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Subject</label>
                  <input 
                    required
                    type="text" 
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-cyan-500 transition-all resize-none"
                    placeholder="Describe your vision..."
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? 'Transmitting...' : <><Send size={20} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details & Socials */}
          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-8">Contact Info</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'kavshickks@gmail.com', link: 'mailto:kavshickks@gmail.com' },
                  { icon: MapPin, label: 'Location', value: 'Global / Remote', link: '#' },
                  { icon: MessageSquare, label: 'LinkedIn', value: 'in/kavshick-k-s', link: 'https://linkedin.com/in/kavshick-k-s-490165291' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase">{item.label}</div>
                      <a href={item.link} className="text-white hover:text-cyan-400 transition-colors font-medium">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-8">Connect Digitally</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: 'https://github.com/kavshick' },
                  { icon: Linkedin, link: 'https://linkedin.com/in/kavshick-k-s-490165291' },
                  { icon: Instagram, link: 'https://instagram.com/_onlybun_' },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </section>

            <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                <Globe size={100} />
              </div>
              <h3 className="text-lg font-bold mb-2">Collaboration Ready</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am currently open to freelance opportunities, full-time positions in AI engineering, and SaaS co-founding possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
