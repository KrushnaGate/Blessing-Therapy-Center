"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#services", label: "Services" },
  { href: "#benefits", label: "Benefits" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Brand now includes logo + name */}
        <Link href="#home" className="flex items-center gap-2" aria-label="Blessing Therapy Center home">
          <Image
            src="/logo-btc.png"
            alt="Blessing Therapy Center logo"
            width={32}
            height={32}
            className="shrink-0"
            priority
          />
          <span className="font-semibold text-lg text-[#0F172A] tracking-tight" aria-hidden>
            Blessing Therapy Center
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#475569] hover:text-[#00BCD4] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-[#00BCD4] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-colors"
          >
            Get Started
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-[#0F172A]"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="md:hidden border-t" aria-label="Mobile">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-[#0F172A]">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-[#00BCD4] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
