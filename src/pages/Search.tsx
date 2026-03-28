import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon, Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { ListingCard } from "../components/ListingCard";

// Mock data
const MOCK_LISTINGS = Array.from({ length: 8 }).map((_, i) => ({
  id: `l${i}`,
  title: ["Modern UI Kit", "Abstract Icons", "Portfolio Template", "Geometric Font"][i % 4],
  description: "A high-quality digital asset for your next project.",
  price: [49, 19, 29, 35][i % 4],
  category: ["UI Kits", "Icons", "Templates", "Fonts"][i % 4],
  images: [`https://picsum.photos/seed/asset${i}/600/600`],
  rating: 4.5 + Math.random() * 0.5,
  reviewCount: Math.floor(Math.random() * 200),
  salesCount: Math.floor(Math.random() * 1000),
  sellerId: `s${i}`,
  sellerName: "Creator",
  tags: ["design", "asset"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));

export function Search() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col gap-8">
        {/* Search Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Assets` : "All Assets"}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search for templates, icons, UI kits..." 
                className="pl-10 h-12 bg-gray-50 border-none focus-visible:ring-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="h-12 gap-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            <div className="relative group">
              <Button variant="outline" className="h-12 gap-2 w-full sm:w-auto">
                Sort by: Featured
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filters Panel (Mobile/Desktop) */}
        {isFilterOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 rounded-2xl bg-gray-50 border border-gray-100"
          >
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">Price Range</h3>
              <div className="flex items-center gap-2">
                <Input placeholder="Min" className="bg-white" />
                <span className="text-gray-300">-</span>
                <Input placeholder="Max" className="bg-white" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2].map((stars) => (
                  <label key={stars} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                    <span className="text-sm text-gray-600">{stars}+ Stars</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">Software</h3>
              <div className="space-y-2">
                {["Figma", "React", "Sketch", "Adobe XD"].map((software) => (
                  <label key={software} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                    <span className="text-sm text-gray-600">{software}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Apply Filters</Button>
            </div>
          </motion.div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
