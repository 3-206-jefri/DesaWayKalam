import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { ProductDetailHero } from "@/components/umkm"
import Footer from "@/components/public/Footer"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

// Map database categories to display categories
const categoryMap: Record<string, string> = {
  "Makanan": "Makanan & Minuman",
  "Minuman": "Makanan & Minuman",
  "Kerajinan": "Kerajinan",
  "Lainnya": "Kerajinan"
}

function stableModFromString(input: string, mod: number) {
  let hash = 0
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0
  }
  return mod === 0 ? 0 : hash % mod
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const supabase = await createClient()
  
  // Fetch product from Supabase by ID
  const { data: product, error } = await supabase
    .from('umkm_products')
    .select('*')
    .eq('id', id)
    .eq('is_active', true)
    .single()

  if (error || !product) {
    notFound()
  }

  const sanitizeImageSrc = (value: unknown) => {
    if (typeof value !== 'string') return undefined
    const trimmed = value.trim().replace(/^['"]|['"]$/g, '')
    if (!trimmed) return undefined
    if (trimmed.startsWith('blob:')) return undefined
    const isValid =
      trimmed.startsWith('/') ||
      trimmed.startsWith('http://') ||
      trimmed.startsWith('https://') ||
      trimmed.startsWith('data:image/')
    return isValid ? trimmed : undefined
  }

  // Calculate review count based on rating (mock)
  const reviewCount = Math.floor(product.rating * 20) + stableModFromString(String(product.id), 50)

  return (
    <div className="min-h-screen bg-white">
      <ProductDetailHero
        image={sanitizeImageSrc(product.photo_url) || "/uploaded_image_0_1768037972713.png"}
        category={categoryMap[product.category] || product.category}
        name={product.name}
        rating={product.rating}
        reviewCount={reviewCount}
        price={`Rp ${product.price.toLocaleString('id-ID')}`}
        description={product.description || "Produk berkualitas dari UMKM lokal desa kami."}
        sellerName={`Penjual ${product.name.split(' ')[0]}`}
        sellerType="Penjual Terpercaya"
        whatsappNumber={product.whatsapp.replace(/\D/g, '')}
      />

      <Footer />
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data: product } = await supabase
    .from('umkm_products')
    .select('name, description')
    .eq('id', id)
    .eq('is_active', true)
    .single()

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
    }
  }

  return {
    title: `${product.name} - UMKM Desa Wisata`,
    description: product.description || "Produk UMKM berkualitas dari desa kami",
  }
}
