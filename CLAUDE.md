# CLAUDE.md

## Project Snapshot

`bodach-sanity` is a Sanity Studio repository for the Bodach product catalog.

## Stack

- Sanity Studio 4
- React 19
- TypeScript
- ESLint
- GitHub Actions

## Important Paths

- `sanity.config.ts` Studio configuration and plugin setup
- `sanity.cli.ts` CLI configuration with deterministic build policy
- `schemaTypes/documents/` category and product schemas
- `schemaTypes/objects/` reusable catalog objects
- `check-upload.js` local upload validation helper
- `.github/workflows/qa.yml` unattended lint and build validation

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run build:ci
```

## Working Rules

- Sanity auto-updates are intentionally disabled in `sanity.cli.ts` so builds stay deterministic.
- Validate schema changes with both lint/build and a quick Studio smoke check.
- Keep import-related changes aligned with the NDJSON fixtures and `check-upload.js`.
