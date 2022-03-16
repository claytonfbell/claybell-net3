#!/bin/bash
docker container stop claybellnet
docker container rm claybellnet
git pull
docker build ./ -t claybellnet
docker run -d -p 127.0.0.1:3001:3000/tcp --name=claybellnet --restart=unless-stopped claybellnet 
