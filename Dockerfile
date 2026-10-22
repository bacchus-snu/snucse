FROM node:24-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git

COPY .yarnrc.yml package.json yarn.lock ./
COPY .yarn/releases .yarn/releases
RUN node .yarn/releases/yarn-4.18.1.cjs install --immutable

COPY . .
RUN node .yarn/releases/yarn-4.18.1.cjs run build

FROM caddy:2

WORKDIR /app

COPY --from=builder /app/dist/ /app/
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 8080
