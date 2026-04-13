# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Backend setup
COPY backend/package*.json backend/
WORKDIR /app/backend
RUN npm install
COPY backend/ .

# Frontend setup
WORKDIR /app
COPY frontend/package*.json frontend/
WORKDIR /app/frontend
RUN npm install
COPY frontend/ .
RUN npm run build

# Expose the port
EXPOSE 8000

# Start the backend server
CMD ["npm", "start"]