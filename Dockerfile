FROM node:24-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git

COPY yarn.lock package.json .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install --immutable

COPY . .
RUN yarn run build

FROM caddy:2

WORKDIR /app

COPY --from=builder /app/dist/ /app/
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 8080
