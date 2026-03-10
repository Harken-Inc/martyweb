import type { NextConfig } from "next";
import path from "path";

const projectName = process.env.PROJECT_NAME || "hightail";

const nextConfig: NextConfig = {
  env: {
    PROJECT_NAME: projectName,
    CAKEWALK_API_KEY: process.env.CAKEWALK_API_KEY,
    CAKEWALK_PROJECT_ID: process.env.CAKEWALK_PROJECT_ID,
    CAKEWALK_API_URL: process.env.CAKEWALK_API_URL,
    MARTINWELLS_API_KEY: process.env.MARTINWELLS_API_KEY,
    MARTINWELLS_PROJECT_ID: process.env.MARTINWELLS_PROJECT_ID,
    MARTINWELLS_API_URL: process.env.MARTINWELLS_API_URL,
  },
  // Use separate build directories per project to allow running multiple simultaneously
  distDir: `.next-${projectName}`,
  // Enable standalone output for Docker deployments
  output: "standalone",
  // Transpile framer-motion to fix Turbopack module resolution
  transpilePackages: ["framer-motion"],
  // Turbopack alias for @projects path
  turbopack: {
    resolveAlias: {
      '@projects': path.resolve(__dirname, './projects'),
    },
  },
};

export default nextConfig;
