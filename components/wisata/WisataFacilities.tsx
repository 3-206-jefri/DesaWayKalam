import { LucideIcon } from "lucide-react"

interface Facility {
  icon: LucideIcon
  name: string
}

interface WisataFacilitiesProps {
  facilities: Facility[]
}

export default function WisataFacilities({ facilities }: WisataFacilitiesProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Fasilitas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facilities.map((facility, index) => {
          const Icon = facility.icon
          return (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-medium text-slate-900">{facility.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
