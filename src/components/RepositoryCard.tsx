import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

interface RepositoryCardProps {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
  index: number;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  name,
  description,
  url,
  stars,
  forks,
  language,
  index,
}) => {
  const languageColors: Record<string, string> = {
    JavaScript: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    TypeScript: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    Java: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
    Python: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    CSS: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300',
    HTML: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
  };

  const colorClass = language ? (languageColors[language] || 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300') : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white break-all flex-grow">{name}</h3>
        <ArrowTopRightOnSquareIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-2" />
      </div>

      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
            <StarIcon className="w-4 h-4" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
            <CodeBracketIcon className="w-4 h-4" />
            <span>{forks}</span>
          </div>
        </div>

        {language && (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
            {language}
          </span>
        )}
      </div>
    </motion.a>
  );
};

export default RepositoryCard;
