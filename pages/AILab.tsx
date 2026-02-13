
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Brain, Smile, Activity, Tag, Loader2, AlertCircle } from 'lucide-react';
import { chatWithAI, analyzeSentiment, classifyFeedback } from '../services/aiService';

const AILab: React.FC = () => {
  // Chat State
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Sentiment State
  const [sentimentInput, setSentimentInput] = useState('');
  const [sentimentResult, setSentimentResult] = useState<string | null>(null);
  const [isSentimentLoading, setIsSentimentLoading] = useState(false);

  // Feedback State
  const [feedbackInput, setFeedbackInput] = useState('');
  const [feedbackResult, setFeedbackResult] = useState<any>(null);
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;

    const userMsg = chatInput;
    setChatInput('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsChatLoading(true);

    try {
      const response = await chatWithAI(userMsg);
      setChatHistory(prev => [...prev, { role: 'ai', text: response || 'I am processing that...' }]);
    } catch (err) {
      setChatHistory(prev => [...prev, { role: 'ai', text: 'Error: Connection failed. Check service configuration.' }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleSentiment = async () => {
    if (!sentimentInput.trim() || isSentimentLoading) return;
    setIsSentimentLoading(true);
    try {
      const result = await analyzeSentiment(sentimentInput);
      setSentimentResult(result);
    } catch (err) {
      setSentimentResult('Error');
    } finally {
      setIsSentimentLoading(false);
    }
  };

  const handleFeedback = async () => {
    if (!feedbackInput.trim() || isFeedbackLoading) return;
    setIsFeedbackLoading(true);
    try {
      const result = await classifyFeedback(feedbackInput);
      setFeedbackResult(result);
    } catch (err) {
      setFeedbackResult({ error: 'Failed to classify' });
    } finally {
      setIsFeedbackLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">AI <span className="text-cyan-500">Playground</span></h1>
          <p className="text-slate-400">Live experiments powered by advanced Large Language Models. Explore real-time intelligence demos.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chatbot Demo */}
          <section className="glass-panel rounded-3xl overflow-hidden flex flex-col h-[600px]">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Brain className="text-cyan-400" />
                <h2 className="font-bold">Neural Chat Assistant</h2>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">Live Session</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatHistory.length === 0 && (
                <div className="text-center text-slate-500 py-12">
                  <Activity className="mx-auto mb-4 opacity-20" size={48} />
                  <p className="text-sm">Initiate conversation with the core processor.</p>
                </div>
              )}
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-cyan-500 text-slate-950 rounded-tr-none' 
                      : 'bg-white/5 text-slate-300 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 text-slate-300 px-4 py-2 rounded-2xl rounded-tl-none border border-white/5">
                    <Loader2 className="animate-spin" size={16} />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleChat} className="p-4 border-t border-white/5 bg-slate-900/50">
              <div className="relative">
                <input 
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-all pr-12"
                />
                <button 
                  type="submit"
                  disabled={isChatLoading}
                  className="absolute right-2 top-2 p-2 bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 disabled:opacity-50 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </section>

          {/* Right Column: Other Demos */}
          <div className="space-y-8">
            {/* Sentiment Analyzer */}
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Smile className="text-cyan-400" /> Sentiment Processor
              </h3>
              <div className="space-y-4">
                <textarea 
                  value={sentimentInput}
                  onChange={(e) => setSentimentInput(e.target.value)}
                  placeholder="Enter text to analyze sentiment..."
                  className="w-full h-24 bg-slate-950 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-cyan-500 transition-all resize-none"
                />
                <div className="flex items-center justify-between">
                  <button 
                    onClick={handleSentiment}
                    disabled={isSentimentLoading}
                    className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg font-bold text-sm transition-all flex items-center gap-2"
                  >
                    {isSentimentLoading ? <Loader2 className="animate-spin" size={16} /> : 'Analyze Sentiment'}
                  </button>
                  {sentimentResult && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-widest ${
                        sentimentResult === 'Positive' ? 'text-emerald-400 bg-emerald-500/10' :
                        sentimentResult === 'Negative' ? 'text-red-400 bg-red-500/10' :
                        'text-cyan-400 bg-cyan-500/10'
                      }`}
                    >
                      {sentimentResult}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Feedback Classifier */}
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Tag className="text-cyan-400" /> Feedback Classifier (JSON)
              </h3>
              <div className="space-y-4">
                <input 
                  type="text"
                  value={feedbackInput}
                  onChange={(e) => setFeedbackInput(e.target.value)}
                  placeholder="e.g. 'The login button is broken on safari'"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-all"
                />
                <button 
                  onClick={handleFeedback}
                  disabled={isFeedbackLoading}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg font-bold text-sm transition-all flex items-center gap-2"
                >
                  {isFeedbackLoading ? <Loader2 className="animate-spin" size={16} /> : 'Classify'}
                </button>

                {feedbackResult && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-slate-950 rounded-xl border border-white/5 font-mono text-xs"
                  >
                    <pre className="text-cyan-400">{JSON.stringify(feedbackResult, null, 2)}</pre>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Warning Box */}
            <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 flex gap-4">
              <AlertCircle className="text-orange-500 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-orange-400 mb-1">Compute Note</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  These tools use live LLM calls for analysis. Rate limits apply. Ensure the global environment is configured for full functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILab;
