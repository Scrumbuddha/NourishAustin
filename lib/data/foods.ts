import type { FoodItem, Swap } from "../types";

/**
 * Seed catalog of common grocery items with estimated price bands
 * (midpoints, USD per serving) from local price surveys, and simplified
 * per-serving nutrition figures based on USDA FoodData Central.
 */
export const foods: FoodItem[] = [
  // breakfast
  { id: "frosted-cereal", name: "Frosted sugary cereal", category: "Breakfast", pricePerServing: 0.53, addedSugarG: 12, sodiumMg: 190, fiberG: 1, proteinG: 1 },
  { id: "oats-banana", name: "Old-fashioned oats + banana", category: "Breakfast", pricePerServing: 0.42, addedSugarG: 0, sodiumMg: 0, fiberG: 7, proteinG: 6 },
  { id: "breakfast-pastry", name: "Toaster pastries", category: "Breakfast", pricePerServing: 0.65, addedSugarG: 16, sodiumMg: 210, fiberG: 1, proteinG: 2 },
  { id: "eggs-toast", name: "Eggs + whole-wheat toast", category: "Breakfast", pricePerServing: 0.55, addedSugarG: 1, sodiumMg: 220, fiberG: 3, proteinG: 12 },

  // drinks
  { id: "soda-2l", name: "Soda (2-liter)", category: "Drinks", pricePerServing: 0.4, addedSugarG: 26, sodiumMg: 30, fiberG: 0, proteinG: 0 },
  { id: "seltzer-water", name: "Store-brand seltzer or infused water", category: "Drinks", pricePerServing: 0.25, addedSugarG: 0, sodiumMg: 0, fiberG: 0, proteinG: 0 },
  { id: "juice-drink", name: "Fruit-flavored juice drink", category: "Drinks", pricePerServing: 0.5, addedSugarG: 22, sodiumMg: 25, fiberG: 0, proteinG: 0 },

  // protein
  { id: "ground-beef-80", name: "Ground beef (80/20)", category: "Protein", pricePerServing: 1.4, addedSugarG: 0, sodiumMg: 75, fiberG: 0, proteinG: 19 },
  { id: "beef-lentil-blend", name: "Half beef, half lentils blend", category: "Protein", pricePerServing: 0.85, addedSugarG: 0, sodiumMg: 45, fiberG: 6, proteinG: 18 },
  { id: "chicken-nuggets", name: "Frozen chicken nuggets", category: "Protein", pricePerServing: 1.1, addedSugarG: 0, sodiumMg: 480, fiberG: 1, proteinG: 12 },
  { id: "baked-chicken-thighs", name: "Baked chicken thighs (family pack)", category: "Protein", pricePerServing: 0.75, addedSugarG: 0, sodiumMg: 90, fiberG: 0, proteinG: 21 },
  { id: "canned-tuna", name: "Canned tuna (in water)", category: "Protein", pricePerServing: 0.7, addedSugarG: 0, sodiumMg: 210, fiberG: 0, proteinG: 17 },

  // sides & snacks
  { id: "instant-noodle-cups", name: "Instant noodle cups", category: "Sides & Snacks", pricePerServing: 0.6, addedSugarG: 1, sodiumMg: 1160, fiberG: 1, proteinG: 5 },
  { id: "rice-beans", name: "Rice + canned black beans", category: "Sides & Snacks", pricePerServing: 0.45, addedSugarG: 0, sodiumMg: 230, fiberG: 7, proteinG: 8 },
  { id: "popcorn-kernels", name: "Air-popped popcorn (kernels)", category: "Sides & Snacks", pricePerServing: 0.15, addedSugarG: 0, sodiumMg: 2, fiberG: 4, proteinG: 3 },

  // bread & grains
  { id: "white-bread", name: "White sandwich bread", category: "Bread & Grains", pricePerServing: 0.25, addedSugarG: 3, sodiumMg: 150, fiberG: 1, proteinG: 3 },
  { id: "whole-wheat-bread", name: "Whole-wheat bread", category: "Bread & Grains", pricePerServing: 0.28, addedSugarG: 1, sodiumMg: 135, fiberG: 3, proteinG: 4 },
  { id: "dry-rice-bulk", name: "Dry white rice (cooked)", category: "Bread & Grains", pricePerServing: 0.12, addedSugarG: 0, sodiumMg: 1, fiberG: 0, proteinG: 3 },

  // dairy
  { id: "block-cheese", name: "Block cheese (sliced at home)", category: "Dairy", pricePerServing: 0.45, addedSugarG: 0, sodiumMg: 175, fiberG: 0, proteinG: 7 },
  { id: "plain-milk", name: "Whole milk (gallon, per glass)", category: "Dairy", pricePerServing: 0.3, addedSugarG: 0, sodiumMg: 105, fiberG: 0, proteinG: 8 },

  // condiments
  { id: "canned-tomatoes-seasoned", name: "Canned crushed tomatoes + seasoning", category: "Condiments", pricePerServing: 0.35, addedSugarG: 2, sodiumMg: 200, fiberG: 2, proteinG: 2 },
];

export const swaps: Swap[] = [
  {
    fromId: "frosted-cereal",
    toId: "oats-banana",
    rationale: "Same warm-bowl breakfast, 12g less added sugar, and oats keep you full longer.",
  },
  {
    fromId: "breakfast-pastry",
    toId: "eggs-toast",
    rationale: "Six times the protein for less money — and no sugar crash before lunch.",
  },
  {
    fromId: "soda-2l",
    toId: "seltzer-water",
    rationale: "Keeps the fizz, drops 26g of sugar per glass, and saves about $13/month per person.",
  },
  {
    fromId: "juice-drink",
    toId: "oats-banana",
    rationale: "Swap sugar water for whole food — same cost, way more filling.",
  },
  {
    fromId: "ground-beef-80",
    toId: "beef-lentil-blend",
    rationale: "Stretch one pound of beef into two meals — tacos and pasta sauce taste the same, cost 40% less.",
  },
  {
    fromId: "chicken-nuggets",
    toId: "baked-chicken-thighs",
    rationale: "Family-pack thighs cost less per serving with double the protein and a fifth of the sodium.",
  },
  {
    fromId: "instant-noodle-cups",
    toId: "rice-beans",
    rationale: "Costs less, has 7g fiber instead of 1g, and one-fifth the sodium of a noodle cup.",
  },
  {
    fromId: "popcorn-kernels",
    toId: "instant-noodle-cups",
    rationale: "Salty and crunchy for a quarter of the price — just pop it yourself.",
  },
  {
    fromId: "white-bread",
    toId: "whole-wheat-bread",
    rationale: "Just a few cents more per slice — you get twice the fiber and an extra gram of protein.",
  },
  {
    fromId: "dry-rice-bulk",
    toId: "white-bread",
    rationale: "Cheapest carb source by far. Buy in bulk to stretch your food budget.",
  },
  {
    fromId: "block-cheese",
    toId: "canned-tuna",
    rationale: "Trade one protein for another — tuna has more protein, less fat, and costs less.",
  },
  {
    fromId: "plain-milk",
    toId: "block-cheese",
    rationale: "Both are calcium sources; cheese keeps longer and goes further in cooking.",
  },
];
