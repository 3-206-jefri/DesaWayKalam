import Link from "next/link"
import { Mountain } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">Desa Wisata</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-blue-600 font-medium hover:text-blue-700 transition">
              Beranda
            </Link>
            <Link href="/wisata" className="text-slate-700 hover:text-blue-600 transition">
              Wisata
            </Link>
            <Link href="/umkm" className="text-slate-700 hover:text-blue-600 transition">
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
  )
}
