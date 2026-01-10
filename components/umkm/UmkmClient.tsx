"use client"

import { useState } from "react"
import { CategoryFilter, ProductCard } from "@/components/umkm"

interface Product {
  id: string
  name: string
  description?: string
  price: number
  category: string
  rating: number
  image?: string
  whatsapp: string
  createdAt: Date
  updatedAt: Date
}

interface UmkmClientProps {
  initialProducts: Product[]
  categories: string[]
}

export default function UmkmClient({ initialProducts, categories }: UmkmClientProps) {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filteredProducts = activeCategory === "Semua" 
    ? initialProducts 
    : initialProducts.filter(p => p.category === activeCategory)

  // Calculate review count based on rating (mock for now)
  const getReviewCount = (rating: number) => {
    return Math.floor(rating * 20) + Math.floor(Math.random() * 50)
  }

  return (
    <>
      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            slug={product.id}
            image={product.image || "/uploaded_image_0_1768037972713.png"}
            name={product.name}
            description={product.description || ""}
            price={`Rp ${product.price.toLocaleString('id-ID')}`}
            rating={product.rating}
            reviewCount={getReviewCount(product.rating)}
            whatsappNumber={product.whatsapp.replace(/\D/g, '')}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">Tidak ada produk dalam kategori ini</p>
        </div>
      )}
    </>
  )
}
