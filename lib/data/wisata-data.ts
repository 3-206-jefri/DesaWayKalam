import { Car, Store, Camera, Toilet, Users, Wifi, LucideIcon } from "lucide-react"

export interface WisataData {
  slug: string
  title: string
  subtitle: string
  backgroundImage: string
  description: string[]
  gallery: {
    src: string
    alt: string
  }[]
  facilities: {
    icon: LucideIcon
    name: string
  }[]
  location: string
  operationalHours: string
  contact: string
  ticketPrice: string
  whatsappNumber: string
  mapEmbedUrl?: string
}

export const wisataData: Record<string, WisataData> = {
  "air-terjun-pelangi": {
    slug: "air-terjun-pelangi",
    title: "Air Terjun Pelangi",
    subtitle: "Keajaiban alam tersembunyi di jantung desa kami",
    backgroundImage: "/uploaded_image_0_1768037972713.png",
    description: [
      "Air terjun Pelangi merupakan salah satu destinasi wisata alam yang paling memukau di desa kami. Dinamakan 'Pelangi' karena pada waktu tertentu, sinar matahari yang menembus air terjun menciptakan efek pelangi yang menakjubkan.",
      "Air terjun ini memiliki ketinggian sekitar 50 meter dan dikelilingi oleh hutan tropis yang masih asri. Pengunjung dapat menikmati kesegaran air sambil menikmati keindahan udara pegunungan yang menyegarkan.",
      "Untuk mencapai lokasi, pengunjung akan melalui jalur trekking sepanjang 1.5 km melalui hutan dengan pemandangan yang tak kalah indah. Perjalanan ini cocok untuk semua tingkat kebugaran dan dijamin akan memberikan pengalaman yang tak terlupakan."
    ],
    gallery: [
      { src: "/uploaded_image_0_1768037972713.png", alt: "Air Terjun Pelangi" },
      { src: "/uploaded_image_2_1768037972713.png", alt: "Pemandangan Sekitar" },
      { src: "/uploaded_image_4_1768037972713.png", alt: "Area Wisata" }
    ],
    facilities: [
      { icon: Car, name: "Parkir Luas" },
      { icon: Store, name: "Warung Makan" },
      { icon: Camera, name: "Spot Foto" },
      { icon: Toilet, name: "Toilet Bersih" },
      { icon: Users, name: "Pemandu Wisata" },
      { icon: Wifi, name: "WiFi Gratis" }
    ],
    location: "Dusun Segar, Desa Wisata, Kec. Alam, Kab. Indah",
    operationalHours: "Senin - Minggu: 07.00 - 17.00 WIB",
    contact: "+62 812 3456 7890",
    ticketPrice: "Rp 15.000",
    whatsappNumber: "6281234567890",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1751171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1234567890"
  }
}

export function getWisataBySlug(slug: string): WisataData | null {
  return wisataData[slug] || null
}

export function getAllWisataSlugs(): string[] {
  return Object.keys(wisataData)
}
