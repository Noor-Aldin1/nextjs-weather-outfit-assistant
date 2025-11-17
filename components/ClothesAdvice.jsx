'use client';

import { motion } from 'framer-motion';

export default function ClothesAdvice({ advice }) {
  if (!advice || advice.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      className="w-full max-w-4xl mx-auto mt-8"
    >
      <motion.div
        className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          👕 Clothes Recommendation
        </motion.h2>
        <ul className="space-y-4">
          {advice.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4 text-white/90 text-lg md:text-xl"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

