import type React from "react"
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata = {
  title: "Blessing Therapy Center",
  description:
    "Empowering Individuals with ASD, ADHD & Learning Disabilities through personalized therapy and support.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="font-sans text-[#0F172A] bg-white">{children}</body>
    </html>
  )
}
