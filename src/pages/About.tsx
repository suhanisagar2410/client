import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaAws, FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2020 - Present",
    description:
      "Leading the development of enterprise-level applications and mentoring junior developers.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Startup Co.",
    period: "2018 - 2020",
    description:
      "Developed and maintained multiple web applications using modern technologies.",
    technologies: ["React", "Express", "MongoDB", "Redux"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2016 - 2018",
    description:
      "Created responsive and interactive user interfaces for various clients.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

const skillsData = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: FaNode, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen py-20 flex flex-col items-center"
    >
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 max-w-7xl"
      >
        {/* About Me Section */}
        <section className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white drop-shadow-md"
          >
            About Me
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center md:text-left"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-800 dark:text-gray-400 text-lg leading-relaxed"
              >
                I am a passionate Full Stack Developer with over 5 years of
                experience in building web applications. My journey in software
                development started with a curiosity for creating things that
                make a difference.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-800 dark:text-gray-400 text-lg leading-relaxed"
              >
                I specialize in modern web technologies and enjoy solving
                complex problems. My expertise includes frontend and backend
                development, with a strong focus on creating scalable and
                maintainable applications.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                {skillsData.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-800 
                   rounded-full text-sm cursor-pointer group border-2 border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-sm hover:shadow-md transition-all"
                    >
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon
                          className="text-xl group-hover:text-[1.4rem]"
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src="/profie.png"
                  alt="Profile"
                  className="rounded-[14.5rem] shadow-lg w-full max-w-md"
                  whileHover={{
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Experience
          </motion.h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <motion.div
                    className="text-center md:text-left"
                    whileHover={{ x: 10 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-400 font-medium">
                      {experience.company}
                    </p>
                  </motion.div>
                  <motion.p
                    className="text-gray-500 dark:text-gray-500 mt-2 md:mt-0 text-center md:text-right"
                    whileHover={{ scale: 1.1 }}
                  >
                    {experience.period}
                  </motion.p>
                </div>
                <motion.p
                  className="text-gray-800 dark:text-gray-400 mb-4 text-center md:text-left leading-relaxed"
                  whileHover={{ color: "#3B82F6" }}
                >
                  {experience.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#3B82F6",
                        color: "white",
                      }}
                      className="px-3 py-1 bg-blue-50 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
