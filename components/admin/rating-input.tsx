'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

interface RatingInputProps {
  value: number
  onChange: (value: number) => void
  readonly?: boolean
}

export default function RatingInput({ value, onChange, readonly = false }: RatingInputProps) {
  const [hoverValue, setHoverValue] = useState(0)

  const handleClick = (rating: number) => {
    if (!readonly) {
      onChange(rating)
    }
  }

  const displayValue = hoverValue || value

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => handleClick(rating)}
            onMouseEnter={() => !readonly && setHoverValue(rating)}
            onMouseLeave={() => !readonly && setHoverValue(0)}
            disabled={readonly}
            className={`transition-all ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}`}
          >
            <Star
              className={`w-6 h-6 ${
                rating <= displayValue
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-slate-300'
              }`}
            />
          </button>
        ))}
      </div>
      <span className="text-sm text-slate-600 ml-2">
        {value > 0 ? `${value} dari 5 bintang` : 'Pilih rating'}
      </span>
    </div>
  )
}
