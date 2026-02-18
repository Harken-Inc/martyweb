#!/bin/bash
# Kill any existing process on port 3004
fuser -k 3004/tcp 2>/dev/null || true
sleep 1

cd /home/ec2-user/martyweb/frontend

# Copy public assets and static files into standalone output
# (Next.js standalone mode does not include these automatically)
cp -r public .next-cakewalk/standalone/public 2>/dev/null || true
cp -r .next-cakewalk/static .next-cakewalk/standalone/.next-cakewalk/static 2>/dev/null || true

# Start the standalone server
exec node .next-cakewalk/standalone/server.js
