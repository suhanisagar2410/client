import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { EXPERIENCE_DATA } from '../../utils/constants';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const education = {
    degree: 'MERN Stack capstone project',
    institution: 'Swarrnim Startup & Innovations University',
    period: 'Graduated May 2025',
  };

  return (
    <motion.section ref={ref} id="experience" className="section" style={{ scale, opacity }}>
      <div className="container">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center space-y-4">
            <p className="eyebrow">Experience</p>
            <h2 className="heading">Execution across teams and systems</h2>
          </div>

          <div className="grid gap-6">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="glass-panel rounded-2xl p-6"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                    <p className="text-sm text-slate-300">{exp.role}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{exp.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {exp.description.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              className="glass-panel rounded-2xl p-6"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: EXPERIENCE_DATA.length * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <p className="mt-2 text-sm text-slate-300">{education.degree}</p>
              <p className="text-sm text-slate-400">{education.institution}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{education.period}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;