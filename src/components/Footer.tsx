import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../constants/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>{PORTFOLIO_DATA.email}</span>
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.phone}`}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>{PORTFOLIO_DATA.phone}</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-400 rounded-lg transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-400 transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-blue-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {PORTFOLIO_DATA.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Built with React, Vite, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
