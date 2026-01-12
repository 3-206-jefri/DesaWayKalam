import Image from "next/image"
import Navbar from "@/components/public/Navbar"

interface WisataHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export default function WisataHero({ title, subtitle, backgroundImage }: WisataHeroProps) {
  return (
    <>
      <Navbar />

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
