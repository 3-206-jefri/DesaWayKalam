"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkClass = (href: string) => {
    const isActive =
      (href === "/" && pathname === "/") ||
      (href !== "/" && (pathname === href || pathname.startsWith(`${href}/`)))

    return `
      relative px-1 py-1 text-sm font-medium transition-all duration-300
      ${isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}
      after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
      after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform
      ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}
    `
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/Logo_Lampung_Selatan.ico"
              alt="Logo Way Kalam"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg font-semibold tracking-wide text-slate-800">
              Way Kalam
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass("/")}>Beranda</Link>
            <Link href="/wisata" className={linkClass("/wisata")}>Wisata</Link>
            <Link href="/umkm" className={linkClass("/umkm")}>UMKM</Link>
            <Link href="/tim-kkn" className={linkClass("/tim-kkn")}>Tim KKN</Link>

            <Link
              href="/login"
              className="ml-4 px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium
                         transition-all duration-300 hover:bg-blue-700 hover:shadow-lg
                         active:scale-95"
            >
              Masuk
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-800
                       hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white border-t border-slate-200 px-4 py-5 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block">Beranda</Link>
          <Link href="/wisata" onClick={() => setOpen(false)} className="block">Wisata</Link>
          <Link href="/umkm" onClick={() => setOpen(false)} className="block">UMKM</Link>
          <Link href="/tim-kkn" onClick={() => setOpen(false)} className="block">Tim KKN</Link>

          <Link
            href="https://waykalam-lamsel.desa.id/"
            target="_blank"
            className="block text-center mt-4 py-2 rounded-lg bg-blue-600 text-white
                       transition hover:bg-blue-700"
          >
            SIPDesKel
          </Link>
        </div>
      </div>
    </nav>
  )
}
