// src/pages/Projects.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'devops' | 'cloud' | 'automation';
}

const projects: Project[] = [
  {
    title: "CI/CD Pipeline Automation",
    description: "Automated deployment pipeline using Jenkins, Docker, and Kubernetes for microservices architecture.",
    image: "/projects/cicd.jpg",
    technologies: ["Jenkins", "Docker", "Kubernetes", "Git"],
    githubUrl: "https://github.com/yourusername/cicd-pipeline",
    category: "devops"
  },
  {
    title: "Cloud Infrastructure",
    description: "Multi-cloud infrastructure management using Terraform and Ansible.",
    image: "/projects/cloud.jpg",
    technologies: ["AWS", "Azure", "Terraform", "Ansible"],
    githubUrl: "https://github.com/yourusername/cloud-infra",
    category: "cloud"
  }
  // Add more projects...
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'devops', label: 'DevOps' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'automation', label: 'Automation' }
];

const Projects: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Featured Projects
        </motion.h1>

        {/* Category Filter */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-secondary text-primary'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors"
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;