import { foods, swaps } from "@/lib/data/foods";
import { places } from "@/lib/data/places";
import { recipes } from "@/lib/data/recipes";

export function searchPlaces(input: Record<string, unknown>): string {
  const benefit = input.benefit as string | undefined;
  const placeType = input.place_type as string | undefined;

  let results = places;

  if (benefit === "snap") {
    results = results.filter((p) => p.acceptsSnap);
  } else if (benefit === "wic") {
    results = results.filter((p) => p.acceptsWic);
  } else if (benefit === "fab") {
    results = results.filter((p) => p.acceptsFreshAccessBucks);
  } else if (benefit === "free") {
    results = results.filter((p) => p.isFree);
  }

  if (placeType && placeType !== "all") {
    results = results.filter((p) => p.type === placeType);
  }

  if (results.length === 0) {
    return "No places found with those filters. Try a different benefit type or location type.";
  }

  return results
    .map(
      (p) =>
        `${p.name} (${p.type})\n${p.address}\nHours: ${p.hours}\nBenefits: ${[
          p.acceptsSnap && "SNAP/EBT",
          p.acceptsWic && "WIC",
          p.acceptsFreshAccessBucks && "double-value vouchers",
          p.isFree && "free food",
        ]
          .filter(Boolean)
          .join(", ")}\n${p.notes ? "Notes: " + p.notes : ""}`
    )
    .join("\n\n");
}

export function getSwaps(input: Record<string, unknown>): string {
  const query = (input.query as string | undefined)?.toLowerCase();

  let results = swaps;

  if (query) {
    results = swaps.filter((s) => {
      const fromFood = foods.find((f) => f.id === s.fromId);
      return fromFood && fromFood.name.toLowerCase().includes(query);
    });
  }

  if (results.length === 0) {
    return "No swaps found for that food. Try a different food name or browse all swaps on the Smart Swaps page.";
  }

  return results
    .map((s) => {
      const from = foods.find((f) => f.id === s.fromId);
      const to = foods.find((f) => f.id === s.toId);
      if (!from || !to) return "";

      const costDelta = (
        ((to.pricePerServing - from.pricePerServing) / from.pricePerServing) *
        100
      ).toFixed(0);
      const sugarDelta = from.addedSugarG - to.addedSugarG;

      return (
        `From: ${from.name} ($${from.pricePerServing.toFixed(2)}/serving)\n` +
        `To: ${to.name} ($${to.pricePerServing.toFixed(2)}/serving, ${costDelta}% change)\n` +
        `Why: ${s.rationale}` +
        (sugarDelta > 0
          ? `\nBonus: saves ${sugarDelta}g of added sugar per serving.`
          : "")
      );
    })
    .filter(Boolean)
    .join("\n\n");
}

export function getRecipes(input: Record<string, unknown>): string {
  const maxCost = input.max_cost_per_serving as number | undefined;
  const dietTag = input.diet_tag as string | undefined;

  let results = recipes;

  if (maxCost !== undefined) {
    results = results.filter((r) => r.costPerServing <= maxCost);
  }

  if (dietTag) {
    results = results.filter((r) => r.dietTags.includes(dietTag));
  }

  if (results.length === 0) {
    return "No recipes found with those filters. Try a higher cost limit, different diet tag, or browse all recipes on the Budget Recipes page.";
  }

  return results
    .map(
      (r) =>
        `${r.title}\n` +
        `$${r.costPerServing.toFixed(2)} per serving | ${r.timeMinutes} minutes | ${r.servings} servings\n` +
        (r.dietTags.length > 0 ? `Tags: ${r.dietTags.join(", ")}\n` : "") +
        `Ingredients: ${r.ingredients.join(", ")}\n` +
        `Steps: ${r.steps.join(" → ")}`
    )
    .join("\n\n");
}
