#!/bin/bash
fuser -k 3009/tcp 2>/dev/null || true
sleep 1
cd /home/ubuntu/martyweb/frontend
cp -r public .next-martinjamesworld/standalone/public 2>/dev/null || true
cp -r .next-martinjamesworld/static .next-martinjamesworld/standalone/.next-martinjamesworld/static 2>/dev/null || true
exec node .next-martinjamesworld/standalone/server.js
