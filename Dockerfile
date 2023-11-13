# Stage 1: Build the Angular application
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the Angular application
FROM nginx:alpine
COPY --from=build /app/dist/widedgh/angular-app:widedgharbi-5twin5-G6 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
