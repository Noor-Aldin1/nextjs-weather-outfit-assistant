'use client';

import { motion } from 'framer-motion';
import WeatherIcon from './WeatherIcon';

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl mx-auto"
    >
      <motion.div
        className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-white mb-2"
            >
              {weather.city}, {weather.country}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-white/80 capitalize mb-6"
            >
              {weather.description}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <span className="text-7xl md:text-8xl font-bold text-white">
                {weather.temperature}°
              </span>
              <div className="flex flex-col">
                <span className="text-white/70 text-lg">
                  Feels like {weather.feelsLike}°
                </span>
              </div>
            </motion.div>
          </div>
          <motion.div variants={itemVariants}>
            <WeatherIcon icon={weather.icon} condition={weather.condition} size={150} />
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-white/60 text-sm mb-1">Humidity</p>
            <p className="text-2xl font-semibold text-white">{weather.humidity}%</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-white/60 text-sm mb-1">Wind Speed</p>
            <p className="text-2xl font-semibold text-white">{weather.windSpeed} m/s</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 col-span-2 md:col-span-1">
            <p className="text-white/60 text-sm mb-1">Condition</p>
            <p className="text-2xl font-semibold text-white capitalize">{weather.main}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

