import Navbar from "@/components/public/Navbar"

export default function UmkmHero() {
  return (
    <>
      <Navbar />

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
