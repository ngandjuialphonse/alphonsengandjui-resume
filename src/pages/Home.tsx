// src/pages/Home.tsx
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

export default function Home() {
  const { personal } = resumeData;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="section-container"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">{personal.name}</h1>
        <h2 className="text-2xl md:text-3xl text-secondary mb-4">{personal.title}</h2>
        <div className="flex flex-wrap gap-4 text-textSecondary mb-8">
          <span>{personal.email}</span>
          <span>{personal.phone}</span>
          <span>{personal.location}</span>
        </div>
        <p className="text-lg leading-relaxed">{personal.summary}</p>
      </div>
    </motion.section>
  );
}