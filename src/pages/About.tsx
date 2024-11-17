// src/pages/About.tsx
import { motion } from 'framer-motion';
import { FC } from 'react';
import { 
  FaGithub, 
  FaCodeBranch,
  FaDocker,
  FaAws,
  FaLinux,
  FaJenkins,
  FaCloud
} from 'react-icons/fa';
import { 
  SiGitlab,
  SiBitbucket,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiAzuredevops,
  SiGooglecloud,
  SiMicrosoftazure
} from 'react-icons/si';

interface Skill {
  category: string;
  icon: JSX.Element;
  items: Array<{
    name: string;
    level: number;
    years: number;
  }>;
}

const skills: Skill[] = [
  {
    category: "Containerization",
    icon: <FaDocker className="w-8 h-8" />,
    items: [
      { name: "Docker", level: 90, years: 5 },
      { name: "Kubernetes", level: 85, years: 4 },
      { name: "Docker Compose", level: 90, years: 5 }
    ]
  },
  {
    category: "Infrastructure as Code",
    icon: <SiTerraform className="w-8 h-8" />,
    items: [
      { name: "Terraform", level: 90, years: 5 },
      { name: "Ansible", level: 85, years: 4 },
      { name: "CloudFormation", level: 80, years: 3 }
    ]
  },
  {
    category: "Cloud Platforms",
    icon: <FaCloud className="w-8 h-8" />,
    items: [
      { name: "AWS", level: 90, years: 5 },
      { name: "Azure", level: 85, years: 4 },
      { name: "GCP", level: 80, years: 3 }
    ]
  },
  {
    category: "Version Control",
    icon: <FaCodeBranch className="w-8 h-8" />,
    items: [
      { name: "Git", level: 95, years: 5 },
      { name: "GitHub", level: 90, years: 5 },
      { name: "GitLab", level: 85, years: 4 }
    ]
  },
  {
    category: "Linux & Systems",
    icon: <FaLinux className="w-8 h-8" />,
    items: [
      { name: "Linux Administration", level: 90, years: 5 },
      { name: "Shell Scripting", level: 85, years: 5 },
      { name: "System Monitoring", level: 85, years: 4 }
    ]
  },
  {
    category: "CI/CD",
    icon: <FaJenkins className="w-8 h-8" />,
    items: [
      { name: "Jenkins", level: 90, years: 5 },
      { name: "Azure DevOps", level: 85, years: 4 },
      { name: "GitLab CI", level: 85, years: 4 }
    ]
  }
];

const About: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Expertise</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Over 5 years of experience in DevOps engineering, specializing in cloud infrastructure, 
            containerization, and automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="text-secondary">{skill.icon}</span>
                <h3 className="text-xl font-bold ml-3">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item, i) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                      <span className="text-secondary">{item.years} years</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) + (i * 0.1) }}
                        className="h-full bg-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;