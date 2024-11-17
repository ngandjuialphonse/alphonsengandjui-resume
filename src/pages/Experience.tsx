// src/pages/Experience.tsx
import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaBriefcase, FaBuilding, FaCalendar, FaTasks } from 'react-icons/fa';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Akamai Technologies",
    position: "DevOps Engineer",
    period: "Jan 2021 - Present",
    location: "Germantown, WI",
    achievements: [
      "Spearheaded CI/CD pipelines migration reducing deployment times by 30%",
      "Automated infrastructure provisioning saving 15 hours weekly",
      "Managed Kubernetes clusters achieving 99.9% uptime",
      "Implemented monitoring solutions reducing incident response by 60%"
    ],
    technologies: ["Jenkins", "AWS", "Kubernetes", "Terraform", "Ansible"]
  },
  {
    company: "McKesson",
    position: "DevOps Engineer",
    period: "Feb 2018 - Dec 2020",
    location: "Germantown, WI",
    achievements: [
      "Led cloud migration reducing infrastructure costs by 30%",
      "Implemented CI/CD pipelines increasing team productivity by 35%",
      "Managed containerized environments with 99.99% uptime",
      "Reduced release cycle time by 25%"
    ],
    technologies: ["Azure", "Docker", "GitLab CI", "Terraform", "Python"]
  }
];

const Experience: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Professional Experience
        </motion.h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-secondary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className={`relative mb-16 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 md:top-6 left-0 md:left-auto md:right-0 w-4 h-4 rounded-full bg-secondary transform md:translate-x-1/2" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <FaBuilding className="text-secondary w-6 h-6" />
                  <h3 className="text-2xl font-bold ml-3">{exp.company}</h3>
                </div>

                <div className="mb-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center mb-2">
                    <FaBriefcase className="w-4 h-4 mr-2" />
                    <span>{exp.position}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaCalendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-2 flex items-center">
                    <FaTasks className="w-4 h-4 mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.3) + (i * 0.1) }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.3) + (i * 0.1) }}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;