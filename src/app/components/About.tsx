"use client";
import { motion } from 'framer-motion';
import { Book, Award, Music, Heart, Star, Trophy, Lightbulb } from 'lucide-react';

const About = () => {
  const education = [
    {
      title: "Union Public Service Commission",
      period: "2015 - 2019",
      details: "Ranked among top 0.3% out of 500,000 candidates",
      subjects: "Economics, Political Science, History, Sociology, Geography, Ethics, Physics"
    },
    {
      title: "Indian Institute of Technology Patna",
      period: "2011 - 2015",
      details: "B.Tech in Electrical Engineering (Distinction, rank 6)"
    }
  ];

  const achievements = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Imperial College Achievement",
      description: "Distinction in Entrepreneurial Journey from Imperial College Business School (2022-23)"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "IIT-JEE Excellence",
      description: "Ranked among top 0.17% in IIT-JEE (1.1 million candidates)"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Young Scientist Fellowship",
      description: "Received from the prestigious Indian Institute of Science, Bangalore (2011)"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "National Talent Search Scholarship",
      description: "Awarded to India's top 1000 students by NCERT (2008)"
    }
  ];

  const passions = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Lead Guitarist",
      description: "Lead Guitarist of university rock band 'Dark Entity', performed at 25+ events"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Social Impact",
      description: "Teaching Physics to underprivileged children, care for orphaned children at SOS Children Village"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Sports Leadership",
      description: "Captain of school and university basketball team, leading to numerous victories"
    }
  ];

  return (
    <motion.div 
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Education Section */}
      <motion.section 
        className="mb-20"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Educational Journey</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-400">{edu.title}</h3>
              <p className="text-gray-400 mt-1">{edu.period}</p>
              <p className="text-white mt-2">{edu.details}</p>
              {edu.subjects && (
                <p className="text-gray-300 mt-2 text-sm">{edu.subjects}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        className="mb-20"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="text-blue-400">{achievement.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-gray-300 mt-1">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Passions Section */}
      <motion.section
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Beyond Code</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center text-blue-400 mb-4">
                {passion.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{passion.title}</h3>
              <p className="text-gray-300">{passion.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;