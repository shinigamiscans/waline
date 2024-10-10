# Use an official Node.js runtime as the base image
FROM node:lts AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies using pnpm in production mode
RUN pnpm install --prod

# Copy the rest of the application code
COPY . .

# Expose the port your application will listen on (change if necessary)
EXPOSE 8360

# Set the environment to production
ENV NODE_ENV=production

# Set the timezone if needed
ENV TZ=Asia/Shanghai

# Start the application with the vanilla.js script
CMD ["node", "vanilla.js"]
