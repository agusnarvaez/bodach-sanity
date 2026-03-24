# bodach-sanity

[![QA](https://github.com/agusnarvaez/bodach-sanity/actions/workflows/qa.yml/badge.svg)](https://github.com/agusnarvaez/bodach-sanity/actions/workflows/qa.yml)
[![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Sanity](https://img.shields.io/badge/Sanity-Studio-F03E2F?logo=sanity&logoColor=white)](https://www.sanity.io/)

Sanity Studio used to manage the Bodach product catalog.

Studio de Sanity usado para gestionar el catalogo de productos de Bodach.

## Overview

### ES

El Studio modela categorias, productos, atributos y variantes. El repositorio tambien incluye archivos NDJSON y una utilidad local para validar importaciones del catalogo.

### EN

The Studio models categories, products, attributes, and variants. The repository also includes NDJSON data files and a local helper script to validate catalog imports.

## Stack

- Sanity Studio 4
- React 19
- TypeScript
- ESLint
- GitHub Actions

## Getting Started

```bash
npm install
npm run dev
```

## Main Commands

```bash
npm run dev
npm run lint
npm run build
npm run build:ci
```

Sanity auto-updates are disabled in `sanity.cli.ts` so local and CI builds stay deterministic and non-interactive.

## Important Paths

- `schemaTypes/documents/` catalog document schemas
- `schemaTypes/objects/` reusable schema objects
- `catalogo.ndjson` and `catalogo_implantes.ndjson` sample/import data
- `check-upload.js` local validation helper for uploads

## Quality

- ESLint validates the Studio source.
- GitHub Actions runs lint and build validation.
- There are currently no automated tests, so schema and import changes should be verified in the Studio UI and with import samples.
