"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Class dinamis untuk Link Desktop
  const navLinkClass = (href: string) => {
    const isActive =
      (href === "/" && pathname === "/") ||
      (href !== "/" && (pathname === href || pathname.startsWith(`${href}/`)))

    // Base classes
    let classes = "relative text-sm font-medium transition-colors duration-300 "

    // Logic Warna:
    if (scrolled) {
      // Saat Scrolled (Background Putih): Teks Gelap
      classes += isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
    } else {
      // Saat di Atas (Background Transparan): Teks Putih + Shadow
      classes += isActive ? "text-white" : "text-white/90 hover:text-white drop-shadow-sm"
    }

    return classes
  }

  // Warna komponen lain (Logo Text & Burger Menu) menyesuaikan scroll
  const textColorClass = scrolled ? "text-slate-900" : "text-white drop-shadow-md"
  const subTextColorClass = scrolled ? "text-blue-600" : "text-blue-200 drop-shadow-sm"
  const burgerColorClass = scrolled ? "text-slate-600 hover:bg-blue-50" : "text-white hover:bg-white/10"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm py-2"
          : "bg-gradient-to-b from-black/50 to-transparent border-transparent py-4" 
          // ^ Tambahkan gradient halus dari atas supaya teks putih makin jelas
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <img 
                src="/Logo_Lampung_Selatan.ico" 
                alt="Logo Way Kalam" 
                className="w-full h-full object-contain drop-shadow-md" 
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-none transition-colors duration-300 ${textColorClass}`}>
                Way Kalam
              </span>
              <span className={`text-[10px] font-medium tracking-wider transition-colors duration-300 ${subTextColorClass}`}>
                PESONA WISATA
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Beranda", href: "/" },
              { label: "Wisata", href: "/wisata" },
              { label: "UMKM", href: "/umkm" },
              { label: "Tim KKN", href: "/tim-kkn" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
                {link.label}
                {/* Garis Bawah Animasi (Underline) */}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                   scrolled ? "bg-blue-600" : "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                } ${
                  (link.href === "/" && pathname === "/") ||
                  (link.href !== "/" && pathname.startsWith(link.href)) 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}

            <Link
              href="/login"
              className={`group relative px-6 py-2.5 text-sm font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 ${
                scrolled 
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-blue-500/30"
                : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:shadow-white/10"
              }`}
            >
              Masuk
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Burger Button (Mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${burgerColorClass}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Note: Menu Mobile tetap pakai background putih agar tulisan selalu terbaca jelas */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2 container mx-auto">
          {[
            { label: "Beranda", href: "/" },
            { label: "Wisata", href: "/wisata" },
            { label: "UMKM", href: "/umkm" },
            { label: "Tim KKN", href: "/tim-kkn" },
          ].map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                 pathname === item.href 
                 ? "bg-blue-50 text-blue-600 translate-x-2" 
                 : "text-slate-600 hover:bg-slate-50 hover:text-blue-600 hover:translate-x-1"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="pt-2 mt-2 border-t border-slate-100">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
            >
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}