import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
}

interface WisataGalleryProps {
  images: GalleryImage[]
}

export default function WisataGallery({ images }: WisataGalleryProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Galeri Foto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
