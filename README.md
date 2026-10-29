# Cashflow

A responsive React + TypeScript spending dashboard built with Vite. **Demo data only**; no banking connections or authentication.

## Features

- Spending totals, transaction count and top category
- Category breakdown with proportional bars
- Search by merchant or category
- Month and category filters that update every summary and chart
- Mobile-friendly layout
- Pure analytics functions covered by Vitest

## Development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

## Tests and build

```bash
npm test
npm run build
```

GitHub Actions runs both commands on pushes and pull requests.

## Architecture

`src/data.ts` defines the transaction model and sample data; `src/analytics.ts` holds pure filtering and aggregation logic; `src/App.tsx` owns filter state and presentation. Amounts are demo floating-point values; real financial integrations should use integer minor units or a decimal library.

## Roadmap

- v0.1: Demo dashboard, search, filters, tests
- v0.2: Persisted settings, accessible charts and additional test coverage
- v0.3: Backend integration and server-side pagination
