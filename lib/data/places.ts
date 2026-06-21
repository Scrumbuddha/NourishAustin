import type { Place } from "../types";

/**
 * Seed data for the Austin, TX pilot. Listings are illustrative —
 * verify hours and benefit acceptance with each location before launch.
 */
export const places: Place[] = [
  {
    id: "austin-farmers-market-downtown",
    name: "Austin Farmers Market — Downtown",
    type: "farmers-market",
    address: "1500 Barton Springs Rd, Austin, TX 78746",
    lat: 30.2644,
    lng: -97.7679,
    hours: "Wed 3pm–7pm; Sat 9am–1pm (year-round)",
    acceptsSnap: true,
    acceptsWic: true,
    acceptsFreshAccessBucks: false,
    isFree: false,
    notes: "Local farmers and producers. SNAP and WIC accepted. Downtown location near Barton Springs Pool.",
  },
  {
    id: "texas-food-bank-pantry",
    name: "Texas Food Bank — Distribution Center",
    type: "food-pantry",
    address: "3003 E 52nd St, Austin, TX 78723",
    lat: 30.2821,
    lng: -97.7314,
    hours: "Mon–Fri 9am–5pm; call for distribution schedule",
    acceptsSnap: false,
    acceptsWic: false,
    acceptsFreshAccessBucks: false,
    isFree: true,
    notes: "Central Texas Food Bank serves 22 counties. Walk-in distribution available; no appointment needed. Serves all eligible residents.",
  },
  {
    id: "east-austin-food-pantry",
    name: "Austin Public Health — East Austin Food Pantry",
    type: "food-pantry",
    address: "2800 E Riverside Dr, Austin, TX 78702",
    lat: 30.2450,
    lng: -97.7308,
    hours: "Tue & Thu 2pm–5pm; call to verify",
    acceptsSnap: false,
    acceptsWic: false,
    acceptsFreshAccessBucks: false,
    isFree: true,
    notes: "City of Austin food pantry in East Austin. Walk-ins welcome. Focus on serving vulnerable populations.",
  },
];
