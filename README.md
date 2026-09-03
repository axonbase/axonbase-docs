# AxonBase Documentation

This repository contains the documentation portal for AxonBase, a multi-model database with document, graph, relational, key-value, vector, full-text, and geospatial capabilities.

The portal covers installation, configuration, the AxonQL query language, HTTP and WebSocket APIs, security, clustering, SDKs, and operational topics.

## Development

Requirements: Node.js 18 or later.

```bash
npm ci
npm run dev
```

The local server is available at `http://127.0.0.1:5173`.

## Production build

```bash
npm run build
```

Vite writes the static site to `dist`.

## Deployment

Netlify builds the site with `npm run build` and publishes `dist`. The `netlify.toml` configuration includes a single-page application redirect so direct links to documentation routes resolve correctly.

The production domain is `https://axondatabase.com`.
