"use client"

import type React from "react"

import { useState } from "react"

type Inquiry = {
  childName: string
  parentName: string
  address: string
  mobile: string
  childAge: string
  diagnosis: string
  requiredTherapy: string
}

export function ContactForm() {
  const [data, setData] = useState<Inquiry>({
    childName: "",
    parentName: "",
    address: "",
    mobile: "",
    childAge: "",
    diagnosis: "",
    requiredTherapy: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange<T extends keyof Inquiry>(key: T, value: string) {
    setData((d) => ({ ...d, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("[Inquiry Submission]", data)
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="childName" className="block text-sm font-medium text-[#0F172A]">
            Child Name
          </label>
          <input
            id="childName"
            type="text"
            required
            value={data.childName}
            onChange={(e) => handleChange("childName", e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
          />
        </div>

        <div>
          <label htmlFor="parentName" className="block text-sm font-medium text-[#0F172A]">
            Parent Name
          </label>
          <input
            id="parentName"
            type="text"
            required
            value={data.parentName}
            onChange={(e) => handleChange("parentName", e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-[#0F172A]">
            Address
          </label>
          <input
            id="address"
            type="text"
            required
            value={data.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-[#0F172A]">
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            inputMode="tel"
            placeholder="9359530468"
            required
            value={data.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="childAge" className="block text-sm font-medium text-[#0F172A]">
            Child Age
          </label>
          <input
            id="childAge"
            type="number"
            min={0}
            required
            value={data.childAge}
            onChange={(e) => handleChange("childAge", e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
          />
        </div>

        <div>
          <label htmlFor="diagnosis" className="block text-sm font-medium text-[#0F172A]">
            Diagnosis
          </label>
          <input
            id="diagnosis"
            type="text"
            required
            value={data.diagnosis}
            onChange={(e) => handleChange("diagnosis", e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="requiredTherapy" className="block text-sm font-medium text-[#0F172A]">
          Required Therapy
        </label>
        <textarea
          id="requiredTherapy"
          rows={4}
          required
          value={data.requiredTherapy}
          onChange={(e) => handleChange("requiredTherapy", e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-[#00BCD4] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Submit Inquiry
        </button>
        {submitted && <p className="text-sm text-[#475569]">Thank you! We have received your inquiry.</p>}
      </div>
    </form>
  )
}
