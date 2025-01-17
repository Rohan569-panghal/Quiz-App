# Use Node.js image for building backend and frontend
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy backend and frontend code
COPY backend ./backend
COPY Quiz-App ./frontend

# Install backend dependencies
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install

# Install frontend dependencies
WORKDIR /app/frontend
COPY Quiz-App/package*.json ./
RUN npm install

# Build the frontend
RUN npm run build

# Move frontend build to backend's public folder
WORKDIR /app/backend
RUN mkdir -p public
RUN cp -r /app/frontend/build/* public/

# Expose backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
