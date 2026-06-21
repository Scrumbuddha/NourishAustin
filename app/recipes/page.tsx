"use client";

import { recipes } from "@/lib/data/recipes";
import { useMemo, useState } from "react";

type FilterType = "cost" | "time" | "tag" | "none";

export default function RecipesPage() {
  const [filterType, setFilterType] = useState<FilterType>("none");
  const [filterValue, setFilterValue] = useState<string>("");

  const allTags = useMemo(
    () =>
      [
        ...new Set(
          recipes.flatMap((r) => r.dietTags)
        ),
      ].sort(),
    []
  );

  const filtered = useMemo(() => {
    let result = recipes;

    if (filterType === "cost" && filterValue) {
      const maxCost = parseFloat(filterValue);
      result = result.filter((r) => r.costPerServing <= maxCost);
    } else if (filterType === "time" && filterValue) {
      const maxTime = parseInt(filterValue);
      result = result.filter((r) => r.timeMinutes <= maxTime);
    } else if (filterType === "tag" && filterValue) {
      result = result.filter((r) => r.dietTags.includes(filterValue));
    }

    return result;
  }, [filterType, filterValue]);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold">Budget Recipes</h1>
        <p className="mt-1 text-sm text-stone-600">
          Real meals under $2 per serving. Most use 6 ingredients or fewer.
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Filter by
          </label>
          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value as FilterType);
              setFilterValue("");
            }}
            className="mt-1 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
          >
            <option value="none">None</option>
            <option value="cost">Cost per serving</option>
            <option value="time">Time to cook</option>
            <option value="tag">Diet tag</option>
          </select>
        </div>

        {filterType === "cost" && (
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Max cost
            </label>
            <input
              type="number"
              step="0.25"
              min="0"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              placeholder="2.00"
              className="mt-1 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
            />
          </div>
        )}

        {filterType === "time" && (
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Max time (minutes)
            </label>
            <input
              type="number"
              min="0"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              placeholder="30"
              className="mt-1 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
            />
          </div>
        )}

        {filterType === "tag" && (
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Tag
            </label>
            <select
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="mt-1 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
            >
              <option value="">Select a tag</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <p className="text-sm text-stone-500">
        {filtered.length} recipe{filtered.length === 1 ? "" : "s"} found
      </p>

      <div className="space-y-4">
        {filtered.map((r) => (
          <div
            key={r.id}
            className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold">{r.title}</h2>
                <p className="text-sm text-stone-600">
                  ${r.costPerServing.toFixed(2)}/serving • {r.timeMinutes} min •{" "}
                  {r.servings} servings
                </p>
              </div>
            </div>

            {r.dietTags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {r.dietTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-3 space-y-2">
              <div>
                <p className="text-sm font-medium text-stone-700">Ingredients</p>
                <ul className="mt-1 list-inside list-disc text-sm text-stone-600">
                  {r.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-medium text-stone-700">Steps</p>
                <ol className="mt-1 list-inside list-decimal space-y-1 text-sm text-stone-600">
                  {r.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
