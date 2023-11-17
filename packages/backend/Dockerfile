# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json
COPY package.json ./

# Install any needed packages specified in package.json
RUN yarn install

# Bundle your app's source code inside the Docker image
COPY . .

# Make port 4000 available to the outside world from the container
EXPOSE 4000

# Define the command to run your app
CMD ["yarn", "run", "start:prod"]
