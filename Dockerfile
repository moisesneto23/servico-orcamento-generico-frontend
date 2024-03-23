# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vue.js app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 80

# Command to run the application
CMD [ "npm", "start" ]
