import { useParams, Link } from "react-router-dom";
import { 
  Star, 
  CheckCircle, 
  Globe, 
  Twitter, 
  Instagram, 
  ArrowLeft,
  Calendar
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { ListingCard } from "../components/ListingCard";
import { format } from "date-fns";

// Mock data
const MOCK_SELLER = {
  uid: "s1",
  displayName: "DesignStudio",
  email: "hello@designstudio.com",
  photoURL: "https://picsum.photos/seed/seller/200/200",
  role: "seller",
  bio: "We are a team of passionate designers creating high-quality UI kits and templates for modern web applications. Our mission is to help developers build beautiful products faster.",
  createdAt: "2023-01-15T10:00:00Z",
  stats: {
    sales: 1245,
    rating: 4.9,
    reviewCount: 450
  }
};

const MOCK_LISTINGS = Array.from({ length: 4 }).map((_, i) => ({
  id: `l${i}`,
  title: ["Modern UI Kit", "Abstract Icons", "Portfolio Template", "Geometric Font"][i % 4],
  description: "A high-quality digital asset for your next project.",
  price: [49, 19, 29, 35][i % 4],
  category: ["UI Kits", "Icons", "Templates", "Fonts"][i % 4],
  images: [`https://picsum.photos/seed/asset${i}/600/600`],
  rating: 4.9,
  reviewCount: 124,
  salesCount: 1200,
  sellerId: "s1",
  sellerName: "DesignStudio",
  tags: ["design", "asset"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));

export function SellerProfile() {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/search" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-12">
        <ArrowLeft className="h-4 w-4" />
        Back to marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Profile Info */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-8">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50 text-center">
              <div className="relative mx-auto h-32 w-32 mb-6">
                <img src={MOCK_SELLER.photoURL} className="h-full w-full rounded-full border-4 border-white shadow-lg" />
                <div className="absolute bottom-1 right-1 h-6 w-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900">{MOCK_SELLER.displayName}</h1>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {MOCK_SELLER.bio}
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-50 pt-8">
                <div>
                  <div className="text-lg font-bold text-gray-900">{MOCK_SELLER.stats.sales}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Sales</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{MOCK_SELLER.stats.rating}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Rating</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{MOCK_SELLER.stats.reviewCount}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Reviews</div>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black">
                  <Globe className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8">
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                <Calendar className="h-4 w-4" />
                <span>Joined {format(new Date(MOCK_SELLER.createdAt), "MMMM yyyy")}</span>
              </div>
              <Button className="w-full">Follow Creator</Button>
            </div>
          </div>
        </div>

        {/* Right Column: Listings */}
        <div className="lg:col-span-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Storefront</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {MOCK_LISTINGS.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline">Load More Assets</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
