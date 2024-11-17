// src/components/sections/Education.tsx
import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';
import { Education as EducationType } from '../../types/resume';

export const Education = () => {
  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {resumeData.education.map((edu: EducationType, index: number) => (
          <motion.div
            key={`${edu.degree}-${edu.year}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-primary-light p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-secondary">{edu.institution}</p>
            <p className="text-textSecondary">{edu.location} • {edu.year}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;