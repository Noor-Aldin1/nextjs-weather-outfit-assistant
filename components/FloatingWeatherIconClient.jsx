'use client';

import dynamic from 'next/dynamic';

const FloatingWeatherIconComponent = dynamic(
  () => import('./FloatingWeatherIcon'),
  { ssr: false }
);

export default function FloatingWeatherIconClient({ condition }) {
  return <FloatingWeatherIconComponent condition={condition} />;
}

