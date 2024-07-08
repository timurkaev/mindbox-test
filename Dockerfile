# Use an official Node.js runtime as a parent image
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller base image for serving the built files
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app/dist ./dist

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "dist", "-l", "3000"]
