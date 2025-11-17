'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WeatherIcon({ icon, condition, size = 120 }) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <motion.div
      className="relative"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <motion.div
        className="animate-bounce-slow"
        style={{ width: size, height: size }}
      >
        <Image
          src={iconUrl}
          alt={condition}
          width={size}
          height={size}
          className="drop-shadow-2xl"
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
}

