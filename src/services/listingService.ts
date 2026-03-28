import { Listing, UserProfile, Review, Order } from "../types";

// Mock data
const MOCK_LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Modern SaaS UI Kit",
    description: "A comprehensive UI kit for modern SaaS applications with 100+ components.",
    price: 49,
    category: "UI Kits",
    images: ["https://picsum.photos/seed/saas/600/600"],
    rating: 4.9,
    reviewCount: 124,
    salesCount: 1200,
    sellerId: "s1",
    sellerName: "DesignStudio",
    tags: ["react", "tailwind", "saas"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Abstract Icon Set",
    description: "200+ minimal abstract icons for your next creative project.",
    price: 19,
    category: "Icons",
    images: ["https://picsum.photos/seed/icons/600/600"],
    rating: 4.8,
    reviewCount: 89,
    salesCount: 850,
    sellerId: "s2",
    sellerName: "Iconic",
    tags: ["icons", "svg", "minimal"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export const listingService = {
  async getListings(category?: string): Promise<Listing[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    if (category) {
      return MOCK_LISTINGS.filter(l => l.category.toLowerCase() === category.toLowerCase());
    }
    return MOCK_LISTINGS;
  },

  async getListingById(id: string): Promise<Listing | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_LISTINGS.find(l => l.id === id) || null;
  },

  async createListing(listing: Omit<Listing, "id" | "createdAt" | "updatedAt" | "rating" | "reviewCount" | "salesCount">): Promise<Listing> {
    const newListing: Listing = {
      ...listing,
      id: Math.random().toString(36).substr(2, 9),
      rating: 0,
      reviewCount: 0,
      salesCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    // In real app, this would save to Firestore
    return newListing;
  }
};
