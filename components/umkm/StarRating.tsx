import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  reviewCount: number
  size?: "sm" | "md" | "lg"
}

export default function StarRating({ rating, reviewCount, size = "md" }: StarRatingProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }

  return (
    <div className="flex items-center gap-1">
      <Star className={`${sizeClasses[size]} fill-blue-500 text-blue-500`} />
      <span className={`font-semibold text-slate-900 ${textSizeClasses[size]}`}>
        {rating.toFixed(1)}
      </span>
      <span className={`text-slate-500 ${textSizeClasses[size]}`}>
        ({reviewCount})
      </span>
    </div>
  )
}
