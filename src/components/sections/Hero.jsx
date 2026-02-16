import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMemo } from 'react';

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 10);
    mouseY.set(y / 10);
  };

  const spotlightStyle = useMemo(
    () => ({
      x: smoothX,
      y: smoothY,
    }),
    [smoothX, smoothY]
  );

  return (
    <section
      className="relative overflow-hidden"
      style={{ overflow: 'hidden' }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 topo-pattern" />
      <div className="grain-overlay" />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          ...spotlightStyle,
          background: 'radial-gradient(circle, rgba(148,163,184,0.18), transparent 65%)',
        }}
      />

      <div className="relative container section flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-6">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Full Stack Developer
          </motion.p>
          <motion.h1
            className="hero-name-shimmer text-4xl md:text-6xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Suhani Sagar
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-300"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            1.5+ years delivering production-grade applications, translating ideas into scalable systems with clean
            architecture and optimized performance.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#projects"
              className="rounded-full bg-white/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white/20"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-200 transition-all duration-300 hover:border-white/40 hover:text-white"
            >
              Let’s connect
            </a>
          </motion.div>
          <motion.div
            className="mt-6 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-6 py-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>Scalable architecture</span>
              <span className="text-slate-600">•</span>
              <span>Performance optimization</span>
              <span className="text-slate-600">•</span>
              <span>Production delivery</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 flex h-10 w-6 -translate-x-1/2 items-start justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-10 w-[2px] rounded-full bg-white/30" />
      </motion.div>
    </section>
  );
};

export default Hero;