import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants/portfolio';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Featured Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my most impactful automation and testing projects that demonstrate expertise
            in framework design, implementation, and team leadership
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              tools={project.tools}
              contributions={project.contributions}
              link={project.link}
              index={index}
            />
          ))}
        </div>

        {/* Project Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="card p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4</p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Major Projects</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise-scale implementations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Test Scenarios</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Across all projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.2%</p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Pass Rate</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average framework stability</p>
            </div>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 card p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['UFT', 'Selenium', 'Java', 'Python', 'Jenkins', 'Maven', 'Cucumber', 'REST APIs', 'SOAP', 'JMeter', 'Appium', 'ALM'].map(
              (tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg text-center"
                >
                  <p className="font-semibold text-blue-700 dark:text-blue-300">{tech}</p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
