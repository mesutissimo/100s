FROM nginx
ARG version
ENV VERSION=$version
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN echo "$VERSION" > /usr/share/nginx/html/version.txt
ADD build /usr/share/nginx/html
