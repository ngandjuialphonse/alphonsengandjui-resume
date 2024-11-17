// src/components/sections/Skills.tsx
import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';

export const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16"
    >
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-primary-light p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-2">{skill.category}</h3>
            <p className="text-sm text-secondary mb-2">{skill.years} Years</p>
            <div className="flex flex-wrap gap-2">
              {skill.items.map(item => (
                <span key={item} className="bg-primary px-2 py-1 rounded text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
