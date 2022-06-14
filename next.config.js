/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
