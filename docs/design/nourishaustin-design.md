# NourishAustin — Product Design

## Problem

Austin residents with limited budgets face two connected problems: they don't know where to find free or low-cost healthy food nearby, and the food they can afford at convenience stores and discount grocers is often high in sugar and sodium. Public benefit programs like SNAP/EBT and WIC exist to help, but awareness is low and navigating them is confusing.

## Goal

Give Austin residents a fast, no-login tool that answers three questions:

1. Where can I get food near me — especially free food and SNAP/EBT-accepted places?
2. What cheaper, healthier swaps exist for what I already buy?
3. What can I cook on a tight budget?

## Users

Primary: Austin residents earning below 200% of the federal poverty line — working families, seniors on fixed incomes, and anyone using SNAP/EBT or WIC benefits.

Secondary: Community health workers, nonprofit staff, and volunteers at pantries and social service agencies who refer clients to food resources.

## Features

### Find Food (`/finder`)

A filterable list of food resources in Austin. Types covered:

- Grocery stores (including those accepting SNAP/EBT)
- Farmers markets
- Food pantries and free food distributions
- Mobile markets and pop-up pantries
- Community gardens

Filters: benefit type (SNAP/EBT, WIC, double-value vouchers, Free), place type.

Each listing shows: name, type, address, hours, benefit badges, map link, and notes. No account or location permission required — listings are manually curated and updated.

### Smart Swaps (`/swaps`)

Side-by-side comparison of a common grocery item and a cheaper, healthier alternative. For each swap:

- Per-serving cost delta
- Added sugar, sodium, fiber, and protein comparison
- Plain-language rationale

Categories: Breakfast, Drinks, Protein, Sides & Snacks, Bread & Grains, Dairy, Condiments.

### Budget Recipes (`/recipes`)

Meals under $2.00 per serving, filterable by cost and diet tags. Tags: vegetarian, high-fiber, high-protein, quick (under 30 min), no-stove.

Each recipe includes: cost per serving, total time, servings, ingredient list, and step-by-step instructions.

## Data

All data lives in `lib/data/` as TypeScript seed files:

| File | Contents |
|---|---|
| `places.ts` | Food resource listings for Austin |
| `foods.ts` | ~30 food items with per-serving cost and nutrition figures |
| `recipes.ts` | 5+ budget recipes |

Prices in `foods.ts` are band midpoints from local price surveys. Nutrition figures are based on USDA FoodData Central. Place listings should be re-verified before public launch.

## Technical Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Hosting | Vercel (planned) |

## Design Principles

**No friction.** No account, no sign-up, no location permission required. A person in a food emergency should get an answer in under 30 seconds.

**Plain language.** All UI copy avoids jargon.

**Privacy by default.** No analytics, no tracking, no conversation storage.

**Accurate over complete.** A listing with unconfirmed hours gets a "call ahead" note rather than a best guess.

## Phase 2 Roadmap

- Expand place listings to cover all of Austin and surrounding Travis County
- Add map view to the Finder (Leaflet.js or Mapbox GL)
- Add "open now" filter using live hours data
- SMS interface for users without smartphones (Twilio)
- Add AI Food Coach for personalized advice (similar to NourishStPete)
