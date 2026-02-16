import './App.css';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Projects from './components/sections/Projects.jsx';
import Experience from './components/sections/Experience.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isWiping, setIsWiping] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const duration = 2700;
    const start = performance.now();

    const updateProgress = (now) => {
      const elapsed = now - start;
      const nextValue = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextValue);
      if (nextValue < 100) {
        rafRef.current = requestAnimationFrame(updateProgress);
      } else {
        setIsWiping(true);
        setTimeout(() => setIsLoading(false), 550);
      }
    };

    rafRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="site-background min-h-screen overflow-x-hidden text-slate-100">
      <div className="grain-overlay fixed inset-0 opacity-40" />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loader-screen fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="loader-rings">
                <span className="loader-ring ring-1" />
                <span className="loader-ring ring-2" />
                <span className="loader-ring ring-3" />
              </div>
              <span
                className="loader-percentage"
                style={{ filter: `blur(${Math.max(0, 6 - progress / 15)}px)` }}
              >
                {progress}%
              </span>
            </motion.div>

            {isWiping && (
              <motion.div
                className="loader-wipe"
                initial={{ scale: 0, opacity: 0.9 }}
                animate={{ scale: 26, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      <main className="pt-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;