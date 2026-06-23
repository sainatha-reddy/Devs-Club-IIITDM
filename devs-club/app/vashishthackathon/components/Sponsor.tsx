import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SponsorUs } from './sponsor/SponsorUs';
import { Clock } from 'lucide-react';
import { SponsorCard } from './sponsor/SponsorCard';
import Unstop from './images/unstop.png'
import APTOS from './images/APTOS.png'
import Devfolio from './images/Devfolio.png'
import dotxyz from './images/dotxyz.jpg'
import contentstack from './images/contentstack.svg'

const previousSponsors = [
  {
    name: 'Unstop',
    logo: Unstop,
    url: 'https://unstop.com/'
  },
  {
    name: '.xyz',
    logo: dotxyz,
    url: 'https://gen.xyz/'
  },
  {
    name: 'Devfolio',
    logo: Devfolio,
    url: 'https://devfolio.co/'
  },
  {
    name: 'APTOS',
    logo: APTOS,
    url: 'https://aptosfoundation.org/'
  },
  {
    name: 'Contentstack',
    logo: contentstack,
    url: 'https://www.contentstack.com/'
  }
];

export const Sponsors = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500, 1000], [1, 0.8, 0.6]);

  // Created enough duplicates for seamless looping for seamless looping
  const duplicatedSponsors = [
    ...previousSponsors, 
    ...previousSponsors, 
    ...previousSponsors,
    ...previousSponsors
  ];

  return (
   <section className="py-10 md:py-20 relative overflow-hidden" id='Sponsors'>
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
  <motion.div
    style={{ y, opacity }}
    className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
  />

  <div className="relative">
    {/* Previous Sponsors */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16 md:mb-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4 md:mb-6 pixel-font">
          Previous Sponsors
        </h2>
        <p className="text-cyan-100 text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-16 px-4">
          We&apos;re grateful for the support of these amazing organizations in our previous edition
        </p>
      </div>

      {/* Rotating Sponsors Container - Updated with responsive width */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-8 lg:gap-12"
          animate={{
            x: [`0%`, `-${100 / 2}%`] // Move by half the total width for seamless loop
          }}
          transition={{
            duration: 10, // Adjusted duration for smoother animation
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <motion.div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[280px] lg:w-[350px] xl:w-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mx-auto">
                <SponsorCard {...{ name: sponsor.name, logo: sponsor.logo, url: sponsor.url }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>

    {/* Current Sponsors */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-12 md:mb-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl pt-6 md:pt-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4 md:mb-6 pixel-font">
          Vashisht Hackathon 3.O Sponsors
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative max-w-2xl mx-auto px-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl" />
          <div className="relative bg-gray-900/50 border border-purple-500/20 p-4 md:p-8 rounded-xl backdrop-blur-sm">
            <Clock className="w-8 h-8 md:w-12 md:h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-cyan-100/80 text-sm md:text-base">
              Exciting partnerships are in the works! Stay tuned for announcements.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Sponsor CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Want to Sponsor?
          </h3>
          <p className="text-cyan-100/80 mb-8 text-sm md:text-base">
            Partner with Vashisht Hackathon 3.O to connect with exceptional talent and support the future of technology.
          </p>
          <SponsorUs formLink="mailto:devclub@iiitdm.ac.in" />
        </div>
      </div>
    </motion.div>
  </div>
</section>
  );
};