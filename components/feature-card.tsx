type FeatureCardProps = {
  title: string
}

export function FeatureCard({ title }: FeatureCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-sm bg-white">
      <div className="flex items-start gap-3">
        <div aria-hidden className="mt-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#00BCD4" }} />
        <p className="text-sm text-[#0F172A]">{title}</p>
      </div>
    </div>
  )
}
