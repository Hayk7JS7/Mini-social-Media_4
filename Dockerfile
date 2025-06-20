# ---- Build frontend ----
FROM node:18 AS frontend
WORKDIR /app/client
COPY client/ .
RUN npm install && npm run build

# ---- Build backend ----
FROM node:18 AS backend
WORKDIR /app
COPY server/ ./server
COPY --from=frontend /app/client/build ./server/public

WORKDIR /app/server
RUN npm install

# ---- Run backend ----
EXPOSE 3500
CMD ["node", "index.js"]
