'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const FloatingIconScene = dynamic(() => import('./FloatingIconScene'), { ssr: false });

export default function FloatingWeatherIcon({ condition }) {
  return (
    <motion.div
      className="fixed top-20 right-10 w-32 h-32 z-20 hidden md:block"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <FloatingIconScene condition={condition} />
      </motion.div>
    </motion.div>
  );
}

