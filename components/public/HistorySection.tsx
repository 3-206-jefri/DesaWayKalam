import { Calendar, Users, Award, Store } from "lucide-react"

const milestones = [
  {
    year: "1999",
    title: "Potensi Wisata Alam dan Budaya Way Kalam",
    description: "Desa Way Kalam dikenal memiliki potensi wisata alam dan budaya di lereng Gunung Rajabasa yang dijaga secara turun-temurun oleh masyarakat sebagai bagian dari kearifan lokal desa.",
    position: "left"
  },
  {
    year: "2013",
    title: "Pembentukan Kelompok Putra Krakatau",
    description: "Kelompok Putra Krakatau dibentuk sebagai inisiatif masyarakat yang berperan sebagai penggerak awal dalam pengelolaan potensi alam desa, kegiatan sosial, serta pemberdayaan masyarakat.",
    position: "right"
  },
  {
    year: "2014",
    title: "Pembentukan dan Pembinaan Pokdarwis",
    description: "Pokdarwis Desa Way Kalam dibentuk dan dibina oleh Kelompok Putra Krakatau selama satu tahun guna memperkuat kapasitas kelembagaan dan pengelolaan pariwisata desa.",
    position: "left"
  },
  {
    year: "2017",
    title: "Media Air Terjun Way Kalam",
    description: "Air Terjun Way Kalam mulai dikenal secara luas setelah mendapatkan eksposur dari media perjalanan, yang berdampak pada meningkatnya minat kunjungan wisatawan.",
    position: "right"
  },
  {
    year: "2019",
    title: "Peningkatan Sarana dan Prasarana Pariwisata",
    description: "Desa Wisata Way Kalam mulai melakukan pembenahan melalui peningkatan sarana dan prasarana pendukung pariwisata dengan dukungan berbagai pihak.",
    position: "left"
  },
  {
    year: "2020",
    title: "Pengembangan SDM dan Digitalisasi Desa",
    description: "Pengembangan sumber daya manusia serta digitalisasi promosi wisata dan UMKM desa mulai diterapkan untuk mendukung pengelolaan desa wisata yang berkelanjutan.",
    position: "right"
  }

]

export default function HistorySection() {
  return (
    <section id="sejarah" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">SEJARAH DESA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Perjalanan Panjang Desa Kami
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Desa Wisata Way Kalam memiliki sejarah yang kaya dan penuh makna. Dari sebuah permukiman kecil hingga menjadi destinasi wisata yang dikenal luas, berikut adalah perjalanan kami.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Center Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-300 transform -translate-x-1/2"></div>

          {/* Milestones */}
          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative pb-16 last:pb-0"
              >
                <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
                  {/* Left Side */}
                  {milestone.position === "left" && (
                    <>
                      <div className="md:text-right md:pr-12">
                        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center gap-2 mb-3 md:justify-end">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span className="text-xl font-bold text-blue-600">{milestone.year}</span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:block"></div>
                    </>
                  )}

                  {/* Right Side */}
                  {milestone.position === "right" && (
                    <>
                      <div className="hidden md:block"></div>
                      <div className="md:pl-12">
                        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span className="text-xl font-bold text-blue-600">{milestone.year}</span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-md"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-green-50/50 rounded-2xl border border-green-100 hover:border-green-200 transition-colors">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">1.269+</div>
            <div className="text-xs md:text-sm text-slate-600">Penduduk</div>
          </div>
          <div className="text-center p-6 bg-purple-50/50 rounded-2xl border border-purple-100 hover:border-purple-200 transition-colors">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">9+</div>
            <div className="text-xs md:text-sm text-slate-600">Penghargaan</div>
          </div>
          <div className="text-center p-6 bg-orange-50/50 rounded-2xl border border-orange-100 hover:border-orange-200 transition-colors">
            <Store className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">8+</div>
            <div className="text-xs md:text-sm text-slate-600">UMKM Aktif</div>
          </div>
        </div>
      </div>
    </section>
  )
}
