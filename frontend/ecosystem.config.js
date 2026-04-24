// Production pm2 config. Secrets are loaded from ./.env (gitignored).
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx <= 0) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}

const baseRestart = { kill_timeout: 10000, min_uptime: 10000, max_restarts: 10, restart_delay: 5000 };

module.exports = {
  apps: [
    {
      name: "cakewalk",
      script: "./start-cakewalk.sh",
      cwd: "/home/ubuntu/martyweb/frontend",
      interpreter: "/bin/bash",
      env: {
        PORT: 3004,
        HOSTNAME: "0.0.0.0",
        NODE_ENV: "production",
        CAKEWALK_API_KEY: process.env.CAKEWALK_API_KEY,
        CAKEWALK_PROJECT_ID: process.env.CAKEWALK_PROJECT_ID,
        CAKEWALK_API_URL: process.env.CAKEWALK_API_URL,
      },
      ...baseRestart,
    },
    {
      name: "learningmaking",
      script: "./start-learningmaking.sh",
      cwd: "/home/ubuntu/martyweb/frontend",
      interpreter: "/bin/bash",
      env: { PORT: 3005, HOSTNAME: "0.0.0.0", NODE_ENV: "production" },
      ...baseRestart,
    },
    {
      name: "martinwells",
      script: "./start-martinwells.sh",
      cwd: "/home/ubuntu/martyweb/frontend",
      interpreter: "/bin/bash",
      env: { PORT: 3006, HOSTNAME: "0.0.0.0", NODE_ENV: "production" },
      ...baseRestart,
    },
    {
      name: "harken",
      script: "./start-harken.sh",
      cwd: "/home/ubuntu/martyweb/frontend",
      interpreter: "/bin/bash",
      env: { PORT: 3007, HOSTNAME: "0.0.0.0", NODE_ENV: "production" },
      ...baseRestart,
    },
    {
      name: "martinjamesworld",
      script: "./start-martinjamesworld.sh",
      cwd: "/home/ubuntu/martyweb/frontend",
      interpreter: "/bin/bash",
      env: { PORT: 3009, HOSTNAME: "0.0.0.0", NODE_ENV: "production" },
      ...baseRestart,
    },
    {
      name: "mailer",
      script: "/home/ubuntu/.local/bin/uv",
      args: "run uvicorn mailer.main:app --host 0.0.0.0 --port 3010",
      cwd: "/home/ubuntu/mailer",
      env: { NODE_ENV: "production" },
      ...baseRestart,
    },
  ],
};
