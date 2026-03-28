import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Star, 
  ShoppingCart, 
  ShieldCheck, 
  Download, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  MessageCircle,
  Share2,
  ExternalLink
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { formatCurrency } from "../lib/utils";
import { motion } from "motion/react";

// Mock data
const MOCK_LISTING = {
  id: "1",
  title: "Modern SaaS UI Kit for React & Tailwind",
  description: `
    A comprehensive UI kit for modern SaaS applications with 100+ components. 
    Built with React 19, Tailwind CSS 4, and Framer Motion.
    
    ### Features:
    - 100+ UI Components
    - 20+ Page Templates
    - Fully Responsive
    - Dark Mode Support
    - Clean & Documented Code
    - Lifetime Updates
    
    Perfect for developers and designers looking to ship their next SaaS project in record time.
  `,
  price: 49,
  category: "UI Kits",
  images: [
    "https://picsum.photos/seed/saas1/1200/800",
    "https://picsum.photos/seed/saas2/1200/800",
    "https://picsum.photos/seed/saas3/1200/800"
  ],
  rating: 4.9,
  reviewCount: 124,
  salesCount: 1200,
  sellerId: "s1",
  sellerName: "DesignStudio",
  sellerPhoto: "https://picsum.photos/seed/seller/100/100",
  tags: ["react", "tailwind", "saas", "ui-kit"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export function ListingDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/search" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to search
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Images & Description */}
        <div className="lg:col-span-8 space-y-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/2] overflow-hidden rounded-3xl bg-gray-100 border border-gray-100">
              <img
                src={MOCK_LISTING.images[activeImage]}
                alt={MOCK_LISTING.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {MOCK_LISTING.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                    activeImage === i ? "border-black" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About this asset</h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {MOCK_LISTING.description}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="border-t border-gray-100 pt-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-lg font-bold text-gray-900">{MOCK_LISTING.rating}</span>
                </div>
                <span className="text-gray-400">({MOCK_LISTING.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 pb-8 border-b border-gray-50 last:border-0">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm">User {i}</span>
                      <div className="flex text-yellow-400">
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Great UI kit! Saved me weeks of work. The documentation is clear and the components are easy to customize.
                    </p>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">2 days ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Checkout & Seller Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-24 space-y-6">
            {/* Purchase Card */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-gray-900">{formatCurrency(MOCK_LISTING.price)}</span>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">In Stock</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">Instant Delivery</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full h-14 text-lg gap-2" onClick={handleAddToCart} disabled={isAddingToCart}>
                  {isAddingToCart ? "Adding..." : "Add to Cart"}
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="w-full h-14 text-lg">
                  Buy Now
                </Button>
              </div>

              <div className="mt-6 space-y-4 border-t border-gray-50 pt-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <span>Secure transaction & payment</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Download className="h-5 w-5 text-blue-600" />
                  <span>Instant digital download</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Lifetime updates included</span>
                </div>
              </div>

              {/* Urgency Trigger */}
              <div className="mt-6 rounded-xl bg-red-50 p-4 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-medium text-red-700">
                  Limited time offer: 20% off with code NEXUS20
                </span>
              </div>
            </div>

            {/* Seller Card */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6">
              <div className="flex items-center gap-4 mb-6">
                <img src={MOCK_LISTING.sellerPhoto} className="h-12 w-12 rounded-full border border-gray-100" />
                <div>
                  <h3 className="font-bold text-gray-900">{MOCK_LISTING.sellerName}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <CheckCircle className="h-3 w-3 text-blue-500" />
                    <span>Verified Seller</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 rounded-xl bg-gray-50">
                  <div className="text-sm font-bold text-gray-900">1.2k+</div>
                  <div className="text-[10px] text-gray-400 uppercase">Sales</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-gray-50">
                  <div className="text-sm font-bold text-gray-900">4.9</div>
                  <div className="text-[10px] text-gray-400 uppercase">Rating</div>
                </div>
              </div>
              <Button variant="ghost" className="w-full gap-2">
                <MessageCircle className="h-4 w-4" />
                Contact Seller
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-6 text-gray-400">
              <button className="hover:text-black transition-colors flex items-center gap-1 text-xs">
                <Share2 className="h-4 w-4" /> Share
              </button>
              <button className="hover:text-black transition-colors flex items-center gap-1 text-xs">
                <ExternalLink className="h-4 w-4" /> View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
