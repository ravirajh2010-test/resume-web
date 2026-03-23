import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  duration,
  location,
  responsibilities,
  achievements,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 mb-6 border-l-4 border-blue-600"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{role}</h3>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
        </div>
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
          {duration}
        </span>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
          Key Responsibilities
        </h4>
        <ul className="space-y-2">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-0.5">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
          Key Achievements
        </h4>
        <ul className="space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
              <CheckCircleIcon className="w-4 h-4 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
