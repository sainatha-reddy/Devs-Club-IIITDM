import React from 'react';
import { motion } from 'framer-motion';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  transparent?: boolean;
}

export const GlowingButton = ({ children, onClick, transparent = false }: GlowingButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur group-hover:blur-xl transition-all duration-300" />
      
        <div className={`relative px-8 py-3 ${transparent ? 'bg-gray-900 border border-cyan-500' : 'bg-gradient-to-r from-cyan-500 to-purple-500'} rounded-lg text-white font-bold`}>
        {children}
      </div>
    </motion.button>
  );
};