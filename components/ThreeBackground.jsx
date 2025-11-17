'use client';

import dynamic from 'next/dynamic';

// Dynamically import Three.js components only on client side
const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false });

export default function ThreeBackground({ weatherCondition = 'default' }) {
  return (
    <div className="fixed inset-0 -z-10">
      <ThreeScene weatherCondition={weatherCondition} />
    </div>
  );
}

