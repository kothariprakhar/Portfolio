"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Terminal, Radio, Database, Globe, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Contact from './Contact';
import PageTransition from './PageTransition';
import About from './About';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [activeSkill, setActiveSkill] = useState(null);
  const { scrollY } = useScroll();
  
  const skillsY = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const sections = {
    home: {
      title: "Prakhar Kothari",
      subtitle: "Full Stack Developer",
      content: "Building exceptional digital experiences"
    },
    about: {
      title: "About Me",
      content: "Passionate developer with 5 years of experience in building scalable applications"
    },
    contact: {
      title: "Contact"
    }
  };

  const skills = [
    { 
      icon: <Code className="w-8 h-8" />,
      name: "Frontend Excellence",
      details: [
        "Intuitive User Interface Design",
        "Responsive Web Applications",
        "Advanced Performance Optimization",
        "Seamless User Experience",
        "Adaptive Bitrate Streaming",
        "Accessible Design Implementation",
        "Cross-platform Compatibility",
        "Interactive Component Architecture"
      ]
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      name: "Backend Architecture",
      details: [
        "High-performance System Design",
        "Efficient API Development",
        "Robust Server Optimization",
        "Complex Data Processing",
        "Real-time System Integration",
        "Scalable Multi-tenant Architecture",
        "Secure Service Implementation",
        "Advanced Error Handling"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Data Engineering",
      details: [
        "Advanced Query Optimization",
        "Efficient Data Structures",
        "Complex Data Modeling",
        "High-load System Management",
        "Seamless Data Migration",
        "Intelligent Cache Implementation",
        "AI/ML Data Integration",
        "Real-time Analytics Solutions"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "Technical Leadership",
      details: [
        "Strategic Team Leadership (25+ Engineers)",
        "Transformative Product Development",
        "Agile Sprint Planning & Execution",
        "Executive Client Communication",
        "Scalable System Architecture",
        "Revenue-Driving Innovation",
        "Cross-functional Team Collaboration",
        "Exceptional Growth Management (6K to 3M+ users)"
      ]
    }
  ];

  const workTimeline = [
    {
      year: "2022 - ",
      company: "Freelance Developer",
      role: "Full Stack Developer",
      achievements: [
        "Developed applications for 10+ international clients",
        "Increased traffic by 300% for multiple clients",
        "Built AI-powered healthcare solutions",
        "Created financial inclusion platforms",
        "Impacted 400,000+ end users"
      ]
    },
    {
      year: "2021-22",
      company: "Leena AI",
      role: "Lead Developer",
      achievements: [
        "Scaled from 6000 to 3M+ users",
        "Secured $30M Series B funding",
        "Led Employee Engagement product",
        "Managed 25+ client relationships",
        "Reduced server calls by 45%"
      ]
    },
    {
      year: "2018-20",
      company: "Unacademy",
      role: "Software Developer",
      achievements: [
        "Grew user base from 40K to 500K",
        "Contributed to $50M funding round",
        "Built comprehensive dashboard",
        "Implemented adaptive streaming",
        "Optimized for low bandwidth areas"
      ]
    }
  ];

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <motion.div
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &lt;/&gt;
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-gray-800 p-4 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <motion.div 
            className="text-2xl font-bold"
            animate={{
              rotateY: [0, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &lt;PK/&gt;
          </motion.div>
          <div className="flex space-x-6">
            {Object.keys(sections).map((section) => (
              <motion.button
                key={section}
                className={`px-4 py-2 rounded-lg ${activeSection === section ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
    
      <motion.main 
        className="pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-4">
            <PageTransition isVisible={activeSection === 'home'}>
          <div className="flex flex-col items-center py-20">
            <motion.div
              className="mb-12"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500">
                  <Image
                    src="https://imgur.com/tGjvTiz.jpg"
                    alt="Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Animated border effect */}
                <motion.div
                  className="absolute -inset-2 border-2 border-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl font-bold mb-4">{sections.home.title}</h1>
              <h2 className="text-3xl text-blue-400 mb-8">{sections.home.subtitle}</h2>
              <p className="text-xl text-gray-300">{sections.home.content}</p>
              <motion.div 
                className="mt-12 flex justify-center space-x-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* <motion.a
                  href="https://github.com"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 bg-gray-800 rounded-full"
                >
                  <Github className="w-8 h-8" />
                </motion.a> */}
                <motion.a
                  href="https://www.linkedin.com/in/prakhar-kothari-sde/"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 bg-gray-800 rounded-full"
                >
                  <Linkedin className="w-8 h-8" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Dynamic Sections */}
          <div className="space-y-32 py-20">
            {/* Interactive Skills Section */}
            <motion.section 
              style={{ y: skillsY }}
              className="relative"
            >
              <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setActiveSkill(skill.name)}
                    onHoverEnd={() => setActiveSkill(null)}
                  >
                    <motion.div
                      className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 
                        transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-blue-400">{skill.icon}</div>
                        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: activeSkill === skill.name ? 1 : 0,
                          height: activeSkill === skill.name ? 'auto' : 0
                        }}
                      >
                        <ul className="space-y-2">
                          {skill.details.map((detail, i) => (
                            <motion.li
                              key={detail}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-blue-400"
                            >
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 3D Timeline Section */}
            <section className="relative overflow-hidden">
              <h2 className="text-4xl font-bold text-center mb-16 text-white">Work Journey</h2>
              <div className="max-w-4xl mx-auto">
                {workTimeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative mb-16 last:mb-0"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-8">
                      <motion.div
                        className="w-32 h-32 rounded-full bg-gray-800 
                          flex items-center justify-center text-2xl font-bold text-blue-400
                          text-center leading-none"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.year}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-white">{item.company}</h3>
                        <h4 className="text-xl text-blue-400 mb-4">{item.role}</h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <motion.li
                              key={achievement}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.2 }}
                              className="flex items-center space-x-2 text-white"
                            >
                              <Radio className="w-4 h-4 text-blue-400" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>


            {/* Statistics Section */}
            <section className="relative">
              <h2 className="text-4xl font-bold text-center mb-16 text-white">Impact & Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "Projects Completed", value: "50+" },
                  { label: "Years Experience", value: "5+" },
                  { label: "Happy Clients", value: "30+" },
                  { label: "Code Reviews", value: "500+" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 rounded-lg bg-gray-800"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="text-5xl font-bold mb-2 text-blue-400"
                      whileInView={{
                        opacity: [0, 1],
                        y: [50, 0],
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div
                      className="text-xl text-white"
                      whileInView={{
                        opacity: [0, 1],
                        y: [20, 0],
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
          </PageTransition>

        <PageTransition isVisible={activeSection === 'about'}>
      <About />
    </PageTransition>

    <PageTransition isVisible={activeSection === 'contact'}>
      <Contact />
    </PageTransition>
        </div>
      </motion.main>
    </div>
  );
};

export default Portfolio;