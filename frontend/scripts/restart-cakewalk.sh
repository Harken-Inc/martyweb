#!/bin/bash

# Stop any process using port 3004
echo "Stopping processes on port 3004..."
fuser -k 3004/tcp 2>/dev/null || true
sleep 1

# Rebuild the project
echo "Building cakewalk..."
npm run build:cakewalk

# Start the server
echo "Starting cakewalk server..."
npm run start:cakewalk
