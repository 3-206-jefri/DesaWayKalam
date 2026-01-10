import { createClient } from "@/lib/supabase/server"
import { UmkmHero } from "@/components/umkm"
import UmkmClient from "@/components/umkm/UmkmClient"
import Footer from "@/components/public/Footer"

export const metadata = {
  title: "Produk UMKM Desa - Desa Wisata",
  description: "Temukan berbagai produk berkualitas dari pengrajin dan pengusaha lokal desa kami",
}

// Map database categories to display categories
const categoryMap: Record<string, string> = {
  "Makanan": "Makanan & Minuman",
  "Minuman": "Makanan & Minuman",
  "Kerajinan": "Kerajinan",
  "Lainnya": "Kerajinan"
}

export default async function UmkmPage() {
  const supabase = await createClient()
  
  // Fetch products from Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('createdAt', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error.message || error)
  }

  // Transform products to match our interface
  const transformedProducts = (products || []).map(product => ({
    ...product,
    category: categoryMap[product.category] || product.category,
    createdAt: new Date(product.createdAt),
    updatedAt: new Date(product.updatedAt)
  }))

  // Get unique categories from products
  const uniqueCategories = Array.from(
    new Set(transformedProducts.map(p => p.category))
  )
  const categories = ["Semua", ...uniqueCategories]

  return (
    <div className="min-h-screen bg-slate-50">
      <UmkmHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <UmkmClient 
          initialProducts={transformedProducts} 
          categories={categories}
        />
      </div>

      <Footer />
    </div>
  )
}
