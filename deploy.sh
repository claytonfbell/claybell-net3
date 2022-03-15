#!/bin/bash

pm2 stop claybellnet
git pull
npm install
npm run build
pm2 start claybellnet
