/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
