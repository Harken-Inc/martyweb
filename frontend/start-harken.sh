#!/bin/bash
fuser -k 3007/tcp 2>/dev/null || true
sleep 1
cd /home/ubuntu/martyweb/frontend
cp -r public .next-harken/standalone/public 2>/dev/null || true
cp -r .next-harken/static .next-harken/standalone/.next-harken/static 2>/dev/null || true
exec node .next-harken/standalone/server.js
