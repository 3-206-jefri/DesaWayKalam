"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import StarRating from "./StarRating"

interface ProductDetailHeroProps {
  image: string
  category: string
  name: string
  rating: number
  reviewCount: number
  price: string
}

export default function ProductDetailHero({
  image,
  category,
  name,
  rating,
  reviewCount,
  price
}: ProductDetailHeroProps) {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-900">Desa Wisata</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 transition">
                Beranda
              </Link>
              <Link href="/wisata" className="text-slate-700 hover:text-blue-600 transition">
                Wisata
              </Link>
              <Link href="/umkm" className="text-blue-600 font-medium hover:text-blue-700 transition">
                UMKM
              </Link>
              <Link 
                href="/admin" 
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </nav>

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
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full w-fit mb-4">
                {category}
              </span>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{name}</h1>
              
              <StarRating rating={rating} reviewCount={reviewCount} size="lg" />
              
              <p className="text-4xl font-bold text-blue-600 mt-6">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
