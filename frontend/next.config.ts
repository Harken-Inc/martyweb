import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME || "hightail",
  },
  // Enable standalone output for Docker deployments
  output: "standalone",
};

export default nextConfig;
