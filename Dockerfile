# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Backend setup
COPY backend/ ./backend/
WORKDIR /app/backend
RUN npm install

# Frontend setup
WORKDIR /app
COPY frontend/ ./frontend/
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Expose the port
EXPOSE 8000

# Start the backend server
CMD ["npm", "start"]