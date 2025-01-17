# Step 1: Use an official Node.js image as the base
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Use a lightweight web server to serve the build files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port on which the app will run
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
