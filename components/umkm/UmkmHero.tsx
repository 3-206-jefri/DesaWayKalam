import Link from "next/link"
import { Mountain } from "lucide-react"

export default function UmkmHero() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="w-8 h-8 text-blue-600" />
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Produk UMKM Desa
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Temukan berbagai produk berkualitas dari pengrajin dan pengusaha lokal desa kami
          </p>
        </div>
      </section>
    </>
  )
}
