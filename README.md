# NourishAustin (MVP)

Web app that helps people in Austin find healthy food nearby and discover low-cost healthy alternatives to what they already buy.

Full product design: [`docs/design/nourishaustin-design.md`](docs/design/nourishaustin-design.md)

## Features (Phase 1)

- **Find Food** (`/finder`) — markets, pantries, groceries, and mobile markets, filterable by SNAP/EBT, WIC, double-value vouchers, and free food.
- **Smart Swaps** (`/swaps`) — cheaper, healthier alternatives to common grocery items, with per-serving cost and nutrition deltas spelled out.
- **Budget Recipes** (`/recipes`) — meals filtered by cost per serving and diet tags, including no-stove options.

## Running

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Data

All data currently lives in `lib/data/` as TypeScript seed files:

- `places.ts` — Austin food resource listings (illustrative; verify before launch)
- `foods.ts` — food items + swap pairs (prices are surveyed band midpoints)
- `recipes.ts` — budget recipes

Phase 2 will move this into a database with scheduled ingestion from food resource APIs and open data sources.
