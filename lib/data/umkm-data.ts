export interface Product {
  slug: string
  name: string
  description: string
  price: string
  priceNumber: number
  category: string
  rating: number
  reviewCount: number
  image: string
  sellerName: string
  sellerType: string
  whatsappNumber: string
}

export const products: Product[] = [
  {
    slug: "kopi-robusta-premium",
    name: "Kopi Robusta Premium",
    description: "Kopi pilihan dari perkebunan lokal dengan citarasa khas pegunungan",
    price: "Rp 75.000",
    priceNumber: 75000,
    category: "Makanan & Minuman",
    rating: 4.8,
    reviewCount: 124,
    image: "/uploaded_image_0_1768037972713.png",
    sellerName: "Pak Budi - Kopi Desa",
    sellerType: "Penjual Terpercaya",
    whatsappNumber: "6281234567890"
  },
  {
    slug: "kue-tradisional",
    name: "Kue Tradisional",
    description: "Aneka kue tradisional khas desa dengan resep turun temurun",
    price: "Rp 35.000",
    priceNumber: 35000,
    category: "Makanan & Minuman",
    rating: 4.9,
    reviewCount: 89,
    image: "/uploaded_image_2_1768037972713.png",
    sellerName: "Ibu Siti - Kue Tradisional",
    sellerType: "Penjual Terpercaya",
    whatsappNumber: "6281234567891"
  },
  {
    slug: "batik-tulis-khas-desa",
    name: "Batik Tulis Khas Desa",
    description: "Batik tulis dengan motif unik khas desa yang dibuat secara handmade",
    price: "Rp 450.000",
    priceNumber: 450000,
    category: "Kerajinan",
    rating: 5.0,
    reviewCount: 56,
    image: "/uploaded_image_4_1768037972713.png",
    sellerName: "Ibu Dewi - Batik Desa",
    sellerType: "Pengrajin Batik",
    whatsappNumber: "6281234567892"
  },
  {
    slug: "madu-hutan-murni",
    name: "Madu Hutan Murni",
    description: "Madu alami dan lebah hutan yang dipanen secara tradisional",
    price: "Rp 120.000",
    priceNumber: 120000,
    category: "Makanan & Minuman",
    rating: 4.7,
    reviewCount: 78,
    image: "/uploaded_image_1_1768037972713.png",
    sellerName: "Pak Ahmad - Madu Hutan",
    sellerType: "Penjual Terpercaya",
    whatsappNumber: "6281234567893"
  },
  {
    slug: "kerajinan-anyaman-bambu",
    name: "Kerajinan Anyaman Bambu",
    description: "Berbagai produk kerajinan dari bambu berkualitas tinggi",
    price: "Rp 85.000",
    priceNumber: 85000,
    category: "Kerajinan",
    rating: 4.6,
    reviewCount: 45,
    image: "/uploaded_image_0_1768037972713.png",
    sellerName: "Pak Warno - Sentra Kerajinan Bambu",
    sellerType: "Penjual Terpercaya",
    whatsappNumber: "6281234567894"
  }
]

export const categories = ["Semua", "Makanan & Minuman", "Kerajinan"]

export function getProductBySlug(slug: string): Product | null {
  return products.find(p => p.slug === slug) || null
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "Semua") return products
  return products.filter(p => p.category === category)
}

export function getAllProductSlugs(): string[] {
  return products.map(p => p.slug)
}
