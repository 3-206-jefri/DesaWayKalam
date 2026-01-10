import Image from "next/image"
import Link from "next/link"
import { Mountain } from "lucide-react"

interface WisataHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export default function WisataHero({ title, subtitle, backgroundImage }: WisataHeroProps) {
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
              <Link href="/wisata" className="text-blue-600 font-medium hover:text-blue-700 transition">
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

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </section>
    </>
  )
}
