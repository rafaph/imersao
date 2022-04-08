FROM node:16-alpine

RUN apk add --update --no-cache shadow

ARG UID=1000
ARG GID=1000

RUN groupmod -g $GID node && \
    usermod -u $UID node

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

RUN ["chmod", "+x", "/usr/local/bin/entrypoint.sh"]

USER node

RUN mkdir /home/node/app

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
