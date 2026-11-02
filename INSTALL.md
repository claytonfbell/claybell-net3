# Install / nginx notes

Docker, the site container, and nginx all live on the **webserver**
(`root@10.7.7.10`). nginx is the only public entry point: it terminates TLS and
proxies to the container on `127.0.0.1:3000`.

`claybell-net3` is one of two containers on this host; `discover-tv-movies` runs
alongside it on `10.7.7.10:3001` (LAN only, no vhost yet).

## nginx virtual hosts on 10.7.7.10

`/etc/nginx/sites-enabled/claybell.net` (TLS terminates here, certbot-managed):

```nginx
server {
    server_name claybell.net www.claybell.net;

    location / {
        proxy_redirect off;
        proxy_set_header Host $server_name;
        proxy_set_header X-Forwarded-Host $http_host;
        proxy_pass "http://127.0.0.1:3000$request_uri";
    }

    listen [::]:443 ssl ipv6only=on;   # managed by Certbot
    listen 443 ssl;                    # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/claybell.net/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/claybell.net/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
```

`/etc/nginx/sites-enabled/intranet.claybell.net` also proxies unknown
`*.claybell.net` hostnames (the `if ($lan = 0)` catch-all) to the same
container.

Changing the target is a one-line `proxy_pass` edit. Always:

```sh
cp /etc/nginx/sites-enabled/claybell.net /root/claybell.net.bak-$(date +%F-%H%M)
# ... edit ...
nginx -t && systemctl reload nginx
```

Rollback = copy the backup back and reload.

## Docker on the webserver

```sh
apt-get install -y docker.io docker-compose-v2 docker-buildx
```

`/etc/docker/daemon.json` caps container logs at 3 × 10 MB, so neither container
can fill the 23 GB root volume with JSON logs.

The container's port is published on `127.0.0.1` only — nginx reaches it over
loopback and nothing else on the network can.

## Certificates

```sh
certbot --nginx -d www.claybell.net -d claybell.net
```

## Historical note

Before this, the site ran on `10.7.7.11:3000` (nginx proxied directly to it),
then briefly on the lab server (`10.7.7.3:3000`). The `10.7.7.11` container is
still running as a rollback target; the lab host is no longer used.
