// src/components/sections/Experience.tsx
import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';
import { Experience as ExperienceType } from '../../types/resume';

export const Experience = () => {
  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      {resumeData.experience.map((exp: ExperienceType, index: number) => (
        <motion.div
          key={exp.company}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-secondary">{exp.company}</h3>
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl">{exp.position}</p>
            <p className="text-textSecondary">{exp.period}</p>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {exp.achievements.map((achievement: string, i: number) => (
              <motion.li
                key={i}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (index * 0.2) + (i * 0.1) }}
                className="text-textSecondary"
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Experience;