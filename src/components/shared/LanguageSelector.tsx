// src/components/shared/LanguageSelector.tsx
import { motion } from 'framer-motion';

export const LanguageSelector = () => {
  return (
    <motion.select
      className="bg-transparent border border-gray-300 dark:border-gray-700 rounded px-2 py-1"
      whileHover={{ scale: 1.05 }}
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
      <option value="es">ES</option>
    </motion.select>
  );
};