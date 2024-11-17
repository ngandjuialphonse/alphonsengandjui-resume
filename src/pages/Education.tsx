// src/pages/Education.tsx
import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaGraduationCap, FaCertificate, FaAward, FaAws } from 'react-icons/fa';
import { SiAmazon, SiTerraform, SiHashicorp } from 'react-icons/si';
import { SiComptia } from 'react-icons/si';

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: JSX.Element;
  credentialUrl: string;
  skills: string[];
}

const educationData: Education[] = [
  {
    degree: "Masters in Science",
    institution: "University of Douala",
    location: "Cameroon",
    year: "2015",
    description: "Focus on Science and Engineering"
  },
  {
    degree: "Bachelors in Science",
    institution: "University of Douala",
    location: "Cameroon",
    year: "2012",
    description: "Physiology and Biophysics"
  }
];


const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: <SiAmazon className="w-12 h-12" />,
    credentialUrl: "https://www.credly.com/badges/your-badge-id",
    skills: ["AWS", "Cloud Architecture", "Security"]
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "2023",
    icon: <SiHashicorp className="w-12 h-12" />,
    credentialUrl: "https://www.credly.com/badges/your-badge-id",
    skills: ["Infrastructure as Code", "Cloud", "DevOps"]
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    icon: <SiTerraform className="w-12 h-12" />,
    credentialUrl: "https://www.credly.com/badges/your-badge-id",
    skills: ["Kubernetes", "Container Orchestration", "Cloud Native"]
  },
  {
    name: "CompTIA ITF+",
    issuer: "CompTIA",
    date: "2024",
    icon: <SiComptia className="w-12 h-12" />,
    credentialUrl: "https://www.credly.com/badges/your-comptia-badge",
    skills: ["IT Fundamentals", "Hardware", "Software", "Security Fundamentals"]
  }
];

const Education: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Education Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold flex items-center mb-8">
            <FaGraduationCap className="mr-4 text-secondary" />
            Education
          </h2>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-secondary before:rounded"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-secondary mb-2">{edu.institution}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <span>{edu.location}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold flex items-center mb-8">
            <FaCertificate className="mr-4 text-secondary" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={cert.name}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-secondary transition-colors">
                  <div className="flex items-start">
                    <div className="text-secondary">{cert.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {cert.issuer} • {cert.date}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map(skill => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;