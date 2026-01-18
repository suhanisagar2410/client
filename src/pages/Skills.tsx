import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    icon: string;
  }[];
}

const skills: Skill[] = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'TypeScript', level: 85, icon: '📘' },
      { name: 'HTML/CSS', level: 95, icon: '🎨' },
      { name: 'Tailwind CSS', level: 90, icon: '🎯' },
      { name: 'Next.js', level: 85, icon: '🚀' },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', level: 90, icon: '🟢' },
      { name: 'Express', level: 85, icon: '⚡' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'PostgreSQL', level: 75, icon: '🐘' },
      { name: 'GraphQL', level: 80, icon: '📊' },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git', level: 90, icon: '📦' },
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'CI/CD', level: 80, icon: '🔄' },
      { name: 'Testing', level: 85, icon: '🧪' },
    ],
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen py-20 flex flex-col items-center justify-center">
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 max-w-6xl flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My Skills
          </motion.h1>
          <motion.p
            className="text-gray-800 dark:text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A comprehensive overview of my technical expertise and capabilities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-2xl transition-all"
            >
              <motion.h2
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
                whileHover={{ color: "#3B82F6" }}
              >
                {category.category}
              </motion.h2>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-sm"
                        whileHover={{ backgroundColor: "#3B82F6" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; 