# claybell-net3

Clayton Bell's portfolio site — Remix 1.2 + MUI, served by `remix-serve`.

## Local development

```sh
npm run dev     # http://localhost:3000
```

Production build without Docker:

```sh
npm run build && npm start
```

## Deployment

Production runs as a Docker container on the **webserver** (`root@10.7.7.10`),
which is also where nginx terminates TLS for `claybell.net` /
`www.claybell.net` and proxies to `http://127.0.0.1:3000`. The container
publishes its port on loopback only — nginx is the sole entry point.

```sh
./deploy.sh                    # build for linux/amd64, smoke-test, ship, restart
./deploy.sh root@other.host    # same, to a different host
```

`deploy.sh` is run from the workstation (not the server). It:

1. builds `claybell-net3:latest` for `linux/amd64` (the workstation is arm64, so
   Docker Desktop emulates the build),
2. runs the image locally on `127.0.0.1:3999` and requires `200` from `/`,
   `/keyboards`, `/portfolio`, and `/resume` — a broken build never ships,
3. `docker save` | `ssh root@10.7.7.10 'docker load'`,
4. installs `docker-compose.yml` into `/opt/claybell-net3` and restarts the
   container there, then verifies it answers on `:3000`.

The app is stateless — no database, no volumes, no `.env` — so every deploy
replaces the container cleanly.

**Rollback**: restore the newest `/root/claybell.net.bak-*` over
`/etc/nginx/sites-enabled/claybell.net` on `10.7.7.10` and
`systemctl reload nginx`. The previous container on `10.7.7.11:3000` is kept
around for exactly that.

See `INSTALL.md` for the nginx side.
