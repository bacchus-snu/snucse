FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git

COPY yarn.lock package.json ./
RUN yarn

COPY . .
RUN yarn run build

FROM caddy:2

WORKDIR /app

COPY --from=builder /app/dist/ /app/

EXPOSE 8080
CMD ["/usr/bin/caddy", "file-server", "--access-log", "--listen", ":8080"]
