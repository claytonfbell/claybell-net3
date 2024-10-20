#!/bin/bash
docker container stop claybellnet
docker container rm claybellnet
git pull
docker build ./ -t claybellnet
docker run -d -p 192.168.0.154:3000:3000/tcp --name=claybellnet --restart=unless-stopped claybellnet 
