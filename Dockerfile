FROM node:lts-alpine AS builder

WORKDIR /app

ENV NODE_ENV0=production

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY src src
COPY public public
COPY scripts scripts
COPY webpack.config.js .
COPY babel.config.json .

RUN yarn run build:prod

# Production environment
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
