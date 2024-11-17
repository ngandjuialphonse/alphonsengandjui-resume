// src/components/shared/ThemeToggle.tsx
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ThemeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <FaSun className="hidden dark:block w-5 h-5 text-yellow-400" />
      <FaMoon className="block dark:hidden w-5 h-5" />
    </motion.button>
  );
};