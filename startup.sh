#!/bin/bash
cd "$(dirname "$0")"
pm2 start npm --name "claybellnet" --interpreter bash -- start
