import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants/portfolio';
import ExperienceCard from '../components/ExperienceCard';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Professional Experience</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            8+ years of expertise in test automation and quality assurance
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600" />

          {/* Experience Cards */}
          <div className="md:pl-8">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                company={exp.company}
                role={exp.role}
                duration={exp.duration}
                location={exp.location}
                responsibilities={exp.responsibilities}
                achievements={exp.achievements}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 card p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Career Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                Core Focus Areas
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• UFT/QTP Test Automation</li>
                <li>• Selenium Framework Design</li>
                <li>• CI/CD Pipeline Integration</li>
                <li>• Enterprise Testing Strategy</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                Key Achievements
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 75% reduction in testing time</li>
                <li>• Led teams of 5-10 engineers</li>
                <li>• 99%+ framework reliability</li>
                <li>• Enterprise-scale implementations</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
