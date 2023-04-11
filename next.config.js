/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wayfair.github.io",
        port: "",
        pathname: "/dociql/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
