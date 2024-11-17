// src/data/resume.ts
export const resumeData = {
  personal: {
    name: "ALPHONSE NGANDJUI",
    title: "DEVOPS ENGINEER",
    email: "ngandjuialphonse11@gmail.com",
    phone: "+1 (262) 772-4384",
    location: "Germantown, WI",
    summary: "As a seasoned DevOps Engineer with over 5 years of experience...",
  },

  skills: [
    { category: "CI/CD", items: ["Jenkins", "GitLab CI/CD", "CircleCI", "Travis CI"], years: 5 },
    { category: "Configuration Management", items: ["Ansible", "Puppet", "Chef", "Terraform"], years: 5 },
    { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud Platform (GCP)"], years: 5 },
    // Add other skills...
  ],

  experience: [
    {
      company: "Akamai Technologies",
      position: "DevOps Engineer",
      period: "Jan 2021 - Present",
      achievements: [
        "Spearheaded the migration of Akamai Technologies' CI/CD pipelines to Jenkins, resulting in a 30% decrease in deployment times.",
        "Automated infrastructure provisioning on AWS using Terraform, reducing manual errors by 40% and saving 15 hours weekly.",
        "Automated infrastructure provisioning on AWS using Terraform, reducing manual errors by 40% and saving 15 hours weekly.",
        
        // Add other achievements...
      ],
    },
    // Add other experiences...
  ],

  education: [
    {
      degree: "Masters in Science",
      institution: "University of Douala",
      location: "Cameroon",
      year: "2015",
    },
    {
      degree: "Bachelors in Science",
      institution: "University of Douala",
      location: "Cameroon",
      year: "2012",
    },
  ],

  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "HashiCorp Certified: Terraform Associate (003)",
    "Certified Kubernetes Administrator",
  ],
};