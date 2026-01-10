interface WisataInfoProps {
  description: string[]
}

export default function WisataInfo({ description }: WisataInfoProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Tentang Wisata</h2>
      <div className="space-y-4">
        {description.map((paragraph, index) => (
          <p key={index} className="text-lg text-slate-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
