# Etapa 1: Compilar la app Angular
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Servir la app con NGINX
FROM nginx:alpine

# Copiamos el build de Angular al directorio de NGINX
COPY --from=builder /app/dist/angular-employees/browser /usr/share/nginx/html

# EXPOSE es informativo
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
