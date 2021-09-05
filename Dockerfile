FROM node:lts-alpine AS builder

WORKDIR /app

ENV NODE_ENV0=production

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build:prod

# Production environment
FROM nginx:stable-alpine
COPY ./etc/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /var/www
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
