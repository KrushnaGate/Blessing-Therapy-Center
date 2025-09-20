import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          {/* Footer logo */}
          <Image src="/logo-btc.png" alt="Blessing Therapy Center logo" width={40} height={40} className="mb-2" />
          <h4 className="text-base font-semibold text-[#0F172A]">Blessing Therapy Center</h4>
          <p className="mt-2 text-sm text-[#475569]">
            Personalized therapy and support for ASD, ADHD & Learning Disabilities.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-[#0F172A]">Quick Links</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#about" className="text-[#475569] hover:text-[#00BCD4]">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-[#475569] hover:text-[#00BCD4]">
                Services
              </a>
            </li>
            <li>
              <a href="#features" className="text-[#475569] hover:text-[#00BCD4]">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[#475569] hover:text-[#00BCD4]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-[#0F172A]">Contact</h5>
          <ul className="mt-2 space-y-1 text-sm text-[#475569]">
            <li>Address: -</li>
            <li>Phone: 9359530468</li>
            <li>Email: -</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-[#475569]">
          © {new Date().getFullYear()} Blessing Therapy Center. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
