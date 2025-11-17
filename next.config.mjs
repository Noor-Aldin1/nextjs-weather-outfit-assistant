/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@react-three/fiber', '@react-three/drei', 'three'],
  turbopack: {},
};

export default nextConfig;
