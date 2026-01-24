module.exports = {
  apps: [
    {
      name: 'learningmaking',
      script: './start-learningmaking.sh',
      cwd: '/home/ec2-user/martyweb/frontend',
      interpreter: '/bin/bash',
      env: {
        PORT: 3005,
        HOSTNAME: '0.0.0.0',
        NODE_ENV: 'production'
      },
      kill_timeout: 10000,
      min_uptime: 10000,
      max_restarts: 10,
      restart_delay: 5000
    },
    {
      name: 'cakewalk',
      script: './start-cakewalk.sh',
      cwd: '/home/ec2-user/martyweb/frontend',
      interpreter: '/bin/bash',
      env: {
        PORT: 3004,
        HOSTNAME: '0.0.0.0',
        NODE_ENV: 'production'
      },
      kill_timeout: 10000,
      min_uptime: 10000,
      max_restarts: 10,
      restart_delay: 5000
    }
  ]
};
