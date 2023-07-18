# Use the official Node.js image based on Alpine Linux as the build environment
FROM node:alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the React.js application
RUN npm run build

# Use a lightweight HTTP server to serve the built React.js application
FROM nginx:alpine

# Copy the built React.js application from the build stage to the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port on which nginx will listen
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
