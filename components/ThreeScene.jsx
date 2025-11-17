'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import { useMemo } from 'react';

function AnimatedSphere({ position, color, speed = 1 }) {
  return (
    <Sphere args={[1, 100, 200]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={speed}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

export default function ThreeScene({ weatherCondition = 'default' }) {
  const colors = useMemo(() => {
    switch (weatherCondition) {
      case 'rain':
      case 'drizzle':
        return {
          primary: '#4A90E2',
          secondary: '#5B9BD5',
          tertiary: '#6BA3D6',
        };
      case 'snow':
        return {
          primary: '#E8F4F8',
          secondary: '#D0E8F0',
          tertiary: '#B8DCE8',
        };
      case 'clear':
      case 'sunny':
        return {
          primary: '#FFD700',
          secondary: '#FFA500',
          tertiary: '#FF8C00',
        };
      case 'clouds':
      case 'cloudy':
        return {
          primary: '#B0BEC5',
          secondary: '#90A4AE',
          tertiary: '#78909C',
        };
      default:
        return {
          primary: '#6366F1',
          secondary: '#8B5CF6',
          tertiary: '#A78BFA',
        };
    }
  }, [weatherCondition]);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <AnimatedSphere position={[-3, 0, 0]} color={colors.primary} speed={1.5} />
      <AnimatedSphere position={[3, 1, -2]} color={colors.secondary} speed={2} />
      <AnimatedSphere position={[0, -2, -1]} color={colors.tertiary} speed={1.8} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <Environment preset="sunset" />
    </Canvas>
  );
}

