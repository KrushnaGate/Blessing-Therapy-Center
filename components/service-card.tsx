type ServiceCardProps = {
  title: string
  description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-xl border p-6 shadow-sm bg-white hover:shadow transition-shadow">
      <h3 className="text-base md:text-lg font-semibold text-[#0F172A]">{title}</h3>
      <p className="mt-2 text-sm text-[#475569]">{description}</p>
    </div>
  )
}
