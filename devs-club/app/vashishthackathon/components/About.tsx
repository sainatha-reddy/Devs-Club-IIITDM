import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Zap, Target, Eye } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Prize Pool: TBD',
      description: 'Compete for exciting prizes and recognition'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '2000+ Participants',
      description: 'Join the largest student hackathon community'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '36 Hours',
      description: 'Non-stop coding and creation sprint'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Tracks',
      description: 'TBD'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'National Level',
      description: 'Connect with innovators across India'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-blue-900" id='About'>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About The Event</h2>
          <p className="text-cyan-100 text-lg leading-relaxed">
          Vashisht Hackathon 3.0 is the 3rd edition of the flagship national-level hackathon of the techno-cultural fest of IIITDM Kancheepuram, organized by the Developers Club. Bringing together innovators and developers nationwide, it offers a thrilling 36-hour coding sprint to build real-world tech solutions. Tentatively scheduled for March 28, 2026, the hackathon will feature diverse and open-ended problem statements, encouraging creativity, collaboration, and innovation to transform ideas into impactful outcomes.</p>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block p-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl text-white mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-cyan-100/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Mission & Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Mission</h4>
              <p className="text-cyan-100">
                Vashisht Hackathon 3.O aims to empower students to build real-world solutions through a high-energy, 
                collaborative hackathon. With tracks in web/app development, AI, IoT, and open innovation, 
                the event fosters technical creativity, encourages hands-on learning, and helps students 
                grow into confident developers ready to tackle today&apos;s tech challenges.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-purple-400 mb-3">Vision</h4>
              <p className="text-cyan-100">
                We envision Vashisht Hackathon 3.O as a nationally recognized student-run hackathon that nurtures 
                innovation, collaboration, and problem-solving. By connecting passionate developers and 
                fostering a strong tech culture, we aim to create a launchpad where ideas become impactful 
                solutions, and students gain exposure to emerging technologies and practical development experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};