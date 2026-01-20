import Link from "next/link"
import Image from "next/image"
import { Mountain, Facebook, Instagram, Youtube } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Beranda" },
  { href: "/wisata", label: "Wisata" },
  { href: "/umkm", label: "UMKM" },
]

const contactInfo = [
  "Jl. Desa Wisata No. 123, Kecamatan Alam, Kabupaten Indah",
  "+62 817 {256 7890",
  "info@desawisata.id"
]

const socialLinks = [
  { href: "#", icon: Facebook, hoverColor: "hover:bg-blue-600" },
  { href: "#", icon: Instagram, hoverColor: "hover:bg-pink-600" },
  { href: "#", icon: Youtube, hoverColor: "hover:bg-red-600" },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Desa Wisata</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Selamat datang di Desa Wisata, destinasi wisata alam dan budaya yang menawarkan pengalaman tak terlupakan.
            </p>
            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center items-center gap-4 bg-white p-2 rounded-lg">
              <Image 
                src="/Logo_Lampung_Selatan.png" 
                alt="Logo Lampung Selatan" 
                width={25} 
                height={25}
                className="object-contain hover:scale-110 transition"
              />
              <Image 
                src="/Logo Provinsi Lampung (PNG-1080p) - FileVector69.png" 
                alt="Logo Provinsi Lampung" 
                width={25} 
                height={25}
                className="object-contain hover:scale-110 transition"
              />
              <Image 
                src="/pngegg.png" 
                alt="Logo Tut Wuri Handayani" 
                width={25} 
                height={25}
                className="object-contain hover:scale-110 transition"
              />
              <Image 
                src="/r.png" 
                alt="Logo ITERA" 
                width={25} 
                height={25}
                className="object-contain hover:scale-110 transition"
              />
              <Image 
                src="/logokknitera.png" 
                alt="Logo KKN ITERA" 
                width={25} 
                height={25}
                className="object-contain hover:scale-110 transition"
              />
            </div>
          </div>

          {/* Tautan Cepat */}
          <div>
            <h3 className="font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              {contactInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>

          {/* Ikuti Kami */}
          <div>
            <h3 className="font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className={`w-10 h-10 bg-slate-800 ${social.hoverColor} rounded-lg flex items-center justify-center transition`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© 2026 Desa Wisata. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
