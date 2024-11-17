// src/components/shared/Logo.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Logo = () => {
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.1 }
  };

  const dotVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.2, rotate: 180 }
  };

  return (
    <Link to="/">
      <motion.div 
        className="flex items-center"
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <motion.span 
          className="text-3xl font-bold bg-gradient-to-r from-secondary via-purple-500 to-pink-500 bg-clip-text text-transparent"
          variants={letterVariants}
          transition={{ duration: 0.3 }}
        >
          NG
        </motion.span>
        <motion.span
          className="text-3xl font-bold text-secondary"
          variants={dotVariants}
          transition={{ duration: 0.5, type: "spring" }}
        >
          .
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Logo;