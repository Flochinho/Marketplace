import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/Button";
import { Listing } from "../types";
import { formatCurrency } from "../lib/utils";

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all hover:shadow-xl hover:shadow-gray-200/40">
      <Link to={`/listing/${listing.id}`} className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={listing.images[0] || `https://picsum.photos/seed/${listing.id}/600/600`}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </Link>
      
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {listing.category}
          </span>
          <div className="flex items-center gap-1 text-xs font-medium text-gray-600">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{listing.rating}</span>
            <span className="text-gray-300">({listing.reviewCount})</span>
          </div>
        </div>
        
        <Link to={`/listing/${listing.id}`} className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-black transition-colors">
            {listing.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {listing.description}
          </p>
        </Link>
        
        <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
          <div className="text-sm font-bold text-gray-900">
            {formatCurrency(listing.price)}
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-gray-100 hover:bg-black hover:text-white transition-all">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
