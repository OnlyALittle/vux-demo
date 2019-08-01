 docker run -d --name 0726fontend -p 8090:80 \
 -v /docker/0726fontend/logs:/var/log/nginx \
 -v /docker/0726fontend/html:/usr/share/nginx/html \
 -v /docker/0726fontend/default.conf:/etc/nginx/conf.d/default.conf \
 -v /docker/0726fontend/nginx.conf:/etc/nginx/nginx.conf \
 nginx