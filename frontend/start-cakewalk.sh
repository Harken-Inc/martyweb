#!/bin/bash
# Kill any existing process on port 3004
fuser -k 3004/tcp 2>/dev/null || true
sleep 1
# Start the standalone server
cd /home/ec2-user/martyweb/frontend
exec node .next-cakewalk/standalone/server.js
