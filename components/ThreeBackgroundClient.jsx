'use client';

import dynamic from 'next/dynamic';

const ThreeBackgroundComponent = dynamic(
  () => import('./ThreeBackground'),
  { ssr: false }
);

export default function ThreeBackgroundClient({ weatherCondition }) {
  return <ThreeBackgroundComponent weatherCondition={weatherCondition} />;
}

