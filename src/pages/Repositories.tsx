import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import RepositoryCard from '../components/RepositoryCard';
import { fetchGitHubRepositories, Repository } from '../services/githubService';
import { GITHUB_USERNAME } from '../constants/portfolio';

const Repositories: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        setLoading(true);
        const repos = await fetchGitHubRepositories();
        setRepositories(repos);
        setError(null);
      } catch (err) {
        setError('Failed to load repositories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <FiGithub className="w-12 h-12 text-gray-900 dark:text-white" />
          </div>
          <h1 className="section-title">GitHub Repositories</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my open-source projects and contributions on GitHub. Each repository represents
            a learning journey and a commitment to quality code.
          </p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
          >
            View All Repositories →
          </a>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading repositories...</p>
            </div>
          </motion.div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-6 bg-red-50 dark:bg-red-900 border-l-4 border-red-600 mb-8 text-center"
          >
            <p className="text-red-700 dark:text-red-300 font-semibold">{error}</p>
            <p className="text-red-600 dark:text-red-400 text-sm mt-2">
              Please check your internet connection or try again later.
            </p>
          </motion.div>
        )}

        {/* Repositories Grid */}
        {!loading && repositories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {repositories.map((repo, index) => (
              <RepositoryCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                url={repo.url}
                stars={repo.stars}
                forks={repo.forks}
                language={repo.language}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && repositories.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-12 text-center"
          >
            <FiGithub className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              No repositories found.
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
            >
              Visit GitHub Profile
            </a>
          </motion.div>
        )}

        {/* Repository Stats */}
        {!loading && repositories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Repository Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {repositories.length}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Repositories</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Recent projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {repositories.reduce((sum, repo) => sum + repo.stars, 0)}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Total Stars</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Community recognition</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {repositories.reduce((sum, repo) => sum + repo.forks, 0)}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Total Forks</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Community contributions</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Repositories;
