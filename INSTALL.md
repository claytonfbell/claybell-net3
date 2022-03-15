# Install Notes

```bash
vim /etc/nginx/sites-available/claybell-net

    server {
            root /var/www/html;
            index index.html index.htm index.nginx-debian.html;
            server_name www.claybell.net claybell.net;
            location / {
                    proxy_pass http://localhost:3001;
                    proxy_http_version 1.1;
                    proxy_set_header Upgrade $http_upgrade;
                    proxy_set_header Connection 'upgrade';
                    proxy_set_header Host $host;
                    proxy_cache_bypass $http_upgrade;
            }
            error_page 500 501 502 503 /503.html;
            location /503.html {}

        listen [::]:80 default_site;
        listen 80 ssl default_site;
    }


ln -s /etc/nginx/sites-available/claybell-net /etc/nginx/sites-enabled/
service nginx restart
sudo certbot --nginx -d www.claybell.net -d claybell.net


```
