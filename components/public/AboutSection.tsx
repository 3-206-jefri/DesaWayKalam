import Image from "next/image"
import { MapPin, Users, Home as HomeIcon, Sparkles } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Lereng Gunung Rajabasa",
    description: "Berada di kawasan pegunungan dengan udara sejuk dan panorama alam yang menenangkan",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Users,
    title: "Masyarakat Berdaya",
    description: "Warga lokal aktif terlibat dalam pengelolaan wisata dan kegiatan edukatif",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: HomeIcon,
    title: "Budaya & Kearifan Lokal",
    description: "Tradisi, seni, dan nilai adat yang masih hidup dalam keseharian masyarakat desa",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Sparkles,
    title: "Wisata Edukatif",
    description: "Pengalaman belajar tentang alam, pertanian, dan kehidupan desa secara langsung",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  }
]


export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Background/Gateway.jpg"
                alt="Tentang Desa"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-lg">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm">Tahun Melayani</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-blue-600 font-semibold mb-4 block">TENTANG KAMI</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Desa Way Kalam
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Desa Wisata Way Kalam merupakan desa wisata di Kabupaten Lampung Selatan yang terletak di lereng Gunung Rajabasa, berjarak ±17 km dari Kota Kalianda. Berada pada ketinggian 372 mdpl, desa ini mengusung konsep Wisata Alam & Budaya yang menawarkan pengalaman edukatif melalui interaksi dengan alam, pertanian, seni tradisi, serta kearifan lokal yang masih terjaga dalam suasana pedesaan yang asri.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
