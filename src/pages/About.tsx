import React from 'react';
import { motion } from 'framer-motion';
import { SUMMARY, SKILLS } from '../constants/portfolio';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          <h1 className="section-title">About Me</h1>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card p-8 mb-12"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {SUMMARY}
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Core Competencies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 card p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Highlights</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                Designed and implemented enterprise-scale automation frameworks for Fortune 500 companies
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                Led digital transformation initiatives reducing manual testing effort by up to 75%
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                Expert mentor with proven track record of developing high-performing QA teams
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                Passionate advocate for agile methodologies, BDD, and continuous improvement
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
