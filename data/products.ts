// data/products.ts

export interface Product {
  id: string;
  title: string;
  sku: string;
  material: string;
  price: string;
  slug: string;
  collectionId: string;
  featured: boolean;
  gallery: string[];
}

export const products = [
    {
      id: "prod-01",
      title: "Obsidian Halo",
      sku: "COL-01-OH",
      material: "18K Gold / Obsidian",
      price: "$4,200",
      slug: "obsidian-halo",
      collectionId: "obsidian-archive",
      featured: true,
      gallery: ["/assets/product-1-obsidian-halo.jpg", "placeholder", "placeholder"]
    },
    {
      id: "prod-02",
      title: "The Monolith",
      sku: "COL-01-TM",
      material: "Matte Black Titanium",
      price: "$3,800",
      slug: "the-monolith",
      collectionId: "obsidian-archive",
      featured: true,
      gallery: ["/assets/product-2-the-monolith.jpg", "placeholder", "placeholder"]
    },
    {
      id: "prod-03",
      title: "Fractured Light",
      sku: "COL-01-FL",
      material: "Platinum / Diamond",
      price: "Bespoke Only",
      slug: "fractured-light",
      collectionId: "bridal-paradox",
      featured: true,
      gallery: ["/assets/product-3-fractured-light.jpg", "placeholder", "placeholder"]
    },
    {
      id: "prod-04",
      title: "Eclipse Band",
      sku: "COL-01-EB",
      material: "18K White Gold",
      price: "$2,100",
      slug: "eclipse-band",
      collectionId: "bridal-paradox",
      featured: true,
      gallery: ["/assets/product-4-eclipse-band.jpg", "placeholder", "placeholder"]
    }
  ];
  
  // Helper functions to simulate database queries
  export function getFeaturedProducts() {
    return products.filter((p) => p.featured);
  }
  
  export function getProductsByCollection(collectionId: string) {
    return products.filter((p) => p.collectionId === collectionId);
  }
  
  export function getProductBySlug(slug: string) {
    return products.find((p) => p.slug === slug) || null;
  }