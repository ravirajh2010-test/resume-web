export const PORTFOLIO_DATA = {
  name: 'Ravi Rajh Jeyaraveendran',
  title: 'Automation Architect',
  tagline: 'Expert in test automation frameworks, CI/CD integration, and enterprise-scale digital transformation',
  email: 'ravirajh2010@gmail.com',
  phone: '+91 9176869778',
  linkedin: 'https://www.linkedin.com/in/ravirajh',
  github: 'https://github.com/ravirajh2010-test/',
  location: 'Chennai, India',
};

export const SUMMARY = `I am an accomplished Automation Architect with over 12 years of experience in designing and implementing robust, scalable test automation frameworks. My core expertise includes UFT (Unified Functional Testing), Playwright, Selenium, API testing, CI/CD integration, and Agile methodologies, with a strong focus on transforming manual testing processes into efficient, maintainable automation solutions that enhance product quality and accelerate time-to-market.

I completed my Master’s degree in the UK and began my professional journey there, gaining valuable international exposure before moving to India to continue advancing my career in the IT industry. This diverse experience has helped me develop a global perspective and adaptability across different work environments.

Throughout my career, I have successfully led cross-functional teams and driven automation strategies aligned with business goals. I have a proven track record in building enterprise-grade frameworks, optimizing test execution, and delivering continuous improvement initiatives across multiple projects.

Along the way, I have navigated personal challenges that have strengthened my resilience, focus, and commitment. These experiences have shaped my ability to stay consistent, adapt to change, and continue progressing both professionally and personally.

I am passionate about leveraging technology to solve complex testing challenges, mentoring teams, and delivering high-quality solutions that create meaningful impact.`;

export const SKILLS = [
  { category: 'Test Automation', items: ['UFT/QTP', 'Selenium', 'Playwright', 'Cucumber', 'TestNG', 'JUnit'] },
  { category: 'Languages', items: ['VBScript', 'Java', 'Typescript', 'JavaScript', 'SQL'] },
  { category: 'Frameworks & Tools', items: ['ALM/QC', 'JIRA', 'Jenkins', 'Maven', 'Git'] },
  { category: 'CI/CD & DevOps', items: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'AWS'] },
  { category: 'Methodologies', items: ['Agile', 'Three Amigos', 'BDD', 'TDD', 'Scrum'] },
  { category: 'API Testing', items: ['REST APIs', 'SOAP', 'Postman', 'SoapUI', 'GraphQL'] },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: 'Hexaware Technologies',
    role: 'Technical Architect',
    duration: 'Jan 2026 - Present',
    location: 'Chennai, India',
    responsibilities: [
      'Served as the Technical Architect to design and implement a scalable Playwright-based automation framework',
      'Architected CI/CD pipeline using Jenkins, reducing deployment time from 4 hours to 30 minutes',
      'Established testing best practices and mentored team members on code quality standards',
      'Decreased manual testing effort by 70% through intelligent test automation',
      'Collaborated closely with business and cross-functional teams to define requirements, standardize automation practices, and successfully roll out a reusable, enterprise-wide testing framework'
    ],
    achievements: [
      '78% reduction in regression testing cycles',
      'Implemented automated performance testing, identifying 15+ critical bottlenecks',
      'Enhanced framework reliability from 92% to 99.2% pass rate stability',
    ],
  },
  {
    id: 2,
    company: 'Itish Business Solutions - Infosys(Contract)',
    role: 'Senior QA Automation Engineer',
    duration: 'Feb 2024 - Oct 2024',
    location: 'Hyderabad, India',
    responsibilities: [
      'Designed and developed UFT-LeanFT-based automation frameworks supporting 5+ applications',
      'Implemented API testing strategy using REST endpoints and SoapUI',
      'Collaborated with development team in Three Amigos sessions to define acceptance criteria',
      'Established ALM integration for test case management and traceability',
    ],
    achievements: [
      'Reduced regression testing time from 3 days to 4 hours',
      'Achieved 95% automation coverage for critical user workflows',
      'Mentored 3 junior QA engineers on automation best practices',
    ],
  },
  {
    id: 3,
    company: 'Adecco UK - Southwestern Railways(Contract)',
    role: 'Test Lead',
    duration: 'Feb 2023 - Apr 2023',
    location: 'Southampton, UK',
    responsibilities: [
      'Led a team of 5 QA engineers in designing and implementing HR Application - Manual testing',
      'Coordinated testing activities during short sprint cycles, planning tasks and aligning team efforts within a limited timeline',
      'Assigned and monitored test case execution, ensuring coverage and adherence to defined quality standards.',
      'Actively tracked progress, identified risks or blockers, and drove quick resolutions to keep testing on schedule',
    ],
    achievements: [
      'Delivered complete testing within a tight sprint timeline.',
      'Improved team efficiency through better task coordination',
      'Ensured smooth execution with minimal blockers',
    ],
  },
    {
    id: 4,
    company: 'Accenture',
    role: 'Senior Analyst - Test Engineering',
    duration: 'Mar 2019 - Sept 2020',
    location: 'Chennai, India',
    responsibilities: [
      'Developed and maintained automated test scripts using UFT, converting manual test cases into reliable automation.',
      'Integrated automated test suites with ALM for efficient test management and traceability.',
      'Utilized internal Litmus tool for execution and reporting in a banking domain project.',
      'Automated smoke and regression test suites to ensure faster validation and improved release quality.',
    ],
    achievements: [
      'Increased test coverage by successfully converting manual test cases into automation.',
      'Reduced testing time through automation of smoke and regression suites.',
      'Improved traceability and execution efficiency via ALM integration',
    ],
  },
  
];

export const PROJECTS = [
  {
    id: 1,
    name: 'Enterprise E-Commerce Test Automation',
    description: 'Designed and implemented a comprehensive test automation framework for a large-scale e-commerce platform supporting millions of transactions daily.',
    tools: ['UFT', 'ALM', 'Jenkins', 'Java'],
    contributions: [
      'Architected modular UFT framework with custom utilities library',
      'Implemented data-driven testing approach supporting 500+ test cases',
      'Integrated with CI/CD pipeline for continuous testing',
    ],
    link: 'https://github.com/projects/ecommerce-automation',
  },
  {
    id: 2,
    name: 'API Testing Framework (REST & SOAP)',
    description: 'Built a comprehensive API testing framework supporting both REST and SOAP services with advanced reporting and performance testing capabilities.',
    tools: ['Java', 'Rest Assured', 'TestNG', 'Maven'],
    contributions: [
      'Developed reusable API testing library with 20+ helper methods',
      'Implemented automated performance and load testing',
      'Created detailed API documentation with test examples',
    ],
    link: 'https://github.com/projects/api-testing-framework',
  },
  {
    id: 3,
    name: 'Mobile App Automation Suite',
    description: 'Developed cross-platform mobile test automation framework supporting iOS and Android applications with 80+ test scenarios.',
    tools: ['Appium', 'Java', 'Cucumber', 'Jenkins'],
    contributions: [
      'Implemented Appium-based framework for iOS and Android',
      'Developed BDD scenarios using Cucumber for business alignment',
      'Setup automated testing pipeline reducing manual testing by 65%',
    ],
    link: 'https://github.com/projects/mobile-automation',
  },
  {
    id: 4,
    name: 'Performance Testing Framework',
    description: 'Created an advanced performance testing framework for identifying and analyzing application bottlenecks under various load conditions.',
    tools: ['JMeter', 'Python', 'Grafana', 'Jenkins'],
    contributions: [
      'Designed load testing scenarios for peak traffic simulation',
      'Implemented real-time performance monitoring dashboards',
      'Identified and documented 20+ performance improvement opportunities',
    ],
    link: 'https://github.com/projects/performance-testing',
  },
];

export const GITHUB_USERNAME = 'ravirajh2010-test';
