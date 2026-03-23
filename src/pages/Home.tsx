import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../constants/portfolio';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden shadow-2xl">
              <span className="text-6xl font-bold text-white">
                {PORTFOLIO_DATA.name.split(' ').slice(0, 2).map(n => n.charAt(0)).join('')}
              </span>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {PORTFOLIO_DATA.name}
          </motion.h1>

          {/* Title */}
          <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            {PORTFOLIO_DATA.title}
          </motion.p>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {PORTFOLIO_DATA.tagline}
          </motion.p>

          {/* Contact Details */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-gray-700 dark:text-gray-300">
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              📧 {PORTFOLIO_DATA.email}
            </a>
            <span className="hidden md:inline">•</span>
            <a href={`tel:${PORTFOLIO_DATA.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              📱 {PORTFOLIO_DATA.phone}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-10">
            <a
              href={PORTFOLIO_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={PORTFOLIO_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center justify-center group"
            >
              View Projects
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#resume"
              className="btn-secondary inline-flex items-center justify-center"
              download
            >
              <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">8+</div>
              <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
              <p className="text-gray-600 dark:text-gray-400">Team Members Led</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 dark:bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-lg mb-8 text-blue-100">
            I'm available for consulting projects, framework design, and team mentoring.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
