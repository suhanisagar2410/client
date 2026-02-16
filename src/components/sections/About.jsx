import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../../assets/profie.png';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const highlights = [
    { label: 'Experience', value: '1.5+ years' },
    { label: 'Focus', value: 'Production-grade delivery' },
  ];

  return (
    <motion.section ref={ref} id="about" className="section" style={{ scale, opacity }}>
      <div className="container">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-6">
            <p className="eyebrow">About</p>
            <h2 className="heading">Production-grade delivery, clean architecture.</h2>
            {[
              'Full-Stack Developer',
              'Delivering live, production-grade applications with scalable architecture and optimized performance.',
              'Experience across professional, freelance, and open-source work with a focus on clean system design.',
              'Driven to translate complex ideas into reliable, user-focused products.',
            ].map((line, index) => (
              <motion.p
                key={line}
                className="subheading"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <span className="hover:text-white transition-colors duration-300">{line}</span>
              </motion.p>
            ))}
            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
              <div className="absolute -right-20 -top-16 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div>
                  <p className="eyebrow">Profile</p>
                  <p className="mt-4 text-2xl font-semibold text-white">Engineering with clarity</p>
                  <p className="mt-3 text-sm text-slate-300">
                    Focused on scalable systems, reliable performance, and maintainable codebases.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-indigo-400/40 to-sky-300/30 blur-2xl" />
                      <img
                        src={profileImage}
                        alt="Suhani Sagar"
                        className="h-52 w-52 rounded-full border border-white/20 object-cover shadow-[0_25px_45px_rgba(2,6,23,0.45)] ring-1 ring-white/20 md:h-60 md:w-60"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-sm text-slate-400">
                  Based in India • Open to freelance and full-time roles
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;