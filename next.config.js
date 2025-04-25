/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  images: {
    domains: ["*", "arshfitnessbucket.s3.ap-south-1.amazonaws.com"], // Add your S3 domain here
  },
};

module.exports = nextConfig;
