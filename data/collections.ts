// data/collections.ts
export const collections = [
  {
    id: "obsidian-archive",
    title: "The Obsidian Archive",
    releaseYear: "2026",
    description: "Light swallowed whole. A study in matte finishes, heavy titanium, and volcanic glass. Designed for the shadows.",
    slug: "obsidian", // Updated to just the slug parameter
    imageAspectRatio: "aspect-video",
    materials: "Titanium / Obsidian / Black Rhodium",
    price: "From $4,200",
    gallery: ["placeholder", "placeholder", "placeholder"]
  },
  {
    id: "bridal-paradox",
    title: "The Bridal Paradox",
    releaseYear: "2025",
    description: "Rejecting the delicate. Flawless stones forced into violently hammered platinum and raw gold settings. Love as an act of endurance.",
    slug: "bridal", // Updated to just the slug parameter
    imageAspectRatio: "aspect-[4/3]",
    materials: "950 Platinum / 18k Gold / VVS1 Diamonds",
    price: "Bespoke Only",
    gallery: ["placeholder", "placeholder", "placeholder"]
  }
];

// Helper function to simulate a database fetch
export function getCollectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug) || null;
}