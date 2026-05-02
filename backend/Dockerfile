# Use the official Bun image
FROM oven/bun:latest

# Working directory set karein
WORKDIR /app

# Pehle packages copy karein taaki build fast ho (caching)
COPY package.json bun.lockb* ./

# Dependencies install karein
RUN bun install

# Baaki saara code copy karein
COPY . .

# Backend port expose karein
EXPOSE 3000

# App start karne ki command
CMD ["bun", "run", "src/index.ts"]