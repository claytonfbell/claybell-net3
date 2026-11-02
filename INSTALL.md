# Install / nginx notes

The app itself runs on the **lab server** (`lab` → `10.7.7.3`) as a Docker
container published on `:3000`. nginx lives on the **webserver**
(`root@10.7.7.10`) and is the only public entry point.

## nginx virtual hosts on 10.7.7.10

`/etc/nginx/sites-enabled/claybell.net` (TLS terminates here, certbot-managed):

```nginx
server {
    server_name claybell.net www.claybell.net;

    location / {
        proxy_redirect off;
        proxy_set_header Host $server_name;
        proxy_set_header X-Forwarded-Host $http_host;
        proxy_pass "http://10.7.7.3:3000$request_uri";
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

Changing the target host is a one-line `proxy_pass` edit. Always:

```sh
cp /etc/nginx/sites-enabled/claybell.net /root/claybell.net.bak-$(date +%F)
# ... edit ...
nginx -t && systemctl reload nginx
```

Rollback = copy the backup back and reload.

## Certificates

```sh
certbot --nginx -d www.claybell.net -d claybell.net
```

## Historical note

Before the lab server existed, the container ran on `10.7.7.11:3000` and nginx
proxied there directly. That container is still running as a rollback target.
