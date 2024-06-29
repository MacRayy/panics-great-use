/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raihuplaoibzjz7k.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
