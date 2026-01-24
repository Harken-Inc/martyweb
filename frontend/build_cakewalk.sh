#!/bin/bash

set -e

cd "$(dirname "$0")/.."

echo "Pulling latest changes..."
git pull

echo "Installing dependencies..."
cd frontend
npm install

echo "Building cakewalk..."
npm run build:cakewalk

echo "Starting cakewalk..."
npm run start:cakewalk
