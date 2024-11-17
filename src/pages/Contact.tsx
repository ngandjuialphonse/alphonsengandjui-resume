// src/pages/Contact.tsx
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'ngandjuialphonse11@gmail.com' },
    { icon: <FaPhone />, text: '+1 (262) 772-4384' },
    { icon: <FaMapMarkerAlt />, text: 'Germantown, WI' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' }
  ];

  const inputClasses = "w-full p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-secondary focus:border-transparent";
  const labelClasses = "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Contact Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-4 mb-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 text-lg"
              >
                <span className="text-secondary">{item.icon}</span>
                <span className="text-gray-900 dark:text-gray-100">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-2xl text-secondary hover:text-accent"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className={labelClasses}>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={inputClasses}
              required
            />
          </div>
          
          <div>
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={inputClasses}
              required
            />
          </div>
          
          <div>
            <label className={labelClasses}>Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className={`${inputClasses} h-32`}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-secondary text-primary font-medium py-3 rounded hover:opacity-90 dark:hover:opacity-80"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;