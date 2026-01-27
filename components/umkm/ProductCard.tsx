"use client"

import Image from "next/image"
import Link from "next/link"
import { Image as ImageIcon, MessageCircle } from "lucide-react"
import StarRating from "./StarRating"

interface ProductCardProps {
  slug: string
  image: string
  name: string
  description: string
  price: string
  rating: number
  whatsappNumber: string
}

export default function ProductCard({
  slug,
  image,
  name,
  description,
  price,
  rating,
  whatsappNumber
}: ProductCardProps) {
  const normalizedImage = image?.trim()
  const isValidImageSrc =
    !!normalizedImage &&
    (normalizedImage.startsWith("/") ||
      normalizedImage.startsWith("http://") ||
      normalizedImage.startsWith("https://") ||
      normalizedImage.startsWith("data:image/")) &&
    !normalizedImage.startsWith("blob:")

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(`Halo, saya tertarik dengan produk ${name}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="relative h-64 bg-slate-100">
        {isValidImageSrc ? (
          <Image src={normalizedImage} alt={name} fill className="object-cover" unoptimized />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <ImageIcon className="w-10 h-10" />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <StarRating rating={rating} size="sm" showValue={false} showCount={false} />
        
        <h3 className="font-bold text-slate-900 mt-2 mb-1 line-clamp-1">{name}</h3>
        <p className="text-sm text-slate-600 mb-3 line-clamp-2">{description}</p>
        
        <p className="text-xl font-bold text-blue-600 mb-4">{price}</p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/umkm/${slug}`}
            className="flex-1 px-4 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition text-center"
          >
            Detail
          </Link>
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WA
          </button>
        </div>
      </div>
    </div>
  )
}
