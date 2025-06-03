// Programs.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Programs() {
  const programs = [
    {
      title: 'BSc in Computer Science and Engineering (CSE)',
      description: '4-year undergraduate program focused on software, hardware, and AI.',
      icon: '🎓',
      features: ['Modern Curriculum', 'Industry-focused Projects', 'Research Opportunities'],
      duration: '4 Years',
      intake: '120 Students'
    },
    {
      title: 'MSc in CSE',
      description: 'Advanced program for postgraduates to specialize in research and industry-relevant skills.',
      icon: '📚',
      features: ['Research Focus', 'Specialized Tracks', 'Industry Collaboration'],
      duration: '2 Years',
      intake: '40 Students'
    },
    {
      title: 'Short Courses',
      description: 'Web Development, Machine Learning, Python Programming, etc.',
      icon: '💻',
      features: ['Flexible Schedule', 'Hands-on Training', 'Industry Experts'],
      duration: '3-6 Months',
      intake: '30 Students/Batch'
    },
    {
      title: 'Workshops & Bootcamps',
      description: 'Regular sessions on trending tech topics for students and professionals.',
      icon: '🚀',
      features: ['Intensive Learning', 'Real Projects', 'Networking'],
      duration: '1-4 Weeks',
      intake: '25 Students/Batch'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Programs
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering the next generation of tech leaders through comprehensive education and hands-on experience
          </p>
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{program.icon}</div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-teal-600">{program.duration}</div>
                    <div className="text-sm text-gray-500">{program.intake}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>

                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 bg-gradient-to-r from-teal-500/5 to-blue-500/5 border-t border-gray-100">
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02]">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Choose Our Programs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white text-2xl">
                  🌟
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Excellence</h3>
                <p className="text-gray-600">Top-ranked programs with industry recognition</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                  🔬
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge research and technology focus</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center text-white text-2xl">
                  🤝
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">Strong alumni network and industry connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
  