/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.tiktokcdn.*",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
