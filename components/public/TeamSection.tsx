const teamMembers = [
  { name: "Ahmad Fauzi", role: "Koordinator", division: "Teknik Sipil, Indonesia" },
  { name: "Siti Nurhaliza", role: "Sekretaris", division: "Ilmu Komunikasi, Gadjah Mada" },
  { name: "Budi Santoso", role: "Bendahara", division: "Teknik Industri, Teknologi Bandung" },
  { name: "Dewi Lestari", role: "Divisi Pendidikan", division: "Pendidikan Guru SD, Palangkaraya" },
  { name: "Rizki Pratama", role: "Divisi Kesehatan", division: "Kesehatan Masyarakat, 010/2023" },
  { name: "Anisa Rahma", role: "Divisi Ekonomi", division: "Manajemen, Jawa Agung" },
]

export default function TeamSection() {
  return (
    <section id="tim" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold mb-4 block">TIM PENGABDIAN</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tim KKN Desa Sukamaju
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kenali para mahasiswa yang berdedikasi dalam program Kuliah Kerja Nyata (KKN) untuk membantu pengembangan desa dan memberdayakan masyarakat lokal.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-sm text-blue-600 mb-2">{member.role}</p>
              <p className="text-xs text-slate-500">{member.division}</p>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 text-slate-600">
          <p>30 Mahasiswa • Berbagai Universitas • Periode 2024</p>
        </div>
      </div>
    </section>
  )
}
