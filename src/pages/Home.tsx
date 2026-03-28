import { Hero } from "../components/Hero";
import { ListingCard } from "../components/ListingCard";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Globe } from "lucide-react";
import { motion } from "motion/react";

// Mock data for initial UI
const FEATURED_LISTINGS = [
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
  },
  {
    id: "3",
    title: "Portfolio Template",
    description: "A clean and professional portfolio template for developers and designers.",
    price: 29,
    category: "Templates",
    images: ["https://picsum.photos/seed/portfolio/600/600"],
    rating: 5.0,
    reviewCount: 45,
    salesCount: 320,
    sellerId: "s3",
    sellerName: "TemplateHub",
    tags: ["nextjs", "framer-motion"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Geometric Font Family",
    description: "A bold geometric font family with 8 weights and italic versions.",
    price: 35,
    category: "Fonts",
    images: ["https://picsum.photos/seed/font/600/600"],
    rating: 4.7,
    reviewCount: 67,
    salesCount: 540,
    sellerId: "s4",
    sellerName: "TypeFoundry",
    tags: ["typography", "font"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      
      {/* Categories Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Browse by Category</h2>
          <Link to="/search" className="text-sm font-semibold text-gray-600 hover:text-black flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["Templates", "UI Kits", "Icons", "Fonts"].map((category) => (
            <Link 
              key={category}
              to={`/search?category=${category.toLowerCase().replace(" ", "-")}`}
              className="group relative flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-gray-50 transition-all hover:bg-black hover:text-white"
            >
              <span className="text-lg font-bold tracking-tight">{category}</span>
              <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-black group-hover:bg-white transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Assets</h2>
            <p className="mt-1 text-sm text-gray-500">Hand-picked by our editors for quality and performance.</p>
          </div>
          <Link to="/search">
            <Button variant="outline" size="sm">Explore All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Features / Trust Section */}
      <section className="bg-black py-24 text-white overflow-hidden relative">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why choose Nexus?</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We've built the most trusted marketplace for digital creators. 
              Quality is our obsession, and your success is our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Curated Quality</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every asset is manually reviewed by our team to ensure it meets our high standards.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Instant Access</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Download your assets immediately after purchase. No waiting, no friction.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Secure Payments</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We use industry-standard encryption to keep your transactions and data safe.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Global Community</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Join thousands of creators from around the world building the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-50 px-8 py-16 sm:px-16 sm:py-24">
          <div className="relative z-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to level up your workflow?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Join 50,000+ creators who use Nexus to build world-class products. 
                Start exploring our curated collection today.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/search">
                  <Button size="lg" className="w-full sm:w-auto">Browse Assets</Button>
                </Link>
                <Link to="/auth?mode=signup">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Create Account</Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                    <div className="h-8 w-8 rounded-lg bg-gray-100 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
