# first stage builds vue
FROM node:21 AS build-stage
WORKDIR /build
COPY . .
RUN npm install
RUN npm run build

# second stage copies the static dist files and Node server files
FROM nginx:stable-alpine AS production-stage
WORKDIR /app
COPY --from=build-stage /build/dist/ /usr/share/nginx/html
# open port 80 and run Node server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]