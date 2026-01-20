import { Car, Store, Camera, Toilet, Users, Wifi, Hotel, MapPin, LucideIcon } from "lucide-react"

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
  relatedInfo: {
    label: string
    title: string
    description?: string
    categories: {
      icon: LucideIcon
      title: string
      items: {
        title: string
        description: string
        price: string
        priceUnit?: string
        rating: number
        href: string
      }[]
    }[]
  }
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
    title: "Air Terjun Way Kalam",
    subtitle: "Keajaiban alam tersembunyi di jantung desa kami",
    backgroundImage: "/Background/hq720.jpg",
    description: [
  "Air Terjun Way Kalam terletak di Desa Way Kalam, Kecamatan Penengahan, Kabupaten Lampung Selatan. Lokasinya relatif dekat dengan Ibu Kota Kabupaten Lampung Selatan, yaitu Kalianda, sehingga mudah dijangkau oleh wisatawan lokal maupun luar daerah. Pengunjung dapat memanfaatkan layanan Google Maps melalui smartphone untuk mempermudah perjalanan menuju lokasi wisata.",
  "Jarak Air Terjun Way Kalam dari pusat Kota Kalianda sekitar 18 kilometer dengan waktu tempuh normal kurang lebih 30 menit perjalanan menggunakan kendaraan bermotor. Sementara itu, dari Kota Bandar Lampung jaraknya sekitar 78 kilometer dengan estimasi waktu perjalanan sekitar 2,5 jam, tergantung kondisi lalu lintas.",
  "Rute menuju Air Terjun Way Kalam dari Kota Kalianda dapat ditempuh melalui jalan utama yang mengarah ke Kecamatan Penengahan. Setelah tiba di Kecamatan Penengahan, perjalanan dilanjutkan menuju Desa Way Kalam hingga mencapai area wisata. Akses jalan menuju lokasi cukup baik dan dapat dilalui oleh kendaraan roda dua maupun roda empat."
],
    gallery: [
      { src: "/Background/Galeri-Air-Terjun-3.jpg", alt: "Air Terjun Way Kalam" },
      { src: "/Background/Galeri-Air-Terjun-5.jpg", alt: "Pemandangan Sekitar" },
      { src: "/Background/IMG_1620.jpg", alt: "Air Terjun Anakan" }

    ],
    facilities: [
      { icon: Car, name: "Parkir Luas" },
      { icon: Store, name: "Warung Makan" },
      { icon: Camera, name: "Spot Foto" },
      { icon: Toilet, name: "Toilet Bersih" },
      { icon: Users, name: "Pemandu Wisata" },
      { icon: Wifi, name: "WiFi Gratis" }
    ],
    relatedInfo: {
      label: "LAYANAN WISATA",
      title: "Fasilitas Pendukung Wisata",
      description: "Nikmati berbagai layanan pendukung untuk pengalaman wisata yang lebih lengkap dan nyaman",
      categories: [
        {
          icon: Hotel,
          title: "Penginapan",
          items: [
            {
              title: "Homestay Sawah Indah",
              description: "Penginapan nyaman dengan pemandangan sawah",
              price: "Rp 250.000",
              priceUnit: "per malam",
              rating: 4.8,
              href: "/layanan/homestay-sawah-indah"
            },
            {
              title: "Vila Pegunungan",
              description: "Vila mewah di atas bukit dengan view spektakuler",
              price: "Rp 750.000",
              priceUnit: "per malam",
              rating: 4.9,
              href: "/layanan/vila-pegunungan"
            },
            {
              title: "Camping Ground Alam",
              description: "Area camping dengan fasilitas lengkap",
              price: "Rp 50.000",
              priceUnit: "per tenda",
              rating: 4.6,
              href: "/layanan/camping-ground-alam"
            }
          ]
        },
        {
          icon: Users,
          title: "Tour Guide",
          items: [
            {
              title: "Pak Slamet - Pemandu Wisata",
              description: "Pemandu berpengalaman 15 tahun",
              price: "Rp 150.000",
              priceUnit: "per hari",
              rating: 5,
              href: "/layanan/pak-slamet-pemandu-wisata"
            },
            {
              title: "Bu Yanti - Guide Kuliner",
              description: "Spesialis tur kuliner dan budaya",
              price: "Rp 100.000",
              priceUnit: "per hari",
              rating: 4.9,
              href: "/layanan/bu-yanti-guide-kuliner"
            }
          ]
        },
        {
          icon: Car,
          title: "Rental Mobil & Motor",
          items: [
            {
              title: "Rental Motor Jaya",
              description: "Sewa motor harian kondisi prima",
              price: "Rp 75.000",
              priceUnit: "per hari",
              rating: 4.7,
              href: "/layanan/rental-motor-jaya"
            },
            {
              title: "Rental Mobil Berkah",
              description: "Sewa mobil + driver berpengalaman",
              price: "Rp 400.000",
              priceUnit: "per hari",
              rating: 4.8,
              href: "/layanan/rental-mobil-berkah"
            }
          ]
        },
        {
          icon: MapPin,
          title: "Wisata Lainnya",
          items: [
            {
              title: "Curug Biru",
              description: "Air terjun dengan kolam berwarna biru alami",
              price: "Rp 10.000",
              priceUnit: "per orang",
              rating: 4.7,
              href: "/layanan/curug-biru"
            },
            {
              title: "Bukit Sunrise",
              description: "Spot terbaik melihat sunrise dan lautan awan",
              price: "Rp 5.000",
              priceUnit: "per orang",
              rating: 4.9,
              href: "/layanan/bukit-sunrise"
            },
            {
              title: "Desa Budaya Tradisional",
              description: "Pengalaman budaya dan tradisi lokal",
              price: "Rp 25.000",
              priceUnit: "per orang",
              rating: 4.8,
              href: "/layanan/desa-budaya-tradisional"
            }
          ]
        }
      ]
    },
    location: "Way Kalam, Penengahan, Lampung Selatan, Lampung",
    operationalHours: "Senin - Minggu: 07.00 - 17.00 WIB",
    contact: "+62 812 3456 7890",
    ticketPrice: "Rp 15.000",
    whatsappNumber: "6281234567890",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.5600099706967!2d105.66186047503419!3d-5.776258394206341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e410dbdb97d85bd%3A0x4d4a89444dee19a5!2sAir%20Terjun%20Way%20Kalam!5e0!3m2!1sen!2sid!4v1768876950850!5m2!1sen!2sid"
  }
}

export function getWisataBySlug(slug: string): WisataData | null {
  return wisataData[slug] || null
}

export function getAllWisataSlugs(): string[] {
  return Object.keys(wisataData)
}
