import Image from "next/image"

const galleryImages = [
  {
    src: "/Background/Galeri_Landing1.jpg",
    alt: "Gallery 1",
    className: "lg:col-span-2 aspect-[18/9]"
  },
  {
    src: "/Background/Galeri_Landing2.jpg",
    alt: "Gallery 2",
    className: "aspect-[4/5]"
  },
  {
    src: "/Background/Galeri_Landing3.jpg",
    alt: "Gallery 3",
    className: "aspect-[4/5]"
  },
  {
    src: "/Background/Galeri_Landing4.jpg",
    alt: "Gallery 4",
    className: "aspect-[4/5]"
  },
  {
    src: "/Background/Galeri_Landing5.jpg",
    alt: "Gallery 5",
    className: "aspect-[4/5]"
  }
]



export default function GallerySection() {
  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold mb-4 block">GALERI FOTO</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Keindahan yang Memukau
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Lihat berbagai momen indah dan pemandangan menakjubkan dari desa kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
            key={index}
            className={`${image.className} relative rounded-2xl overflow-hidden group`}
            >

              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {index === 0 && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
