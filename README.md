# KOA: Getting Started

## Setup environment

```bash
# Copy and fill for your environment (Only for dev, in production use env vars)
cp .env.dist .env

# Install dependencies
yarn install
```

## Running

```bash
# Running app
yarn run start

# Running app (with hot reloading)
yarn run dev

# Running app (with hot reloading and node inspect server)
yarn run dev:debug
```

## Release

```bash
# Check release is correct
yarn run release --dry-run

# Run release (bump package version, update changelog, create git tag, commit all)
yarn run release
```
