import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME || "hightail",
  },
  // Enable standalone output for Docker deployments
  output: "standalone",
  // Turbopack alias for @projects path
  turbopack: {
    resolveAlias: {
      '@projects': path.resolve(__dirname, './projects'),
    },
  },
};

export default nextConfig;
