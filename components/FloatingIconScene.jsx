'use client';

import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function Sun({ condition }) {
  if (condition === 'clear' || condition === 'sunny') {
    return (
      <Sphere args={[0.5, 32, 32]}>
        <MeshDistortMaterial
          color="#FFD700"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          emissive="#FFD700"
          emissiveIntensity={0.5}
        />
      </Sphere>
    );
  }
  return null;
}

function Cloud({ condition }) {
  if (condition === 'clouds' || condition === 'cloudy') {
    return (
      <>
        <Sphere args={[0.3, 32, 32]} position={[-0.2, 0, 0]}>
          <MeshDistortMaterial
            color="#FFFFFF"
            attach="material"
            distort={0.1}
            speed={1}
            roughness={0.3}
            opacity={0.8}
            transparent
          />
        </Sphere>
        <Sphere args={[0.35, 32, 32]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#FFFFFF"
            attach="material"
            distort={0.1}
            speed={1}
            roughness={0.3}
            opacity={0.8}
            transparent
          />
        </Sphere>
        <Sphere args={[0.3, 32, 32]} position={[0.2, 0, 0]}>
          <MeshDistortMaterial
            color="#FFFFFF"
            attach="material"
            distort={0.1}
            speed={1}
            roughness={0.3}
            opacity={0.8}
            transparent
          />
        </Sphere>
      </>
    );
  }
  return null;
}

export default function FloatingIconScene({ condition }) {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Sun condition={condition} />
      <Cloud condition={condition} />
    </Canvas>
  );
}

