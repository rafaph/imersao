#!/bin/sh

if [ ! -d "/home/node/app/node_modules" ]; then
    yarn install
fi

exec "$@"
