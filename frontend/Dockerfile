# Base image
FROM node:18-alpine

WORKDIR /app

# Packages copy aur install
COPY package.json package-lock.json* ./
RUN npm install

# Saara code copy karein
COPY . .

# Build step (Production ke liye zaroori hai, dev mein skip ho sakta hai)
# RUN npm run build

EXPOSE 3000

# Next.js development server start karein
CMD ["npm", "run", "dev"]