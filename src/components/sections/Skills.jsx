import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { SKILLS_DATA } from '../../utils/constants';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const floatDelays = useMemo(
    () => SKILLS_DATA.flatMap((category, index) =>
      category.skills.map((_, skillIndex) => (index + skillIndex) * 0.2)
    ),
    []
  );

  return (
    <motion.section ref={ref} id="skills" className="section" style={{ scale, opacity }}>
      <div className="container">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center space-y-4">
            <p className="eyebrow">Expertise</p>
            <h2 className="heading">Capabilities with depth and balance</h2>
            <p className="subheading">Modern stacks, refined UI systems, and engineered reliability.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {SKILLS_DATA.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="glass-panel rounded-2xl p-6"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const floatIndex = SKILLS_DATA.slice(0, categoryIndex).reduce(
                      (sum, cat) => sum + cat.skills.length,
                      0
                    ) + skillIndex;

                    return (
                      <motion.div
                        key={skill.name}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-slate-200 shadow-[0_12px_30px_rgba(2,6,23,0.45)]"
                        initial={{ opacity: 0, y: 8 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 + categoryIndex * 0.08 + skillIndex * 0.06, duration: 0.45 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          animation: `skill-float 6s ease-in-out ${floatDelays[floatIndex] || 0}s infinite`,
                        }}
                      >
                        {skill.name}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;