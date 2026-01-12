import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from './UmkmProductCard'

export default async function UmkmSection() {
  const supabase = await createClient()
  
  // Fetch top 8 active products from Supabase
  const { data: products, error } = await supabase
    .from('umkm_products')
    .select('*')
    .eq('is_active', true)
    .order('rating', { ascending: false })
    .limit(8)

  // Handle errors gracefully
  if (error) {
    console.error('Error fetching UMKM products:', error)
    return null
  }

  // Don't render section if no products
  if (!products || products.length === 0) {
    return null
  }

  return (
    <section id="umkm" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold mb-4 block">PRODUK UMKM</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Produk UMKM Desa
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Temukan berbagai produk berkualitas dari pengrajin dan pengusaha lokal desa kami
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/umkm"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Lihat Semua Produk
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
