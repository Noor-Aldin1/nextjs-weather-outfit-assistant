'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ErrorDisplay({ error }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-2xl w-full text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Error
      </h1>
      <p className="text-xl text-white/80 mb-8">{error}</p>
      <Link
        href="/"
        className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-xl transition-all"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
}

