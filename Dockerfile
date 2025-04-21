# Stage 1: Install dependencies and build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the app in production
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only what's needed to run
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production

# Expose Next.js default port
EXPOSE 3000

CMD ["npm", "start"]
