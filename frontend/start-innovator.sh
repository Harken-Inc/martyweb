#!/bin/bash
# Kill any existing process on port 3001
fuser -k 3001/tcp 2>/dev/null || true
sleep 1
# Start the standalone server
cd /home/ec2-user/martyweb/frontend
exec node .next-innovator/standalone/server.js
