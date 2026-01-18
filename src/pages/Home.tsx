import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* 3D Animation Section */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-30 dark:opacity-100">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 2]} intensity={0.7} />
          <Sphere args={[1.2, 64, 64]} scale={1.2} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#3B82F6"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.2}
              metalness={0.7}
            />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-md"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-800 dark:text-gray-300 mb-8 font-medium"
        >
          I'm a passionate web developer creating beautiful and functional websites
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Work
          </Link>
          <Link
            to="/skills"
            className="px-8 py-3 bg-white dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-blue-50 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-600 transform hover:-translate-y-1"
          >
            My Skills
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home; 