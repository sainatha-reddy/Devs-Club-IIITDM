import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SponsorCardProps {
  name: string;
  logo: string;
  url: string;
}

export const SponsorCard = ({ name, logo, url }: SponsorCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group w-full mx-auto"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          className="
            relative 
            bg-slate-700/10 
            p-3 sm:p-4 md:p-6 lg:p-8
            rounded-xl 
            border border-purple-500/20 group-hover:border-cyan-400/40
            backdrop-blur-md 
            transition-all duration-300
            overflow-hidden
            min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]
            flex flex-col items-center justify-center
          "
        >
          {/* Strong visible gradient background contained within card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 via-fuchsia-500/40 to-cyan-400/40 rounded-xl opacity-70 group-hover:opacity-90 transition-all duration-300" />
                   
          {/* Image container - responsive sizing with larger screens getting more space */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 mx-auto mb-2 sm:mb-4 md:mb-6 flex items-center justify-center rounded-lg bg-white/90 shadow-lg flex-shrink-0">
            <div className="absolute inset-0 rounded-lg bg-white z-0" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={name}
                width={192}
                height={192}
                className="object-contain rounded-lg max-w-full max-h-full"
              />
            </motion.div>
          </div>
                   
          {/* Text - responsive font sizing for larger screens */}
          <h3 className="sm:block text-sm md:text-lg lg:text-xl font-semibold text-white text-center relative z-10 leading-tight">
            {name}
          </h3>
        </div>
      </a>
    </motion.div>
  );
};