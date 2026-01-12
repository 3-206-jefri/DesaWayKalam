"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Image as ImageIcon } from "lucide-react"
import { useMemo, useState } from "react"
import StarRating from "./StarRating"
import Navbar from "@/components/public/Navbar"
import ProductInfo from "./ProductInfo"

interface ProductDetailHeroProps {
  image: string
  category: string
  name: string
  rating: number
  reviewCount: number
  price: string
  description: string
  sellerName: string
  sellerType: string
  whatsappNumber: string
}

export default function ProductDetailHero({
  image,
  category,
  name,
  rating,
  reviewCount,
  price,
  description,
  sellerName,
  sellerType,
  whatsappNumber
}: ProductDetailHeroProps) {
  const fallbackImage = "/uploaded_image_0_1768037972713.png"

  const initialImage = useMemo(() => {
    const trimmed = (image || "").trim().replace(/^['"]|['"]$/g, "")
    const isValid =
      !!trimmed &&
      (trimmed.startsWith("/") ||
        trimmed.startsWith("http://") ||
        trimmed.startsWith("https://") ||
        trimmed.startsWith("data:image/")) &&
      !trimmed.startsWith("blob:")

    return isValid ? trimmed : fallbackImage
  }, [image])

  const [imgSrc, setImgSrc] = useState(initialImage)

  return (
    <>
      <Navbar />

      {/* Product Detail Hero */}
      <div className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/umkm"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke UMKM
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-96 lg:h-[500px] bg-slate-100 rounded-2xl overflow-hidden">
              {imgSrc ? (
                <Image
                  key={imgSrc}
                  src={imgSrc}
                  alt={name}
                  fill
                  className="object-cover"
                  onError={() => {
                    if (imgSrc !== fallbackImage) setImgSrc(fallbackImage)
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <ImageIcon className="w-12 h-12" />
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full w-fit mb-4">
                {category}
              </span>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{name}</h1>
              
              <StarRating rating={rating} reviewCount={reviewCount} size="lg" showValue={false} showCount={false} />
              
              <p className="text-4xl font-bold text-blue-600 mt-6">{price}</p>

              <ProductInfo
                variant="stacked"
                description={description}
                sellerName={sellerName}
                sellerType={sellerType}
                whatsappNumber={whatsappNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
