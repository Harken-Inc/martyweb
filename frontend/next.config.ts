import type { NextConfig } from "next";
import path from "path";

const projectName = process.env.PROJECT_NAME || "hightail";

const nextConfig: NextConfig = {
  env: {
    PROJECT_NAME: projectName,
  },
  // Use separate build directories per project to allow running multiple simultaneously
  distDir: `.next-${projectName}`,
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
