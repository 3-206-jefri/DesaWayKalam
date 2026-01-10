import Navbar from "@/components/public/Navbar"
import HeroSection from "@/components/public/HeroSection"
import AboutSection from "@/components/public/AboutSection"
import GallerySection from "@/components/public/GallerySection"
import TeamSection from "@/components/public/TeamSection"
import Footer from "@/components/public/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TeamSection />
      <Footer />
    </div>
  )
}
