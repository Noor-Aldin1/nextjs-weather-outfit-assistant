'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SearchBar() {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setIsLoading(true);
    const cityName = city.trim();
    
    // Navigate to weather page
    router.push(`/weather/${encodeURIComponent(cityName)}`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative w-full max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-8 py-6 text-xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 shadow-2xl transition-all"
          whileFocus={{ scale: 1.02 }}
          disabled={isLoading}
        />
        <motion.button
          type="submit"
          disabled={isLoading}
          className="absolute right-4 top-1/2 -translate-y-1/2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </motion.button>
      </div>
    </motion.form>
  );
}

