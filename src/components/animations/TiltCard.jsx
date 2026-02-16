import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const TiltCard = ({ children, className = '', maxTilt = 3 }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -maxTilt;
    const rotateYValue = ((x - centerX) / centerX) * maxTilt;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;