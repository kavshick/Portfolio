
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Games from './pages/Games';
import AILab from './pages/AILab';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Fix: Use React.PropsWithChildren to ensure 'children' prop is correctly typed for React 18+ and framer-motion integration
const PageTransition: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" key={location.pathname}>
      <Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/games" element={<PageTransition><Games /></PageTransition>} />
        <Route path="/ai-lab" element={<PageTransition><AILab /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        <ScrollToTop />
        {/* <ParticleBackground /> */}
        <Navbar />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
