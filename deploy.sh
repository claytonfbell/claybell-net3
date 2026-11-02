#!/usr/bin/env bash
# Deploy claybell-net3 to the lab server.
#
# The app is stateless (no database, no volumes), so a deploy is just:
# build a linux/amd64 image here, ship it over SSH, and replace the container.
# The image is built locally because the workstation is arm64 and the lab host
# is x86_64 — Docker Desktop emulates the amd64 build.
#
# Usage:
#   ./deploy.sh          # deploy to the "lab" SSH alias (10.7.7.3)
#   ./deploy.sh myvm     # deploy to a different SSH alias
set -euo pipefail

REMOTE=${1:-lab}
DEST=/opt/claybell-net3
IMAGE=claybell-net3:latest
PLATFORM=linux/amd64
SMOKE_PORT=3999
SMOKE_NAME=claybell-net3-smoke

echo "==> Building $IMAGE for $PLATFORM"
docker build --platform "$PLATFORM" -t "$IMAGE" .

echo "==> Smoke-testing the image locally on 127.0.0.1:$SMOKE_PORT"
docker rm -f "$SMOKE_NAME" >/dev/null 2>&1 || true
docker run -d --platform "$PLATFORM" --name "$SMOKE_NAME" \
  -p "127.0.0.1:$SMOKE_PORT:3000" "$IMAGE" >/dev/null
# Always clean up the smoke container, even if a check below fails.
trap 'docker rm -f "$SMOKE_NAME" >/dev/null 2>&1 || true' EXIT

for _ in $(seq 1 40); do
  curl -fsS -o /dev/null "http://127.0.0.1:$SMOKE_PORT/" 2>/dev/null && break
  sleep 1
done

for path in / /keyboards /portfolio /resume; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:$SMOKE_PORT$path" || true)
  echo "    $path -> $code"
  if [[ "$code" != "200" ]]; then
    echo "!! Smoke test failed on $path — not deploying. Container logs:" >&2
    docker logs --tail 40 "$SMOKE_NAME" >&2
    exit 1
  fi
done

docker rm -f "$SMOKE_NAME" >/dev/null
trap - EXIT

echo "==> Transferring image to $REMOTE"
docker save "$IMAGE" | gzip -1 | ssh "$REMOTE" 'gunzip | docker load'

echo "==> Installing compose file at $REMOTE:$DEST"
ssh "$REMOTE" "mkdir -p $DEST"
scp -q docker-compose.yml "$REMOTE:$DEST/docker-compose.yml"

echo "==> Restarting container"
ssh "$REMOTE" "cd $DEST && docker compose up -d --force-recreate --remove-orphans"

echo "==> Pruning superseded image layers on $REMOTE"
ssh "$REMOTE" 'docker image prune -f' >/dev/null

echo "==> Verifying container on $REMOTE"
ssh "$REMOTE" 'curl -fsS -m 10 -o /dev/null http://127.0.0.1:3000/ && echo "    responds on :3000"'

echo "==> Done. nginx on root@10.7.7.10 proxies claybell.net -> http://10.7.7.3:3000"
