FROM node:19-bullseye-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    git \
    ca-certificates \
 && apt-get -y clean \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY .config /root/.config/

RUN yarn global add gatsby-cli