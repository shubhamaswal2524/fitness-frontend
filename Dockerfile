# Stage 1: Install dependencies and build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy the full app source
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the app in production
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only what's needed to run
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# To this (use the exact filename you're using):
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/src ./src  

# Expose Next.js default port
EXPOSE 3000

CMD ["npm", "start"]