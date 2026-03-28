import { Star } from "lucide-react";
import { Review } from "../types";
import { formatDistanceToNow } from "date-fns";

interface ReviewItemProps {
  review: Review;
}

export function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className="flex gap-4 pb-8 border-b border-gray-50 last:border-0">
      <div className="h-10 w-10 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden">
        {review.userPhoto ? (
          <img src={review.userPhoto} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400 font-bold">
            {review.userName.charAt(0)}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm">{review.userName}</span>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < review.rating ? "fill-current" : "text-gray-200"}`} 
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {review.comment}
        </p>
        <span className="text-[10px] text-gray-400 uppercase tracking-wider">
          {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
        </span>
      </div>
    </div>
  );
}
