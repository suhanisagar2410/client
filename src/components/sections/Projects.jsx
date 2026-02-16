import { AnimatePresence, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { PROJECTS_DATA, OTHER_PROJECTS } from '../../utils/constants';
import TiltCard from '../animations/TiltCard.jsx';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <motion.section ref={ref} id="projects" className="section" style={{ scale, opacity }}>
      <div className="container">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center space-y-4">
            <p className="eyebrow">Selected work</p>
            <h2 className="heading">Production-grade projects</h2>
            <p className="subheading">Scalable platforms, real-time systems, and user-focused products.</p>
          </div>

          <motion.div
            className="grid gap-8 lg:grid-cols-[1.3fr_1fr]"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TiltCard className="glass-panel relative overflow-hidden rounded-3xl p-10" maxTilt={10}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70" />
              <div className="relative z-10 space-y-6">
                <p className="eyebrow">Production impact</p>
                <h3 className="text-2xl font-semibold text-white">Scalable, reliable delivery</h3>
                <p className="text-slate-300">
                  Built and shipped systems that prioritize performance, clean architecture, and real-time
                  responsiveness across high-traffic products.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Scalable backend', 'Real-time features', 'Clean architecture', 'Performance focus'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.25em] text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-12 right-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
            </TiltCard>

            <div className="space-y-4">
              <div className="glass-panel rounded-2xl p-6">
                <p className="eyebrow">Focus</p>
                <p className="mt-4 text-lg text-white">Reliable systems that scale with users and business goals.</p>
              </div>
              <div className="glass-panel rounded-2xl p-6">
                <p className="eyebrow">Outcome</p>
                <p className="mt-4 text-sm text-slate-300">Optimized performance, clean delivery, and measurable impact.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {PROJECTS_DATA.map((project, index) => (
              <motion.article
                key={project.title}
                className="group glass-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(2,6,23,0.7)]"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveProject(project)}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-2 text-slate-300">
                      <FiExternalLink /> Explore
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="glass-panel rounded-2xl p-8"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="eyebrow">More work</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Additional builds</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {OTHER_PROJECTS.map((project, index) => (
                  project.url ? (
                    <motion.a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-slate-300 transition-all hover:border-white/30 hover:text-white"
                      initial={{ opacity: 0, y: 8 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                    >
                      {project.name}
                    </motion.a>
                  ) : (
                    <motion.span
                      key={project.name}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-slate-300"
                      initial={{ opacity: 0, y: 8 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                    >
                      {project.name}
                    </motion.span>
                  )
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="glass-panel relative max-w-3xl rounded-3xl p-10"
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="absolute right-6 top-6 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>
              <p className="eyebrow">Project detail</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{activeProject.title}</h3>
              <p className="mt-4 text-slate-300">{activeProject.description}</p>
              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                {activeProject.features.map((feature) => (
                  <span key={feature}>• {feature}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white hover:border-white/40"
                  >
                    Live
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-slate-300 hover:border-white/30 hover:text-white"
                  >
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;