"use client";

import { foods, swaps } from "@/lib/data/foods";
import { useMemo, useState } from "react";

export default function SwapsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => [...new Set(foods.map((f) => f.category))].sort(),
    []
  );

  const filteredSwaps = useMemo(() => {
    if (!selectedCategory) return swaps;
    return swaps.filter((swap) => {
      const fromFood = foods.find((f) => f.id === swap.fromId);
      return fromFood?.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold">Smart Swaps</h1>
        <p className="mt-1 text-sm text-stone-600">
          Pick something you already buy. See a cheaper, healthier alternative
          with the cost and nutrition deltas spelled out.
        </p>
      </div>

      <div className="space-y-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            selectedCategory === null
              ? "border-green-700 bg-green-700 text-white"
              : "border-stone-300 bg-white text-stone-700 hover:border-green-600"
          }`}
        >
          All categories
        </button>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                selectedCategory === cat
                  ? "border-green-700 bg-green-700 text-white"
                  : "border-stone-300 bg-white text-stone-700 hover:border-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredSwaps.map((swap) => {
          const fromFood = foods.find((f) => f.id === swap.fromId);
          const toFood = foods.find((f) => f.id === swap.toId);
          if (!fromFood || !toFood) return null;

          const costDelta = (
            (toFood.pricePerServing - fromFood.pricePerServing) /
            fromFood.pricePerServing *
            100
          ).toFixed(0);
          const sugarDelta = fromFood.addedSugarG - toFood.addedSugarG;

          return (
            <div
              key={`${swap.fromId}-${swap.toId}`}
              className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-stone-600">FROM</p>
                  <p className="text-lg font-semibold text-stone-900">
                    {fromFood.name}
                  </p>
                  <p className="text-sm text-stone-600">
                    ${fromFood.pricePerServing.toFixed(2)}/serving
                  </p>
                </div>
                <div className="rounded-full border-2 border-green-600 px-4 py-2 text-center">
                  <p className="text-lg font-bold text-green-700">→</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-600">TO</p>
                  <p className="text-lg font-semibold text-stone-900">
                    {toFood.name}
                  </p>
                  <p className="text-sm text-stone-600">
                    ${toFood.pricePerServing.toFixed(2)}/serving{" "}
                    <span className="font-medium text-green-700">
                      ({costDelta}%)
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-stone-700">{swap.rationale}</p>
              {sugarDelta > 0 && (
                <p className="mt-2 text-xs text-green-700">
                  💚 Saves {sugarDelta}g added sugar per serving
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
