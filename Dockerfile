FROM node:24-alpine AS base
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps
COPY package.json package-lock.json ./
COPY svelte.config.js ./
RUN npm ci

# Setup production node_modules
FROM base AS production-deps
WORKDIR /app
COPY --from=deps /app/.svelte-kit /app/.svelte-kit
COPY --from=deps /app/node_modules /app/node_modules
COPY package.json package-lock.json* ./
RUN npm prune --omit=dev

# Build the app
FROM base AS build
WORKDIR /app
COPY --from=deps /app/.svelte-kit /app/.svelte-kit
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run
FROM base AS runner
ENV NODE_ENV=production
ENV BODY_SIZE_LIMIT=Infinity

WORKDIR /app

# Copy built assets
COPY --from=build /app/build ./build

# Copy production dependencies
COPY --from=production-deps /app/node_modules ./node_modules
COPY package.json ./

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
