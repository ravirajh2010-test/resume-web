import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import { PORTFOLIO_DATA } from '../constants/portfolio';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: PORTFOLIO_DATA.email,
      action: `mailto:${PORTFOLIO_DATA.email}`,
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: PORTFOLIO_DATA.phone,
      action: `tel:${PORTFOLIO_DATA.phone}`,
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: PORTFOLIO_DATA.location,
      action: '#',
    },
  ];

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
          <h1 className="section-title">Get In Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and consulting opportunities.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contact Methods */}
            <div className="space-y-8 mb-12">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.action}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 group cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          {method.title}
                        </p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Connect on Social Media
              </h3>
              <div className="space-y-4">
                <a
                  href={PORTFOLIO_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group"
                >
                  <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Professional networking</p>
                  </div>
                </a>
                <a
                  href={PORTFOLIO_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
                >
                  <FaGithub className="w-6 h-6 text-gray-900 dark:text-white mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">GitHub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Code and projects</p>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group"
                >
                  <FaTwitter className="w-6 h-6 text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Twitter</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Latest updates</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Response Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 card p-6 bg-green-50 dark:bg-green-900 border-l-4 border-green-600 text-center"
        >
          <p className="text-green-700 dark:text-green-300 font-semibold">
            ⏱️ I typically respond to inquiries within 24-48 hours
          </p>
          <p className="text-green-600 dark:text-green-400 text-sm mt-2">
            Looking forward to discussing your next automation project!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
