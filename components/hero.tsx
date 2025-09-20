export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative"
      style={{
        background: "linear-gradient(to bottom, rgba(0,188,212,0.10), #FFFFFF)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 id="hero-title" className="text-3xl md:text-5xl font-semibold text-[#0F172A] text-balance">
          Blessing Therapy Center
        </h1>
        <p className="mt-4 text-base md:text-lg text-[#475569] text-pretty">
          Empowering Individuals with ASD, ADHD & Learning Disabilities
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-[#00BCD4] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium text-[#0F172A] hover:border-[#00BCD4]"
          >
            View Services
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <img
            src="/therapy-session-illustration.png"
            alt="Therapy session illustration"
            className="w-full rounded-lg border shadow-sm"
          />
          <img
            src="/child-learning-support-illustration.png"
            alt="Child learning support illustration"
            className="w-full rounded-lg border shadow-sm"
          />
          <img
            src="/family-counseling-illustration.png"
            alt="Family counseling illustration"
            className="w-full rounded-lg border shadow-sm"
          />
        </div>
      </div>
    </section>
  )
}
