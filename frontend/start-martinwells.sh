#!/bin/bash
fuser -k 3006/tcp 2>/dev/null || true
sleep 1
cd /home/ubuntu/martyweb/frontend
cp -r public .next-martinwells/standalone/public 2>/dev/null || true
cp -r .next-martinwells/static .next-martinwells/standalone/.next-martinwells/static 2>/dev/null || true
exec node .next-martinwells/standalone/server.js
