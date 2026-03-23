import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  name: string;
  description: string;
  tools: string[];
  contributions: string[];
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tools,
  contributions,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            aria-label="Open project"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
          Tools & Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-grow">
        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
          Key Contributions
        </h4>
        <ul className="space-y-2">
          {contributions.map((contrib, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">✓</span>
              <span>{contrib}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-4 inline-flex items-center justify-center w-full"
      >
        View Project
        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
