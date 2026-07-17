# Imagen base de Node.js
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los manifiestos e instalamos solo dependencias de produccion
COPY package*.json ./
RUN npm ci --omit=dev

# Copiamos el resto del codigo
COPY . .

# Render inyecta el puerto por la variable PORT (el server.js ya la usa)
EXPOSE 3000

# Arranque de la app
CMD ["npm", "start"]
