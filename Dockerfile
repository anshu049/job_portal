# Base image for Node.js applications
FROM node:16-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build React app
RUN npm run build

# Expose port 5173 for the React app
EXPOSE 5173

# Start the React app
CMD ["npm", "start"]
