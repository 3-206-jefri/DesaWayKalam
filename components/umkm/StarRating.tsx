import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  reviewCount?: number
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  showCount?: boolean
}

export default function StarRating({
  rating,
  reviewCount,
  size = "md",
  showValue = true,
  showCount = true,
}: StarRatingProps) {
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
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => {
          const starNumber = index + 1
          const filled = rating >= starNumber
          return (
            <Star
              key={starNumber}
              className={
                filled
                  ? `${sizeClasses[size]} fill-blue-500 text-blue-500`
                  : `${sizeClasses[size]} text-slate-300`
              }
            />
          )
        })}
      </div>

      {showValue && (
        <span className={`font-semibold text-slate-900 ${textSizeClasses[size]}`}>
          {rating.toFixed(1)}
        </span>
      )}

      {showCount && typeof reviewCount === 'number' && (
        <span className={`text-slate-500 ${textSizeClasses[size]}`}>
          ({reviewCount})
        </span>
      )}
    </div>
  )
}
