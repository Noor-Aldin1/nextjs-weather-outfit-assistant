'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import SearchBar from '@/components/SearchBar';

const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ThreeBackground weatherCondition="default" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            Weather App
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get real-time weather updates and personalized clothing recommendations
          </motion.p>
        </motion.div>

        <SearchBar />

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-white/60 text-sm md:text-base">
            Search for any city to get started
          </p>
        </motion.div>
      </div>
    </div>
  );
}
