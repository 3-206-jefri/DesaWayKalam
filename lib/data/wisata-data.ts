import { Car, Store, Camera, Toilet, Users,  Hotel, MapPin, LucideIcon, Home  } from "lucide-react"

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
        href: string
      }[]
    }[]
  }
  location: string
  operationalHours: string
  contact: string
  ticketPrice: string
  ticketMotor: string
  ticketMobile: string
  whatsappNumber: string
  email: string
  mapEmbedUrl?: string
}

export const wisataData: Record<string, WisataData> = {
  "air-terjun-pelangi": {
    slug: "air-terjun-pelangi",
    title: "Air Terjun Way Kalam",
    subtitle: "Dua Pesona Air Terjun di Kaki Gunung Rajabasa",
    backgroundImage: "/Background/hq720.jpg",
    description: [
  "Air Terjun Way Kalam merupakan ikon wisata alam Desa Way Kalam yang terletak di kaki Gunung Rajabasa, Kabupaten Lampung Selatan. Berjarak sekitar 18 km dari Kota Kalianda, destinasi ini mudah dijangkau oleh wisatawan dengan akses jalan yang cukup baik dan dapat dilalui kendaraan roda dua maupun roda empat.",
  "Wisata ini menawarkan dua daya tarik utama, yaitu Air Terjun Besar dengan aliran air yang deras dan menenangkan, serta Air Terjun Anakan yang cocok untuk bersantai, berfoto, hingga berkemah di alam terbuka. Pengunjung juga dapat menikmati trekking ringan di sekitar daerah aliran sungai, udara pegunungan yang sejuk, serta mengenal budaya dan kuliner khas masyarakat desa.",
  "Air Terjun Way Kalam menghadirkan perpaduan petualangan alam, relaksasi, dan eksplorasi budaya dalam satu destinasi wisata yang alami dan autentik."
],
    gallery: [
      { src: "/Background/Galeri_Arter1.jpg", alt: "Pintu Masuk" },
      { src: "/Background/Galeri_Arter3.jpg", alt: "Air Terjun Besar" },
      { src: "/Background/Galeri_Arter2.jpg", alt: "Air Terjun Anakan" }

    ],
    facilities: [
      { icon: Car, name: "Parkir Luas" },
      { icon: Store, name: "Warung Makan" },
      { icon: Camera, name: "Spot Foto" },
      { icon: Toilet, name: "Toilet Bersih" },
      { icon: Users, name: "Pemandu Wisata" },
      { icon: Home, name: "Gazebo" }

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
              title: "Homestay Bu Isah",
              description: "Penginapan nyaman dengan lokasi strategis dekat air terjun",
              price: "Rp 100.000",
              priceUnit: "per malam",
  
              href: "/layanan/homestay-sawah-indah"
            },
            {
              title: "Homestay Pak Suri",
              description: "Penginapan nyaman dengan lokasi tenang di desa",
              price: "Rp 100.000",
              priceUnit: "per malam",
              href: "/layanan/vila-pegunungan"
            },
            {
              title: "Homestay Bu Srie",
              description: "Penginapan asri dengan lokasi tenang di desa",
              price: "Rp 100.000",
              priceUnit: "per malam",
              href: "/layanan/camping-ground-alam"
            }
          ]
        }, 
      ]
    },
    location: "Way Kalam, Penengahan, Lampung Selatan, Lampung",
    operationalHours: "Senin-Minggu : 08.00 - 17.00 WIB",
    contact: "+62 822-7929-2579",
    ticketPrice: "Rp 7.000",
    ticketMotor : "Rp 3.000",
    ticketMobile : "Rp 15.000",
    
    whatsappNumber: "6282279292579",
    email: "deswita.waykalam@gmail.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.5600099706967!2d105.66186047503419!3d-5.776258394206341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e410dbdb97d85bd%3A0x4d4a89444dee19a5!2sAir%20Terjun%20Way%20Kalam!5e0!3m2!1sen!2sid!4v1768876950850!5m2!1sen!2sid"
  }
}

export function getWisataBySlug(slug: string): WisataData | null {
  return wisataData[slug] || null
}

export function getAllWisataSlugs(): string[] {
  return Object.keys(wisataData)
}
