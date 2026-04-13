# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy backend package.json and install dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy backend source code
COPY backend/ ./backend/

# Copy frontend package.json and install dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy frontend source code and build
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Expose the port (Render will set PORT env var)
EXPOSE 8000

# Set working directory to backend and start the server
WORKDIR /app/backend
CMD ["npm", "start"]