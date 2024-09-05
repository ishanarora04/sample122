# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install any needed dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 (or any port your app runs on)
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
