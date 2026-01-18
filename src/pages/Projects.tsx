import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of the project and its key features.',
    image: '/project1.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Another amazing project showcasing your skills and expertise.',
    image: '/project2.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/yourusername/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A third project demonstrating your versatility as a developer.',
    image: '/project3.jpg',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
    link: 'https://github.com/yourusername/project3',
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={containerRef} className="min-h-screen py-20 flex flex-col items-center justify-center">
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 max-w-7xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-2xl transition-all"
            >
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white opacity-0 hover:opacity-100 transform -translate-y-4 hover:translate-y-0 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Project
                  </motion.a>
                </motion.div>
              </motion.div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                  whileHover={{ color: "#3B82F6" }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-800 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#3B82F6",
                        color: "white"
                      }}
                      className="px-3 py-1 bg-blue-50 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 