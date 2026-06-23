// data/collections.ts
export const collections = [
  {
    id: "obsidian-archive",
    title: "The Obsidian Archive",
    releaseYear: "2026",
    description: "Light swallowed whole. A study in matte finishes, heavy titanium, and volcanic glass. Designed for the shadows.",
    slug: "obsidian", 
    imageAspectRatio: "aspect-video",
    materials: "Titanium / Obsidian / Black Rhodium",
    startingPrice: "From $3,800", // Updated to reflect the lowest product price
    gallery: ["/assets/archive-1-the-obsidian-archive.jpg", "placeholder", "placeholder"] // Used for editorial collection imagery
  },
  {
    id: "bridal-paradox",
    title: "The Bridal Paradox",
    releaseYear: "2025",
    description: "Rejecting the delicate. Flawless stones forced into violently hammered platinum and raw gold settings. Love as an act of endurance.",
    slug: "bridal", 
    imageAspectRatio: "aspect-[4/3]",
    materials: "950 Platinum / 18k Gold / VVS1 Diamonds",
    startingPrice: "Bespoke Only",
    gallery: ["/assets/archive-2-the-bridal-paradox.jpg", "placeholder", "placeholder"]
  }
];

export function getCollectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug) || null;
}