# syntax=docker/dockerfile:1

# 1) Install dependencies using pnpm (via corepack) with better layer caching
FROM node:24-slim AS builder
WORKDIR /app
# Enable corepack to get pnpm matching packageManager in package.json
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
# Install ALL deps (including dev) for building
RUN pnpm install --frozen-lockfile

# 2) Build the Nuxt app
COPY . ./
RUN pnpm build

# 3) Create a lightweight runtime image
FROM node:24-slim AS runner
WORKDIR /app

# Copy only the Nitro output produced by `pnpm build`
COPY --from=builder /app/.output ./

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000
CMD ["node", "server/index.mjs"]
